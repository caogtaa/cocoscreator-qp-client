// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import UIManager from "../../scripts/UIManager"
import EventManager from "../../scripts/EventManager"
import NetManager from "../../scripts/NetManager"
import GlobalModel from "../../scripts/model/GlobalModel"
import Utils from "../../scripts/Utils"
import { hall } from "../../scripts/proto"
import { GlobalEvent } from "../../scripts/Constants"

const {ccclass, property} = cc._decorator;

@ccclass
export default class TeamMyInfo extends cc.Component {

    @property(cc.Node)
    private nodeHead: cc.Node = null;
    @property(cc.Label)
    private labelNickname: cc.Label = null;
    @property(cc.Label)
    private labelGameID: cc.Label = null;
    @property(cc.Label)
    private labelInviteCode: cc.Label = null;
    @property(cc.Label)
    private labelClubName: cc.Label = null;
    @property(cc.Node)
    private nodeQRCode: cc.Node = null;
    @property(cc.Label)
    private labelShareRatio: cc.Label = null;
    @property(cc.Node)
    private nodeTiNode: cc.Node = null;

    private dataLoaded: boolean = false;
    private myinfoData: hall.response_team_myinfo = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        EventManager.getInstance().on('hall.response_team_myinfo', this.response_team_myinfo, this);
        EventManager.getInstance().on('hall.temp.team.edit_notice', this.onEventEditNotice, this);
        EventManager.getInstance().on('hall.temp.team.edit_card', this.onEventEditCard, this);
    }

    start () {

    }

    onDestroy() {
        EventManager.getInstance().off('hall.response_team_myinfo', this.response_team_myinfo, this);
        EventManager.getInstance().off('hall.temp.team.edit_notice', this.onEventEditNotice, this);
        EventManager.getInstance().off('hall.temp.team.edit_card', this.onEventEditCard, this);
    }

    // update (dt) {}

    onEnable() {
        if (!this.dataLoaded) {
            UIManager.getInstance().showLoadingTip('正在加载，请稍候...');
            NetManager.getInstance().sendNetMsgToHall('hall', 'request_team_myinfo', {
                userid: GlobalModel.getInstance().globalUserData.userid,
                password: GlobalModel.getInstance().globalUserData.password,
                clubid: GlobalModel.getInstance().globalUserData.selected_clubid
            });
        }
    }

    private onClickTip() {
        this.nodeTiNode.active = true;
    }

    private onClickTipMask() {
        this.nodeTiNode.active = false;
    }

    private onClickCopyInviteCode() {

    }

    private onClickEditCard() {
        UIManager.getInstance().addLayer('hall', 'prefabs/TeamMyCardLayer', this.myinfoData.wx, this.myinfoData.qq);
    }

    private onClickEditNotice() {
        UIManager.getInstance().addLayer('hall', 'prefabs/TeamMyNoticeLayer', this.myinfoData.notice);
    }

    private onClickShare() {

    }

    private onClickSave() {

    }

    private response_team_myinfo(msg: hall.response_team_myinfo) {
        UIManager.getInstance().hideLoadingTip();
        this.dataLoaded = true;

        this.myinfoData = msg;

        this.labelGameID.string = msg.gameid.toString();
        this.labelNickname.string = msg.nickname;
        UIManager.getInstance().loadingImage(this.nodeHead, msg.head_img_url);
        this.labelInviteCode.string = msg.invited_code;
        this.labelClubName.string = msg.club_name;
        this.labelShareRatio.string = msg.share_ratio.toString() + '%';
    }

    private onEventEditNotice(notice: string) {
        this.myinfoData.notice = notice;
    }

    private onEventEditCard(wx: string, qq: string) {
        this.myinfoData.wx = wx;
        this.myinfoData.qq = qq;
    }
}
