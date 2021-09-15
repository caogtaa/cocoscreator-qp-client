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
import { GlobalEvent } from "../../scripts/Constants"

const {ccclass, property} = cc._decorator;

const ExchangeStatus: string[] = [ '审核中', '已成功', '失败' ];

@ccclass
export default class CashLayer extends cc.Component {
    @property([cc.Node])
    private nodePages: cc.Node[] = [];
    @property([cc.Label])
    private labelTips: cc.Label[] = [];

    // node1相关
    @property(cc.Label)
    private labelNode1BankCardNum: cc.Label = null;
    @property(cc.Button)
    private buttonNode1ChangeBankCard: cc.Button = null;
    @property(cc.Button)
    private buttonNode1BindBankCard: cc.Button = null;
    @property(cc.EditBox)
    private editboxNode1Amount: cc.EditBox = null;
    @property(cc.EditBox)
    private editboxNode1Password: cc.EditBox = null;

    // node2相关
    @property(cc.Label)
    private labelNode2Alipay: cc.Label = null;
    @property(cc.Button)
    private buttonNode2ChangeAlipay: cc.Button = null;
    @property(cc.Button)
    private buttonNode2BindAlipay: cc.Button = null;
    @property(cc.EditBox)
    private editboxNode2Amount: cc.EditBox = null;
    @property(cc.EditBox)
    private editboxNode2Password: cc.EditBox = null;

    // 左边
    @property(cc.ToggleContainer)
    private toggleContainer: cc.ToggleContainer = null;
    @property([cc.Toggle])
    private togglePages: cc.Toggle[] = [];
    @property(cc.Label)
    private labelUserName: cc.Label = null;
    @property(cc.Label)
    private labelUserScore: cc.Label = null;
    @property(cc.Label)
    private labelUserBankScore: cc.Label = null;

    @property(cc.Node)
    private nodeRecordDetail: cc.Node = null;

    @property
    private startDatePickerPos: cc.Vec3 = cc.v3();
    @property
    private endDatePickerPos: cc.Vec3 = cc.v3();
    @property(cc.Prefab)
    private prefabDatePicker: cc.Prefab = null;
    @property(cc.Label)
    private labelNode3StartDate: cc.Label = null;
    @property(cc.Label)
    private labelNode3EndDate: cc.Label = null;
    @property(cc.Layout)
    private layoutNode3Records: cc.Layout = null;
    @property(cc.Node)
    private nodeNode3RecordItem: cc.Node = null;
    @property(cc.Label)
    private labelNode3PageIndex: cc.Label = null;
    @property(cc.Label)
    private labelNode3PageTotal: cc.Label = null;
    @property(cc.Label)
    private labelNode3NoRecord: cc.Label = null;

    private cashConfig: any = null;
    private cashRecords: hall.Iexchange_record_item[] = [];
    private cashRecordIndex: number = 0;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.labelUserName.string = GlobalModel.getInstance().globalUserData.nickname;
        this.labelUserScore.string = Utils.toMoney(GlobalModel.getInstance().globalUserData.score).toString();
        this.labelUserBankScore.string = Utils.toMoney(GlobalModel.getInstance().globalUserData.bank_score).toString();

        let bankcard_id = GlobalModel.getInstance().globalUserData.bankcard_id;
        if (bankcard_id != '') {
            this.labelNode1BankCardNum.string = bankcard_id;
            this.buttonNode1BindBankCard.node.active = false;
            this.buttonNode1ChangeBankCard.node.active = false;
        }

        let alipay_account = GlobalModel.getInstance().globalUserData.alipay_account;
        if (alipay_account != '') {
            this.labelNode2Alipay.string = alipay_account;
            this.buttonNode2BindAlipay.node.active = false;
            this.buttonNode2ChangeAlipay.node.active = false;
        }

        this.layoutNode3Records.node.removeAllChildren();
        let date = new Date();
        this.labelNode3StartDate.string = cc.js.formatStr("%s-%s-%s", date.getFullYear(), date.getMonth() + 1, date.getDate());
        this.labelNode3EndDate.string = cc.js.formatStr("%s-%s-%s", date.getFullYear(), date.getMonth() + 1, date.getDate());

