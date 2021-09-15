
// 网络管理器

import crypt = require('./Crypt.js')
import * as proto from "./proto"
import EventManager from "./EventManager"
import { GateEvent, GlobalEvent } from "./Constants"
import GlobalModel from "./model/GlobalModel"
import UIManager from "./UIManager"

const NETCODE_HANDSHAKE_FAILED = 10053; // 握手失败
const NETCODE_REMOTE_CLOSE = 10054; // 远端关闭
const NETCODE_RECONNECT_CLOSE = 10055;  // 重连关闭
const NETCODE_LOCAL_CLOSE = 4500;  // 本地关闭

const HEART_BEAT_INTERVAL = 1000;   // 心跳间隔
const CLOSE_CONNECT_DELAY = 4000;   // X秒后没有响应关闭连接
const RECONNECT_INTERVAL = 15000;   // 重连间隔

export default class NetManager {
    private static instance: NetManager = null;

    private loginModel: { ws: any, endpoint: string, challenge: any, clientkey: string, secret: string } = null;
    private gateModel: { ws: any, endpoint: string, handshakeid: number, handshakeIndex: number, secret: string, handshake: boolean, hallid: number } = null;

    private heartBeatTimer: number = 0;
    private reconnectTimer: number = 0;

    private lastSendHeartTime: number = 0;

    public static getInstance() : NetManager {
        if (this.instance === null) {
            this.instance = new NetManager();
        }
        return this.instance;
    }

    private constructor() {
        this.loginModel = {
            ws: null,
            endpoint: "121.41.0.0:8081",
            challenge: '',
            clientkey: '',
            secret: '',
        };
        this.gateModel = {
            ws: null,
            endpoint: '',
            handshakeid: 0,
            handshakeIndex: 0,
            secret: '',
            handshake: false,
            hallid: 0,
        };
    }

    public reset() {
        this.loginModel = {
            ws: null,
            endpoint: "121.41.0.0:8081",
            challenge: '',
            clientkey: '',
            secret: '',
        };
        this.gateModel = {
            ws: null,
            endpoint: '',
            handshakeid: 0,
            handshakeIndex: 0,
            secret: '',
            handshake: false,
            hallid: 0,
        };

        clearTimeout(this.heartBeatTimer);
        clearTimeout(this.reconnectTimer);
    }

    // 连接到登陆
    public connectLoginServer(endpoint: string, username: string, pwd: string, mode: number, uuid: string, device: string) {
        this.loginModel.endpoint = endpoint;
        this.loginModel.ws = new WebSocket("ws://" + endpoint);

        let self = this;
        this.loginModel.ws.onopen = function (event: any) {
            self.loginModel.ws.send('LS login');
        };

        this.loginModel.ws.onmessage = function (event: any) {
            cc.log("response text msg: " + event.data);
            let step = event.data.slice(0, 1);
            let msg = event.data.slice(2);
            if (step === '1') {
                self.loginModel.challenge = new Uint8Array(8);
                crypt.base64decodetobuffer(msg, self.loginModel.challenge, 0);
                self.loginModel.clientkey = crypt.randomkey();
                let dhexec = crypt.dhexchange(self.loginModel.clientkey);
                self.loginModel.ws.send(step + '#' + crypt.base64encodebuffer(dhexec, 0, dhexec.length));
            }
            else if (step === '2') {
                let serverkey = new Uint8Array(8);
                crypt.base64decodetobuffer(msg, serverkey, 0);
                self.loginModel.secret = crypt.dhsecret(serverkey, self.loginModel.clientkey);
                let hmac = crypt.hmac64(self.loginModel.challenge, self.loginModel.secret);
                self.loginModel.ws.send(step + '#' + crypt.base64encodebuffer(hmac, 0, hmac.length));

                let etoken = crypt.desencode(self.loginModel.secret, crypt.stringToUtf8ByteArray(username + ':' + pwd + ':' + mode + ':' + uuid + ':' + device));
                self.loginModel.ws.send('3#' + crypt.base64encodebuffer(etoken, 0, etoken.length));
            }
            else {
                let code = msg.slice(0, 3);
                if (code !== '200') {
                    // 验证失败
                    UIManager.getInstance().hideLoadingTip();
                    cc.log('login failed:' + event.data);
                    if (code == '404' || code == '401') {
                        UIManager.getInstance().showAlert('用户或密码错误');
                    } else {
                        UIManager.getInstance().showAlert('网络异常，登录失败');
                    }
                    return;
                }
                let result = crypt.base64decode(msg.slice(4));
                let arr = result.split('#');
                self.gateModel.handshakeid = arr[0];
                self.gateModel.endpoint = arr[1];
                GlobalModel.getInstance().userid = parseInt(arr[2]);
                GlobalModel.getInstance().password = arr[3];
                self.gateModel.secret = self.loginModel.secret;

                // 连接网关
                self.connectGateServer();
            }
        };

        this.loginModel.ws.onerror = function (event: any) {
            cc.log("loginmodel WebSocket fired an error", event);
        };

        this.loginModel.ws.onclose = function (event: any) {
            cc.log("loginmodel WebSocket instance closed.", event);
        };
    }

