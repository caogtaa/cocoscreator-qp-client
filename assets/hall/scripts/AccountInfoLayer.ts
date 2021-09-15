// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import UIManager from "../../scripts/UIManager"
import EventManager from "../../scripts/EventManager"
import GlobalModel from "../../scripts/model/GlobalModel"
import Utils from "../../scripts/Utils"
import { GlobalEvent } from "../../scripts/Constants"

const {ccclass, property} = cc._decorator;

@ccclass
export default class AccountInfoLayer extends cc.Component {

    @property(cc.Label)
    private labelScore: cc.Label = null;
    @property(cc.Label)
    private labelBankScore: cc.Label = null;

    @property(cc.Sprite)
    private spriteHead: cc.Sprite = null;

    @property(cc.Label)
    private labelNickname: cc.Label = null;
    @property(cc.Label)
    private labelGameID: cc.Label = null;

    @property(cc.Label)
    private labelAlipay: cc.Label = null;
    @property(cc.Label)
    private labelBankCard: cc.Label = null;
    @property(cc.Label)
    private labelPhone: cc.Label = null;
    @property(cc.Button)
    private buttonAlipay: cc.Button = null;
    @property(cc.Button)
    private buttonBankCard: cc.Button = null;
    @property(cc.Button)
    private buttonPhone: cc.Button = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        UIManager.getInstance().loadingImage(this.spriteHead.node, GlobalModel.getInstance().globalUserData.head_img_url);

        this.labelNickname.string = GlobalModel.getInstance().globalUserData.nickname;
        this.labelGameID.string = GlobalModel.getInstance().globalUserData.gameid.toString();
        this.labelScore.string = Utils.toMoney(GlobalModel.getInstance().globalUserData.score).toString();
        this.labelBankScore.string = Utils.toMoney(GlobalModel.getInstance().globalUserData.score).toString();

        let alipay_account = GlobalModel.getInstance().globalUserData.alipay_account;
        if (alipay_account != '') {
            this.buttonAlipay.node.active = false;
            this.labelAlipay.string = '已绑定:' + alipay_account;
        }

        let bankcard_id = GlobalModel.getInstance().globalUserData.bankcard_id;
        if (bankcard_id != '') {
            this.buttonBankCard.node.active = false;
            this.labelBankCard.string = '已绑定:' + bankcard_id;
        }

        let mobilephone = GlobalModel.getInstance().globalUserData.mobilephone;
        if (mobilephone != '') {
            this.buttonPhone.node.active = false;
            this.labelPhone.string = '已绑定:' + mobilephone;
        }

        EventManager.getInstance().on(GlobalEvent.UPDATE_SCORE, this.onEventUpdateScore, this);
        EventManager.getInstance().on('hall.bind_alipay.success', this.onEventBindAlipaySuccess, this);
        EventManager.getInstance().on('hall.bind_bankcard.success', this.onEventBindBankCardSuccess, this);
        EventManager.getInstance().on('hall.bind_phone.success', this.onEventBindPhoneSuccess, this);
    }

    start () {

    }

    onDestroy() {
        EventManager.getInstance().off(GlobalEvent.UPDATE_SCORE, this.onEventUpdateScore, this);
        EventManager.getInstance().off('hall.bind_alipay.success', this.onEventBindAlipaySuccess, this);
        EventManager.getInstance().off('hall.bind_bankcard.success', this.onEventBindBankCardSuccess, this);
        EventManager.getInstance().off('hall.bind_phone.success', this.onEventBindPhoneSuccess, this);
    }

    // update (dt) {}

    private onClickClose() {
        UIManager.getInstance().removeLayer('hall', 'prefabs/AccountInfoLayer');
    }

    private onClickRecharge() {
        UIManager.getInstance().addLayer('hall', 'prefabs/ShopLayer');
    }

    private onClickBank() {
        UIManager.getInstance().addLayer('hall', 'prefabs/BankLayer');
    }

    private onClickModifyPwd() {
        UIManager.getInstance().addLayer('hall', 'prefabs/AccountModifyPwdLayer');
    }

    private onClickSetting() {
        UIManager.getInstance().addLayer('hall', 'prefabs/SettingLayer');
    }

    private onClickSwitchAccount() {
        EventManager.getInstance().emit(GlobalEvent.RELOGIN);
    }

    private onClickCopyGameID() {
        
    }

    private onClickBindAlipay() {
        UIManager.getInstance().addLayer('hall', 'prefabs/BindAlipayLayer');
    }

    private onClickBindBankCard() {
        UIManager.getInstance().addLayer('hall', 'prefabs/BindBankCardLayer');
    }

    private onClickBindPhone() {
        UIManager.getInstance().addLayer('hall', 'prefabs/BindPhoneLayer');
    }

    private onEventUpdateScore() {
        this.labelScore.string = Utils.toMoney(GlobalModel.getInstance().globalUserData.score).toString();
        this.labelBankScore.string = Utils.toMoney(GlobalModel.getInstance().globalUserData.score).toString();
    }

    private onEventBindAlipaySuccess() {
        let alipay_account = GlobalModel.getInstance().globalUserData.alipay_account;
        if (alipay_account != '') {
            this.buttonAlipay.node.active = false;
            this.labelAlipay.string = '已绑定:' + alipay_account;
        }
    }

    private onEventBindBankCardSuccess() {
        let bankcard_id = GlobalModel.getInstance().globalUserData.bankcard_id;
        if (bankcard_id != '') {
            this.buttonBankCard.node.active = false;
            this.labelBankCard.string = '已绑定:' + bankcard_id;
        }
    }

    private onEventBindPhoneSuccess() {
        let mobilephone = GlobalModel.getInstance().globalUserData.mobilephone;
        if (mobilephone != '') {
            this.buttonPhone.node.active = false;
            this.labelPhone.string = '已绑定:' + mobilephone;
        }
    }
}
