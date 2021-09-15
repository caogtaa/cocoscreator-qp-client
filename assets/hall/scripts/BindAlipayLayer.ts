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
import { netmsg, hall } from "../../scripts/proto"

const {ccclass, property} = cc._decorator;

@ccclass
export default class BindAlipayLayer extends cc.Component {

    @property(cc.EditBox)
    private editboxAlipayAccount: cc.EditBox = null;
    @property(cc.EditBox)
    private editboxAlipayName: cc.EditBox = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let eventManager = EventManager.getInstance();
        eventManager.on('hall.response_operate_result', this.response_operate_result, this);
    }

    start () {

    }

    // update (dt) {}

    onDestroy() {
        let eventManager = EventManager.getInstance();
        eventManager.off('hall.response_operate_result', this.response_operate_result, this);
    }

    private onClickClose() {
        UIManager.getInstance().removeLayer('hall', 'prefabs/BindAlipayLayer')
    }

    private onClickBind() {
        if (!Utils.isEmail(this.editboxAlipayAccount.string) && Utils.isPhoneNumber(this.editboxAlipayAccount.string)) {
            UIManager.getInstance().showToast('请输入正确的支付宝账号');
            return;
        }
        if (this.editboxAlipayName.string.length == 0) {
            UIManager.getInstance().showToast('请输入正确的支付宝名字');
            return;
        }

        UIManager.getInstance().showLoadingTip('正在处理，请稍候...');
        NetManager.getInstance().sendNetMsgToHall('hall', 'request_bind_alipay', {
            userid: GlobalModel.getInstance().globalUserData.userid,
            password: GlobalModel.getInstance().globalUserData.password,
            alipay_account: this.editboxAlipayAccount.string,
            alipay_name: this.editboxAlipayName.string
        });
    }

    private response_operate_result(msg: hall.response_operate_result) {
        UIManager.getInstance().hideLoadingTip();
        UIManager.getInstance().showToast(msg.reason);
        if (msg.result_code == 0) {
            GlobalModel.getInstance().globalUserData.alipay_account = this.editboxAlipayAccount.string;
            GlobalModel.getInstance().globalUserData.alipay_name = this.editboxAlipayName.string;
            EventManager.getInstance().emit('hall.bind_alipay.success');
            this.onClickClose();
        }
    }
}
