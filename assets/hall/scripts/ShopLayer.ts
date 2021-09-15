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

const RechargeStatus: string[] = [ '待支付', '已支付' ];

@ccclass
export default class ShopLayer extends cc.Component {

    @property(cc.Node)
    private nodeMain: cc.Node = null;
    @property(cc.Node)
    private nodeChargeRecord: cc.Node = null;
    @property(cc.EditBox)
    private editboxName: cc.EditBox = null;
    @property(cc.Node)
    private nodeNameHide: cc.Node = null;
    @property(cc.EditBox)
    private editboxAmount: cc.EditBox = null;
    @property(cc.Node)
    private nodeDisableInputAmount: cc.Node = null;
    @property([cc.Node])
    private nodeAmountButtons: cc.Node[] = [];
    @property(cc.Node)
    private nodeTips1: cc.Node = null;
    @property(cc.Node)
    private nodeTips2: cc.Node = null;
    @property(cc.ScrollView)
    private scrollviewSubType: cc.ScrollView = null;
    @property(cc.Node)
    private nodeSubTypeContainer: cc.Node = null;
    @property(cc.Node)
    private nodeSubTypeItem: cc.Node = null;
    @property(cc.Node)
    private nodeChargeTypeContainer: cc.Node = null;
    @property(cc.Node)
    private nodeChargeTypeItem: cc.Node = null;
    @property([cc.SpriteFrame])
    private spriteframeIcons: cc.SpriteFrame[] = [];
    @property(cc.Label)
    private labelUserScore: cc.Label = null;
    @property(cc.Label)
    private labelBankScore: cc.Label = null;

    // 充值记录
    @property
    private startDatePickerPos: cc.Vec3 = cc.v3();
    @property
    private endDatePickerPos: cc.Vec3 = cc.v3();
    @property(cc.Prefab)
    private prefabDatePicker: cc.Prefab = null;
    @property(cc.Label)
    private labelChargeRecordStartDate: cc.Label = null;
    @property(cc.Label)
    private labelChargeRecordEndDate: cc.Label = null;
    @property(cc.Layout)
    private layoutChargeRecordRecords: cc.Layout = null;
    @property(cc.Node)
    private nodeChargeRecordRecordItem: cc.Node = null;
    @property(cc.Label)
    private labelChargeRecordPageIndex: cc.Label = null;
    @property(cc.Label)
    private labelChargeRecordPageTotal: cc.Label = null;
    @property(cc.Label)
    private labelChargeRecordNoRecord: cc.Label = null;

    // 充值记录详情
    @property(cc.Node)
    private nodeRecordDetail: cc.Node = null;

    private rechargeConfig: any = null;
    private selectRechargeType: number = -1;
    private selectRechargeSubType: number = 0;
    private rechargeRecords: hall.Irecharge_record_item[] = [];
    private rechargeRecordIndex: number = 0;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.labelUserScore.string = Utils.toMoney(GlobalModel.getInstance().globalUserData.score).toString();
        this.labelBankScore.string = Utils.toMoney(GlobalModel.getInstance().globalUserData.bank_score).toString();

        this.layoutChargeRecordRecords.node.removeAllChildren();
        this.nodeChargeTypeContainer.removeAllChildren();
        this.nodeSubTypeContainer.removeAllChildren();

        let date = new Date();
        this.labelChargeRecordStartDate.string = cc.js.formatStr("%s-%s-%s", date.getFullYear(), date.getMonth() + 1, date.getDate());
        this.labelChargeRecordEndDate.string = cc.js.formatStr("%s-%s-%s", date.getFullYear(), date.getMonth() + 1, date.getDate());

