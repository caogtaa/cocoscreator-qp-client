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
export default class AccountLoginLayer extends cc.Component {

    @property(cc.EditBox)
    private editboxAccount: cc.EditBox = null;
    @property(cc.EditBox)
    private editboxPassword: cc.EditBox = null;

    @property(cc.Toggle)
    private toggleRemPwd: cc.Toggle = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let t = cc.sys.localStorage.getItem('RemberPassword');
        if(t == null || parseInt(t) != 0) {
            this.toggleRemPwd.isChecked = true;
            let account = cc.sys.localStorage.getItem('Account');
            if (account) {
                this.editboxAccount.string = account;
            }
            let password = cc.sys.localStorage.getItem('Password');
            if (password) {
                this.editboxPassword.string = password;
            }
        } else {
            this.toggleRemPwd.isChecked = false;
        }
    }

    start () {

    }

    // update (dt) {}

    private onClickClose() {
        UIManager.getInstance().removeLayer('hall', 'prefabs/AccountLoginLayer');
    }

    private onClickLogin() {
        let account = this.editboxAccount.string;
        let password = this.editboxPassword.string;
        // if (account == '' || !Utils.isPhoneNumber(account)) {
        //     UIManager.getInstance().showToast(this.editboxAccount.placeholder);
        //     return;
        // }

        if (account == '') {
            UIManager.getInstance().showToast(this.editboxAccount.placeholder);
            return;
        }

        if (password == '') {
            UIManager.getInstance().showToast(this.editboxPassword.placeholder);
            return;
        }

        if (this.toggleRemPwd.isChecked) {
            cc.sys.localStorage.setItem('RemberPassword', 1);
            cc.sys.localStorage.setItem('Account', this.editboxAccount.string);
            cc.sys.localStorage.setItem('Password', this.editboxPassword.string);
        } else {
            cc.sys.localStorage.setItem('RemberPassword', 0);
            cc.sys.localStorage.removeItem('Account');
            cc.sys.localStorage.removeItem('Password');
        }

        UIManager.getInstance().showLoadingTip('正在登陆游戏......');
        // @ts-ignore
        let signPwd = md5(password);
        NetManager.getInstance().connectLoginServer('121.41.0.0:8081', account, signPwd, 1, 'uuid', 'device');
    }

    private onClickRemPwd() {

    }

    private onClickFindPwd() {
        UIManager.getInstance().addLayer('hall', 'prefabs/AccountModifyPwdLayer');
    }
}
