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
export default class TeamTransferLayer extends cc.Component {

    @property(cc.Label)
    private labelScore: cc.Label = null;
    @property(cc.Label)
    private labelCanTransferScore: cc.Label = null;
    @property(cc.Label)
    private labelTransferDestNickname: cc.Label = null;
    @property(cc.EditBox)
    private editboxTransferScore: cc.EditBox = null;
    @property(cc.EditBox)
    private editboxPassword: cc.EditBox = null;
    @property(cc.Node)
    private nodeConfirm: cc.Node = null;

    @property(cc.Label)
    private labelConfirmName: cc.Label = null;
    @property(cc.Label)
    private labelConfirmTransferScore: cc.Label = null;

    private destUserID: number = 0;
    private destName: string = '';
    private transferObj: any = null;

    onInit(destUserID: number, destName: string) {
        this.destUserID = destUserID;
        this.destName = destName;
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.labelScore.string = GlobalModel.getInstance().globalUserData.score.toString();
        this.labelCanTransferScore.string = GlobalModel.getInstance().globalUserData.score < 10300 ? '0' : (GlobalModel.getInstance().globalUserData.score - 300).toString();
        this.labelTransferDestNickname.string = this.destName;

        EventManager.getInstance().on('hall.response_team_transfer', this.response_team_transfer, this);
    }

    start () {

    }

    onDestroy() {
        EventManager.getInstance().off('hall.response_team_transfer', this.response_team_transfer, this);
    }

    // update (dt) {}

    private onClickClose() {
        UIManager.getInstance().removeLayer('hall', 'prefabs/TeamTransferLayer');
    }

    private onClickConfirm() {
        if (this.editboxTransferScore.string == '') {
            UIManager.getInstance().showToast('请输入转账金额');
            return;
        }
        let transferScore = Utils.toScore(parseInt(this.editboxTransferScore.string));
        let canTransferScore = GlobalModel.getInstance().globalUserData.score < 10300 ? 0 : (GlobalModel.getInstance().globalUserData.score - 300);
        if (canTransferScore == 0 || transferScore > canTransferScore) {
            UIManager.getInstance().showToast('您身上金额不足');
            return;
        }

        // @ts-ignore
        let signPwd = md5(this.editboxPassword.string);
        if (this.editboxPassword.string == '' || signPwd != GlobalModel.getInstance().globalUserData.password) {
            UIManager.getInstance().showToast('密码错误');
            return;
        }

        this.nodeConfirm.active = true;
        this.labelConfirmName.string = this.destName;
        this.labelConfirmTransferScore.string = this.editboxTransferScore.string;
    }

    private onClickTipConfirm() {
        this.nodeConfirm.active = false;
        UIManager.getInstance().showLoadingTip('正在处理，请稍候...');
        NetManager.getInstance().sendNetMsgToHall('hall', 'request_team_transfer', {
            userid: GlobalModel.getInstance().globalUserData.userid,
            password: GlobalModel.getInstance().globalUserData.password,
            clubid: GlobalModel.getInstance().globalUserData.selected_clubid,
            dest_userid: this.destUserID,
            transfer_score: Utils.toScore(parseInt(this.editboxTransferScore.string))
        });
    }

    private onClickTipCancel() {
        this.nodeConfirm.active = false;
    }

    private response_team_transfer(msg: hall.response_team_transfer) {
        UIManager.getInstance().hideLoadingTip();
        UIManager.getInstance().showToast(msg.reason);
    }
}
