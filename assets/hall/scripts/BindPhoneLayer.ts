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
export default class BindPhoneLayer extends cc.Component {

    @property(cc.EditBox)
    private editboxPhoneNumber: cc.EditBox = null;
    @property(cc.EditBox)
    private editboxCode: cc.EditBox = null;
    @property(cc.Button)
    private buttonGetCode: cc.Button = null;
    @property(cc.RichText)
    private labelGetCode: cc.RichText = null;

    private countdownTime: number = 0;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let count = cc.sys.localStorage.getItem("BindPhoneCode");
        let timestamp = Date.parse(new Date().toString());
        if (count && timestamp - parseInt(count) <= 30000) {
            this.buttonGetCode.interactable = false;
            this.countdownTime = (30000 - (timestamp - parseInt(count))) / 1000;
            this.labelGetCode.string = this.countdownTime.toString();
            this.schedule(this.onCountdownTime, 1);
        }

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
        UIManager.getInstance().removeLayer('hall', 'prefabs/BindPhoneLayer')
    }

    private onClickGetCode() {
        this.buttonGetCode.interactable = false;
        this.countdownTime = 30;
        this.labelGetCode.string = this.countdownTime.toString();
        cc.sys.localStorage.setItem("BindPhoneCode", Date.parse(new Date().toString()));
        this.schedule(this.onCountdownTime, 1);
    }

    private onCountdownTime() {
        this.countdownTime--;
        this.labelGetCode.string = this.countdownTime.toString();
        if (this.countdownTime <= 0) {
            this.unschedule(this.onCountdownTime);
            this.buttonGetCode.interactable = true;
            this.labelGetCode.string = '获取验证码';
        }
    }

    private onClickBind() {
        if (!Utils.isPhoneNumber(this.editboxPhoneNumber.string)) {
            UIManager.getInstance().showToast('请输入正确的手机号码');
            return;
        }

        if (this.editboxCode.string.length != 6) {
            UIManager.getInstance().showToast('请输入6位验证码');
            return;
        }

        UIManager.getInstance().showLoadingTip('正在处理，请稍候...');
        NetManager.getInstance().sendNetMsgToHall('hall', 'request_bind_phone', {
            userid: GlobalModel.getInstance().globalUserData.userid,
            password: GlobalModel.getInstance().globalUserData.password,
            phone_number: this.editboxPhoneNumber.string,
            code: this.editboxCode.string
        });
    }

    private response_operate_result(msg: hall.response_operate_result) {
        UIManager.getInstance().hideLoadingTip();
        UIManager.getInstance().showToast(msg.reason);
        if (msg.result_code == 0) {
            GlobalModel.getInstance().globalUserData.mobilephone = this.editboxPhoneNumber.string;
            EventManager.getInstance().emit('hall.bind_phone.success');
            this.onClickClose();
        }
    }
}
