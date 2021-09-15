// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import UIManager from "../../scripts/UIManager"
import AudioManager from "../../scripts/AudioManager"
import GlobalModel from "../../scripts/model/GlobalModel"
import GameModel from "../../scripts/model/GameModel"
import Utils from "../../scripts/Utils"
import { GlobalEvent } from "../../scripts/Constants"
import EventManager from "../../scripts/EventManager"
import NetManager from "../../scripts/NetManager"
import { hall } from "../../scripts/proto"

const {ccclass, property} = cc._decorator;

const ClubIdentityName: string[] = [ '馆主', '合伙人', '成员' ];

@ccclass
export default class HallScene extends cc.Component {

    @property(cc.Sprite)
    private iconHead: cc.Sprite = null;
    @property(cc.Label)
    private lableName: cc.Label = null;
    @property(cc.Label)
    private labelGameID: cc.Label = null;
    @property(cc.Label)
    private labelScore: cc.Label = null;
    @property(cc.Sprite)
    private spriteEmailDot: cc.Sprite = null;
    @property(cc.Node)
    private nodeBottomBtns: cc.Node = null;
    @property(cc.Button)
    private buttonArrowLeft: cc.Button = null;
    @property(cc.Button)
    private buttonArrowRight: cc.Button = null;
    @property(cc.ScrollView)
    private scrollView: cc.ScrollView = null;
    @property(cc.Node)
    private scrollViewContent: cc.Node = null;
    @property(cc.Button)
    private buttonAccountUp: cc.Button = null;
    @property(cc.Node)
    private nodeClubNone: cc.Node = null;
    @property(cc.Animation)
    private animHuXi: cc.Animation = null;
    @property(cc.Animation)
    private animZhaYan: cc.Animation = null;
    @property(cc.Animation)
    private animFaPai: cc.Animation = null;
    @property(cc.Node)
    private nodeClubInfo: cc.Node = null;
    @property(cc.Node)
    private nodeClubList: cc.Node = null;
    @property(cc.Node)
    private nodeClubListItem: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        if (GlobalModel.getInstance().globalUserData.selected_clubid != 0) {
            this.nodeClubInfo.active = true;
            this.nodeClubNone.active = false;
            this.reloadClubInfo();
        } else {
            this.animHuXi.play();
            this.animZhaYan.play();
            this.animFaPai.play();
            cc.tween(this.nodeClubNone).repeatForever(cc.tween().delay(5).call(() => {
                this.animFaPai.play();
            }).delay(0.87).call(() => {
                this.animZhaYan.play();
            })).start();
        }

        UIManager.getInstance().loadingImage(this.iconHead.node, GlobalModel.getInstance().globalUserData.head_img_url);
        this.lableName.string = GlobalModel.getInstance().globalUserData.nickname;
        this.labelGameID.string = GlobalModel.getInstance().globalUserData.gameid.toString();
        this.labelScore.string = Utils.toMoney(GlobalModel.getInstance().globalUserData.score).toString();

        this.nodeBottomBtns.getComponent(cc.Widget).updateAlignment();
        let layout = this.nodeBottomBtns.getComponent(cc.Layout);
        layout.spacingX = (this.nodeBottomBtns.width - layout.paddingLeft - layout.paddingRight - 160 * 7) / 6;

        // 红点
        let unreadCount = 0;
        for (let item of GlobalModel.getInstance().userMessageList) {
            if (item.readed == 0) {
                unreadCount++;
            }
        }
        if (unreadCount > 0) {
            this.spriteEmailDot.node.active = true;
            this.spriteEmailDot.node.getChildByName('num').getComponent(cc.Label).string = unreadCount.toString();
        } else {
            this.spriteEmailDot.node.active = false;
        }

        

