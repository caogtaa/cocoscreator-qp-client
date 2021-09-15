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
export default class AccountModifyPwdLayer extends cc.Component {

    @property(cc.EditBox)
    private editboxPhoneNumber: cc.EditBox = null;
    @property(cc.EditBox)
    private editboxCode: cc.EditBox = null;
    @property(cc.EditBox)
    private editboxPwd1: cc.EditBox = null;
    @property(cc.EditBox)
    private editboxPwd2: cc.EditBox = null;
    @property(cc.Button)
    private buttonGetCode: cc.Button = null;
    @property(cc.Label)
    private labelGetCode: cc.Label = null;

    private countdownTime: number = 0;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let count = cc.sys.localStorage.getItem("AccountModifyCode");
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
        UIManager.getInstance().removeLayer('hall', 'prefabs/AccountModifyPwdLayer');
    }

    private onClickKefu() {
    }

    private onClickGetCode() {
        this.buttonGetCode.interactable = false;
        this.countdownTime = 30;
        this.labelGetCode.string = this.countdownTime.toString();
        cc.sys.localStorage.setItem("AccountModifyCode", Date.parse(new Date().toString()));
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
        if (GlobalModel.getInstance().globalUserData.mobilephone == '') {
            UIManager.getInstance().showToast('当前账号未绑定手机');
            return;
        }
        if (!Utils.isPhoneNumber(this.editboxPhoneNumber.string)) {
            UIManager.getInstance().showToast('请输入正确的手机号码');
            return;
        }
        if (GlobalModel.getInstance().globalUserData.mobilephone != this.editboxPhoneNumber.string) {
            UIManager.getInstance().showToast('手机号码与绑定的手机号码不一致');
            return;
        }

        if (this.editboxCode.string.length != 6) {
            UIManager.getInstance().showToast('请输入6位验证码');
            return;
        }

        if (this.editboxPwd1.string.length == 0 || this.editboxPwd2.string.length == 0) {
            UIManager.getInstance().showToast('请输入密码');
            return;
        }

        if (this.editboxPwd1.string != this.editboxPwd2.string) {
            UIManager.getInstance().showToast('2次输入的密码不一致');
            return;
        }

        UIManager.getInstance().showLoadingTip('正在处理，请稍候...');
        // @ts-ignore
        let signPwd = md5(this.editboxPwd1.string);
        NetManager.getInstance().sendNetMsgToHall('hall', 'request_modify_password', {
            userid: GlobalModel.getInstance().globalUserData.userid,
            password: GlobalModel.getInstance().globalUserData.password,
            new_password: signPwd,
            phone_number: this.editboxPhoneNumber.string,
            code: this.editboxCode.string
        });
    }

    private response_operate_result(msg: hall.response_operate_result) {
        UIManager.getInstance().hideLoadingTip();
        UIManager.getInstance().showToast(msg.reason);
        if (msg.result_code == 0) {
            // @ts-ignore
            let signPwd = md5(this.editboxPwd1.string);
            GlobalModel.getInstance().globalUserData.password = signPwd;
            this.onClickClose();
        }
    }
}
