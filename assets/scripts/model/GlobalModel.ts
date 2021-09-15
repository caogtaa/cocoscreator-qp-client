
// 全局数据

import EventManager from "../EventManager"
import NetManager from "../NetManager"
import UIManager from "../UIManager"
import { GlobalEvent, GateEvent, MessageType } from "../Constants"
import { netmsg, hall } from "../proto"

export default class GlobalModel {
    private static instance: GlobalModel = null;

    public userid: number = 0;
    public password: string = '';

    public globalUserData: hall.Iresponse_userinfo = null;

    public kindList: hall.Igame_kind[] = [];
    public roomList: Map<number, hall.Igame_room[]> = new Map();
    public userMessageList: hall.Iuser_message_item[] = [];

    private isEnterHall: boolean = false;
    private enterBackgroundTime: number = 0;

    public static getInstance() : GlobalModel {
        if (this.instance === null) {
            this.instance = new GlobalModel();
        }
        return this.instance;
    }

    private constructor() {
    }

    public init() {
        this.kindList = [];
        this.roomList = new Map();
        this.userMessageList = [];

        cc.game.on(cc.game.EVENT_SHOW, this.onEventShow, this);
        cc.game.on(cc.game.EVENT_HIDE, this.onEventHide, this);

        let eventManager = EventManager.getInstance();
        eventManager.on(GateEvent.CONNECTED, this.onEventGateConnected, this);
        eventManager.on(GateEvent.CLOSED, this.onEventGateClosed, this);
        eventManager.on(GateEvent.RECONECTING, this.onEventGateReconnecting, this);

        eventManager.on('netmsg.notify_system_message', this.notify_system_message, this);
        eventManager.on('netmsg.notify_update_score', this.notify_update_score, this);
        eventManager.on('hall.response_userinfo', this.response_userinfo, this);
        eventManager.on('hall.response_userinfo_failed', this.response_userinfo_failed, this);
        eventManager.on('hall.response_game_type_list', this.response_game_type_list, this);
        eventManager.on('hall.response_game_kind_list', this.response_game_kind_list, this);
        eventManager.on('hall.response_game_room_list', this.response_game_room_list, this);
        eventManager.on('hall.notify_update_userscore', this.notify_update_userscore, this);
        eventManager.on('hall.notify_user_message', this.notify_user_message, this);
    }

    public reset() {
        this.userid = 0;
        this.password = '';
        this.globalUserData = null;
        this.isEnterHall = false;

        this.kindList = [];
        this.roomList.clear();
        this.userMessageList = [];
    }

    // 进入后台
    private onEventHide() {
        this.enterBackgroundTime = Date.parse(new Date().toString());
    }

    // 进入前台
    private onEventShow() {
        let now = Date.parse(new Date().toString());
        // 重新获取信息
        if (now - this.enterBackgroundTime >= 5000 && this.userid != 0) {
            cc.log('重新获取信息');
            NetManager.getInstance().sendNetMsgToHall('hall', 'request_userinfo', { userid: this.userid, password: this.password});
        }
    }

    // 网关连接
    private onEventGateConnected() {
        cc.log('globalmodel onEventGateConnected');
        NetManager.getInstance().sendNetMsgToHall('hall', 'request_userinfo', { userid: this.userid, password: this.password});
    }

    // 网关关闭
    private onEventGateClosed() {
        
    }

    // 网关重连
    private onEventGateReconnecting() {
    }

    private notify_system_message(msg: netmsg.notify_system_message) {
        if ((msg.type & MessageType.CLOSE_HALL) !== 0) {
            UIManager.getInstance().showAlert(msg.text, () => {
            });
        }
    }

    private notify_update_score(msg: netmsg.notify_update_score) {
        GlobalModel.getInstance().globalUserData.score = msg.score;
        EventManager.getInstance().emit(GlobalEvent.UPDATE_SCORE);
    }

    private response_userinfo(msg: hall.response_userinfo) {
        this.globalUserData = msg;

        NetManager.getInstance().sendNetMsgToHall('hall', 'request_user_message', {
            userid: this.globalUserData.userid,
            password: this.globalUserData.password
        });

        NetManager.getInstance().sendNetMsgToHall('hall', 'request_game_list', {});
    }

    private response_userinfo_failed(msg: hall.response_userinfo_failed) {
    }

    private response_game_type_list(msg: hall.response_game_type_list) {
    }

    private response_game_kind_list(msg: hall.response_game_kind_list) {
        this.kindList = msg.game_kind_list;

        this.kindList.sort(function (a: any, b: any) {
            if (a.sortid < b.sortid) {
                return -1;
            }
            if (a.sortid > b.sortid) {
                return 1;
            }
            return 0;
        });
    }

    private response_game_room_list(msg: hall.response_game_room_list) {
        let roomlist = msg.game_room_list
        for (let i = 0; i < roomlist.length; i++) {
            let kindid = roomlist[i].kindid;
            if (!this.roomList.has(kindid)) {
                this.roomList.set(kindid, []);
            }
            this.roomList.get(kindid).push(roomlist[i]);
        }

        this.roomList.forEach((value, key) => {
            value.sort(function (a: any, b: any) {
                if (a.sortid < b.sortid) {
                    return -1;
                }
                if (a.sortid > b.sortid) {
                    return 1;
                }
                return 0;
            });
        });

        if (!this.isEnterHall) {
            UIManager.getInstance().hideLoadingTip();
            this.isEnterHall = true;
            UIManager.getInstance().replaceScene('hall', 'prefabs/HallScene');
        }
    }

    private notify_user_message(msg: hall.notify_user_message) {
        let unreadCount = 0;
        for (let item of msg.items) {
            this.userMessageList.push(item);
            if (item.readed == 0) {
                unreadCount++;
            }
        }
        this.userMessageList.sort((a: hall.Iuser_message_item, b: hall.Iuser_message_item) => {
            if (a.id > b.id) {
                return -1;
            } else if (a.id < b.id) {
                return 1;
            } else {
                return 0;
            }
        });

        if (unreadCount > 0) {
            EventManager.getInstance().emit(GlobalEvent.NEW_EMAIL, unreadCount);
        }
    }

    private notify_update_userscore(msg: hall.notify_update_userscore) {
        this.globalUserData.score = msg.score;
        this.globalUserData.bank_score = msg.bank_score;
        EventManager.getInstance().emit(GlobalEvent.UPDATE_SCORE);
    }
}
