
// 游戏数据

import { netmsg, hall, game } from "../proto"
import { GateEvent, GameStatus, TableEvent, UserStatus, GameEvent, MessageType, ClubEvent } from "../Constants"
import EventManager from "../EventManager"
import UIManager from "../UIManager"
import NetManager from "../NetManager"
import GlobalModel from "./GlobalModel"

export default class GameModel {
    private static instance: GameModel = null;

    private sessionid: number = null;
    private kindID: number = 0;
    // 自己信息
    private myselfUserInfo: game.Iuser_info = null;
    // 房间用户列表
    private userList: Map<number, game.Iuser_info> = new Map();
    // 房间桌子列表
    private tablesList: Map<number, game.Itable_info> = new Map();
    // 子房间列表
    private subRoomsList: Array<game.Isubroom> = new Array();
    // 游戏初始化否
    private gameInit: boolean = false;
    // 游戏状态
    private gameStatus: number = 0;
    // 允许游戏中加入
    private allowJoinPlaying: boolean = false;
    // 允许旁观
    private allowOB: boolean = false;
    // 是否进入游戏
    private isEnterGame: boolean = false;
    // 进入后台的时间
    private enterBackgroundTime: number = 0;

    public static getInstance() : GameModel {
        if (this.instance === null) {
            this.instance = new GameModel();
        }
        return this.instance;
    }

    private constructor() {
    }

    public init() {
        this.kindID = 0;
        this.sessionid = null;
        this.myselfUserInfo = null;
        this.userList.clear();
        this.tablesList.clear();
        this.subRoomsList = new Array();
        this.gameInit = false;
        this.gameStatus = GameStatus.FREE;
        this.allowJoinPlaying = false;
        this.allowOB = false;
        this.isEnterGame = false;

        let eventManager = EventManager.getInstance();
        cc.game.on(cc.game.EVENT_SHOW, this.onEventShow, this);
        cc.game.on(cc.game.EVENT_HIDE, this.onEventHide, this);
        eventManager.on(GateEvent.CONNECTED, this.onEventGateConnected, this);
        eventManager.on(GateEvent.CLOSED, this.onEventGateClosed, this);
        eventManager.on(GateEvent.RECONECTING, this.onEventGateReconnecting, this);
        eventManager.on('game.response_enter_room_success', this.response_enter_room_success, this);
        eventManager.on('game.response_enter_room_failed', this.response_enter_room_failed, this);
        eventManager.on('game.notify_room_info', this.notify_room_info, this);
        eventManager.on('game.notify_myself_info', this.notify_myself_info, this);
        eventManager.on('game.notify_user_enter', this.notify_user_enter, this);
        eventManager.on('game.notify_other_users_info', this.notify_other_users_info, this);
        eventManager.on('game.notify_tables_info', this.notify_tables_info, this);
        eventManager.on('game.notify_create_table', this.notify_create_table, this);
        eventManager.on('game.notify_delete_table', this.notify_delete_table, this);
        eventManager.on('game.reponse_action_failed', this.reponse_action_failed, this);
        eventManager.on('game.notify_userscore', this.notify_userscore, this);
        eventManager.on('game.notify_userstatus', this.notify_userstatus, this);
        eventManager.on('game.gamemsg', this.gamemsg, this);
        eventManager.on('game.notify_system_message', this.notify_system_message, this);
    }

    public reset() {
        let eventManager = EventManager.getInstance();
        cc.game.off(cc.game.EVENT_SHOW, this.onEventShow, this);
        cc.game.off(cc.game.EVENT_HIDE, this.onEventHide, this);
        eventManager.off(GateEvent.CONNECTED, this.onEventGateConnected, this);
        eventManager.off(GateEvent.CLOSED, this.onEventGateClosed, this);
        eventManager.off(GateEvent.RECONECTING, this.onEventGateReconnecting, this);
        eventManager.off('game.response_enter_room_success', this.response_enter_room_success, this);
        eventManager.off('game.response_enter_room_failed', this.response_enter_room_failed, this);
        eventManager.off('game.notify_room_info', this.notify_room_info, this);
        eventManager.off('game.notify_myself_info', this.notify_myself_info, this);
        eventManager.off('game.notify_user_enter', this.notify_user_enter, this);
        eventManager.off('game.notify_other_users_info', this.notify_other_users_info, this);
        eventManager.off('game.notify_tables_info', this.notify_tables_info, this);
        eventManager.off('game.notify_create_table', this.notify_create_table, this);
        eventManager.off('game.notify_delete_table', this.notify_delete_table, this);
        eventManager.off('game.reponse_action_failed', this.reponse_action_failed, this);
        eventManager.off('game.notify_userscore', this.notify_userscore, this);
        eventManager.off('game.notify_userstatus', this.notify_userstatus, this);
        eventManager.off('game.gamemsg', this.gamemsg, this);
        eventManager.off('game.notify_system_message', this.notify_system_message, this);

        this.kindID = 0;
        this.sessionid = null;
        this.myselfUserInfo = null;
        this.userList.clear();
        this.tablesList.clear();
        this.subRoomsList = new Array();
        this.gameInit = false;
        this.gameStatus = GameStatus.FREE;
        this.allowJoinPlaying = false;
        this.allowOB = false;
        this.isEnterGame = false;
    }

