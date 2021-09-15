
import { MAX_PLAYER, ME_VIEWID, GameStatus, TimeTick, Audios } from "./NNConstants"
import * as proto from "./proto_niuniu"
import EventManager from "../../../scripts/EventManager"
import AudioManager from "../../../scripts/AudioManager"
import GameModel from "../../../scripts/model/GameModel"
import UIManager from "../../../scripts/UIManager"
import AssetManager from "../../../scripts/AssetManager"
import Utils from "../../../scripts/Utils"
import { GameEvent, UserStatus } from "../../../scripts/Constants"

const PACKAGE_NAME = 'niuniu';

// 可操作状态
var OperateStatus = {
    NONE: 0,    // 全部隐藏
    READY: 1,   // 准备阶段
    BEFORE_OPEN: 2, //开牌之前
    OPENNING: 3,    //开牌
    AFTER_OPEN: 4,  //开牌之后
}

cc.Class({
    extends: cc.Component,

    properties: {
        nodeBase: cc.Node,          
        labelGameTips: cc.Label,    // 游戏提示
        labelDiFen: cc.Label,    // 游戏底分
        labelDealID: cc.Label,    // 牌局号
        labelOtherTips: cc.Label,    // 其他游戏提示
        spriteClock: cc.Sprite,     // 计时器
        labelClockTime: cc.Label,       // 计时器数字
        nodeBankerFlag: cc.Node,    // 庄家标志
        nodeMenu: cc.Node,          // 菜单节点
        nodeBeginAnim: cc.Node,         // 开始相关动画的节点
        nodePlayers: [cc.Node],         // 玩家节点
        nodeFreePlayers: [cc.Node],      // 空位玩家
        nodePlayerCards: cc.Node,     // 玩家扑克
        nodeChipsEffect: cc.Node,       // 筹码特效
        buttonStop: cc.Button,          // 下局离场
        buttonAutoMax: cc.Button,       // 自动最大
        buttonAutoMin: cc.Button,       // 自动最小
        buttonAutoTip: cc.Button,       // 自动开牌
        buttonReady: cc.Button,         //准备
        buttonTipNiu: cc.Button,        //开牌
        buttonMi: cc.Button,            //咪牌
        nodeGrabSelect: cc.Node,        //抢庄界面
        nodeBetSelect: cc.Node,         //下注选择
        buttonBetTimes: [cc.Button],    // 下注按钮
        buttonlabelBetTimes: [cc.Label],    // 下注倍数
        nodeGameResult: cc.Node,            //游戏结果
        buttonAutoLeave1: cc.Button,         // 下局离场菜单
        buttonAutoLeave2: cc.Button,        // 下局离场右下
        buttonStandup: cc.Button,           //起立
        buttonChangeTable: cc.Button,       //换桌
        nodePeekCard: cc.Node,

        // 逻辑变量
        _tableUserInfo: new Array(MAX_PLAYER),
        _viewTableUserInfo: new Array(MAX_PLAYER),
        _playerStatus: new Array(MAX_PLAYER),
        _baseScore: 1,
        _canBetScore: new Array(4),
        _allowDoubleBet: false,

        _isAutoOpenCard: false,   // 是否自动开牌
        _isAutoMaxMin: 0,         // 自动最大最小 0 都没选 1最大 2最小
        _isAutoLeave: false,      // 下局离场
        _isMiPai: false,            // 是否咪牌
    },

    onInit (data) {
    },

    onLoad () {
        this.nodeBeginAnim.active = false;
        this.labelGameTips.node.active = false;
        this.spriteClock.node.active = false;
        this.labelOtherTips.node.active = false;

        this.buttonAutoTip.isChecked = false;
        this.buttonAutoMax.isChecked = false;
        this.buttonAutoMin.isChecked = false;
        this.buttonAutoLeave1.isChecked = false;
        this.buttonAutoLeave2.isChecked = false;
        
        // 玩家信息
        for (let i = 0; i < MAX_PLAYER; ++i) {
            this.nodePlayers[i]._labelName = this.nodePlayers[i].getChildByName('Label_name').getComponent(cc.Label);
            this.nodePlayers[i]._labelScore = this.nodePlayers[i].getChildByName('Label_coin').getComponent(cc.Label);
            this.nodePlayers[i]._nodeImageIconReady = this.nodePlayers[i].getChildByName('Image_icon_ready');
            this.nodePlayers[i]._nodeImageHead = this.nodePlayers[i].getChildByName('headMask').getChildByName('headIcon');

            this.nodePlayers[i]._nodeImageBanker = this.nodePlayers[i].getChildByName('Image_banker');
            this.nodePlayers[i]._nodeImageBanker.active = false;
            this.nodePlayers[i]._nodeImageBankerMark = this.nodePlayers[i].getChildByName('Image_bankMark');
            this.nodePlayers[i]._nodeLabelTimes = this.nodePlayers[i].getChildByName('BitmapLabel_times');
            this.nodePlayers[i]._nodeLabelBid = this.nodePlayers[i].getChildByName('BitmapLabel_bid');
            this.nodePlayers[i]._nodeImageTuoGuan = this.nodePlayers[i].getChildByName('Image_tuoguan');
            this.nodePlayers[i]._nodeBet = this.nodePlayers[i].getChildByName('betnode');
            this.nodePlayers[i]._nodeBet._nodeLabelBetTimes = this.nodePlayers[i]._nodeBet.getChildByName('betTimes');
            this.nodePlayers[i]._nodeSpriteBanker = this.nodePlayers[i].getChildByName('bgBanker');
            this.nodePlayers[i]._nodeSpriteBanker.active = false;

            this.nodePlayers[i].active = false;
        }

        this.playerCards = this.nodePlayerCards.getComponent('NNPlayerCards');
        this.chipsEffect = this.nodeChipsEffect.getComponent('NNChipsEffect');
        this.gameResult = this.nodeGameResult.getComponent('NNGameResult');
        this.peekCard = this.nodePeekCard.getComponent('PeekCard');
        this.peekCard.setTouchAreaSize(this.nodePeekCard.getContentSize());
        this.peekCard.setFinger(null);

        this.updateMenuButtons(false);
    },

    // 重置游戏相关
    resetGame () {
        this.nodeBankerFlag.active = false;

        for (let i = 0; i < MAX_PLAYER; ++i) {
            this.nodePlayers[i]._nodeImageIconReady.active = false;

            this.nodePlayers[i]._nodeImageBankerMark.active = false;
            this.nodePlayers[i]._nodeLabelTimes.active = false;
            this.nodePlayers[i]._nodeImageTuoGuan.active = false;
            this.nodePlayers[i]._nodeLabelBid.active = false;
            this.nodePlayers[i]._nodeBet.active = false;
        }

        this._allowDoubleBet = false;
        this.buttonBetTimes[4].node.active = false;

        this.playerCards.reset();
        this.gameResult.reset();
        this.nodePeekCard.active = false;
    },

    start () {
        let eventManaget = EventManager.getInstance();
        eventManaget.on(GameEvent.INIT, this.onEventGameInit, this);
        eventManaget.on(GameEvent.NET_MSG, this.onEventNetMsg, this);
        eventManaget.on(GameEvent.USER_ENTER, this.onEventUserEnter, this);
        eventManaget.on(GameEvent.USER_LEAVE, this.onEventUserLeave, this);
        eventManaget.on(GameEvent.USER_SCORE, this.onEventUserScore, this);
        eventManaget.on(GameEvent.USER_STATUS, this.onEventUserStatus, this);
        eventManaget.on(GameEvent.CLOSE_GAME, this.onEventCloseGame, this);

        this.setOperateStatus(OperateStatus.NONE);
        this.resetGame();

        GameModel.getInstance().initGame();

        AudioManager.getInstance().playMusic('niuniu', Audios.bgm, true);
    },

    onDestroy () {
        let eventManaget = EventManager.getInstance();
        eventManaget.off(GameEvent.INIT, this.onEventGameInit, this);
        eventManaget.off(GameEvent.NET_MSG, this.onEventNetMsg, this);
        eventManaget.off(GameEvent.USER_ENTER, this.onEventUserEnter, this);
        eventManaget.off(GameEvent.USER_LEAVE, this.onEventUserLeave, this);
        eventManaget.off(GameEvent.USER_SCORE, this.onEventUserScore, this);
        eventManaget.off(GameEvent.USER_STATUS, this.onEventUserStatus, this);
        eventManaget.off(GameEvent.CLOSE_GAME, this.onEventCloseGame, this);

        // TODO：如有必要 卸载相关资源
    },

    // update (dt) {},

    // 切换座位的逻辑位置到视图位置 chairid从1开始
    viewChairID(chairid) {
        let meChairID = GameModel.getInstance().getMeUserInfo().chairid;
        if (meChairID === 0) {
            cc.error('无效的座位');
            return 0;
        }
        let viewid = 0;
        if (chairid !== 0) {
            viewid = (chairid + MAX_PLAYER - meChairID) % MAX_PLAYER;
        }
        return viewid
    },

    // 发送网络消息
    sendNetMsgToGame(msgTypeName, data) {
        let msgType = proto[PACKAGE_NAME][msgTypeName];
		let msg = msgType.create(data);
        let bytes = msgType.encode(msg).finish();

        GameModel.getInstance().sendGameMsgToGame(PACKAGE_NAME, msgTypeName, bytes);
    },

    // 游戏初始化 主要用来游戏重连后清理状态
    // 根据需要清理界面状态 一般只需要用户相关的就可以 因为断线后可能有新玩家进来或者没有游戏的玩家出去
    onEventGameInit(data) {
        // 清理状态
        for (let i = 0; i < MAX_PLAYER; ++i) {
            this.hidePlayer(i);
            this._tableUserInfo[i] = null;
            this._viewTableUserInfo[i] = null;
        }

        let tableInfo = GameModel.getInstance().getMyTableInfo();
        this._isMiPai = (tableInfo.param.wanfa.item[2] & 0x01) != 0 ? true : false;
    },

    // 网络消息处理
    onEventNetMsg(data) {
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
    },

    // 用户进入
    onEventUserEnter(userInfo) {
        if (userInfo.user_status !== UserStatus.OB) {
            let chairid = userInfo.chairid;
            this._tableUserInfo[chairid - 1] = userInfo;

            let viewid = this.viewChairID(chairid);
            this._viewTableUserInfo[viewid] = userInfo;

            this.showPlayer(viewid, userInfo);
        } else if (userInfo.chairid === GameModel.getInstance().getMeUserInfo().chairid) {
            this.buttonStandup.interactable = false;
            this.buttonAutoLeave1.interactable = false;
            this.buttonAutoLeave1.isChecked = false;
            this.buttonAutoLeave2.isChecked = false;
            this._isAutoLeave = false;
        }
    },

    // 用户离开
    onEventUserLeave(lastChairID, user) {
        let userInfo = user;
        if (userInfo.user_status !== UserStatus.OB) {
            let chairid = lastChairID;
            this._tableUserInfo[chairid - 1] = null;

            let viewid = this.viewChairID(chairid);
            this._viewTableUserInfo[viewid] = null;

            this.hidePlayer(viewid);
        }
    },

    // 用户分数改变
    onEventUserScore(userInfo) {
        if (userInfo.user_status !== UserStatus.OB) {
            let chairid = userInfo.chairid;
            let viewid = this.viewChairID(chairid);

            this.updatePlayerScore(viewid, userInfo.score);
        }
    },

    // 用户状态改变
    onEventUserStatus(userInfo) {
        if (userInfo.user_status !== UserStatus.OB) {
            let chairid = userInfo.chairid;
            let viewid = this.viewChairID(chairid);

            // TODO: 断线状态
            if (userInfo.user_status === UserStatus.READY) {
                this.showPlayerReadyStatus(viewid, true);
            }
        } else if (userInfo.chairid === GameModel.getInstance().getMeUserInfo().chairid) {
            this.buttonStandup.interactable = false;
            this.buttonAutoLeave1.interactable = false;
            this.buttonAutoLeave1.isChecked = false;
            this.buttonAutoLeave2.isChecked = false;
            this._isAutoLeave = false;
        }
    },

    // 关闭游戏
    onEventCloseGame(tips) {
        // TODO
    },

    notify_gs_free(msg) {
        GameModel.getInstance().setGameStatus(GameStatus.FREE);
        this.updateMenuButtons(true);
        this._baseScore = msg.base_score;
        this.labelDiFen.string = '底注：' + Utils.toMoney(msg.base_score).toString();
        this.buttonReady.node.active = true;
    },

    notify_gs_callbanker(msg) {
        GameModel.getInstance().setGameStatus(GameStatus.CALLBANKER);
        this.updateMenuButtons(false);

        this.setOperateStatus(OperateStatus.NONE);

        this.labelDealID.string = '牌局号：' + msg.dealid;
        this.labelDiFen.string = '底注：' + Utils.toMoney(msg.base_score).toString();
        this._baseScore = msg.base_score;
        for (let i = 0; i < msg.playing_status.length; ++i) {
            let viewid = this.viewChairID(i + 1);
            this._playerStatus[viewid] = msg.playing_status[i];
        }

        for (let i = 0; i < MAX_PLAYER; ++i) {
            let viewid = this.viewChairID(i + 1);
            if (this._playerStatus[viewid]) {
                this.playerCards.activePlayer(viewid);

                for (let j = 0; j < 4; ++j) {
                    this.playerCards.setCardData(viewid, j, 0);
                }
                if (msg.call_banker_status[i]) {
                    this.setPlayerBankerStatus(viewid, msg.call_banker_times[i]);
                } else {
                    if (!GameModel.getInstance().isOBMode() && viewid === ME_VIEWID) {
                        this.setOperateStatus(OperateStatus.BEFORE_OPEN);

                        this.nodeGrabSelect.active = true;
                    }
                }
            }
        }

        this.setCountdownTime(TimeTick.CALLBANKER);
    },

    notify_gs_bet(msg) {
        GameModel.getInstance().setGameStatus(GameStatus.BET);
        this.updateMenuButtons(false);

        this.setOperateStatus(OperateStatus.NONE);

        this.labelDealID.string = '牌局号：' + msg.dealid;
        this.labelDiFen.string = '底注：' + Utils.toMoney(msg.base_score).toString();
        this._baseScore = msg.base_score;
        for (let i = 0; i < msg.playing_status.length; ++i) {
            let viewid = this.viewChairID(i + 1);
            this._playerStatus[viewid] = msg.playing_status[i];
        }

        this._bankerChairID = msg.banker_chairid;
        this._canBetScore = msg.user_can_bet_score;
        this._allowDoubleBet = msg.allow_double_bet;
        this.buttonBetTimes[4].node.active = false;
        let bankerViewID = this.viewChairID(this._bankerChairID);
        this.setPlayerBankerStatus(bankerViewID, msg.banker_times);
        for (let i = 0; i < MAX_PLAYER; ++i) {
            if (i !== bankerViewID) {
                this.nodePlayers[i]._nodeLabelBid.active = false;
            }
        }
        this.setBankerPlayer(bankerViewID);

        for (let i = 0; i < MAX_PLAYER; ++i) {
            let viewid = this.viewChairID(i + 1);
            if (this._playerStatus[viewid]) {
                this.playerCards.activePlayer(viewid);

                for (let j = 0; j < 4; ++j) {
                    this.playerCards.setCardData(viewid, j, 0);
                }
                if (viewid !== bankerViewID) {
                    if (msg.user_bet_score[i] !== 0) {
                        this.setPlayerBetScore(viewid, msg.user_bet_score[i]);
                    } else {
                        if (!GameModel.getInstance().isOBMode() && viewid === ME_VIEWID) {
                            this.setOperateStatus(OperateStatus.BEFORE_OPEN);
    
                            this.nodeBetSelect.active = true;
                            for (let j = 0; j < this._canBetScore.length; ++j) {
                                this.buttonlabelBetTimes[j].string = this._canBetScore[j] / this._baseScore + '倍';
                                if (GameModel.getInstance().getMeUserInfo().score < this._canBetScore[j]) {
                                    this.buttonBetTimes[j].node.active = false;
                                } else {
                                    this.buttonBetTimes[j].node.active = true;
                                }
                                if (msg.allow_double_bet && GameModel.getInstance().getMeUserInfo().score >= this._canBetScore[j] * 2) {
                                    this.buttonBetTimes[4].node.active = true;
                                }
                            }
                        }
                    }
                }
            }
        }

        this.setCountdownTime(TimeTick.BET);
    },

    notify_gs_opencard(msg) {
        GameModel.getInstance().setGameStatus(GameStatus.OPENCARD);
        this.updateMenuButtons(false);

        this.setOperateStatus(OperateStatus.NONE);

        this.labelDealID.string = '牌局号：' + msg.dealid;
        this.labelDiFen.string = '底注：' + Utils.toMoney(msg.base_score).toString();
        this._baseScore = msg.base_score;
        for (let i = 0; i < msg.playing_status.length; ++i) {
            let viewid = this.viewChairID(i + 1);
            this._playerStatus[viewid] = msg.playing_status[i];
        }

        this._bankerChairID = msg.banker_chairid;
        let bankerViewID = this.viewChairID(this._bankerChairID);
        this.setPlayerBankerStatus(bankerViewID, msg.banker_times);
        for (let i = 0; i < MAX_PLAYER; ++i) {
            if (i !== bankerViewID) {
                this.nodePlayers[i]._nodeLabelBid.active = false;
            }
        }
        this.setBankerPlayer(bankerViewID);

        for (let i = 0; i < MAX_PLAYER; ++i) {
            let viewid = this.viewChairID(i + 1);
            if (this._playerStatus[viewid]) {
                if (viewid !== bankerViewID) {
                    this.setPlayerBetScore(viewid, msg.user_bet_score[i]);
                }

                this.playerCards.activePlayer(viewid);

                // 已经开牌
                if (msg.open_cards_data[i].cards_data[0] !== 0) {
                    if (viewid === ME_VIEWID && !GameModel.getInstance().isOBMode()) {
                        this.setOperateStatus(OperateStatus.AFTER_OPEN);
                    }
                    this.playerCards.openCards(viewid, msg.open_cards_data[i].cards_data, msg.open_card_type[i], msg.open_card_times[i]);
                } else {
                    if (viewid === ME_VIEWID && !GameModel.getInstance().isOBMode()) {
                        let cardcount = 5;
                        if (this._isMiPai) {
                            this.setMiPai(msg.cards_data[4]);
                            cardcount = 4;
                        }
                        this.setOperateStatus(OperateStatus.OPENNING);
                        for (let j = 0; j < cardcount; ++j) {
                            this.playerCards.setCardData(viewid, j, msg.cards_data[j]);
                        }
                    } else {
                        for (let j = 0; j < 5; ++j) {
                            this.playerCards.setCardData(viewid, j, 0);
                        }
                    }
                }
            }
        }

        this.setCountdownTime(TimeTick.OPENCARD);
    },

    notify_game_start(msg) {
        this.resetGame();
        this.updateMenuButtons(false);
        this.buttonReady.node.active = false;

        this.labelDealID.string = '牌局号：' + msg.dealid;

        let players = [];
        for (let i = 1; i <= MAX_PLAYER; ++i) {
            let viewid = this.viewChairID(i);
            let user = this._tableUserInfo[i - 1];
            if (user) {
                this._playerStatus[viewid] = true;
                players.push(viewid);
            } else {
                this._playerStatus[viewid] = false;
            }
        }

        GameModel.getInstance().setGameStatus(GameStatus.CALLBANKER);

        this.setOperateStatus(OperateStatus.NONE);

        // TODO:音效

        this.nodeBeginAnim.active = true;
        let animBegin = this.nodeBeginAnim.getComponent(cc.Animation);
        animBegin.play();

        // 发牌
        this.playerCards.sendCards(players, () => {
            for (let i = 0; i < msg.cards_data.length; ++i) {
                this.playerCards.setCardData(ME_VIEWID, i, msg.cards_data[i]);
            }

            if (!GameModel.getInstance().isOBMode()) {
                this.setOperateStatus(OperateStatus.BEFORE_OPEN);
                this.nodeGrabSelect.active = true;

                if (this._isAutoMaxMin === 1) {
                    this.onClickGrabSelect(null, '4');
                } else if (this._isAutoMaxMin === 2) {
                    this.onClickGrabSelect(null, '0');
                }
            }

            this.setCountdownTime(TimeTick.CALLBANKER);
        });
    },

    notify_call_banker(msg) {
        let viewid = this.viewChairID(msg.call_banker_chairid);
        this.setPlayerBankerStatus(viewid, msg.call_banker_times);
        let user = this._tableUserInfo[msg.call_banker_chairid - 1]
        AudioManager.getInstance().playEffect('niuniu', Audios.grab[msg.call_banker_times == 0 ? 0 : 1][user.gender]);
    },

    notify_start_bet(msg) {
        GameModel.getInstance().setGameStatus(GameStatus.BET);

        this._bankerChairID = msg.banker_chairid;
        this._canBetScore = msg.user_can_bet_score;
        this._allowDoubleBet = msg.allow_double_bet;
        this.buttonBetTimes[4].node.active = false;
        let bankerViewID = this.viewChairID(this._bankerChairID);
        this.setPlayerBankerStatus(bankerViewID, msg.banker_times);
        for (let i = 0; i < MAX_PLAYER; ++i) {
            if (i !== bankerViewID) {
                this.nodePlayers[i]._nodeLabelBid.active = false;
            }
        }

        this.nodeBankerFlag.active = true;
        let callUserList = [];
        for (let i = 0; i < msg.call_user_list.length; ++i) {
            callUserList.push(this.viewChairID(msg.call_user_list[i]));
        }
        this.flashBankerPlayers(callUserList, bankerViewID);

        if (!GameModel.getInstance().isOBMode()) {
            this.scheduleOnce(()=>{
                let meChairID = GameModel.getInstance().getMeUserInfo().chairid;
                if (meChairID !== this._bankerChairID && this._playerStatus[ME_VIEWID]) {
                    this.nodeBetSelect.active = true;
                    for (let i = 0; i < this._canBetScore.length; ++i) {
                        this.buttonlabelBetTimes[i].string = this._canBetScore[i] / this._baseScore + '倍';
                        if (GameModel.getInstance().getMeUserInfo().score < this._canBetScore[i]) {
                            this.buttonBetTimes[i].node.active = false;
                        } else {
                            this.buttonBetTimes[i].node.active = true;
                        }
                        if (msg.allow_double_bet && GameModel.getInstance().getMeUserInfo().score >= this._canBetScore[i] * 2) {
                            this.buttonBetTimes[4].node.active = true;
                        }
                    }

                    if (this._isAutoMaxMin === 1) {
                        this.onClickBetSelect(null, '-1');
                    } else if (this._isAutoMaxMin === 2) {
                        this.onClickBetSelect(null, '0');
                    }
                }

                this.setCountdownTime(TimeTick.BET);
            }, 2);
        }
    },

    notify_bet(msg) {
        AudioManager.getInstance().playEffect('niuniu', Audios.bet);
        let viewid = this.viewChairID(msg.bet_chairid);
        this.setPlayerBetScore(viewid, msg.bet_score);
    },

    notify_start_open_card(msg) {
        this.nodeBetSelect.active = false;
        GameModel.getInstance().setGameStatus(GameStatus.OPENCARD);

        if (this._isMiPai) {
            if (!GameModel.getInstance().isOBMode() && this._playerStatus[ME_VIEWID]) {
                this.setMiPai(msg.cards_data[4]);
                this.setOperateStatus(OperateStatus.OPENNING);
                if (this._isAutoOpenCard) {
                    this.onClickTipNiu();
                }
                this.setCountdownTime(TimeTick.OPENCARD);
            }
        } else {
            let players = [];
            for (let i = 1; i <= MAX_PLAYER; ++i) {
                let viewid = this.viewChairID(i);
                if (this._playerStatus[viewid]) {
                    players.push(viewid);
                }
            }

            let self = this;
            this.playerCards.sendLastCard(players, () => {
                self.playerCards.setCardData(ME_VIEWID, 4, msg.cards_data[4]);

                if (!GameModel.getInstance().isOBMode() && self._playerStatus[ME_VIEWID]) {
                    self.setOperateStatus(OperateStatus.OPENNING);

                    if (self._isAutoOpenCard) {
                        self.onClickTipNiu();
                    }
                }

                self.setCountdownTime(TimeTick.OPENCARD);
            });
        }
    },

    notify_open_cards(msg) {
        let viewOpenChairID = this.viewChairID(msg.open_chairid);
        if (viewOpenChairID === ME_VIEWID) {
            this.setOperateStatus(OperateStatus.AFTER_OPEN);
        }

        this.playerCards.openCards(viewOpenChairID, msg.open_cards_data, msg.open_card_type, msg.open_card_times);

        let user = this._tableUserInfo[msg.open_chairid - 1]
        AudioManager.getInstance().playEffect('niuniu', Audios.cardtype[msg.open_card_type][user.gender]);
    },

    notify_game_end(msg) {
        GameModel.getInstance().setGameStatus(GameStatus.FREE);
        this.updateMenuButtons(true);

        let posArray = [];
        let scoreArray = [];
        let bankerViewID = this.viewChairID(this._bankerChairID);
        let effect1Array = [];
        let effect2Array = [];
        for (let i = 1; i <= MAX_PLAYER; ++i) {
            let viewid = this.viewChairID(i);
            if (this._playerStatus[viewid]) {
                posArray.push(viewid);
                scoreArray.push(msg.game_score[i - 1]);

                if (i !== this._bankerChairID) {
                    if (msg.game_score[i - 1] <= 0) {
                        effect1Array.push([this.nodePlayers[viewid].position, this.nodePlayers[bankerViewID].position]);
                    } else {
                        effect2Array.push([this.nodePlayers[bankerViewID].position, this.nodePlayers[viewid].position]);
                    }
                }
            }
        }
        if (effect1Array.length === 0) {
            this.chipsEffect.playResultEffect(effect2Array);
        } else {
            this.chipsEffect.playResultEffect(effect1Array, effect2Array)
        }
        
        this.scheduleOnce(()=>{
            this.gameResult.setGameResult(posArray, scoreArray);

            if (!GameModel.getInstance().isOBMode()) {
                this.setOperateStatus(OperateStatus.READY);
            }

            // 自动离开
            if (this._isAutoLeave) {
                let meUserInfo = GameModel.getInstance().getMeUserInfo();
                //GameModel.getInstance().requestStandup(meUserInfo.tableid, meUserInfo.chairid, false);
            }
        }, 0.5);
    },

    // 菜单
    onClickMenu () {
        this.nodeMenu.active = true;
    },

    // 菜单隐藏
    onClickMenuMask () {
        this.nodeMenu.active = false;
    },

    // 开牌
    onClickTipNiu () {
        this.setOperateStatus(OperateStatus.AFTER_OPEN);

        this.killCountdownTime();

        this.sendNetMsgToGame('request_open_card', { cards_data: [0, 0, 0, 0, 0] });
    },

    // 咪牌
    onClickMi () {
    },

    // 准备
    onClickReady () {
        let meUserInfo = GameModel.getInstance().getMeUserInfo();
        if (meUserInfo.user_status === UserStatus.SIT) {
            GameModel.getInstance().requestUserReady();
            this.buttonReady.node.active = false;
        } else if (meUserInfo.user_status === UserStatus.FREE) {
            GameModel.getInstance().requestChangeTable();
        }
    },

    // 自动开牌
    onClickAutoOpen () {
        this._isAutoOpenCard = this.buttonAutoTip.isChecked;
        if (this._isAutoOpenCard) {
            if (GameModel.getInstance().getGameStatus() === GameStatus.OPENCARD) {
                this.onClickTipNiu();
            }
        }
    },

    // 自动最大
    onClickAutoMax () {
        if (this.buttonAutoMax.isChecked) {
            this._isAutoMaxMin = 1;
            this.buttonAutoMin.isChecked = false;
            if (GameModel.getInstance().getGameStatus() === GameStatus.CALLBANKER) {
                this.onClickGrabSelect(null, '4');
            } else if (GameModel.getInstance().getGameStatus() === GameStatus.BET) {
                this.onClickBetSelect(null, '-1');
            }
        } else {
            this._isAutoMaxMin = 0;
        }
    },

    // 自动最小
    onClickAutoMin () {
        if (this.buttonAutoMis.isChecked) {
            this._isAutoMaxMin = 2;
            this.buttonAutoMax.isChecked = false;
            if (GameModel.getInstance().getGameStatus() === GameStatus.CALLBANKER) {
                this.onClickGrabSelect(null, '0');
            } else if (GameModel.getInstance().getGameStatus() === GameStatus.BET) {
                this.onClickBetSelect(null, '0');
            }
        } else {
            this._isAutoMaxMin = 0;
        }
    },

    // 下局离开
    onClickAutoLeave () {
        this._isAutoLeave = this.buttonAutoLeave2.isChecked;
        this.buttonAutoLeave1.isChecked = this._isAutoLeave;
    },

    // 抢庄选择
    onClickGrabSelect(event, customEventData) {
        let idx = parseInt(customEventData);

        this.sendNetMsgToGame('request_call_banker', { index: idx });

        this.nodeGrabSelect.active = false;
        this.killCountdownTime();
    },

    // 下注选择
    onClickBetSelect(event, customEventData) {
        let idx = parseInt(customEventData);
        if (this._allowDoubleBet && idx === 4) {
            for (let i = 0; i < this._canBetScore.length; ++i) {
                this.buttonlabelBetTimes[i].string = this._canBetScore[i] * 2 / this._baseScore + '倍';
                if (GameModel.getInstance().getMeUserInfo().score < this._canBetScore[i] * 2) {
                    this.buttonBetTimes[i].node.active = false;
                }
            }
            this.buttonBetTimes[4].node.active = false;
            return;
        }
        let bet_score = this._canBetScore[0];
        if (idx === -1) {
            for (let i = 3; i >= 0; i--) {
                if (this.buttonBetTimes[i].node.active) {
                    bet_score = parseInt(this.buttonlabelBetTimes[i].string.slice(0, -1)) * this._baseScore;
                    break;
                }
            }
        } else {
            bet_score = parseInt(this.buttonlabelBetTimes[idx].string.slice(0, -1)) * this._baseScore;
        }

        this.sendNetMsgToGame('request_bet', { bet_score: bet_score });

        this.nodeBetSelect.active = false;
        this.killCountdownTime();
    },

    // 返回
    onClickBack() {
        if (GameModel.getInstance().isPlayingGame()) {
            UIManager.getInstance().showCustomAlert({ content: '退出后系统将帮您打完这局，是否离开？', okCallback: function() {
                GameModel.getInstance().closeGame();
            }});
        } else {
            GameModel.getInstance().closeGame();
        }
    },

    // 换桌
    onClickChangeTable() {
        GameModel.getInstance().requestChangeTable();
    },

    // 站起
    onClickStandup() {
        let meUserInfo = GameModel.getInstance().getMeUserInfo();
        if (meUserInfo.user_status === UserStatus.SIT) {
            GameModel.getInstance().requestStandup(meUserInfo.tableid, meUserInfo.chairid, true);
        }
    },

    // 设置
    onClickSetting() {
        UIManager.getInstance().addLayer('hall', 'prefabs/SettingLayer');
    },

    // 规则
    onClickGameRule() {
        UIManager.getInstance().addLayer('hall', 'prefabs/club/ClubRuleLayer', GameModel.getInstance().getKindID());
    },

    // 玩法
    onClickCustomRule() {
        UIManager.getInstance().addLayer('hall', 'prefabs/club/ClubTableWanFaLayer');
    },

    // 下局离场
    onClickAutoLeave() {
        this._isAutoLeave = this.buttonAutoLeave1.isChecked;
        this.buttonAutoLeave2.isChecked = this._isAutoLeave;
    },

    // 测试按钮
    onClickTest1 () {
        this.nodeFreePlayers[0].active = false;
        this.nodePlayers[0].active = true;
        this.nodeFreePlayers[1].active = false;
        this.nodePlayers[1].active = true;
        this.nodeFreePlayers[2].active = false;
        this.nodePlayers[2].active = true;
        this.flashBankerPlayers([0, 1, 2], 0);
        //this.gameResult.setGameResult([0,1], [100, -100]);
        /*
        this.nodeBeginAnim.active = true;
        let animBegin = this.nodeBeginAnim.getComponent(cc.Animation);
        animBegin.play();

        this.nodePlayers[9]._labelName.string = '123543';

        this.updatePlayerScore(0, 123456);

        this.showPlayerReadyStatus(1);

        this.hidePlayer(8);

        this.nodePlayers[6]._nodeLabelTimes.active = true;
        this.nodePlayers[6]._nodeLabelTimes.getComponent(cc.Label).string = "x8"

        this.nodeBankerFlag.active = true;
        let tpos = this.nodePlayers[0]._nodeImageBankerMark.convertToWorldSpaceAR(cc.v2(0, 0));
        let tpos2 = this.nodeBase.convertToNodeSpaceAR(tpos);
        this.nodeBankerFlag.position = cc.v2(0, 0);
        this.nodeBankerFlag.scale = 1;
        cc.tween(this.nodeBankerFlag).to(1, { position: tpos2, scale: 0.5 }, { easing: 'sineInOut'}).start();

        this.setCountdownTime(60);

        this.flashBankerPlayers(new Array(0, 1, 2, 3, 4));

        this.playerCards.sendCards([0, 1, 2, 3, 4]);

        this.setPlayerBetTimes(0, 10);
        */

        // this.chipsEffect.playResultEffect([[this.nodePlayers[1].position, this.nodePlayers[0].position],
        //     [this.nodePlayers[2].position, this.nodePlayers[0].position],
        //     [this.nodePlayers[3].position, this.nodePlayers[0].position],
        //     [this.nodePlayers[4].position, this.nodePlayers[0].position]],
        //     [[this.nodePlayers[0].position, this.nodePlayers[5].position],
        //     [this.nodePlayers[0].position, this.nodePlayers[6].position],
        //     [this.nodePlayers[0].position, this.nodePlayers[7].position],
        //     [this.nodePlayers[0].position, this.nodePlayers[8].position]]);

        // let players = [0, 1, 2, 3, 8, 9];
        // this.setCountdownTime(5);
        // cc.tween(this.node).delay(5)
        // .call(() => {
        //     // 初始化几个玩家到桌子上
        //     for (let i = 0; i < players.length; ++i) {
        //         this.showPlayer(players[i]);
        //     }
        //     this.setOperateStatus(OperateStatus.NONE);
        // })
        // .delay(2).call(() => {
        //     this.nodeBeginAnim.active = true;
        //     let animBegin = this.nodeBeginAnim.getComponent(cc.Animation);
        //     animBegin.play();

        //     this.playerCards.sendCards(players);

        //     this.setOperateStatus(OperateStatus.BEFORE_OPEN);
        // }).delay(2).call(() => {
        //     for (let i = 0; i < players.length; ++i) {
        //         this.setPlayerBankerStatus(players[i], 10);
        //     }
        // }).delay(2).call(() => {
        //     for (let i = 0; i < MAX_PLAYER; ++i) {
        //         this.nodePlayers[i]._nodeLabelBid.active = false;
        //     }

        //     for (let i = 0; i < players.length; ++i) {
        //         this.setPlayerBetScore(players[i], 1000);
        //     }
        // }).delay(2).call(() => {
        //     this.playerCards.sendLastCard(players);

        //     this.setOperateStatus(OperateStatus.OPENNING);
        // }).delay(2).call(() => {
        //     this.playerCards.openCards(0, [0x01,0x11,0x03, 0x2c, 0x3c], 10, 2);
        //     this.playerCards.openCards(1, [0x01,0x11,0x03, 0x2c, 0x3c], 6, 3);
        //     this.playerCards.openCards(5, [0x01,0x11,0x03, 0x2c, 0x3c], 9, 4);

        //     this.setOperateStatus(OperateStatus.OPENNING);
        // })
        // .start();

        let carddata = [0x01,0x02,0x03,0x04,0x05];
        this.playerCards.sendCards([0,1], () => {
            for (let i = 0; i < carddata.length; ++i) {
                this.playerCards.setCardData(ME_VIEWID, i, carddata[i]);
            }

            this.playerCards.sendLastCard([0,1], () => {
                this.playerCards.setCardData(ME_VIEWID, 4, carddata[4]);

                this.playerCards.openCards(0, carddata, 7, 3);
            });
        });
    },

    // 显示玩家
    showPlayer(pos, userInfo) {
        this.nodeFreePlayers[pos].active = false;
        this.nodePlayers[pos].active = true;

        this.nodePlayers[pos]._labelName.string = Utils.getShortString(userInfo.nickname, 12).toString();
        this.updatePlayerScore(pos, userInfo.score);

        if (userInfo.user_status === UserStatus.READY) {
            this.showPlayerReadyStatus(pos, true);
        }

        UIManager.getInstance().loadingImage(this.nodePlayers[pos]._nodeImageHead, userInfo.head_img_url);
    },

    // 隐藏玩家
    hidePlayer(pos) {
        this.nodePlayers[pos].active = false;
        this.nodeFreePlayers[pos].active = true;
    },

    // 更新玩家分数
    updatePlayerScore(pos, score) {
        this.nodePlayers[pos]._labelScore.string = Utils.toMoney(score).toString();
    },

    // 显示准备标志
    showPlayerReadyStatus(pos, show) {
        this.nodePlayers[pos]._nodeImageIconReady.active = !!show;
    },

    // 设置倒计时
    setCountdownTime(second) {
        this.spriteClock.node.active = true;
        this.countdownTime = second;
        this.labelClockTime.string = this.countdownTime.toString();
        this.schedule(this.onCountdownTime, 1);
    },

    // 取消倒计时
    killCountdownTime() {
        this.unschedule(this.onCountdownTime);
        this.spriteClock.node.active = false;
    },

    onCountdownTime() {
        this.countdownTime--;
        this.labelClockTime.string = this.countdownTime.toString();
        if (this.countdownTime <= 0) {
            this.killCountdownTime();
                if (!GameModel.getInstance().isOBMode()) {
                if (GameModel.getInstance().getGameStatus() === GameStatus.CALLBANKER) {
                    this.onClickGrabSelect(null, '0');
                } else if (GameModel.getInstance().getGameStatus() === GameStatus.BET) {
                    this.onClickBetSelect(null, '0');
                }
            }
        }
    },

    // 抢庄闪烁
    flashBankerPlayers(playersArray, bankerViewID) {
        let len = playersArray.length;

        //let flash = cc.tween().hide().delay(0.1).show().delay(0.1);

        for (let i = 0; i < len; ++i) {
            let node = this.nodePlayers[playersArray[i]]._nodeSpriteBanker;
            let flash = cc.tween().call(() => {
                node.active = true;
            }).delay(0.1).call(() => {
                node.active = false;
            }).delay(0.1);
            cc.tween(this.nodePlayers[playersArray[i]]).repeat(5, flash).start();
        }

        this.scheduleOnce(()=>{
            this.nodeBankerFlag.active = true;
            let tpos = this.nodePlayers[bankerViewID]._nodeImageBankerMark.convertToWorldSpaceAR(cc.v2(0, 0));
            let tpos2 = this.nodeBase.convertToNodeSpaceAR(tpos);
            this.nodeBankerFlag.position = cc.v2(0, 0);
            this.nodeBankerFlag.scale = 1;
            cc.tween(this.nodeBankerFlag).to(1, { position: tpos2, scale: 0.5 }, { easing: 'sineInOut'}).start();
        }, 1);
    },

    // 设置庄家
    setBankerPlayer(bankerViewID) {
        this.nodeBankerFlag.active = true;
        let tpos = this.nodePlayers[bankerViewID]._nodeImageBankerMark.convertToWorldSpaceAR(cc.v2(0, 0));
        let tpos2 = this.nodeBase.convertToNodeSpaceAR(tpos);
        this.nodeBankerFlag.scale = 0.5;
        this.nodeBankerFlag.position = tpos2;
    },

    // 设置玩家抢庄倍数
    setPlayerBankerStatus(pos, times) {
        this.nodePlayers[pos]._nodeLabelBid.active = true;
        if (times === 0) {
            this.nodePlayers[pos]._nodeLabelBid.getComponent(cc.Label).string = '不抢';
        } else {
            this.nodePlayers[pos]._nodeLabelBid.getComponent(cc.Label).string = 'x' + times.toString();
        }
    },

    // 设置玩家下注倍数
    setPlayerBetTimes(pos, times) {
        this.nodePlayers[pos]._nodeLabelTimes.active = true;
        this.nodePlayers[pos]._nodeLabelTimes.getComponent(cc.Label).string = 'x' + times.toString();
    },

    // 设置玩家下注分数
    setPlayerBetScore(pos, score) {
        this.nodePlayers[pos]._nodeBet.active = true;
        this.nodePlayers[pos]._nodeBet._nodeLabelBetTimes.getComponent(cc.Label).string = Utils.toMoney(score).toString();

        let p1 = this.nodePlayers[pos]._labelScore.node.parent.convertToWorldSpaceAR(this.nodePlayers[pos]._labelScore.node.position);
        let endicon = this.nodePlayers[pos]._nodeBet.getChildByName('New Sprite');
        let p2 = endicon.parent.convertToWorldSpaceAR(endicon.position);
        let startpos = this.node.convertToNodeSpaceAR(p1);
        let endpos = this.node.convertToNodeSpaceAR(p2);
        this.chipsEffect.playBetEffect(startpos, endpos);
    },

    // 更新菜单按钮
    updateMenuButtons(enabled) {
        if (!enabled) {
            this.buttonChangeTable.interactable = false;
            this.buttonStandup.interactable = false;
        } else {
            this.buttonChangeTable.interactable = true;
            this.buttonStandup.interactable = true;
        }

        let meUserInfo = GameModel.getInstance().getMeUserInfo();
        if (meUserInfo.user_status === UserStatus.OB) {
            this.buttonStandup.interactable = false;
            this.buttonChangeTable.interactable = true;
            //TODO 下局离场禁用
        }
    },

    // 设置咪牌
    setMiPai(carddata) {
        this.nodePeekCard.active = true;
        if (carddata == 0x41) {
            AssetManager.getInstance().load('niuniu', 'textures/bigpoker/bigpoker_0_2', cc.SpriteFrame, null, (err, spriteFrame) => {
                if (err) {
                    cc.error(err);
                    return;
                }

                this.peekCard.setCardFace(spriteFrame);
            });
        } else if (carddata == 0x42) {
            AssetManager.getInstance().load('niuniu', 'textures/bigpoker/bigpoker_0_1', cc.SpriteFrame, null, (err, spriteFrame) => {
                if (err) {
                    cc.error(err);
                    return;
                }

                this.peekCard.setCardFace(spriteFrame);
            });
        } else {
            let cardvalue = carddata & 0x0F;
            let cardcolor = (carddata & 0xF0) >>> 4;
            cardcolor = Math.abs(cardcolor - 3) + 1;
            AssetManager.getInstance().load('niuniu', `textures/bigpoker/bigpoker_${cardvalue}_${cardcolor}_bg`, cc.SpriteFrame, null, (err, spriteFrame) => {
                if (err) {
                    cc.error(err);
                    return;
                }

                cc.log('set sprite frame');
                this.peekCard.setCardFace(spriteFrame);
            });
        }
        this.peekCard.setFinishCallBack(() => {
            this.onClickTipNiu();
        });
        this.peekCard.init();
    },

    // 切换可操作状态
    setOperateStatus(operateStatus) {
        if (operateStatus === OperateStatus.READY) {
            this.buttonReady.node.active = true;

            this.buttonStop.node.active = false;
            this.buttonAutoMax.node.active = false;
            this.buttonAutoMin.node.active = false;
            this.buttonAutoTip.node.active = false;
            this.buttonTipNiu.node.active = false;
            this.buttonMi.node.active = false;
            this.nodePeekCard.active = false;
        } else if (operateStatus === OperateStatus.BEFORE_OPEN) {
            this.buttonReady.node.active = false;
            this.buttonStop.node.active = false;
            this.buttonAutoMax.node.active = true;
            this.buttonAutoMin.node.active = true;
            this.buttonAutoTip.node.active = true;
            this.buttonTipNiu.node.active = false;
            this.buttonMi.node.active = false;
            this.nodePeekCard.active = false;
        } else if (operateStatus === OperateStatus.OPENNING) {
            this.buttonReady.node.active = false;
            this.buttonStop.node.active = false;
            this.buttonAutoMax.node.active = false;
            this.buttonAutoMin.node.active = false;
            this.buttonAutoTip.node.active = false;
            this.buttonTipNiu.node.active = true;
            this.buttonMi.node.active = false;
        } else if (operateStatus === OperateStatus.AFTER_OPEN) {
            this.buttonReady.node.active = false;
            this.buttonStop.node.active = true;
            this.buttonAutoMax.node.active = false;
            this.buttonAutoMin.node.active = false;
            this.buttonAutoTip.node.active = false;
            this.buttonTipNiu.node.active = false;
            this.buttonMi.node.active = false;
            this.nodePeekCard.active = false;
        } else {
            this.buttonReady.node.active = false;
            this.buttonStop.node.active = false;
            this.buttonAutoMax.node.active = false;
            this.buttonAutoMin.node.active = false;
            this.buttonAutoTip.node.active = false;
            this.buttonTipNiu.node.active = false;
            this.buttonMi.node.active = false;
            this.nodePeekCard.active = false;
        }
    }

});
