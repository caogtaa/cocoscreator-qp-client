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
export default class TeamJoinClubLayer extends cc.Component {

    @property(cc.Label)
    private labelClubId: cc.Label = null;

    @property(cc.Node)
    private nodeInfoItem: cc.Node = null;
    @property(cc.Node)
    private nodeTip: cc.Node = null;

    private inputClubID: string = '';

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        EventManager.getInstance().on('hall.response_team_search_club', this.response_team_search_club, this);
        EventManager.getInstance().on('hall.response_team_join_club', this.response_team_join_club, this);
    }

    start () {

    }

    onDestroy() {
        EventManager.getInstance().off('hall.response_team_search_club', this.response_team_search_club, this);
        EventManager.getInstance().off('hall.response_team_join_club', this.response_team_join_club, this);
    }

    // update (dt) {}

    private onClickClose() {
        UIManager.getInstance().removeLayer('hall', 'prefabs/TeamJoinClubLayer');
    }

    private onClickHelp() {
        UIManager.getInstance().showAlert('请打开下载页面查看邀请码');
    }

    private onClickPaste() {
        
    }

    private onClickSearch() {
        if (this.inputClubID.length != 8) {
            UIManager.getInstance().showToast('请输入邀请码');
            return;
        }

        UIManager.getInstance().showLoadingTip('正在处理，请稍候...');
        NetManager.getInstance().sendNetMsgToHall('hall', 'request_team_search_club', {
            userid: GlobalModel.getInstance().globalUserData.userid,
            password: GlobalModel.getInstance().globalUserData.password,
            club_invite_code: this.inputClubID
        });
    }

    private onClickInputNum(event: any, customEventData: string) {
        let num = parseInt(customEventData);
        if (this.inputClubID.length >= 8) {
            return;
        }
        this.inputClubID += num;
        this.labelClubId.string = this.inputClubID;
    }

    private onClickClear() {
        this.labelClubId.string = '请输入俱乐部邀请码';
        this.inputClubID = '';
    }

    private onClickBackspace() {
        if (this.inputClubID.length > 1) {
            this.inputClubID = this.inputClubID.slice(0, -1);
            this.labelClubId.string = this.inputClubID;
        } else if (this.inputClubID.length == 1) {
            this.labelClubId.string = '请输入俱乐部邀请码';
            this.inputClubID = '';
        }
    }

    private onClickJoin() {
        if (this.inputClubID.length != 8) {
            UIManager.getInstance().showToast('请输入邀请码');
            return;
        }

        UIManager.getInstance().showLoadingTip('正在处理，请稍候...');
        NetManager.getInstance().sendNetMsgToHall('hall', 'request_team_join_club', {
            userid: GlobalModel.getInstance().globalUserData.userid,
            password: GlobalModel.getInstance().globalUserData.password,
            club_invite_code: this.inputClubID
        });
    }

    private response_team_search_club(msg: hall.response_team_search_club) {
        UIManager.getInstance().hideLoadingTip();
        
        if (msg.result_code == 0) {
            this.nodeInfoItem.active = true;
            this.nodeInfoItem.getChildByName('labelName').getComponent(cc.Label).string = msg.club_info.club_name;
            this.nodeInfoItem.getChildByName('labelNum').getComponent(cc.Label).string = msg.club_info.member_count.toString();
        } else {
            this.nodeTip.active = true;
            cc.tween(this.nodeTip).delay(1).hide().start();
        }
    }

    private response_team_join_club(msg: hall.response_team_join_club) {
        UIManager.getInstance().hideLoadingTip();
        
        if (msg.result_code == 0) {
            GlobalModel.getInstance().globalUserData.club_info.push(msg.club_info);
            GlobalModel.getInstance().globalUserData.selected_clubid = msg.club_info.clubid;
            EventManager.getInstance().emit(GlobalEvent.UPDATE_CLUB);
            this.onClickClose();
        } else {
            this.nodeTip.active = true;
            cc.tween(this.nodeTip).delay(1).hide().start();
        }
    }
}