    // 发送单个游戏中的网络消息到游戏服务器
    public sendGameMsgToGame(packageName: string, msgTypeName: string, bytes: Uint8Array) {
        if (!this.gameInit || !this.myselfUserInfo) {
            cc.error("game not inited");
            return;
        }
        let name = packageName + '.' + msgTypeName;
        NetManager.getInstance().sendNetMsgToGame('game', 'gamemsg', {name: name, payload: bytes}, this.sessionid);
    }

    // 进入房间
    public enterRoom(kindid: number) {
        UIManager.getInstance().showLoadingTip('正在加载数据...');

        // 离开上一个房间
        if (this.sessionid) {
            NetManager.getInstance().sendNetMsgToGame('game', 'request_leave_room', {}, this.sessionid);
            this.reset();
            cc.log('离开上一个房间');
        }

        this.init();

        this.kindID = kindid;
        let sessionid = GlobalModel.getInstance().roomList.get(this.kindID)[0].sessionid;
        this.sessionid = sessionid;

        let msg = {
            userid: GlobalModel.getInstance().globalUserData.userid,
            password: GlobalModel.getInstance().globalUserData.password,
            uuid: ''
        }
        NetManager.getInstance().sendNetMsgToGame('game', 'request_enter_room', msg, this.sessionid);
    }

    // 重新获取房间信息
    private reloadRoomInfo() {
        if (!this.sessionid) {
            cc.error('reload room info error');
            return;
        }
        UIManager.getInstance().showLoadingTip('正在加载数据...');

        let msg = {
            userid: GlobalModel.getInstance().globalUserData.userid,
            password: GlobalModel.getInstance().globalUserData.password,
            uuid: ''
        }

        NetManager.getInstance().sendNetMsgToGame('game', 'request_enter_room', msg, this.sessionid);
    }

    // 离开房间
    public leaveRoom() {
        NetManager.getInstance().sendNetMsgToGame('game', 'request_leave_room', {}, this.sessionid);

        this.reset();

        // 返回大厅
        UIManager.getInstance().replaceScene('hall', 'prefabs/HallScene');
    }

    // 关闭游戏
    public closeGame() {
        this.isEnterGame = false;
        this.gameInit = false;

        if (this.myselfUserInfo) {
            let tableid = this.myselfUserInfo.tableid;
            let chairid = this.myselfUserInfo.chairid;
            if (tableid !== 0) {
                this.requestStandup(tableid, chairid, false);
            }
        }

        UIManager.getInstance().replaceScene('hall', 'prefabs/club/ClubScene', this.kindID);
    }

    // 进入后台
    private onEventHide() {
        this.enterBackgroundTime = Date.parse(new Date().toString());
    }

    // 进入前台
    private onEventShow() {
        //let now = Date.parse(new Date().toString());
        //if (now - this.enterBackgroundTime >= 5000)
        // 重新获取房间信息
        this.reloadRoomInfo();
    }

    // 网关连接
    private onEventGateConnected() {
        // 重新获取房间信息
        this.reloadRoomInfo();
    }

    // 网关关闭
    private onEventGateClosed() {
        if (this.isEnterGame) {
            UIManager.getInstance().showCustomAlert({ cancelTitle:'返回大厅', okTitle:'重试', content:'网络连接异常，请检查网络连接或重试',cancelCallback: () => {
                UIManager.getInstance().replaceScene('hall', 'prefabs/club/ClubScene', this.kindID);
            }, okCallback: () => {
                NetManager.getInstance().connectGateServer();
            } });
        } else {
            UIManager.getInstance().showToast('网络连接故障，请稍候重试');
        }
    }

    // 网关重连
    private onEventGateReconnecting() {
        if (this.isEnterGame) {
            UIManager.getInstance().showLoadingTip('正在努力连接中...');
        }
    }

