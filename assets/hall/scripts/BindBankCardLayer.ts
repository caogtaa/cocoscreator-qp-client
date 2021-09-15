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

const BankName: string[] = [
    '中国银行',
    '建设银行',
    '农业银行',
    '工商银行',
    '中国邮政储蓄银行',
    '招商银行',
    '交通银行',
    '光大银行',
    '中信银行',
    '平安银行',
    '民生银行',
    '浦发银行',
    '华夏银行',
    '兴业银行',
    '广发银行',
    '北京银行',
    '上海银行',
    '广州银行',
];

@ccclass
export default class BindBankCardLayer extends cc.Component {

    @property(cc.EditBox)
    private editboxBankCardName: cc.EditBox = null;
    @property(cc.EditBox)
    private editboxBankCardServer: cc.EditBox = null;
    @property(cc.EditBox)
    private editboxBankCardID: cc.EditBox = null;
    @property(cc.EditBox)
    private editboxBankCardAddr1: cc.EditBox = null;
    @property(cc.EditBox)
    private editboxBankCardAddr2: cc.EditBox = null;
    @property(cc.EditBox)
    private editboxBankCardAddr3: cc.EditBox = null;

    @property(cc.Button)
    private buttonBankSelect: cc.Button = null;
    @property(cc.Node)
    private nodeBanksContainer: cc.Node = null;
    @property(cc.Node)
    private nodeBankItem: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.nodeBanksContainer.removeAllChildren();
        for (let name of BankName) {
            let item = cc.instantiate(this.nodeBankItem);
            item.getChildByName('value').getComponent(cc.Label).string = name;
            this.nodeBanksContainer.addChild(item);
            item.name = name;
            item.on('click', this.onClickBankSelectItem, this);
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
        UIManager.getInstance().removeLayer('hall', 'prefabs/BindBankCardLayer')
    }

    private onClickBankSelect() {
        this.buttonBankSelect.node.active = true;
    }

    private onClickBankSelectItem(button: cc.Button) {
        this.editboxBankCardServer.string = button.node.name;
        this.buttonBankSelect.node.active = false;
    }

    private onClickBankClose() {
        this.buttonBankSelect.node.active = false;
    }

    private onClickBind() {
        if (this.editboxBankCardName.string.length == 0) {
            UIManager.getInstance().showToast(this.editboxBankCardName.placeholder);
            return;
        }
        if (this.editboxBankCardServer.string.length == 0) {
            UIManager.getInstance().showToast(this.editboxBankCardServer.placeholder);
            return;
        }
        if (this.editboxBankCardID.string.length == 0) {
            UIManager.getInstance().showToast(this.editboxBankCardID.placeholder);
            return;
        }
        if (this.editboxBankCardAddr1.string.length == 0) {
            UIManager.getInstance().showToast(this.editboxBankCardAddr1.placeholder);
            return;
        }
        if (this.editboxBankCardAddr2.string.length == 0) {
            UIManager.getInstance().showToast(this.editboxBankCardAddr2.placeholder);
            return;
        }
        if (this.editboxBankCardAddr3.string.length == 0) {
            UIManager.getInstance().showToast(this.editboxBankCardAddr3.placeholder);
            return;
        }

        UIManager.getInstance().showLoadingTip('正在处理，请稍候...');
        NetManager.getInstance().sendNetMsgToHall('hall', 'request_bind_bankcard', {
            userid: GlobalModel.getInstance().globalUserData.userid,
            password: GlobalModel.getInstance().globalUserData.password,
            bankcard_id: this.editboxBankCardID.string,
            bankcard_name: this.editboxBankCardName.string,
            bankcard_addr: this.editboxBankCardServer.string + this.editboxBankCardAddr1.string + this.editboxBankCardAddr2.string + this.editboxBankCardAddr3.string
        });
    }

    private response_operate_result(msg: hall.response_operate_result) {
        UIManager.getInstance().hideLoadingTip();
        UIManager.getInstance().showToast(msg.reason);
        if (msg.result_code == 0) {
            GlobalModel.getInstance().globalUserData.bankcard_id = this.editboxBankCardID.string;
            GlobalModel.getInstance().globalUserData.bankcard_name = this.editboxBankCardName.string;
            EventManager.getInstance().emit('hall.bind_bankcard.success');
            this.onClickClose();
        }
    }
}