        let eventManager = EventManager.getInstance();
        eventManager.on('hall.bind_alipay.success', this.onEventBindAlipaySuccess, this);
        eventManager.on('hall.bind_bankcard.success', this.onEventBindBankCardSuccess, this);
        eventManager.on('hall.response_config_shop_exchange', this.response_config_shop_exchange, this);
        eventManager.on('hall.reponse_exchange_result', this.reponse_exchange_result, this);
        eventManager.on('hall.reponse_exchange_record_result', this.reponse_exchange_record_result, this);
    }

    start () {
        UIManager.getInstance().showLoadingTip('正在处理，请稍候...')
        NetManager.getInstance().sendNetMsgToHall('hall', 'request_config_shop_exchange', { type: 1 });
    }

    onDestroy() {
        let eventManager = EventManager.getInstance();
        eventManager.off('hall.bind_alipay.success', this.onEventBindAlipaySuccess, this);
        eventManager.off('hall.bind_bankcard.success', this.onEventBindBankCardSuccess, this);
        eventManager.off('hall.response_config_shop_exchange', this.response_config_shop_exchange, this);
        eventManager.off('hall.reponse_exchange_result', this.reponse_exchange_result, this);
        eventManager.off('hall.reponse_exchange_record_result', this.reponse_exchange_record_result, this);
    }

    // update (dt) {}

    private onClickClose() {
        UIManager.getInstance().removeLayer('hall', 'prefabs/CashLayer');
    }

    private onClickChangeBankCard() {
        UIManager.getInstance().addLayer('hall', "prefabs/BindBankCardLayer");
    }

    private onClickBindBankCard() {
        UIManager.getInstance().addLayer('hall', "prefabs/BindBankCardLayer");
    }

    private onClickNode1Clear() {
        this.editboxNode1Amount.string = '';
    }

    private onClickNode1FindPassword() {
        UIManager.getInstance().addLayer('hall', "prefabs/AccountModifyPwdLayer");
    }

    private sendRequestExchange(type: number, score: number, password: string) {
        NetManager.getInstance().sendNetMsgToHall('hall', 'request_exchange', {
            userid: GlobalModel.getInstance().globalUserData.userid,
            password: password,
            type: type,
            score: score
        });
    }

    private onClickNode1Exchange() {
        let bankcard_id = GlobalModel.getInstance().globalUserData.bankcard_id;
        if (bankcard_id == '') {
            UIManager.getInstance().showToast('您尚未绑定银行卡');
            return;
        }

        let bankConfig = null;
        for (let t of this.cashConfig) {
            if (t.type == 0) {
                bankConfig = t;
                break;
            }
        }
        if (!bankConfig) return;

        let score = parseFloat(this.editboxNode1Amount.string);
        if (score == NaN || score < bankConfig.min_amount || score > bankConfig.max_amount) {
            UIManager.getInstance().showToast('请输入正确的金额');
            return;
        }
        if (score > Utils.toMoney(GlobalModel.getInstance().globalUserData.bank_score)) {
            UIManager.getInstance().showToast('您的存款不足');
            return;
        }
        let pwd = this.editboxNode1Password.string;
        // @ts-ignore
        let signPwd = md5(pwd);
        if (pwd == '' || signPwd != GlobalModel.getInstance().globalUserData.password) {
            UIManager.getInstance().showToast('密码错误');
            return;
        }

        UIManager.getInstance().showLoadingTip('正在处理，请稍候...');
        this.sendRequestExchange(0, Utils.toScore(score), signPwd);
    }

    private onClickChangeAlipay() {
        UIManager.getInstance().addLayer('hall', "prefabs/BindAlipayLayer");
    }

    private onClickBindAlipay() {
        UIManager.getInstance().addLayer('hall', "prefabs/BindAlipayLayer");
    }

    private onClickNode2Clear() {
        this.editboxNode2Amount.string = '';
    }

    private onClickNode2FindPassword() {
        UIManager.getInstance().addLayer('hall', "prefabs/AccountModifyPwdLayer");
    }

    private onClickNode2Exchange() {
        let alipay_account = GlobalModel.getInstance().globalUserData.alipay_account;
        if (alipay_account == '') {
            UIManager.getInstance().showToast('您尚未绑定支付宝');
            return;
        }

        let alipayConfig = null;
        for (let t of this.cashConfig) {
            if (t.type == 1) {
                alipayConfig = t;
                break;
            }
        }
        if (!alipayConfig) return;

        let score = parseFloat(this.editboxNode2Amount.string);
        if (score == NaN || score < alipayConfig.min_amount || score > alipayConfig.max_amount) {
            UIManager.getInstance().showToast('请输入正确的金额');
            return;
        }
        if (score > Utils.toMoney(GlobalModel.getInstance().globalUserData.bank_score)) {
            UIManager.getInstance().showToast('您的存款不足');
            return;
        }
        let pwd = this.editboxNode2Password.string;
        // @ts-ignore
        let signPwd = md5(pwd);
        if (pwd == '' || signPwd != GlobalModel.getInstance().globalUserData.password) {
            UIManager.getInstance().showToast('密码错误');
            return;
        }

        UIManager.getInstance().showLoadingTip('正在处理，请稍候...');
        this.sendRequestExchange(1, Utils.toScore(score), signPwd);
    }

    private onClickToggles(toggle: cc.Toggle) {
        this.toggleContainer.enabled = true;
        let index = this.togglePages.indexOf(toggle);
        for (let i = 0; i < this.nodePages.length; ++i) {
            if (i == index) {
                this.nodePages[i].active = true;
            } else {
                this.nodePages[i].active = false;
            }
        }
    }

    private onClickCashRecord() {
        this.toggleContainer.enabled = false;
        for (let i = 0; i < this.togglePages.length; ++i) {
            this.togglePages[i].isChecked = false;
            this.nodePages[i].active = false;
        }
        this.nodePages[2].active = true;
        //this.layoutNode3Records.node.removeAllChildren();
    }

    private onClickNode3StartDate() {
        let datepicker = cc.instantiate(this.prefabDatePicker);
        let script = datepicker.getComponent('UIDatePicker');
        script.setShowPosition(this.startDatePickerPos);
        this.node.addChild(datepicker);
        let d = new Date();
        let self = this;
        script.setPickDateCallback((year: number, month: number, day: number)=>{
            self.labelNode3StartDate.string = cc.js.formatStr("%s-%s-%s", year, month + 1, day);
        });
    }

    private onClickNode3EndDate() {
        let datepicker = cc.instantiate(this.prefabDatePicker);
        let script = datepicker.getComponent('UIDatePicker');
        script.setShowPosition(this.endDatePickerPos);
        this.node.addChild(datepicker);
        let d = new Date();
        let self = this;
        script.setPickDateCallback((year: number, month: number, day: number)=>{
            self.labelNode3EndDate.string = cc.js.formatStr("%s-%s-%s", year, month + 1, day);
        });
    }

    private onClickNode3Search() {
        let timestamp1 = Date.parse(this.labelNode3StartDate.string);
        let timestamp2 = Date.parse(this.labelNode3EndDate.string);
        let days = Math.abs((timestamp2 - timestamp1) / 1000 / 3600 / 24);
        if (days > 30) {
            UIManager.getInstance().showToast('只支持查找30天内记录');
            return;
        }

        UIManager.getInstance().showLoadingTip('正在处理，请稍候...');
        NetManager.getInstance().sendNetMsgToHall('hall', 'request_exchange_record', {
            userid: GlobalModel.getInstance().globalUserData.userid,
            password: GlobalModel.getInstance().globalUserData.password,
            start_date: this.labelNode3StartDate.string,
            end_date: this.labelNode3EndDate.string
        });
    }

    private reloadRecords() {
        if (this.cashRecords.length == 0) return;
        this.layoutNode3Records.node.removeAllChildren();
        for (let i = this.cashRecordIndex * 7, j = 0; i < this.cashRecords.length && j < 7; ++i, ++j) {
            let itemData = this.cashRecords[i];
            let item = cc.instantiate(this.nodeNode3RecordItem);
            item.getChildByName('node1').getChildByName('New Label').getComponent(cc.Label).string = itemData.id.toString();
            item.getChildByName('node2').getChildByName('New Label').getComponent(cc.Label).string = itemData.insert_date;
            item.getChildByName('node3').getChildByName('New Label').getComponent(cc.Label).string = Utils.toMoney(itemData.score + itemData.revenue).toString();
            item.getChildByName('node4').getChildByName('New Label').getComponent(cc.Label).string = Utils.toMoney(itemData.revenue).toString();
            item.getChildByName('node5').getChildByName('New Label').getComponent(cc.Label).string = Utils.toMoney(itemData.score).toString();
            item.getChildByName('node6').getChildByName('New Label').getComponent(cc.Label).string = ExchangeStatus[itemData.state];
            let btn = item.getChildByName('node7');
            btn.name = i.toString();
            btn.on('click', this.onClickRecordCheck, this);
            this.layoutNode3Records.node.addChild(item);
        }
    }

    private onClickRecordCheck(button: cc.Button) {
        let script = this.nodeRecordDetail.getComponent('CashRecordDetail');
        script.show(this.cashRecords[parseInt(button.node.name)]);
    }

    private onClickNode3PagePre() {
        if (this.cashRecordIndex == 0) {
            UIManager.getInstance().showToast("已经是第一页");
            return;
        }

        this.labelNode3PageIndex.string = this.cashRecordIndex.toString();
        this.cashRecordIndex--;
        this.reloadRecords();
    }

    private onClickNode3PageNext() {
        if (this.cashRecords.length == 0 || this.cashRecordIndex == Math.floor(this.cashRecords.length / 7)) {
            UIManager.getInstance().showToast("已经是最后一页");
            return;
        }
        
        this.cashRecordIndex++;
        this.labelNode3PageIndex.string = this.cashRecordIndex.toString();
        this.reloadRecords();
    }

    private onEventBindAlipaySuccess() {
        let alipay_account = GlobalModel.getInstance().globalUserData.alipay_account;
        if (alipay_account != '') {
            this.labelNode2Alipay.string = alipay_account;
            this.buttonNode2BindAlipay.node.active = false;
            this.buttonNode2ChangeAlipay.node.active = false;
        }
    }

    private onEventBindBankCardSuccess() {
        let bankcard_id = GlobalModel.getInstance().globalUserData.bankcard_id;
        if (bankcard_id != '') {
            this.labelNode1BankCardNum.string = bankcard_id;
            this.buttonNode1BindBankCard.node.active = false;
            this.buttonNode1ChangeBankCard.node.active = false;
        }
    }

    private response_config_shop_exchange(msg: hall.response_config_shop_exchange) {
        UIManager.getInstance().hideLoadingTip();
        let obj = JSON.parse(msg.content);
        this.cashConfig = obj;
        let activeType = -1;
        for (let item of obj) {
            this.togglePages[item.type].node.active = true;
            this.labelTips[item.type].string = `1.一天只能申请取款${item.max_exchange_count}次，每天最大可取款额度为${item.max_exchange_amount}元；\n2.每次最少取款金额${item.min_amount}元，每次最大可取款额度为${item.max_amount}元；\n3.每次收取单笔${item.tax}%的服务费，每天前${item.free_count}笔取款免收服务费；\n4.每次取款的金额是从钱包存款中扣除；\n5.取款必须完成每次充值的${item.liushui_times}倍流水。`;
            if (activeType == -1) {
                this.togglePages[item.type].isChecked = true;
                this.nodePages[item.type].active = true;
                activeType = item.type;
            }
            if (item.type == 0) {
                this.editboxNode1Amount.placeholder = `请输入兑换金额，最少${item.min_amount}元`;
            } else {
                this.editboxNode2Amount.placeholder = `请输入兑换金额，最少${item.min_amount}元`;
            }
        }

        let bankcard_id = GlobalModel.getInstance().globalUserData.bankcard_id;
        if (bankcard_id != '') {
            this.labelNode1BankCardNum.string = bankcard_id;
            this.buttonNode1BindBankCard.node.active = false;
            this.buttonNode1ChangeBankCard.node.active = false;
        }

        let alipay_account = GlobalModel.getInstance().globalUserData.alipay_account;
        if (alipay_account != '') {
            this.labelNode2Alipay.string = alipay_account;
            this.buttonNode2BindAlipay.node.active = false;
            this.buttonNode2ChangeAlipay.node.active = false;
        }
    }

    private reponse_exchange_result(msg: hall.reponse_exchange_result) {
        UIManager.getInstance().hideLoadingTip();
        if (msg.result_code != 0) {
            UIManager.getInstance().showToast(msg.reason);
            return;
        }

        GlobalModel.getInstance().globalUserData.bank_score = msg.bank_score;

        this.labelUserBankScore.string = Utils.toMoney(GlobalModel.getInstance().globalUserData.bank_score).toString();

        UIManager.getInstance().showToast('提交成功');
    }

    private reponse_exchange_record_result(msg: hall.reponse_exchange_record_result) {
        UIManager.getInstance().hideLoadingTip();
        this.cashRecordIndex = 0;
        this.cashRecords = msg.items;
        if (msg.items.length > 0) {
            this.labelNode3NoRecord.node.active = false;
            this.labelNode3PageIndex.string = '1';
            this.labelNode3PageTotal.string = Math.ceil(msg.items.length / 7).toString();
            this.reloadRecords();
        } else {
            this.labelNode3PageTotal.string = '0';
            this.labelNode3PageIndex.string = '0';
            this.labelNode3NoRecord.node.active = true;
        }
    }
}