    // 连接到网关
    public connectGateServer() {
        this.gateModel.ws = new WebSocket("ws://" + this.gateModel.endpoint);
        this.gateModel.ws.binaryType = 'arraybuffer';

        let self = this;
        this.gateModel.ws.onopen = function (event: any) {
            //cc.log("gatemodel WS was opened.");

            clearTimeout(this.reconnectTimer);

            let hmac = crypt.hmac64(crypt.hashkey(self.gateModel.handshakeid), self.gateModel.secret)
            self.gateModel.ws.send(self.gateModel.handshakeid + ":" + self.gateModel.handshakeIndex + ":" + crypt.base64encodebuffer(hmac, 0, hmac.length));
        };

        this.gateModel.ws.onmessage = function (event: any) {
            //cc.log("gatemodel response text msg: " + event.data);
            if (!self.gateModel.handshake) {
                if (event.data.length >= 6 && event.data.slice(0, 6) === '200 OK') {
                    self.gateModel.handshake = true;
                    self.gateModel.handshakeIndex += 1;
                    if (event.data.length > 6) {
                        self.gateModel.hallid = parseInt(event.data.slice(6), 10);
                        EventManager.getInstance().emit(GateEvent.CONNECTED);
                        //cc.log('handshake finish');
                        self.resetHeartBeatTimer();
                    }
                }
                else {
                    cc.log('handshake failed');
                    // 服务器已经关闭连接
                }
            }
            else {
                let netmsg = proto.netmsg.netmsg.decode(new Uint8Array(event.data));
                //cc.log(netmsg.name, netmsg.payload);
                if (netmsg.name !== 'netmsg.heartbeat') {
                    //cc.log('onmessage:', netmsg.name);
                    let namearr = netmsg.name.split('.', 2);
                    let message = proto[namearr[0]][namearr[1]].decode(netmsg.payload);
                    EventManager.getInstance().emit(netmsg.name, message);
                }
                else {
                    //cc.log('recv heart beat');
                    let now = new Date().getTime();
                    let delay = Math.floor((now - self.lastSendHeartTime) / 2);
                    EventManager.getInstance().emit(GateEvent.DELAY, delay);
                    
                    self.resetHeartBeatTimer();
                    //let msg = proto.netmsg.heartbeat.create();
                    //let bytes = proto.netmsg.heartbeat.encode(msg).finish();
                    
                    //let name = 'netmsg.heartbeat';
                    //let netmsg = proto.netmsg.netmsg.create({name: name, payload: bytes});
                    //let finbytes = proto.netmsg.netmsg.encode(netmsg).finish();

                    //self.gateModel.ws.send(finbytes);
                }
            }
        };

        this.gateModel.ws.onerror = function (event: any) {
            cc.log("gatemodel fired an error", event);
        };

        this.gateModel.ws.onclose = function (event: any) {
            cc.log("gatemodel WebSocket instance closed.", event, event.code);
            // 服务器主动断开不重连
            // TODO: PC模拟器返回的就undefiend而不是10054
            if (event.code === NETCODE_REMOTE_CLOSE) {
                clearTimeout(self.heartBeatTimer);
                clearTimeout(self.reconnectTimer);
                self.gateModel.handshake = false;
                //cc.log('服务器主动断开不重连');
                EventManager.getInstance().emit(GlobalEvent.RELOGIN);
            } else if (event.code === NETCODE_RECONNECT_CLOSE) {      // 重连状态码
                self.gateModel.handshake = false;
                self.gateModel.ws.close();
                EventManager.getInstance().emit(GateEvent.RECONECTING);
                //cc.log('进行重连中');
                self.connectGateServer();
                self.reconnectTimer = setTimeout(function() {
                    self.gateModel.ws.onclose({code: NETCODE_RECONNECT_CLOSE});
                }, RECONNECT_INTERVAL);
            } else if (event.code === NETCODE_LOCAL_CLOSE) {       // 客户端主动关闭
            } else {
                if (!self.gateModel.handshake) {
                    EventManager.getInstance().emit(GateEvent.CLOSED);
                }
            }
        };
    }

