// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Area, ClockTitle, GameStatus, BetChipScore, Audios } from "./LHDConstants"
import * as proto from "./proto_lhd"
import EventManager from "../../../scripts/EventManager"
import AudioManager from "../../../scripts/AudioManager"
import GameModel from "../../../scripts/model/GameModel"
import UIManager from "../../../scripts/UIManager"
import Utils from "../../../scripts/Utils"
import { GameEvent, UserStatus } from "../../../scripts/Constants"
import { game } from "../../../scripts/proto"

const PACKAGE_NAME = 'lhd';

const MAX_RECORD_COUNT = 15;

const AreaDesc: string[] = [ '龙', '虎', '和' ];

const {ccclass, property} = cc._decorator;

@ccclass
export default class LHDScene extends cc.Component {

    @property(cc.Label)
    private labelDealid: cc.Label = null;    // 牌局编号

    @property([cc.Node])
    private nodeLightAreas: cc.Node[] = [];

    @property(cc.Node)
    private nodeClock: cc.Node = null;
    @property(cc.Sprite)
    private spriteClockTitle: cc.Sprite = null;
    @property(cc.Label)
    private labelClockTime: cc.Label = null;
    @property([cc.SpriteFrame])
    private clockTitleFrames: cc.SpriteFrame[] = [];

    @property([cc.Node])
    private playersNode: cc.Node[] = [];   // 2边的玩家 0是幸运星 1-7是富豪 
    @property(cc.Node)
    private myselfNode: cc.Node = null;
    @property(cc.Node)
    private bankerNode: cc.Node = null;

    @property(cc.Button)
    private buttonApplyBanker: cc.Button = null;    // 申请按钮

    @property(cc.Label)
    private onlineCount: cc.Label = null;

    @property(cc.Node)
    private operateNode: cc.Node = null;
    @property(cc.Node)
    private operateNodeLight: cc.Node = null;
    @property([cc.Button])
    private betButtons: cc.Button[] = [];
    @property(cc.Toggle)
    private buttonRepeatBet: cc.Toggle = null;

    @property(cc.Label)
    private labelBottomTips: cc.Label = null;
    @property(cc.Node)
    private nodeCenterTips: cc.Node = null;

    @property(cc.Node)
    private nodeChip: cc.Node = null;
    @property(cc.SpriteAtlas)
    private atlasChips: cc.SpriteAtlas = null;
    @property(cc.Node)
    private nodeChipContainer: cc.Node = null;
    @property([cc.Node])
    private nodeBetChipPoint: cc.Node[] = [];
    @property([cc.Node])
    private nodeBetUserPoint: cc.Node[] = [];   // 0幸运星 1-7符号 8自己  9庄家 10其他在线

    // LhdGameShowBetNode
    @property([cc.Label])
    private labelAllBetScore: cc.Label[] = [];
    @property([cc.Node])
    private nodeMeBetScore: cc.Node[] = [];

    @property([cc.Node])
    private nodeRichSign: cc.Node[] = [];
    @property([cc.Node])
    private nodeLuckySign: cc.Node[] = [];
    @property([cc.Node])
    private nodeRichAni: cc.Node[] = [];
    @property([cc.Node])
    private nodeLuckyAni: cc.Node[] = [];

    @property([cc.Node])
    private nodeBetLabel: cc.Node[] = [];
    @property(cc.Node)
    private nodeBetLabelTemplete: cc.Node = null;

    @property([dragonBones.ArmatureDisplay])
    private betSunAni: dragonBones.ArmatureDisplay[] = [];
    @property([dragonBones.ArmatureDisplay])
    private betStarAni: dragonBones.ArmatureDisplay[] = [];

    @property(cc.Layout)
    private layoutRecord: cc.Layout = null;
    @property(cc.Node)
    private nodeRecordItem: cc.Node = null;
    @property(cc.Node)
    private nodeRecordIconNew: cc.Node = null;
    @property([cc.SpriteFrame])
    private recordItemFrames: cc.SpriteFrame[] = [];

    @property(cc.Node)
    private nodeMenu: cc.Node = null;

    @property(dragonBones.ArmatureDisplay)
    private startVSAni: dragonBones.ArmatureDisplay = null;
    @property(cc.Animation)
    private beginAni: cc.Animation = null;

    @property(cc.Node)
    private nodeGameCards: cc.Node = null;
    @property(cc.Node)
    private nodeBankerList: cc.Node = null;
    @property(cc.Node)
    private nodePlayerList: cc.Node = null;
    @property(cc.Node)
    private nodeGameRecordList: cc.Node = null;

    private posWinNode: cc.Vec3[] = [];      // 赢分显示的原始位置 // 0幸运星 1-7符号 8自己  9庄家

    private gameCards = null;
    private bankerList = null;

    // 倒计时
    private countdownTime: number = 0;

    private gameRecords: Area[] = [];

    //
    private users: Map<number, game.Iuser_info> = new Map();
    private currentBanker: number = 0;
    private bankerReserveScore: number = 0;

    private enableSysBanker: boolean = false;
    private bankerCondition: number = 500000;
    private downbankerCondition: number = 200000;
    private betCondition: number = 5000;
    private userBetLimit: number = 100000000;
    private areaBetLimit: number = 100000000;
    private upbankerUserList: {chairid: number, reserve_score: number, user: game.Iuser_info}[] = [];    // 上庄用户

    private allBetScore: number[] = [0, 0, 0];
    private meBetScore: number[] = [0, 0, 0];
    private lastBetTime: number = new Date().getTime();

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.nodeRecordIconNew.active = false;
        this.layoutRecord.node.removeAllChildren();
        this.operateNodeLight.name = '0';

        for (let player of this.playersNode) {
            player.active = false;
        }
        this.onlineCount.string = '';
        this.labelBottomTips.node.active = false;
        this.setBankerInfo(null);

