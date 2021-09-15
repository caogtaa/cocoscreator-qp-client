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
export default class TeamMyParentInfo extends cc.Component {

    @property(cc.Label)
    private labelNotice: cc.Label = null;
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
    @property(cc.Label)
    private labelWx: cc.Label = null;
    @property(cc.Label)
    private labelQQ: cc.Label = null;

    private dataLoaded: boolean = false;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        EventManager.getInstance().on('hall.response_team_parent_info', this.response_team_parent_info, this);
    }

    start () {

    }

    onDestroy() {
        EventManager.getInstance().off('hall.response_team_parent_info', this.response_team_parent_info, this);
    }

    // update (dt) {}

    onEnable() {
        if (!this.dataLoaded) {
            UIManager.getInstance().showLoadingTip('正在加载，请稍候...');
            NetManager.getInstance().sendNetMsgToHall('hall', 'request_team_parent_info', {
                userid: GlobalModel.getInstance().globalUserData.userid,
                password: GlobalModel.getInstance().globalUserData.password,
                clubid: GlobalModel.getInstance().globalUserData.selected_clubid
            });
        }
    }

    private onClickCopyWx() {
        
    }

    private onClickCopyQQ() {

    }

    private onClickTransferLog() {
        UIManager.getInstance().addLayer('hall', 'prefabs/TeamTransferLogLayer');
    }

    private response_team_parent_info(msg: hall.response_team_parent_info) {
        UIManager.getInstance().hideLoadingTip();
        this.dataLoaded = true;

        this.labelGameID.string = msg.gameid ? msg.gameid.toString() : '';
        this.labelNickname.string = msg.nickname ? msg.nickname : '';
        if (msg.head_img_url) UIManager.getInstance().loadingImage(this.nodeHead, msg.head_img_url);
        this.labelInviteCode.string = msg.invited_code ? msg.invited_code.toString() : '';
        this.labelClubName.string = msg.club_name ? ('所属团队：' + msg.club_name) : '';
        this.labelNotice.string = msg.notice ? msg.notice : '';
        this.labelWx.string = msg.wx ? msg.wx : '';
        this.labelQQ.string = msg.qq ? msg.qq : '';
    }
}