    // 发送消息到大厅服务器
    public sendNetMsgToHall(packageName: string, msgTypeName: string, data: object) {
        let msgType = proto[packageName][msgTypeName];
		let msg = msgType.create(data);
        let bytes = msgType.encode(msg).finish();
        
        let name = packageName + '.' + msgTypeName;
        let sessionid = this.gateModel.hallid;
        let netmsg = proto.netmsg.netmsg.create({name: name, payload: bytes, sessionid: sessionid});
        let finbytes = proto.netmsg.netmsg.encode(netmsg).finish();

        this.gateModel.ws.send(finbytes);
    }

    // 发送消息到游戏服务器
    public sendNetMsgToGame(packageName: string, msgTypeName: string, data: object, sessionid: number) {
        let msgType = proto[packageName][msgTypeName];
		let msg = msgType.create(data);
        let bytes = msgType.encode(msg).finish();
        
        let name = packageName + '.' + msgTypeName;
        let netmsg = proto.netmsg.netmsg.create({name: name, payload: bytes, sessionid: sessionid});
        let finbytes = proto.netmsg.netmsg.encode(netmsg).finish();

        this.gateModel.ws.send(finbytes);
    }

    // 断开网关
    close() {
        this.gateModel.ws.close(NETCODE_LOCAL_CLOSE);
        this.reset();
    }

    // 发送心跳
    private sendHeartBeat(ws: any) {
        let msg = proto.netmsg.heartbeat.create();
        let bytes = proto.netmsg.heartbeat.encode(msg).finish();
        
        let name = 'netmsg.heartbeat';
        let netmsg = proto.netmsg.netmsg.create({name: name, payload: bytes});
        let finbytes = proto.netmsg.netmsg.encode(netmsg).finish();

        ws.send(finbytes);

        this.lastSendHeartTime = new Date().getTime();
    }

    // 定时发送心跳
    private resetHeartBeatTimer() {
        clearTimeout(this.heartBeatTimer);
        clearTimeout(this.reconnectTimer);
        let self = this;
        this.heartBeatTimer = setTimeout(function() {
            self.sendHeartBeat(self.gateModel.ws);
        }, HEART_BEAT_INTERVAL);

        this.reconnectTimer = setTimeout(function() {
            // 由于websocket各个浏览器设置的触发onclose时间不同 也不能立即触发 所以手动触发.
            //self.gateModel.ws.close(NETCODE_RECONNECT_CLOSE);
            // TODO 测试android和ios真机的断线重连
            self.gateModel.ws.onclose({code: NETCODE_RECONNECT_CLOSE});
        }, CLOSE_CONNECT_DELAY + HEART_BEAT_INTERVAL);
    }
}