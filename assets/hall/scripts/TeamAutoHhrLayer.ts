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
export default class TeamAutoHhrLayer extends cc.Component {

    @property(cc.Toggle)
    private toggle: cc.Toggle = null;
    @property(cc.EditBox)
    private editbox: cc.EditBox = null;
    @property(cc.Label)
    private labelCur: cc.Label = null;

    private maxShareRatio: number = 0;

    onInit(maxShareRatio: number, autoBePartner: boolean, autoPartnerRatio: number) {
        this.maxShareRatio = maxShareRatio;
        this.editbox.placeholder = `设置默认合伙人分成比例，最低1%，最高${maxShareRatio}%`;
        this.labelCur.node.active = autoBePartner;
        this.labelCur.string = `当前分成比例：${autoPartnerRatio}%`;
        this.toggle.isChecked = autoBePartner;
        this.onClickToggle(this.toggle);
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        EventManager.getInstance().on('hall.response_team_auto_be_partner', this.response_team_auto_be_partner, this);
    }

    start () {

    }

    onDestroy() {
        EventManager.getInstance().off('hall.response_team_auto_be_partner', this.response_team_auto_be_partner, this);
    }

    // update (dt) {}

    private onClickClose() {
        UIManager.getInstance().removeLayer('hall', 'prefabs/TeamAutoHhrLayer');
    }

    private onClickToggle(toggle: cc.Toggle) {
        let bg = toggle.node.getChildByName('Background');
        if (toggle.isChecked) {
            bg.active = false;
        } else {
            bg.active = true;
        }
    }

    private onClickConfirm() {
        let auto_partner_share_ratio = 0;
        if (this.toggle.isChecked) {
            if (this.editbox.string.length == 0) {
                UIManager.getInstance().showToast(this.editbox.placeholder);
                return;
            }
            auto_partner_share_ratio = parseInt(this.editbox.string);
            if (auto_partner_share_ratio <= 0 || auto_partner_share_ratio > this.maxShareRatio) {
                UIManager.getInstance().showToast(this.editbox.placeholder);
                return;
            }
        }

        UIManager.getInstance().showLoadingTip('正在处理，请稍候...');
        NetManager.getInstance().sendNetMsgToHall('hall', 'request_team_auto_be_partner', {
            userid: GlobalModel.getInstance().globalUserData.userid,
            password: GlobalModel.getInstance().globalUserData.password,
            clubid: GlobalModel.getInstance().globalUserData.selected_clubid,
            auto_be_partner: this.toggle.isChecked,
            auto_partner_share_ratio: auto_partner_share_ratio
        });
        
    }

    private response_team_auto_be_partner(msg: hall.response_team_auto_be_partner) {
        UIManager.getInstance().hideLoadingTip();
        UIManager.getInstance().showToast(msg.reason);

        if (msg.result_code == 0) {
            EventManager.getInstance().emit('hall.temp.team.auto_be_partner', this.toggle.isChecked, this.editbox.string == '' ? 0 : parseInt(this.editbox.string));
            this.onClickClose();
        }
    }
}