    private response_enter_room_success(msg: game.response_enter_room_success) {
        UIManager.getInstance().hideLoadingTip();

        GlobalModel.getInstance().globalUserData.lock_kindid = 0;
        GlobalModel.getInstance().globalUserData.lock_roomid = 0;

        if (!this.isEnterGame) {
            if (UIManager.getInstance().getCurrentSceneName() === 'hall/prefabs/club/ClubScene') {
                EventManager.getInstance().emit(ClubEvent.RELOAD, this.kindID);
            } else {
                UIManager.getInstance().replaceScene('hall', 'prefabs/club/ClubScene', this.kindID);
            }
        }

        // 重入游戏
        if (this.myselfUserInfo.tableid !== 0) {
            // 进入游戏
            cc.log('重入游戏', this.isEnterGame);
            if (this.isEnterGame) {
                this.initGame();
            } else {
                this.enterGameScene();
            }
        }
    }

    private response_enter_room_failed(msg: game.response_enter_room_failed) {
        UIManager.getInstance().showAlert(msg.reason);
    }

    private notify_room_info(msg: game.notify_room_info) {
        this.allowJoinPlaying = msg.allow_join_playing;
        this.allowOB = msg.allow_ob;
        this.subRoomsList = msg.subrooms;
    }

    private notify_myself_info(msg: game.notify_myself_info) {
        this.myselfUserInfo = msg.userinfo;
        this.userList.set(this.myselfUserInfo.userid, this.myselfUserInfo);
    }

    private notify_other_users_info(msg: game.notify_other_users_info) {
        for (let i = 0; i < msg.users_info.length; i++) {
            let user = msg.users_info[i];
            this.userList.set(user.userid, user);
        }
    }

    private notify_tables_info(msg: game.notify_tables_info) {
        for (let i = 0; i < msg.tables_info.length; i++) {
            this.tablesList.set(msg.tables_info[i].tableid, msg.tables_info[i]);
        }
    }

    private notify_create_table(msg: game.notify_create_table) {
        this.tablesList.set(msg.table_info.tableid, msg.table_info);
        // 通知桌子创建
        EventManager.getInstance().emit(TableEvent.CREATE, msg.table_info);
    }

    private notify_delete_table(msg: game.notify_delete_table) {
        this.tablesList.delete(msg.tableid);
        // 通知桌子删除
        EventManager.getInstance().emit(TableEvent.DELETE, msg.tableid);
    }

    private reponse_action_failed(msg: game.reponse_action_failed) {
        UIManager.getInstance().showAlert(msg.reason);
    }

    private notify_user_enter(msg: game.notify_user_enter) {
        this.userList.set(msg.userinfo.userid, msg.userinfo);

        if (msg.userinfo.user_status >= UserStatus.SIT && msg.userinfo.user_status !== UserStatus.OB) {
            // 通知桌子更新状态
            EventManager.getInstance().emit(TableEvent.USER_STATUS, msg.userinfo.tableid, msg.userinfo.chairid, msg.userinfo);
        }
    }

    private notify_userscore(msg: game.notify_userscore) {
        let user = this.userList.get(msg.userid);
        if (user) {
            user.score = msg.user_score;

            if (user.userid === this.myselfUserInfo.userid) {
                // 改变GlobalModel保存的分数
                GlobalModel.getInstance().globalUserData.score = user.score;
                // TODO 通知界面分数更新
            }
            if (this.myselfUserInfo.tableid !== 0 && this.myselfUserInfo.tableid === user.tableid) {
                if (this.gameInit) {
                    // 玩家分数改变
                    EventManager.getInstance().emit(GameEvent.USER_SCORE, user);
                }
            }
        } else {
            cc.error(cc.js.formatStr('notify_userscore 用户%d不存在!', msg.userid));
        }
    }