        EventManager.getInstance().on(GlobalEvent.UPDATE_SCORE, this.onEventUpdateScore, this);
        EventManager.getInstance().on(GlobalEvent.NEW_EMAIL, this.onEventNewEmail, this);
        EventManager.getInstance().on(GlobalEvent.UPDATE_CLUB, this.onEventUpdateClub, this);
        EventManager.getInstance().on('hall.response_team_change_club', this.response_team_change_club, this);
    }

    start () {
        if (GlobalModel.getInstance().globalUserData.mobilephone == '') {
            UIManager.getInstance().addLayer('hall', 'prefabs/AccountUpTipLayer');
        } else {
            this.buttonAccountUp.node.active = false;
        }

        AudioManager.getInstance().playHallMusic();
    }

    // update (dt) {}

    onDestroy() {
        EventManager.getInstance().off(GlobalEvent.UPDATE_SCORE, this.onEventUpdateScore, this);
        EventManager.getInstance().off(GlobalEvent.NEW_EMAIL, this.onEventNewEmail, this);
        EventManager.getInstance().off(GlobalEvent.UPDATE_CLUB, this.onEventUpdateClub, this);
        EventManager.getInstance().off('hall.response_team_change_club', this.response_team_change_club, this);
    }

    private onClickSelectGame(event: any, customEventData: string) {
        let kindid = parseInt(customEventData);
        if (GlobalModel.getInstance().roomList.has(kindid)) {
            GameModel.getInstance().enterRoom(kindid);
        } else {
            UIManager.getInstance().showToast('房间未开放');
        }
    }

    private onClickHead() {
        UIManager.getInstance().addLayer('hall', 'prefabs/AccountInfoLayer');
    }

    private onClickKeFu() {
        UIManager.getInstance().addLayer('hall', 'prefabs/TeamCreateClubLayer');
    }

    private onClickEmail() {
        UIManager.getInstance().addLayer('hall', 'prefabs/NoticeLayer');
    }

    private onClickActivity() {
        UIManager.getInstance().addLayer('hall', 'prefabs/ActivityLayer');
    }

    private onClickTeam() {
        UIManager.getInstance().addLayer('hall', 'prefabs/TeamLayer');
    }

    private onClickBank() {
        UIManager.getInstance().addLayer('hall', 'prefabs/BankLayer');
    }

    private onClickShop() {
        UIManager.getInstance().addLayer('hall', 'prefabs/ShopLayer');
    }

    private onClickExchange() {
        UIManager.getInstance().addLayer('hall', 'prefabs/CashLayer');
    }

    private onClickAccountUp() {
        UIManager.getInstance().addLayer('hall', 'prefabs/AccountUpTipLayer');
    }

    private scrollEvent(sender: any, event: any) {
        switch(event) {
            case 2: 
               this.buttonArrowLeft.node.active = false;
               this.buttonArrowRight.node.active = true;
               break;
            case 3: 
                this.buttonArrowLeft.node.active = true;
                this.buttonArrowRight.node.active = false;
                break;
            case 4: 
                this.buttonArrowLeft.node.active = true;
                this.buttonArrowRight.node.active = true;
                break;
            case 9: 
                this.buttonArrowLeft.node.active = this.scrollViewContent.x < 0 ? true : false;
                this.buttonArrowRight.node.active = this.scrollViewContent.x > -(this.scrollViewContent.width - this.scrollView.node.width) ? true : false;
                break;
        }
    }

    private onClickArrowLeft() {
        this.scrollView.scrollToLeft();
        this.buttonArrowLeft.node.active = false;
        this.buttonArrowRight.node.active = true;
    }

    private onClickArrowRight() {
        this.scrollView.scrollToRight();
        this.buttonArrowLeft.node.active = true;
        this.buttonArrowRight.node.active = false;
    }

    private onClickCreateClub() {
        UIManager.getInstance().addLayer('hall', 'prefabs/TeamCreateClubLayer');
    }

    private onClickJoinClub() {
        UIManager.getInstance().addLayer('hall', 'prefabs/TeamJoinClubLayer');
    }

    private onClickChangeClub() {
        if (GlobalModel.getInstance().globalUserData.club_info.length <= 1) {
            return;
        }
        this.nodeClubList.active = true;
        let container = this.nodeClubList.getChildByName('bg');
        container.removeAllChildren();
        for (let club of GlobalModel.getInstance().globalUserData.club_info) {
            let item = cc.instantiate(this.nodeClubListItem);
            item.active = true;
            item.getChildByName('Label').getComponent(cc.Label).string = club.club_name;
            if (club.clubid == GlobalModel.getInstance().globalUserData.selected_clubid) {
                item.getChildByName('bgSelect').active = true;
            }
            let btn = item.getComponent(cc.Button);
            btn.clickEvents[0].customEventData = club.clubid.toString();
            container.addChild(item);
        }
    }

    private onClickChangeClubMask() {
        this.nodeClubList.active = false;
    }

    private onClickClubListItem(event: any, customEventData: string) {
        this.nodeClubList.active = false;
        let clubid = parseInt(customEventData);
        if (clubid != GlobalModel.getInstance().globalUserData.selected_clubid) {
            UIManager.getInstance().showLoadingTip('正在切换，请稍候...');
            NetManager.getInstance().sendNetMsgToHall('hall', 'request_team_change_club', {
                userid: GlobalModel.getInstance().globalUserData.userid,
                password: GlobalModel.getInstance().globalUserData.password,
                clubid: clubid
            });
        }
    }

    private onEventUpdateScore() {
        this.labelScore.string = Utils.toMoney(GlobalModel.getInstance().globalUserData.score).toString();
    }

    private onEventNewEmail(unreadCount: number) {
        if (unreadCount > 0) {
            this.spriteEmailDot.node.active = true;
            this.spriteEmailDot.node.getChildByName('num').getComponent(cc.Label).string = unreadCount.toString();
        } else {
            this.spriteEmailDot.node.active = false;
        }
    }

    private onEventUpdateClub() {
        this.reloadClubInfo();
    }

    private reloadClubInfo() {
        for (let club of GlobalModel.getInstance().globalUserData.club_info) {
            if (club.clubid == GlobalModel.getInstance().globalUserData.selected_clubid) {
                this.nodeClubInfo.active = true;
                this.nodeClubNone.active = false;
                this.nodeClubInfo.getChildByName('labelName').getComponent(cc.Label).string = club.club_name;
                this.nodeClubInfo.getChildByName('labelNum').getComponent(cc.Label).string = club.member_count.toString();
                this.nodeClubInfo.getChildByName('labelType').getComponent(cc.Label).string = ClubIdentityName[club.identity];
                //UIManager.getInstance().loadingImage(this.nodeClubInfo.getChildByName('headMask').getChildByName('headIcon'), GlobalModel.getInstance().globalUserData.head_img_url);
                break;
            }
        }

        if (GlobalModel.getInstance().globalUserData.club_info.length > 1) {
            this.nodeClubInfo.getChildByName('btnChange').active = true;
        }
    }

    private response_team_change_club(msg: hall.response_team_change_club) {
        UIManager.getInstance().hideLoadingTip();
        
        UIManager.getInstance().showToast(msg.reason);
        if (msg.result_code == 0) {
            GlobalModel.getInstance().globalUserData.selected_clubid = msg.clubid;
            this.reloadClubInfo();
        }
    }
}
