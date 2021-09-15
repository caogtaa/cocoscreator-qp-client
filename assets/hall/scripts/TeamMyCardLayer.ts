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
export default class TeamMyCardLayer extends cc.Component {

    @property(cc.Node)
    private nodeHead: cc.Node = null;
    @property(cc.EditBox)
    private editboxWx: cc.EditBox = null;
    @property(cc.EditBox)
    private editboxQQ: cc.EditBox = null;

    onInit(wx: string, qq: string) {
        this.editboxWx.string = wx;
        this.editboxQQ.string = qq;
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        UIManager.getInstance().loadingImage(this.nodeHead, GlobalModel.getInstance().globalUserData.head_img_url);

        EventManager.getInstance().on('hall.response_team_edit_card', this.response_team_edit_card, this);
    }

    start () {

    }

    onDestroy() {
        EventManager.getInstance().off('hall.response_team_edit_card', this.response_team_edit_card, this);
    }

    // update (dt) {}

    private onClickClose() {
        UIManager.getInstance().removeLayer('hall', 'prefabs/TeamMyCardLayer');
    }

    private onClickSave() {
        UIManager.getInstance().showLoadingTip('正在处理，请稍候...');
        NetManager.getInstance().sendNetMsgToHall('hall', 'request_team_edit_card', {
            userid: GlobalModel.getInstance().globalUserData.userid,
            password: GlobalModel.getInstance().globalUserData.password,
            clubid: GlobalModel.getInstance().globalUserData.selected_clubid,
            wx: this.editboxWx.string,
            qq: this.editboxQQ.string
        });
    }

    private response_team_edit_card(msg: hall.response_team_edit_card) {
        UIManager.getInstance().hideLoadingTip();
        UIManager.getInstance().showToast(msg.reason);

        if (msg.result_code == 0) {
            EventManager.getInstance().emit('hall.temp.team.edit_card', this.editboxWx.string, this.editboxQQ.string);
            this.onClickClose();
        }
    }
}