        let eventManager = EventManager.getInstance();
        eventManager.on('hall.response_config_shop_exchange', this.response_config_shop_exchange, this);
        eventManager.on('hall.reponse_recharge_record_result', this.reponse_recharge_record_result, this);
    }

    start () {
        UIManager.getInstance().showLoadingTip('正在处理，请稍候...')
        NetManager.getInstance().sendNetMsgToHall('hall', 'request_config_shop_exchange', { type: 0 });
    }

    onDestroy() {
        let eventManager = EventManager.getInstance();
        eventManager.off('hall.response_config_shop_exchange', this.response_config_shop_exchange, this);
        eventManager.off('hall.reponse_recharge_record_result', this.reponse_recharge_record_result, this);
    }

    // update (dt) {}

    private onClickClose() {
        UIManager.getInstance().removeLayer('hall', 'prefabs/ShopLayer');
    }

    private onClickClearAmount() {
        this.editboxAmount.string = '';
    }

    private onClickAmountSelect(event: any, customEventData: string) {
        this.editboxAmount.string = customEventData;
    }

    private onClickPay() {
        if (this.selectRechargeType == -1) return;

        let channel = this.rechargeConfig[this.selectRechargeType].channels[this.selectRechargeSubType];
        cc.sys.openURL(channel.url);
    }

    private onClickKefu() {

    }

    private onClickGotoYHZZ() {
        this.reloadRechargeType(0);
    }

    private onClickRechargeRecord() {
        this.reloadRechargeType(-1);
        this.nodeMain.active = false;
        this.nodeChargeRecord.active = true;
    }

    private reloadRechargeType(index: number) {
        if (this.selectRechargeType != -1) {
            let title = this.nodeChargeTypeContainer.children[this.selectRechargeType];
            title.getChildByName('Label').active = false;
            title.getChildByName('Label copy').active = true;
            title.getChildByName('bgSelect').active = false;
            title.getComponent(cc.Button).interactable = true;
        } else {
            this.nodeChargeRecord.active = false;
            this.nodeMain.active = true;
            this.scrollviewSubType.node.active = true;
        }
        
        this.selectRechargeType = index;

        if (this.selectRechargeType != -1) {
            let title = this.nodeChargeTypeContainer.children[this.selectRechargeType];
            title.getChildByName('Label').active = true;
            title.getChildByName('Label copy').active = false;
            title.getChildByName('bgSelect').active = true;
            title.getComponent(cc.Button).interactable = false;

            if (this.rechargeConfig[this.selectRechargeType].type == 0) {
                this.nodeTips1.active = true;
                this.nodeTips2.active = false;
            } else {
                this.nodeTips1.active = false;
                this.nodeTips2.active = true;
            }

            this.nodeSubTypeContainer.removeAllChildren();
            let channels = this.rechargeConfig[this.selectRechargeType].channels;
            for (let i = 0; i < channels.length; ++i) {
                let cfg = channels[i];
                let item = cc.instantiate(this.nodeSubTypeItem);
                item.getChildByName('Background').getChildByName('New Label').getComponent(cc.Label).string = cfg.name;
                item.getChildByName('checkmark').getChildByName('New Label').getComponent(cc.Label).string = cfg.name;
                if (cfg.tax > 0) {
                    item.getChildByName('tips_msg').getChildByName('tips_label').getComponent(cc.Label).string = `手续费${cfg.tax}%`;
                } else if (cfg.more > 0) {
                    item.getChildByName('tips_msg').getChildByName('tips_label').getComponent(cc.Label).string = `多送${cfg.more}%`;
                } else {
                    item.getChildByName('tips_msg').active = false;
                }
                item.name = i.toString();
                item.on('click', this.onClickRechargeSubType, this);
                this.nodeSubTypeContainer.addChild(item);

                if (i == 0) {
                    this.reloadRechargeSubType(i, true);
                }
            }
        } else {
            this.nodeChargeRecord.active = true;
            this.nodeMain.active = false;
            this.scrollviewSubType.node.active = false;
            //this.layoutChargeRecordRecords.node.removeAllChildren();
        }
    }

    private reloadRechargeSubType(index: number, first: boolean = false) {
        this.selectRechargeSubType = index;
        if (first) {
            let title = this.nodeSubTypeContainer.children[index];
            title.getComponent(cc.Toggle).isChecked = true;
        }

        this.editboxAmount.string = '';
        //this.editboxName.string = '';

        let channel = this.rechargeConfig[this.selectRechargeType].channels[index];
        if (!channel.need_fukuanren) {
            this.nodeNameHide.active = false;
        } else {
            this.nodeNameHide.active = true;
        }
        this.editboxAmount.placeholder = `最低${channel.min_amount},最高${channel.max_amount}`;
        if (!channel.allow_input) {
            this.nodeDisableInputAmount.active = true;
        } else {
            this.nodeDisableInputAmount.active = false;
        }

        for (let j = 0; j < this.nodeAmountButtons.length; ++j) {
            if (j >= channel.fixed_amounts.length) {
                this.nodeAmountButtons[j].active = false;
            } else {
                this.nodeAmountButtons[j].active = true;
                this.nodeAmountButtons[j].getChildByName('Background').getChildByName('Label').getComponent(cc.Label).string = `${channel.fixed_amounts[j]}元`;
                this.nodeAmountButtons[j].getComponent(cc.Button).clickEvents[0].customEventData = channel.fixed_amounts[j].toString();
            }
        }
    }

    private onClickRechargeType(button: cc.Button) {
        this.reloadRechargeType(parseInt(button.node.name));
    }

    private onClickRechargeSubType(button: cc.Button) {
        this.reloadRechargeSubType(parseInt(button.node.name));
    }

    private onClickChargeRecordStartDate() {
        let datepicker = cc.instantiate(this.prefabDatePicker);
        let script = datepicker.getComponent('UIDatePicker');
        script.setShowPosition(this.startDatePickerPos);
        this.node.addChild(datepicker);
        let d = new Date();
        let self = this;
        script.setPickDateCallback((year: number, month: number, day: number)=>{
            self.labelChargeRecordStartDate.string = cc.js.formatStr("%s-%s-%s", year, month + 1, day);
        });
    }

    private onClickChargeRecordEndDate() {
        let datepicker = cc.instantiate(this.prefabDatePicker);
        let script = datepicker.getComponent('UIDatePicker');
        script.setShowPosition(this.endDatePickerPos);
        this.node.addChild(datepicker);
        let d = new Date();
        let self = this;
        script.setPickDateCallback((year: number, month: number, day: number)=>{
            self.labelChargeRecordEndDate.string = cc.js.formatStr("%s-%s-%s", year, month + 1, day);
        });
    }

    private onClickChargeRecordSearch() {
        let timestamp1 = Date.parse(this.labelChargeRecordStartDate.string);
        let timestamp2 = Date.parse(this.labelChargeRecordEndDate.string);
        let days = Math.abs((timestamp2 - timestamp1) / 1000 / 3600 / 24);
        if (days > 30) {
            UIManager.getInstance().showToast('只支持查找30天内记录');
            return;
        }

        UIManager.getInstance().showLoadingTip('正在处理，请稍候...');
        NetManager.getInstance().sendNetMsgToHall('hall', 'request_recharge_record', {
            userid: GlobalModel.getInstance().globalUserData.userid,
            password: GlobalModel.getInstance().globalUserData.password,
            start_date: this.labelChargeRecordStartDate.string,
            end_date: this.labelChargeRecordEndDate.string
        });
    }

    private reloadRecords() {
        if (this.rechargeRecords.length == 0) return;
        this.layoutChargeRecordRecords.node.removeAllChildren();
        for (let i = this.rechargeRecordIndex * 7, j = 0; i < this.rechargeRecords.length && j < 7; ++i, ++j) {
            let itemData = this.rechargeRecords[i];
            let item = cc.instantiate(this.nodeChargeRecordRecordItem);
            item.getChildByName('node1').getChildByName('New Label').getComponent(cc.Label).string = itemData.insert_date.substring(5);
            item.getChildByName('node2').getChildByName('New Label').getComponent(cc.Label).string = itemData.order_no;
            item.getChildByName('node3').getChildByName('New Label').getComponent(cc.Label).string = itemData.channel;
            item.getChildByName('node5').getChildByName('New Label').getComponent(cc.Label).string = itemData.pay_amount.toString();
            item.getChildByName('node6').getChildByName('New Label').getComponent(cc.Label).string = RechargeStatus[itemData.state];
            let btn = item.getChildByName('node2');
            btn.name = itemData.order_no;
            btn.on('click', this.onClickOrderNoCopy, this);
            btn = item.getChildByName('node4');
            btn.name = i.toString();
            btn.on('click', this.onClickRecordCheck, this);
            this.layoutChargeRecordRecords.node.addChild(item);
        }
    }

    private onClickOrderNoCopy(button: cc.Button) {
        cc.log(button.node.name);
    }

    private onClickRecordCheck(button: cc.Button) {
        let script = this.nodeRecordDetail.getComponent('ShopChargeRecordDetail');
        script.show(this.rechargeRecords[parseInt(button.node.name)]);
    }

    private onClickChargeRecordPagePre() {
        if (this.rechargeRecordIndex == 0) {
            UIManager.getInstance().showToast("已经是第一页");
            return;
        }

        this.labelChargeRecordPageIndex.string = this.rechargeRecordIndex.toString();
        this.rechargeRecordIndex--;
        this.reloadRecords();
    }

    private onClickChargeRecordPageNext() {
        if (this.rechargeRecords.length == 0 || this.rechargeRecordIndex == Math.floor(this.rechargeRecords.length / 7)) {
            UIManager.getInstance().showToast("已经是最后一页");
            return;
        }
        
        this.rechargeRecordIndex++;
        this.labelChargeRecordPageIndex.string = this.rechargeRecordIndex.toString();
        this.reloadRecords();
    }

    private response_config_shop_exchange(msg: hall.response_config_shop_exchange) {
        UIManager.getInstance().hideLoadingTip();
        let obj = JSON.parse(msg.content);
        this.rechargeConfig = obj;
        let activeType = -1;
        for (let i = 0; i < obj.length; ++i) {
            let item = obj[i];
            let title = cc.instantiate(this.nodeChargeTypeItem);
            title.getChildByName('Label').getComponent(cc.Label).string = item.name;
            title.getChildByName('Label copy').getComponent(cc.Label).string = item.name;
            if (!item.open) {
                title.getChildByName('other').getChildByName('New Label').getComponent(cc.Label).string = item.open_desc;
                title.getComponent(cc.Button).interactable = false;
            }
            title.getChildByName('icon').getComponent(cc.Sprite).spriteFrame = this.spriteframeIcons[item.type];
            this.nodeChargeTypeContainer.addChild(title);
            title.name = i.toString();
            title.on('click', this.onClickRechargeType, this);

            if (i == 0) {
                this.reloadRechargeType(i);
            }
        }
    }

    private reponse_recharge_record_result(msg: hall.reponse_recharge_record_result) {
        UIManager.getInstance().hideLoadingTip();
        this.rechargeRecordIndex = 0;
        this.rechargeRecords = msg.items;
        if (msg.items.length > 0) {
            this.labelChargeRecordNoRecord.node.active = false;
            this.labelChargeRecordPageIndex.string = '1';
            this.labelChargeRecordPageTotal.string = Math.ceil(msg.items.length / 7).toString();
            this.reloadRecords();
        } else {
            this.labelChargeRecordPageTotal.string = '0';
            this.labelChargeRecordPageIndex.string = '0';
            this.labelChargeRecordNoRecord.node.active = true;
        }
    }
}