    private notify_userstatus(msg: game.notify_userstatus) {
        let user = this.userList.get(msg.userid);
        if (user) {
            let lastTableID = user.tableid;
            let lastChairID = user.chairid;
            if (msg.user_status === UserStatus.NULL) {
                if (lastTableID !== 0 && lastChairID !== 0) {
                    // 通知桌子更新状态
                    EventManager.getInstance().emit(TableEvent.USER_STATUS, lastTableID, lastChairID, null);
                }

                if (this.myselfUserInfo.userid == msg.userid) {
                    this.gameInit = false;
                    this.gameStatus = GameStatus.FREE;
                    cc.log('UserStatus.NULL 自己退出房间');
                    this.reset();
                } else if (lastTableID === this.myselfUserInfo.tableid) {
                    if (this.gameInit) {
                        EventManager.getInstance().emit(GameEvent.USER_LEAVE, lastChairID, user);
                    }
                }
                this.userList.delete(user.userid);
            } else {
                let lastUserStatus = user.user_status
                user.tableid = msg.tableid;
                user.chairid = msg.chairid;
                user.user_status = msg.user_status;
                let banker = user.banker;
                user.banker = msg.banker;

                // 离开桌子
                if (lastTableID !== 0 && (lastTableID !== user.tableid || lastChairID !== user.chairid)) {
                    // 通知桌子更新状态
                    EventManager.getInstance().emit(TableEvent.USER_STATUS, lastTableID, lastChairID, null);
                }

                // 加入桌子
                if (user.tableid !== 0 && user.user_status !== UserStatus.OB && (user.tableid !== lastTableID || user.chairid !== lastChairID)) {
                    EventManager.getInstance().emit(TableEvent.USER_STATUS, user.tableid, user.chairid, user);
                }

                // 更新庄家状态
                if (user.tableid !== 0 && user.tableid === lastTableID && user.chairid === lastChairID && banker != user.banker) {
                   EventManager.getInstance().emit(TableEvent.BANKER_STATUS, user.tableid, user.chairid, user);
                }

                // 更新用户状态
                //if (user.tableid !== 0 && user.tableid === lastTableID && user.chairid === lastChairID) {
                //    EventManager.getInstance().emit(TableEvent.USER_STATUS, user.tableid, user.chairid, user);
                //}

                // 游戏离开
                if (lastTableID !== 0 && (user.tableid !== lastTableID || user.chairid !== lastChairID)) {
                    if (user.userid === this.myselfUserInfo.userid || lastTableID === this.myselfUserInfo.tableid) {
                        if (user.user_status == UserStatus.FREE) {
                            if (user.userid == this.myselfUserInfo.userid) {
                                this.gameInit = false;
                                this.gameStatus = GameStatus.FREE;
                                cc.log('UserStatus.FREE 自己退出游戏');
                            } else {
                                if (this.gameInit) {
                                    // 其他玩家离开
                                    EventManager.getInstance().emit(GameEvent.USER_LEAVE, lastChairID, user);
                                }
                            }
                        } else {
                            if (this.gameInit) {
                                // 其他玩家状态更新
                                EventManager.getInstance().emit(GameEvent.USER_STATUS, user);
                            }
                        }
                    }
                    return;
                }

                // 游戏加入
                if (user.tableid !== 0 && (user.tableid !== lastTableID || user.chairid !== lastChairID || (lastUserStatus == UserStatus.OFFLINE && user.user_status == UserStatus.PLAYING))) {
                    if (user.userid === this.myselfUserInfo.userid) {
                        // 进入游戏
                        this.enterGameScene();
                    } else if (user.tableid === this.myselfUserInfo.tableid) {
                        if (this.gameInit) {
                            // 其他玩家加入
                            EventManager.getInstance().emit(GameEvent.USER_ENTER, user);
                        }
                    }
                    return;
                }

                // 状态改变
                // 这个条件判断不会到达 用于判断在同一个桌子 点击不同的椅子的状态判断 但是现在没有提供点击椅子进入
                if (user.tableid !== 0 && user.tableid === lastTableID && this.myselfUserInfo.tableid == user.tableid) {
                    if (user.user_status == UserStatus.FREE) {
                        if (user.userid == this.myselfUserInfo.userid) {
                            this.gameInit = false;
                            this.gameStatus = GameStatus.FREE;
                            cc.log('UserStatus.FREE 自己退出游戏 不会到达');
                        } else {
                            if (this.gameInit) {
                                // 其他玩家离开
                                EventManager.getInstance().emit(GameEvent.USER_LEAVE, lastChairID, user);
                            }
                        }
                    } else {
                        if (this.gameInit) {
                            // 其他玩家状态改变
                            EventManager.getInstance().emit(GameEvent.USER_STATUS, user);
                        }
                    }
                    return;
                }
            }
        } else {
            cc.error(cc.js.formatStr('notify_userstatus 用户%d不存在!', msg.userid));
        }
    }

    private gamemsg(msg: game.gamemsg) {
        EventManager.getInstance().emit(GameEvent.NET_MSG, msg);
    }

    private notify_system_message(msg: game.notify_system_message) {
        if ((msg.type & MessageType.CLOSE_ROOM) !== 0 || (msg.type & MessageType.CLOSE_GAME) !== 0) {
            // 让游戏主动处理
            EventManager.getInstance().emit(GameEvent.CLOSE_GAME, msg.text);

            if ((msg.type & MessageType.CLOSE_ROOM) !== 0) {
                this.leaveRoom();
            }
        }

        if ((msg.type & MessageType.TOAST) !== 0) {
            UIManager.getInstance().showToast(msg.text);
        }

        if ((msg.type & MessageType.POPUP) !== 0) {
            UIManager.getInstance().showAlert(msg.text);
        }
    }

