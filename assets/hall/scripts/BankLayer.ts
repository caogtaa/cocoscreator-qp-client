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

const enum BankPage {
    SAVE = 0,
    GET = 1,
    RECORD = 2,
}

// 快捷金额
const BankAmount: number[] = [ 5000, 10000, 20000, 50000, 100000, 200000, 500000, 1000000 ];

@ccclass
export default class BankLayer extends cc.Component {

    @property([cc.Node])
    private nodePages: cc.Node[] = [];

    @property(cc.Button)
    private buttonScore: cc.Button = null;
    @property(cc.Button)
    private buttonBankScore: cc.Button = null;
    @property(cc.Label)
    private labelScore: cc.Label = null;
    @property(cc.Label)
    private labelBankScore: cc.Label = null;

    @property([cc.Toggle])
    private togglePages: cc.Toggle[] = [];

    @property(cc.EditBox)
    private editboxSave: cc.EditBox = null;
    @property(cc.EditBox)
    private editboxGet: cc.EditBox = null;

    @property(cc.Node)
    private nodeNoTip: cc.Node = null;
    @property([cc.Button])
    private buttonRecordPages: cc.Button[] = [];
    @property(cc.Node)
    private nodeRecordItem: cc.Node = null;
    @property(cc.Node)
    private nodeScrollViewContent: cc.Node = null;

    private isGameBank: boolean = false;
    private isRecordLoaded: boolean[] = [ false, false, false ];
    private recordItems: Array<hall.reponse_log_change_score> = new Array();
    private selectRecordDay: number = 0;

    public onInit(gameBank: boolean) {
        this.isGameBank = gameBank;
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        if (this.isGameBank) {
            for (let i = 0; i < this.nodePages.length; ++i) {
                if (i != 1) {
                    this.nodePages[i].active = false;
                    this.togglePages[i].isChecked = false;
                    this.togglePages[i].node.active = false;
                } else {
                    this.nodePages[i].active = true;
                    this.togglePages[i].isChecked = true;
                }
            }
        }

        this.labelScore.string = Utils.toMoney(GlobalModel.getInstance().globalUserData.score).toString();
        this.labelBankScore.string = Utils.toMoney(GlobalModel.getInstance().globalUserData.bank_score).toString();

        this.nodeScrollViewContent.removeAllChildren();

        let eventManager = EventManager.getInstance();
        eventManager.on('hall.reponse_bank_result', this.reponse_bank_result, this);
        eventManager.on('hall.reponse_log_change_score', this.reponse_log_change_score, this);
    }

    start () {

    }

    // update (dt) {}

    onDestroy() {
        let eventManager = EventManager.getInstance();
        eventManager.off('hall.reponse_bank_result', this.reponse_bank_result, this);
        eventManager.off('hall.reponse_log_change_score', this.reponse_log_change_score, this);
    }

    private onClickClose() {
        UIManager.getInstance().removeLayer('hall', 'prefabs/BankLayer');
    }

    private onClickScore() {
        // TODO 跳转到充值
    }

    private onClickBankScore() {
        // TODO 跳转到兑现
    }

    private onClickToggles(toggle: cc.Toggle) {
        let index = this.togglePages.indexOf(toggle);
        for (let i = 0; i < this.nodePages.length; ++i) {
            if (i == index) {
                this.nodePages[i].active = true;
            } else {
                this.nodePages[i].active = false;
            }

            if (i == 2 && !this.isRecordLoaded[this.selectRecordDay]) {
                this.sendBankLogRecord(this.selectRecordDay);
            }
        }
    }

    private onSaveEditBoxDidEndEditing(text: string, sender: cc.EditBox) {
        if (text == '') return;
        
        let score = parseInt(text);
        if (score > GlobalModel.getInstance().globalUserData.score) {
            sender.string = Utils.toMoney(GlobalModel.getInstance().globalUserData.score, 0).toString();
        }
    }

    private onClickSaveClose() {
        this.editboxSave.string = '';
    }

    private onClickSaveAmount(event: any, customData: string) {
        let index = parseInt(customData);
        let score = BankAmount[index];
        if (score > GlobalModel.getInstance().globalUserData.score) {
            this.editboxSave.string = Utils.toMoney(GlobalModel.getInstance().globalUserData.score, 0).toString();
        } else {
            this.editboxSave.string = Utils.toMoney(score, 0).toString();
        }
    }

    private sendBankSaveScore(save_score: number) {
        if (!this.isGameBank) {
            NetManager.getInstance().sendNetMsgToHall('hall', 'request_bank_save_score',
            {
                userid: GlobalModel.getInstance().globalUserData.userid,
                password: GlobalModel.getInstance().globalUserData.password,
                save_score: save_score
            });
        }
    }

    private sendBankGetScore(get_score: number) {
        if (!this.isGameBank) {
            NetManager.getInstance().sendNetMsgToHall('hall', 'request_bank_get_score',
            {
                userid: GlobalModel.getInstance().globalUserData.userid,
                password: GlobalModel.getInstance().globalUserData.password,
                get_score: get_score
            });
        } else {
            // TODO 游戏银行
        }
    }