        for (let i = 0; i < 10; ++i) {
            let winNode: cc.Node;
            if (i === 8) {
                winNode = this.myselfNode.getChildByName('winNode');
            } else if (i === 9) {
                winNode = this.bankerNode.getChildByName('infoNode').getChildByName('winNode');
            } else {
                winNode = this.playersNode[i].getChildByName('winNode');
            }
            this.posWinNode.push(winNode.position);
        }

        this.gameCards = this.nodeGameCards.getComponent('LHDGameCards');
        this.bankerList = this.nodeBankerList.getComponent('LHDBankerList');

        let script = this.nodeGameRecordList.getComponent('LHDGameRecord');
        script.reset();
    }

    start () {
        let eventManaget = EventManager.getInstance();
        eventManaget.on(GameEvent.INIT, this.onEventGameInit, this);
        eventManaget.on(GameEvent.NET_MSG, this.onEventNetMsg, this);
        eventManaget.on(GameEvent.USER_ENTER, this.onEventUserEnter, this);
        eventManaget.on(GameEvent.USER_LEAVE, this.onEventUserLeave, this);
        eventManaget.on(GameEvent.USER_SCORE, this.onEventUserScore, this);
        eventManaget.on(GameEvent.USER_STATUS, this.onEventUserStatus, this);
        eventManaget.on(GameEvent.CLOSE_GAME, this.onEventCloseGame, this);

        this.resetGame();

        GameModel.getInstance().initGame();

        AudioManager.getInstance().playMusic('lhd', Audios.bgm, true);
    }

    // update (dt) {}

    onDestroy() {
        let eventManaget = EventManager.getInstance();
        eventManaget.off(GameEvent.INIT, this.onEventGameInit, this);
        eventManaget.off(GameEvent.NET_MSG, this.onEventNetMsg, this);
        eventManaget.off(GameEvent.USER_ENTER, this.onEventUserEnter, this);
        eventManaget.off(GameEvent.USER_LEAVE, this.onEventUserLeave, this);
        eventManaget.off(GameEvent.USER_SCORE, this.onEventUserScore, this);
        eventManaget.off(GameEvent.USER_STATUS, this.onEventUserStatus, this);
        eventManaget.off(GameEvent.CLOSE_GAME, this.onEventCloseGame, this);

        // TODO：如有必要 卸载相关资源
    }

    // 重置游戏
    private resetGame() {
        for (let i = 0; i < 3; ++i) {
            this.nodeLightAreas[i].active = false;

            this.labelAllBetScore[i].string = '';
            this.nodeMeBetScore[i].active = false;

            this.nodeRichSign[i].active = false;
            this.nodeLuckySign[i].active = false;

            this.allBetScore[i] = 0;
            this.meBetScore[i] = 0;
        }
        this.gameCards.reset();
        this.nodeChipContainer.removeAllChildren();

        for (let i = 0; i < 10; ++i) {
            let winNode: cc.Node;
            if (i === 8) {
                winNode = this.myselfNode.getChildByName('winNode');
            } else if (i === 9) {
                winNode = this.bankerNode.getChildByName('infoNode').getChildByName('winNode');
            } else {
                winNode = this.playersNode[i].getChildByName('winNode');
            }
            winNode.getChildByName('labelWin').getComponent(cc.Label).string = '';
            winNode.getChildByName('labelWin2').getComponent(cc.Label).string = '';
            winNode.position = this.posWinNode[i];
        }
    }

    // 发送网络消息
    private sendNetMsgToGame(msgTypeName: string, data: Object) {
        let msgType = proto[PACKAGE_NAME][msgTypeName];
		let msg = msgType.create(data);
        let bytes = msgType.encode(msg).finish();

        GameModel.getInstance().sendGameMsgToGame(PACKAGE_NAME, msgTypeName, bytes);
    }

    // 游戏初始化 主要用来游戏重连后清理状态
    // 根据需要清理界面状态 一般只需要用户相关的就可以 因为断线后可能有新玩家进来或者没有游戏的玩家出去
    private onEventGameInit() {
        // 清理状态
    }

    // 网络消息处理
    private onEventNetMsg(data) {
        let namearr = data.name.split('.', 2);
        let packageName = namearr[0];
        let msgTypeName = namearr[1];
        if (packageName !== PACKAGE_NAME) {
            cc.error('网络消息错误, 接收到的包名是:' + packageName + ', 正确的包名是:' + PACKAGE_NAME);
            return;
        }
        let message = proto[packageName][msgTypeName].decode(data.payload);

        if (this[msgTypeName] && typeof this[msgTypeName] === "function") {
            this[msgTypeName](message);
        } else {
            cc.error('未知的网络消息:' + msgTypeName);
        }
    }

    // 用户进入
    private onEventUserEnter(user: game.Iuser_info) {
        if (user.user_status !== UserStatus.OB) {
            let chairid = user.chairid;
            this.users.set(chairid, user);
            this.onlineCount.string = `在线${Array.from(this.users.keys()).length.toString()}人`;

            if (user === GameModel.getInstance().getMeUserInfo()) {
                this.setMyselfInfo(user);
            }
        }
    }

    // 用户离开
    private onEventUserLeave(lastChairID: number, user: game.Iuser_info) {
        let userInfo = user;
        if (userInfo.user_status !== UserStatus.OB) {
            let chairid = lastChairID;
            this.users.delete(chairid);
            this.onlineCount.string = `在线${Array.from(this.users.keys()).length.toString()}人`;

            // 庄家和2边的处理
            if (chairid === this.currentBanker) {
                this.bankerNode.active = false;
            } else {
                let name = chairid.toString();
                for (let player of this.playersNode) {
                    if (player.name === name) {
                        player.active = false;
                        break;
                    }
                }
            }
        }
    }

    // 用户分数改变
    private onEventUserScore(user: game.Iuser_info) {
        if (user.user_status !== UserStatus.OB) {
            let chairid = user.chairid;
            // 庄家 自己和2边
            if (chairid === GameModel.getInstance().getMeChairID()) {
                this.myselfNode.getChildByName('labelGold').getComponent(cc.Label).string = Utils.toMoney(user.score).toString();
            } else if (chairid === this.currentBanker) {
                //let infonode = this.bankerNode.getChildByName('infoNode');
                //infonode.getChildByName('labelGold').getComponent(cc.Label).string = Utils.toMoney(user.score).toString();
            } else {
                for (let i = 2; i < this.playersNode.length; ++i) {
                    let player = this.playersNode[i];
                    if (player.active && player.name === chairid.toString()) {
                        player.getChildByName('labelGold').getComponent(cc.Label).string = Utils.toMoney(user.score).toString();
                        break;
                    }
                }
            }
        }
    }

    // 用户状态改变
    private onEventUserStatus(user: game.Iuser_info) {
        if (user.user_status !== UserStatus.OB) {
            let chairid = user.chairid;

            // TODO: 断线状态
        }
    }

    // 关闭游戏
    private onEventCloseGame(tips: string) {
        UIManager.getInstance().showAlert(tips, () => {
            GameModel.getInstance().closeGame();
        });
    }

    private notify_gs_free(msg: proto.lhd.notify_gs_free) {
        GameModel.getInstance().setGameStatus(GameStatus.FREE);

        this.labelDealid.string = '牌局编号:' +  msg.dealid;
        this.setCountdownTime(msg.time_leave, ClockTitle.FREE);

        this.enableSysBanker = msg.enable_sys_banker;
        this.bankerCondition = msg.banker_condition;
        this.downbankerCondition = msg.downbanker_condition;
        this.userBetLimit = msg.user_bet_limit;
        this.areaBetLimit = msg.area_bet_limit;
        this.betCondition = msg.bet_condition;
        this.setBankerCondition(this.bankerCondition);

        this.currentBanker = msg.current_banker;
        this.bankerReserveScore = msg.banker_reserve_score;
        this.setBankerInfo(this.users.get(this.currentBanker));
        this.updateBankerInfo(this.bankerReserveScore, msg.banker_count);

        this.updateChipButtons();
    }

    private notify_gs_bet(msg: proto.lhd.notify_gs_bet) {
        GameModel.getInstance().setGameStatus(GameStatus.BET);

        this.labelDealid.string = '牌局编号:' +  msg.dealid;
        this.setCountdownTime(msg.time_leave, ClockTitle.BET);

        this.enableSysBanker = msg.enable_sys_banker;
        this.bankerCondition = msg.banker_condition;
        this.downbankerCondition = msg.downbanker_condition;
        this.betCondition = msg.bet_condition;
        this.userBetLimit = msg.user_bet_limit;
        this.areaBetLimit = msg.area_bet_limit;
        this.setBankerCondition(this.bankerCondition);

        this.currentBanker = msg.current_banker;
        this.bankerReserveScore = msg.banker_reserve_score;
        this.setBankerInfo(this.users.get(this.currentBanker));
        this.updateBankerInfo(this.bankerReserveScore, msg.banker_count);

        this.allBetScore = msg.all_bet_score;
        this.meBetScore = msg.me_bet_score;
        for (let i = 0; i < 3; ++i) {
            this.labelAllBetScore[i].string = Utils.toMoney(this.allBetScore[i]).toString();
            if (this.meBetScore[i] > 0) {
                this.nodeMeBetScore[i].active = true;
                this.nodeMeBetScore[i].getChildByName('label').getComponent(cc.Label).string = Utils.toMoney(this.meBetScore[i]).toString();
            }
        }

        // 发牌
        this.gameCards.sendCards(true);

        this.updateChipButtons();
    }

    private notify_gs_opencard(msg: proto.lhd.notify_gs_opencard) {
        GameModel.getInstance().setGameStatus(GameStatus.OPENCARD);

        this.labelDealid.string = '牌局编号:' +  msg.dealid;
        this.setCountdownTime(msg.time_leave, ClockTitle.OPEN);

        this.enableSysBanker = msg.enable_sys_banker;
        this.bankerCondition = msg.banker_condition;
        this.downbankerCondition = msg.downbanker_condition;
        this.userBetLimit = msg.user_bet_limit;
        this.areaBetLimit = msg.area_bet_limit;
        this.betCondition = msg.bet_condition;
        this.setBankerCondition(this.bankerCondition);

        this.currentBanker = msg.current_banker;
        this.bankerReserveScore = msg.banker_reserve_score;
        this.setBankerInfo(this.users.get(this.currentBanker));
        this.updateBankerInfo(this.bankerReserveScore, msg.banker_count);

        this.allBetScore = msg.all_bet_score;
        this.meBetScore = msg.me_bet_score;
        for (let i = 0; i < 3; ++i) {
            this.labelAllBetScore[i].string = Utils.toMoney(this.allBetScore[i]).toString();
            if (this.meBetScore[i] > 0) {
                this.nodeMeBetScore[i].active = true;
                this.nodeMeBetScore[i].getChildByName('label').getComponent(cc.Label).string = Utils.toMoney(this.meBetScore[i]).toString();
            }
        }

        // 发牌
        this.gameCards.sendCards(true);
        this.gameCards.setCardsData(msg.cards_data);

        // 闪烁赢区域 筹码回收
        this.showWinAreaEffect(msg.win_area);
        this.showWinChipsEffect(msg.win_area, msg.win_score, true);

        this.updateChipButtons();
    }

    // 游戏开始
    private notify_game_start(msg: proto.lhd.notify_game_start) {
        GameModel.getInstance().setGameStatus(GameStatus.BET);
        this.labelDealid.string = '牌局编号:' +  msg.dealid;
        this.setCountdownTime(msg.time_leave, ClockTitle.BET);

        this.currentBanker = msg.current_banker;
        this.bankerReserveScore = msg.banker_reserve_score;
        this.updateBankerInfo(this.bankerReserveScore, msg.banker_count);

        this.updateChipButtons();

        this.beginAni.node.active = true;
        this.beginAni.play('beginxiazhu');
        AudioManager.getInstance().playEffect('lhd', Audios.startbet);
    }

    // 用户下注
    private notify_bet(msg: proto.lhd.notify_bet) {
        let frompos: number = 10;
        if (msg.bet_chairid === GameModel.getInstance().getMeChairID()) {
            frompos = 8;
        } else {
            for (let i = 0; i < this.playersNode.length; ++i) {
                let player = this.playersNode[i];
                if (player.active && player.name === msg.bet_chairid.toString()) {
                    frompos = i;
                    break;
                }
            }
        }
        this.addChip(frompos, msg.bet_area, msg.bet_score);
        
        if (msg.bet_chairid === GameModel.getInstance().getMeChairID()) {
            this.meBetScore[msg.bet_area] += msg.bet_score;
            let meTotal = 0;
            for (let i = 0; i < 3; ++i) {
                meTotal += this.meBetScore[i];
            }
            this.myselfNode.getChildByName('labelGold').getComponent(cc.Label).string = Utils.toMoney(GameModel.getInstance().getMeUserInfo().score - meTotal).toString();
            this.nodeMeBetScore[msg.bet_area].active = true;
            this.nodeMeBetScore[msg.bet_area].getChildByName('label').getComponent(cc.Label).string = Utils.toMoney(this.meBetScore[msg.bet_area]).toString();
            this.lastBetTime = new Date().getTime();
        }

        // TODO 更新2边用户的下注金额

        this.allBetScore[msg.bet_area] += msg.bet_score;
        this.labelAllBetScore[msg.bet_area].string = Utils.toMoney(this.allBetScore[msg.bet_area]).toString();

        this.updateChipButtons();
    }

    // 开牌
    private notify_open_cards(msg: proto.lhd.notify_open_cards) {
        GameModel.getInstance().setGameStatus(GameStatus.OPENCARD);
        this.updateChipButtons();
        this.setCountdownTime(msg.time_leave, ClockTitle.OPEN);

        this.beginAni.node.active = true;
        this.beginAni.play('stopxiazhu');
        AudioManager.getInstance().playEffect('lhd', Audios.stopbet);

        cc.tween(this.node).delay(1).call(() => {
            this.gameCards.openCards(msg.cards_data);
            cc.tween(this.node).call(() => {
                AudioManager.getInstance().playEffect('lhd', Audios.sendcard);
            }).delay(0.5).call(() => {
                AudioManager.getInstance().playEffect('lhd', Audios.sendcard);
            }).start();
        }).start();

        cc.tween(this.node).delay(2).call(() => {
            // 添加游戏记录
            this.addGameRecord(msg.win_area);

            // 闪烁赢区域 筹码回收
            this.showWinAreaEffect(msg.win_area);
            this.showWinChipsEffect(msg.win_area, msg.win_score);
        }).start();
    }

    // 空闲时间
    private notify_game_free(msg: proto.lhd.notify_game_free) {
        this.resetGame();

        GameModel.getInstance().setGameStatus(GameStatus.FREE);
        this.setCountdownTime(msg.time_leave, ClockTitle.FREE);

        this.currentBanker = msg.current_banker;
        this.bankerReserveScore = msg.banker_reserve_score;
        this.updateBankerInfo(this.bankerReserveScore, msg.banker_count);

        let now = new Date().getTime();
        if (this.currentBanker !== GameModel.getInstance().getMeChairID() && now - this.lastBetTime >= 300000) {
            UIManager.getInstance().showAlert('您长时间未下注，系统已帮您退出房间', () => {
                GameModel.getInstance().closeGame();
            });
        }

        this.gameCards.sendCards();
        this.startVSAni.node.active = true;
        this.startVSAni.playAnimation('longhudoupk', 1);
    }

    // 取消上庄
    private notify_cancel_banker(msg: proto.lhd.notify_cancel_banker) {
        if (this.currentBanker === msg.cancel_chairid && GameModel.getInstance().getMeChairID() == msg.cancel_chairid) {
            this.buttonApplyBanker.interactable = false;
            this.buttonApplyBanker.node.getChildByName('btnApplyBanker').getChildByName('label').getComponent(cc.Label).string = '等待下庄';
        } else {
            for (let i = 0; i < this.upbankerUserList.length; ++i) {
                if (this.upbankerUserList[i].chairid === msg.cancel_chairid) {
                    this.upbankerUserList.splice(i, 1);
                    this.buttonApplyBanker.interactable = true;
                    this.buttonApplyBanker.node.getChildByName('btnApplyBanker').getChildByName('label').getComponent(cc.Label).string = '申请上庄';
                    this.buttonApplyBanker.clickEvents[0].customEventData = 'up';
                    this.bankerList.setBankerList(this.upbankerUserList);
                    break;
                }
            }
        }

        this.bankerNode.getChildByName('infoNode').getChildByName('labelCount').getComponent(cc.Label).string = '申请人数：' + this.upbankerUserList.length;
    }

    // 申请上庄
    private notify_apply_banker(msg: proto.lhd.notify_apply_banker) {
        this.upbankerUserList.push({ chairid: msg.apply_chairid, reserve_score: msg.reserve_score, user: this.users.get(msg.apply_chairid) });
        // 排序
        this.upbankerUserList.sort((a, b) => {
            if (a.reserve_score > b.reserve_score) {
                return -1;
            }
            if (a.reserve_score < b.reserve_score) {
                return 1;
            }
            return 0;
        });
        this.bankerList.setBankerList(this.upbankerUserList);

        if (msg.apply_chairid === GameModel.getInstance().getMeChairID()) {
            this.buttonApplyBanker.interactable = true;
            this.buttonApplyBanker.node.getChildByName('btnApplyBanker').getChildByName('label').getComponent(cc.Label).string = '申请下庄';
            this.buttonApplyBanker.clickEvents[0].customEventData = 'down';
        }

        this.bankerNode.getChildByName('infoNode').getChildByName('labelCount').getComponent(cc.Label).string = '申请人数：' + this.upbankerUserList.length;
    }

    // 切换庄家
    private notify_change_banker(msg: proto.lhd.notify_change_banker) {
        if (this.currentBanker === GameModel.getInstance().getMeChairID() && msg.current_banker !== GameModel.getInstance().getMeChairID()) {
            this.buttonApplyBanker.interactable = true;
            this.buttonApplyBanker.node.getChildByName('btnApplyBanker').getChildByName('label').getComponent(cc.Label).string = '申请上庄';
            this.buttonApplyBanker.clickEvents[0].customEventData = 'up';
            this.lastBetTime = new Date().getTime();
        } else if (msg.current_banker === GameModel.getInstance().getMeChairID()) {
            this.buttonApplyBanker.interactable = true;
            this.buttonApplyBanker.node.getChildByName('btnApplyBanker').getChildByName('label').getComponent(cc.Label).string = '申请下庄';
            this.buttonApplyBanker.clickEvents[0].customEventData = 'down';
            this.lastBetTime = new Date().getTime();
        }

        this.currentBanker = msg.current_banker;
        this.setBankerInfo(this.users.get(this.currentBanker));
        this.updateBankerInfo(msg.banker_reserve_score, msg.banker_count);
        if (msg.reason) {
            this.nodeCenterTips.getChildByName('label').getComponent(cc.Label).string = msg.reason;
            this.nodeCenterTips.active = true;
            cc.tween(this.nodeCenterTips).delay(1).hide().start();
        }

        for (let i = 0; i < this.upbankerUserList.length; ++i) {
            if (this.upbankerUserList[i].chairid === msg.current_banker) {
                this.upbankerUserList.splice(i, 1);
                this.bankerList.setBankerList(this.upbankerUserList);
                break;
            }
        }

        this.bankerNode.getChildByName('infoNode').getChildByName('labelCount').getComponent(cc.Label).string = '申请人数：' + this.upbankerUserList.length;
    }

    // 左右2边的用户
    private notify_top_players(msg: proto.lhd.notify_top_players) {
        for (let i = 0; i < msg.chairids.length; ++i) {
            let chairid = msg.chairids[i];
            if (chairid !== undefined && chairid !== 0) {
                this.setPlayerInfo(i, this.users.get(chairid));
            } else {
                this.setPlayerInfo(i, null);
            }
        }
    }

    // 玩家列表
    private notify_user_list(msg: proto.lhd.notify_user_list) {
        let script = this.nodePlayerList.getComponent('LHDPlayerList');
        script.reset();
        for (let i = 0; i < msg.users.length; ++i) {
            let data = msg.users[i];
            let user = this.users.get(data.chairid);
            script.addUser(i + 1, user.head_img_url, user.nickname, user.score, data.bet_score, data.win_count);
        }
    }

    // 申请庄家列表
    private notify_apply_list(msg: proto.lhd.notify_apply_list) {
        this.upbankerUserList = [];
        for (let apply of msg.apply_list) {
            this.upbankerUserList.push({ chairid: apply.apply_chairid, reserve_score: apply.reserve_score, user: this.users.get(apply.apply_chairid) });
        }
        // 排序
        this.upbankerUserList.sort((a, b) => {
            if (a.reserve_score > b.reserve_score) {
                return -1;
            }
            if (a.reserve_score < b.reserve_score) {
                return 1;
            }
            return 0;
        });

        this.bankerList.setBankerList(this.upbankerUserList);
    }

    // 游戏记录
    private notify_game_records(msg: proto.lhd.notify_game_records) {
        let script = this.nodeGameRecordList.getComponent('LHDGameRecord');
        script.reset();
        for (let record of msg.records) {
            this.addGameRecord(record);
        }
    }

    // 已下注筹码
    private notify_bet_chips(msg: proto.lhd.notify_bet_chips) {
        for (let chip of msg.bet_chips) {
            let frompos: number = 10;
            if (chip.bet_chairid === GameModel.getInstance().getMeChairID()) {
                frompos = 8;
            } else {
                for (let i = 0; i < this.playersNode.length; ++i) {
                    let player = this.playersNode[i];
                    if (player.active && player.name === chip.bet_chairid.toString()) {
                        frompos = i;
                        break;
                    }
                }
            }
            this.addChip(frompos, chip.bet_area, chip.bet_score, true);
        }
    }

    // 菜单按钮
    private onClickMenu() {
        this.nodeMenu.active = true;
    }

    // 点击下注区域
    private onClickBetArea(event: any, customEventData: any) {
        let area = parseInt(customEventData);
        if (GameModel.getInstance().getGameStatus() !== GameStatus.BET) {
            return;
        }
        if (this.currentBanker === GameModel.getInstance().getMeChairID()) {
            return;
        }
        if (this.currentBanker === 0 && !this.enableSysBanker) {
            return;
        }
        if (!this.operateNodeLight.active || !this.operateNode.active) {
            return;
        }

        let selected = parseInt(this.operateNodeLight.name);
        if (this.getMaxBetScore(area) >= BetChipScore[selected]) {
            this.sendNetMsgToGame('request_bet', { bet_score: BetChipScore[selected], bet_area: area });
        }
    }

    // 在线用户
    onClickOnline() {
        this.nodePlayerList.active = true;
    }

    // 下注按钮
    private onClickBet(event: any, customEventData: any) {
        let idx = parseInt(customEventData);
        let last = parseInt(this.operateNodeLight.name);
        this.betButtons[last].interactable = true;

        this.operateNodeLight.position = this.betButtons[idx].node.position;
        this.operateNodeLight.name = idx.toString();
        this.betButtons[idx].interactable = false;
    }

    // 重复下注
    private onClickRepeatBet() {
    }

    // 游戏记录
    private onClickGameRecord() {
        this.nodeGameRecordList.active = true;
    }

    // 申请上庄
    private onClickApplyBanker(event: any, customEventData: string) {
        if (customEventData == 'down') {
            this.buttonApplyBanker.clickEvents[0].customEventData = 'wait';
            this.sendNetMsgToGame('request_cancel_banker', { });
        } else if (customEventData != 'wait') {
            this.nodeBankerList.active = true;
        }
    }

    // 菜单关闭
    private onClickMenuMask() {
        this.nodeMenu.active = false;
    }

    // 菜单返回
    private onClickMenuBack() {
        let totalBetScore = this.meBetScore[0] + this.meBetScore[1] + this.meBetScore[2];
        if (GameModel.getInstance().isPlayingGame() && (totalBetScore > 0 || this.currentBanker == GameModel.getInstance().getMeChairID())) {
            UIManager.getInstance().showCustomAlert({ content: '退出后系统将帮您打完这局，是否离开？', okCallback: function() {
                GameModel.getInstance().closeGame();
            }});
        } else {
            GameModel.getInstance().closeGame();
        }
    }

    // 菜单规则
    private onClickMenuRule() {
        UIManager.getInstance().addLayer('hall', 'prefabs/club/ClubRuleLayer', GameModel.getInstance().getKindID());
    }

    // 菜单设置
    private onClickMenuSetting() {
        UIManager.getInstance().addLayer('hall', 'prefabs/SettingLayer');
    }

    // 显示赢的区域动画
    private showWinAreaEffect(winArea: Area) {
        this.nodeLightAreas[winArea].active = true;
    }

    // 显示输赢筹码效果 0:幸运星 1-7 富豪1-7 8自己 9庄家 10其他在线
    private showWinChipsEffect(winArea: Area, winScore: number[], onlyShowWinScore: boolean = false) {
        // 只显示赢分效果 因为有可能中途进来 防止下一局开始了还在显示筹码效果
        if (onlyShowWinScore) {
            for (let i = 0; i < 10; ++i) {
                if (winScore[i] !== 0) {
                    let winNode: cc.Node;
                    if (i === 8) {
                        winNode = this.myselfNode.getChildByName('winNode');
                    } else if (i === 9) {
                        winNode = this.bankerNode.getChildByName('infoNode').getChildByName('winNode');
                    } else {
                        winNode = this.playersNode[i].getChildByName('winNode');
                    }
                    if (winScore[i] > 0) {
                        winNode.getChildByName('labelWin').getComponent(cc.Label).string = '+' + Utils.toMoney(winScore[i]);
                    } else {
                        winNode.getChildByName('labelWin2').getComponent(cc.Label).string = Utils.toMoney(winScore[i]).toString();
                    }
                    cc.tween(winNode).by(0.2, { y: 20 }, { easing: 'sineInOut'}).start();
                }
            }
            return;
        }

        // 先把输区域的筹码全部给庄家 然后再根据赢分返还给其他人
        let chips = this.nodeChipContainer.children;
        let bankerPos = this.nodeBetUserPoint[9].position;
        let newchips: cc.Node[] = [];
        for (let chip of chips) {
            let arr = chip.name.split(':', 3);
            let betArea = parseInt(arr[0]);
            let chairid = parseInt(arr[1]);
            if (betArea !== winArea) {
                cc.tween(chip).to(0.5, { position: bankerPos }, { easing: 'sineInOut'}).call(() => {
                    chip.removeFromParent();
                }).start();
            } else {
                let dstpos: cc.Vec3 = this.nodeBetUserPoint[chairid].position;
                // 创建相同数量的筹码分配给赢的人
                let newchip = cc.instantiate(this.nodeChip);
                newchip.active = true;
                newchip.position = bankerPos;
                newchip.getComponent(cc.Sprite).spriteFrame = this.atlasChips.getSpriteFrame(chip.getComponent(cc.Sprite).spriteFrame.name);
                cc.tween(newchip).delay(1).to(0.5, { position: chip.position }, { easing: 'sineInOut'}).delay(0.5)
                .to(0.5, { position: dstpos }, { easing: 'sineInOut'}).call(() => {
                    newchip.removeFromParent();
                }).start();
                newchips.push(newchip);

                cc.tween(chip).delay(2).to(0.5, { position: dstpos }, { easing: 'sineInOut'}).call(() => {
                    chip.removeFromParent();
                }).start();
            }
        }
        for (let chip of newchips) {
            this.nodeChipContainer.addChild(chip);
        }

        cc.tween(this.nodeChipContainer).call(() => {
            AudioManager.getInstance().playEffect('lhd', Audios.coinsfly);
        }).delay(1).call(() => {
            AudioManager.getInstance().playEffect('lhd', Audios.coinsfly);
        }).delay(1).call(() => {
            AudioManager.getInstance().playEffect('lhd', Audios.coinsfly);
        }).start();

        // 显示输赢分数
        cc.tween(this.nodeChipContainer).delay(2).call(() => {
            for (let i = 0; i < 10; ++i) {
                if (winScore[i] !== 0) {
                    let winNode: cc.Node;
                    if (i === 8) {
                        winNode = this.myselfNode.getChildByName('winNode');
                    } else if (i === 9) {
                        winNode = this.bankerNode.getChildByName('infoNode').getChildByName('winNode');
                    } else {
                        winNode = this.playersNode[i].getChildByName('winNode');
                    }
                    if (winScore[i] > 0) {
                        winNode.getChildByName('labelWin').getComponent(cc.Label).string = '+' + Utils.toMoney(winScore[i]);
                    } else {
                        winNode.getChildByName('labelWin2').getComponent(cc.Label).string = Utils.toMoney(winScore[i]).toString();
                    }
                    cc.tween(winNode).by(0.2, { y: 20 }, { easing: 'sineInOut'}).start();
                }
            }
        }).start();
    }

    // 设置倒计时
    private setCountdownTime(second: number, clockTitle: ClockTitle) {
        this.nodeClock.active = true;
        this.countdownTime = second;
        this.labelClockTime.string = this.countdownTime.toString();
        this.spriteClockTitle.spriteFrame = this.clockTitleFrames[clockTitle];
        this.schedule(this.onCountdownTime, 1);
    }

    // 取消倒计时
    private killCountdownTime() {
        this.unschedule(this.onCountdownTime);
        this.nodeClock.active = false;
    }

    private onCountdownTime() {
        this.countdownTime--;
        this.labelClockTime.string = this.countdownTime.toString();
        if (GameModel.getInstance().getGameStatus() == GameStatus.BET && this.countdownTime <= 5) {
            AudioManager.getInstance().playEffect('lhd', Audios.tick);
        }
        if (this.countdownTime <= 0) {
            this.killCountdownTime();
        }
    }

    // pos 0 幸运星 1-7 富豪1-7名
    private setPlayerInfo(pos: number, userInfo: game.Iuser_info) {
        if (userInfo !== null && userInfo !== undefined) {
            this.playersNode[pos].active = true;
            this.playersNode[pos].name = userInfo.chairid.toString();
            let head = this.playersNode[pos].getChildByName('headIcon');
            UIManager.getInstance().loadingImage(head, userInfo.head_img_url);
            this.playersNode[pos].getChildByName('labelName').getComponent(cc.Label).string = userInfo.nickname;

            if (pos > 1) {
                this.playersNode[pos].getChildByName('labelGold').getComponent(cc.Label).string = Utils.toMoney(userInfo.score).toString();
            }
        } else {
            this.playersNode[pos].active = false;
        }
    }

    // 自己信息
    private setMyselfInfo(userInfo: game.Iuser_info) {
        let head = this.myselfNode.getChildByName('headMask').getChildByName('headIcon');
        UIManager.getInstance().loadingImage(head, userInfo.head_img_url);

        this.myselfNode.getChildByName('labelName').getComponent(cc.Label).string = userInfo.nickname;
        this.myselfNode.getChildByName('labelGold').getComponent(cc.Label).string = Utils.toMoney(userInfo.score).toString();
    }

    // 庄家信息
    private setBankerInfo(userInfo: game.Iuser_info) {
        let infonode = this.bankerNode.getChildByName('infoNode');
        if (userInfo !== null && userInfo !== undefined) {
            infonode.active = true;
            this.bankerNode.getChildByName('applyTip').active = false;

            let head = infonode.getChildByName('headMask').getChildByName('headIcon');
            UIManager.getInstance().loadingImage(head, userInfo.head_img_url);

            infonode.getChildByName('labelName').getComponent(cc.Label).string = userInfo.nickname;
        } else {
            if (this.enableSysBanker) {
                infonode.active = true;
                this.bankerNode.getChildByName('applyTip').active = false;

                infonode.getChildByName('labelName').getComponent(cc.Label).string = '系统坐庄';
            } else {
                infonode.active = false;
                this.bankerNode.getChildByName('applyTip').active = true;
            }
        }
    }

    private updateBankerInfo(bankerReserveScore: number, bankerCount: number) {
        let infonode = this.bankerNode.getChildByName('infoNode');
        infonode.getChildByName('labelGold').getComponent(cc.Label).string = Utils.toMoney(bankerReserveScore).toString();
        infonode.getChildByName('iconLz').getChildByName('labelLz').getComponent(cc.Label).string = bankerCount.toString();
    }

    private setBankerCondition(bankerCondition: number) {
        this.bankerNode.getChildByName('labelBankerNeed').getComponent(cc.Label).string = '上庄需要' + Utils.toMoney(bankerCondition);;
    }

    // 添加记录
    private addGameRecord(winArea: Area) {
        if (this.gameRecords.length === MAX_RECORD_COUNT) {
            this.gameRecords.shift();
            this.layoutRecord.node.children.shift();
        } else if (this.gameRecords.length >= 1) {
            this.nodeRecordIconNew.x += 48;
        } else {
            this.nodeRecordIconNew.active = true;
        }

        this.gameRecords.push(winArea);
        let item = cc.instantiate(this.nodeRecordItem);
        item.getComponent(cc.Sprite).spriteFrame = this.recordItemFrames[winArea];
        this.layoutRecord.node.addChild(item);

        let script = this.nodeGameRecordList.getComponent('LHDGameRecord');
        script.addRecord(winArea);
    }

    // 添加下注
    private addChip(frompos: number, betArea: Area, score: number, noani: boolean = false) {
        function randomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        let chip = cc.instantiate(this.nodeChip);
        chip.active = true;
        chip.getComponent(cc.Sprite).spriteFrame = this.atlasChips.getSpriteFrame('chip_small_' + score / 100);
        // area:frompos:score
        chip.name = '' + betArea + ':' + frompos + ':' + score;
        let dstpos: cc.Vec3 = cc.v3();
        if (betArea === Area.HE) {
            dstpos.x = randomInt(this.nodeBetChipPoint[betArea].x - 250 + chip.width / 2, this.nodeBetChipPoint[betArea].x + 250 - chip.width / 2);
            dstpos.y = randomInt(this.nodeBetChipPoint[betArea].y - 55 + chip.height / 2, this.nodeBetChipPoint[betArea].y + 40 - chip.height / 2);
        } else {
            dstpos.x = randomInt(this.nodeBetChipPoint[betArea].x - 225 + chip.width / 2, this.nodeBetChipPoint[betArea].x + 225 - chip.width / 2);
            dstpos.y = randomInt(this.nodeBetChipPoint[betArea].y - 80 + chip.height / 2, this.nodeBetChipPoint[betArea].y + 50 - chip.height / 2);
        }
        this.nodeChipContainer.addChild(chip);

        if (noani) {
            chip.position = dstpos;

            // 直接显示星星或者太阳
            if (frompos == 1) {
                this.nodeRichSign[betArea].active = true;
            } else if (frompos == 0) {
                this.nodeLuckySign[betArea].active = true;
            }
        } else {
            chip.position = this.nodeBetUserPoint[frompos].position;
            cc.tween(chip).to(0.2, { position: dstpos }, { easing: 'sineInOut'}).start();

            if (frompos < 8) {
                let label = cc.instantiate(this.nodeBetLabelTemplete);
                label.getComponent(cc.Label).string = AreaDesc[betArea] + ':+' + Utils.toMoney(score);
                this.nodeBetLabel[frompos].addChild(label);
                if (frompos === 0 || frompos > 4) {
                    label.anchorX = 1;
                    cc.tween(label).by(0.5, { x: -10, y: 20 }).to(0.5, { opacity: 0 }).call(()=>{
                        label.removeFromParent();
                    }).start();
                } else {
                    cc.tween(label).by(0.5, { x: 10, y: 20 }).to(0.5, { opacity: 0 }).call(()=>{
                        label.removeFromParent();
                    }).start();
                }
            }

            // 如果是富豪就太阳 幸运星就星星
            if (frompos <= 1) {
                this.playSunStartEffect(betArea, frompos == 1 ? true : false);
            }

            AudioManager.getInstance().playEffect('lhd', Audios.bet);
        }
    }

    // 播放富豪和幸运星下注动画
    private playSunStartEffect(area: Area, sunOrStar: boolean) {
        let self = this;
        if (sunOrStar) {
            const AnimationName = [ 'long_sun', 'hu_sun', 'he_sun' ];
            this.nodeRichAni[area].active = true;
            this.betSunAni[area].playAnimation(AnimationName[area], 1);
            this.betSunAni[area].addEventListener(dragonBones.EventObject.COMPLETE, (event: cc.Event) => {
                if (event.type === dragonBones.EventObject.COMPLETE) {
                    self.nodeRichSign[area].active = true;
                    self.nodeRichAni[area].active = false;
                }
            });
        } else {
            const AnimationName = [ 'long_star', 'hu_star', 'he_star' ];
            this.nodeLuckyAni[area].active = true;
            this.betStarAni[area].playAnimation(AnimationName[area], 1);
            this.betStarAni[area].addEventListener(dragonBones.EventObject.COMPLETE, (event: cc.Event) => {
                if (event.type === dragonBones.EventObject.COMPLETE) {
                    self.nodeLuckySign[area].active = true;
                    self.nodeLuckyAni[area].active = false;
                }
            });
        }
    }

    // 获取指定区域的最大下注
    private getMaxBetScore(betArea: Area) {
        let user = GameModel.getInstance().getMeUserInfo();
        if (user === undefined) return 0;

        let maxBetScore: number = 0;
        let meTotalBetScore: number = this.meBetScore[0] + this.meBetScore[1] + this.meBetScore[2];

        if (betArea === Area.LONG) {
            maxBetScore = this.allBetScore[1] - this.allBetScore[0] + this.bankerReserveScore + this.allBetScore[2];
        } else if (betArea === Area.HU) {
            maxBetScore = this.allBetScore[0] - this.allBetScore[1] + this.bankerReserveScore + this.allBetScore[2];
        } else {
            maxBetScore = Math.floor(this.bankerReserveScore / 16) - this.allBetScore[2];
        }

        maxBetScore = Math.min(maxBetScore, this.userBetLimit - meTotalBetScore, user.score - meTotalBetScore, this.areaBetLimit - this.allBetScore[betArea]);
        maxBetScore = Math.max(0, maxBetScore);

        return maxBetScore;
    }

    // 更新筹码按钮
    private updateChipButtons() {
        if (GameModel.getInstance().getMeUserInfo().score < this.betCondition) {
            this.operateNode.active = false;
            this.buttonRepeatBet.isChecked = false;
            this.labelBottomTips.node.active = true;
            this.labelBottomTips.string = '您的金币不足，无法进行下注';
            return;
        } else {
            this.operateNode.active = true;
            this.labelBottomTips.node.active = false;
        }

        let enabledBet: boolean = true;
        if ((!this.enableSysBanker && this.currentBanker === 0) || GameModel.getInstance().getGameStatus() !== GameStatus.BET || this.currentBanker === GameModel.getInstance().getMeChairID()) {
            enabledBet = false;
        }

        if (enabledBet) {
            let leaveScore: number = 0;
            leaveScore = Math.max(leaveScore, this.getMaxBetScore(Area.LONG), this.getMaxBetScore(Area.HU), this.getMaxBetScore(Area.HE));

            let meTotalBetScore: number = this.meBetScore[0] + this.meBetScore[1] + this.meBetScore[3];
            meTotalBetScore = GameModel.getInstance().getMeUserInfo().score - meTotalBetScore;
            leaveScore = Math.min(leaveScore, meTotalBetScore);

            let selected = parseInt(this.operateNodeLight.name);
            if (selected >= 0) {
                if (leaveScore < BetChipScore[0]) {
                    selected = -1;
                } else if (leaveScore < BetChipScore[selected]) {
                    for (let i = 0; i < selected; ++i) {
                        if (leaveScore >= BetChipScore[i]) {
                            selected = i;
                        }
                    }
                }
            }

            for (let i = 0; i < BetChipScore.length; ++i) {
                if (leaveScore < BetChipScore[i] || selected === -1) {
                    this.betButtons[i].enableAutoGrayEffect = true;
                    this.betButtons[i].interactable = false;
                } else {
                    this.betButtons[i].enableAutoGrayEffect = false;
                    this.betButtons[i].interactable = true;
                }
            }

            if (selected === -1) {
                this.operateNodeLight.active = false;
                this.buttonRepeatBet.isChecked = false;
                this.buttonRepeatBet.interactable = false;
            } else {
                this.operateNodeLight.active = true;
                this.betButtons[selected].interactable = false;
                this.operateNodeLight.position = this.betButtons[selected].node.position;
                this.operateNodeLight.name = selected.toString();
            }
        } else {
            this.operateNodeLight.active = false;
            this.buttonRepeatBet.interactable = false;
            for (let i = 0; i < BetChipScore.length; ++i) {
                this.betButtons[i].enableAutoGrayEffect = true;
                this.betButtons[i].interactable = false;
            }

            if (this.currentBanker == GameModel.getInstance().getMeChairID()) {
                this.labelBottomTips.node.active = true;
                this.labelBottomTips.string = '您正在当庄，无法进行下注';
                this.operateNode.active = false;
            }
        }
    }
}