    // 初始游戏
    public initGame() {
        EventManager.getInstance().emit(GameEvent.INIT);

        let tableid = this.myselfUserInfo.tableid;
        let chairid = this.myselfUserInfo.chairid;
        if (tableid !== 0 && chairid !== 0) {
            this.userList.forEach(function (value, key, map) {
                if (value.tableid === tableid) {
                    EventManager.getInstance().emit(GameEvent.USER_ENTER, value);
                }
            });
        }

        NetManager.getInstance().sendNetMsgToGame('game', 'request_init_game', {}, this.sessionid);

        this.gameInit = true;
    }

    // 请求准备
    public requestUserReady() {
        NetManager.getInstance().sendNetMsgToGame('game', 'request_userready', {}, this.sessionid);
    }

    // 请求坐下
    public requestSitdown(tableid: number, chairid: number, subroomid?: number, subroomWanfaID?: number) {
        UIManager.getInstance().replaceLoadingScene(this.kindID, () => {
            let msg = {
                tableid: tableid,
                chairid: chairid,
                subroomid: subroomid,
                subroom_wanfaid: subroomWanfaID,
            }
            NetManager.getInstance().sendNetMsgToGame('game', 'request_sitdown', msg, this.sessionid);
        });
    }

    // 请求旁观
    public requestSitdownOB(tableid: number, chairid: number, subroomid?: number, subroomWanfaID?: number) {
        UIManager.getInstance().replaceLoadingScene(this.kindID, () => {
            let msg = {
                tableid: tableid,
                chairid: chairid,
                subroomid: subroomid,
                subroom_wanfaid: subroomWanfaID,
            }
            NetManager.getInstance().sendNetMsgToGame('game', 'request_sitdownOB', msg, this.sessionid);
        });
    }

    // 请求起立
    public requestStandup(tableid: number, chairid: number, obMode: boolean = false) {
        let msg = {
            tableid: tableid,
            chairid: chairid,
            ob_mode: obMode,
        }
        NetManager.getInstance().sendNetMsgToGame('game', 'request_standup', msg, this.sessionid);
    }

    // 请求换桌
    public requestChangeTable() {
        NetManager.getInstance().sendNetMsgToGame('game', 'request_change_table', {}, this.sessionid);
    }

    // 获取自己信息
    public getMeUserInfo(): game.Iuser_info {
        return this.myselfUserInfo;
    }

    public getMeChairID(): number {
        return this.myselfUserInfo.chairid;
    }

    public getUserList() {
        return this.userList;
    }

    public getSubRoomList() {
        return this.subRoomsList;
    }

    public getTableList() {
        return this.tablesList;
    }

    // 设置游戏状态
    public setGameStatus(gameStatus: number) {
        this.gameStatus = gameStatus;
    }

    // 获取游戏状态
    public getGameStatus(): number {
        return this.gameStatus;
    }

    // 是否旁观模式
    public isOBMode(): boolean {
        if (!this.myselfUserInfo) {
            return true;
        }
        
        return this.myselfUserInfo.user_status === UserStatus.OB ? true : false;
    }

    // 是否允许OB
    public isAllowOB(): boolean {
        return this.allowOB;
    }

    // 是否正在游戏
    public isPlayingGame(): boolean {
        return (this.myselfUserInfo && this.myselfUserInfo.user_status === UserStatus.PLAYING) ? true : false;
    }

    // 进入游戏
    private enterGameScene() {
        if (this.kindID === 0) {
            cc.error('enterGameScene 错误的kindid');
            return;
        }
        
        this.isEnterGame = true;
        //UIManager.getInstance().replaceLoadingScene(this.kindID);
        if (this.kindID === 2) {
            UIManager.getInstance().replaceScene('niuniu', 'prefabs/NiuNiuScene');
        } else if (this.kindID === 2000) {
            UIManager.getInstance().replaceScene('lhd', 'prefabs/LHDScene');
        }
    }

    public getKindID(): number {
        return this.kindID;
    }

    public getMyTableInfo(): game.Itable_info {
        if (this.myselfUserInfo && this.myselfUserInfo.tableid != 0) {
            for (const [key, value] of this.tablesList) {
                if (key == this.myselfUserInfo.tableid) {
                    return value;
                }
            }
        }
        return null;
    }
}