    private sendBankLogRecord(day: number) {
        if (this.isRecordLoaded[day]) {
            this.reloadRecord(day);
            return;
        }
        
        if (!this.isGameBank) {
            UIManager.getInstance().showLoadingTip('正在处理，请稍候...');
            NetManager.getInstance().sendNetMsgToHall('hall', 'request_log_change_score',
            {
                userid: GlobalModel.getInstance().globalUserData.userid,
                password: GlobalModel.getInstance().globalUserData.password,
                day: day
            });
        }
    }

    private onClickSave() {
        let score = Utils.toScore(parseInt(this.editboxSave.string));
        if (score > GlobalModel.getInstance().globalUserData.score) {
            this.editboxSave.string = '';
            UIManager.getInstance().showToast('请输入正确的金额');
            return;
        }

        UIManager.getInstance().showLoadingTip('正在处理，请稍候...');
        this.sendBankSaveScore(score);
    }

    private onGetEditBoxDidEndEditing(text: string, sender: cc.EditBox) {
        if (text == '') return;
        
        let score = parseInt(text);
        if (score > GlobalModel.getInstance().globalUserData.bank_score) {
            sender.string = Utils.toMoney(GlobalModel.getInstance().globalUserData.bank_score, 0).toString();
        }
    }

    private onClickGetClose() {
        this.editboxGet.string = '';
    }

    private onClickGetAmount(event: any, customData: string) {
        let index = parseInt(customData);
        let score = BankAmount[index];
        if (score > GlobalModel.getInstance().globalUserData.bank_score) {
            this.editboxGet.string = Utils.toMoney(GlobalModel.getInstance().globalUserData.bank_score, 0).toString();
        } else {
            this.editboxGet.string = Utils.toMoney(score, 0).toString();
        }
    }

    private onClickGet() {
        let score = Utils.toScore(parseInt(this.editboxGet.string));
        if (score > GlobalModel.getInstance().globalUserData.bank_score) {
            this.editboxGet.string = '';
            UIManager.getInstance().showToast('请输入正确的金额');
            return;
        }

        UIManager.getInstance().showLoadingTip('正在处理，请稍候...');
        this.sendBankGetScore(score);
    }

    private reponse_bank_result(msg: hall.reponse_bank_result) {
        UIManager.getInstance().hideLoadingTip();
        if (msg.result_code != 0) {
            UIManager.getInstance().showToast(msg.reason);
            return;
        }

        GlobalModel.getInstance().globalUserData.score = msg.user_score;
        GlobalModel.getInstance().globalUserData.bank_score = msg.bank_score;

        this.labelScore.string = Utils.toMoney(GlobalModel.getInstance().globalUserData.score).toString();
        this.labelBankScore.string = Utils.toMoney(GlobalModel.getInstance().globalUserData.bank_score).toString();

        EventManager.getInstance().emit(GlobalEvent.UPDATE_SCORE);
    }

    private onClickRecordPage(event: any, customData: string) {
        this.buttonRecordPages[this.selectRecordDay].interactable = true;
        this.selectRecordDay = parseInt(customData);
        this.buttonRecordPages[this.selectRecordDay].interactable = false;
        this.sendBankLogRecord(this.selectRecordDay);
    }

    private onClickRecordCheck(button: cc.Button) {
        cc.log(button.node.name);
    }

    private reloadRecord(day: number) {
        this.nodeScrollViewContent.removeAllChildren();
        let msg = this.recordItems[day];
        this.nodeNoTip.active = msg.items.length == 0 ? true : false;
        for (let logitem of msg.items) {
            let item = cc.instantiate(this.nodeRecordItem);
            item.getChildByName('Label_GoldBefore').getComponent(cc.Label).string = Utils.toMoney(logitem.source_score).toString();
            item.getChildByName('Label_GoldAfter').getComponent(cc.Label).string = Utils.toMoney(logitem.source_score + logitem.change_score).toString();
            item.getChildByName('Label_Id').getComponent(cc.Label).string = logitem.id.toString();
            item.getChildByName('Label_Type').getComponent(cc.Label).string = logitem.change_reason;
            item.getChildByName('Label_GoldChange').getComponent(cc.Label).string = Utils.toMoney(logitem.change_score).toString();
            item.getChildByName('Label_Time').getComponent(cc.Label).string = logitem.change_date.split(' ')[1];
            let btn = item.getChildByName('btnCheck');
            if (logitem.change_type == 2) {
                btn.name = logitem.change_origin;
                btn.on('click', this.onClickRecordCheck, this);
            } else {
                btn.active = false;
            }
            this.nodeScrollViewContent.addChild(item);
        }
    }

    private reponse_log_change_score(msg: hall.reponse_log_change_score) {
        UIManager.getInstance().hideLoadingTip();
        this.isRecordLoaded[this.selectRecordDay] = true;
        this.recordItems[this.selectRecordDay] = msg;
        this.reloadRecord(this.selectRecordDay);
    }
}
