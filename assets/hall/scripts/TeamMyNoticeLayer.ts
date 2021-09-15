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
export default class TeamMyNoticeLayer extends cc.Component {

    @property(cc.EditBox)
    private editbox: cc.EditBox = null;

    onInit(notice: string) {
        this.editbox.string = notice;
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        EventManager.getInstance().on('hall.response_team_edit_notice', this.response_team_edit_notice, this);
    }

    start () {

    }

    onDestroy() {
        EventManager.getInstance().off('hall.response_team_edit_notice', this.response_team_edit_notice, this);
    }

    // update (dt) {}

    private onClickClose() {
        UIManager.getInstance().removeLayer('hall', 'prefabs/TeamMyNoticeLayer');
    }

    private onClickSave() {
        UIManager.getInstance().showLoadingTip('正在处理，请稍候...');
        NetManager.getInstance().sendNetMsgToHall('hall', 'request_team_edit_notice', {
            userid: GlobalModel.getInstance().globalUserData.userid,
            password: GlobalModel.getInstance().globalUserData.password,
            clubid: GlobalModel.getInstance().globalUserData.selected_clubid,
            notice: this.editbox.string
        });
    }

    private response_team_edit_notice(msg: hall.response_team_edit_notice) {
        UIManager.getInstance().hideLoadingTip();
        UIManager.getInstance().showToast(msg.reason);

        if (msg.result_code == 0) {
            EventManager.getInstance().emit('hall.temp.team.edit_notice', this.editbox.string);
            this.onClickClose();
        }
    }
}
