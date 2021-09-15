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

const TransferState: string[] = [ '待确认', '已完成', '已撤消' ];

@ccclass
export default class TeamTransferLogLayer extends cc.Component {

    @property(cc.EditBox)
    private editbox: cc.EditBox = null;
    @property(cc.Node)
    private nodeScrollViewContent: cc.Node = null;
    @property(cc.Node)
    private nodeScrollViewContentItem: cc.Node = null;
    @property(cc.Label)
    private labelNone: cc.Label = null;
    @property(cc.Node)
    private nodeTip: cc.Node = null;

    // nodeTip相关
    @property(cc.Label)
    private labelTipGold: cc.Label = null;
    @property(cc.Label)
    private labelTipTime: cc.Label = null;
    @property(cc.Button)
    private buttonTipConfirm: cc.Button = null;

    private transferLogItems: hall.Iteam_log_transfer_item[] = [];

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.nodeScrollViewContent.removeAllChildren();

        EventManager.getInstance().on('hall.response_team_log_transfer', this.response_team_log_transfer, this);
        EventManager.getInstance().on('hall.response_team_transfer_cancel', this.response_team_transfer_cancel, this);
    }

    start () {
        UIManager.getInstance().showLoadingTip('正在加载，请稍候...');
        NetManager.getInstance().sendNetMsgToHall('hall', 'request_team_log_transfer', {
            userid: GlobalModel.getInstance().globalUserData.userid,
            password: GlobalModel.getInstance().globalUserData.password,
            clubid: GlobalModel.getInstance().globalUserData.selected_clubid
        });
    }

    onDestroy() {
        EventManager.getInstance().off('hall.response_team_log_transfer', this.response_team_log_transfer, this);
        EventManager.getInstance().off('hall.response_team_transfer_cancel', this.response_team_transfer_cancel, this);
    }

    // update (dt) {}

    private onClickClose() {
        UIManager.getInstance().removeLayer('hall', 'prefabs/TeamTransferLogLayer');
    }

    private onClickSearch() {
        if (this.editbox.string.length != 8) {
            UIManager.getInstance().showToast('请输入8位会员ID');
            return;
        }

        let gameid = parseInt(this.editbox.string);

        this.nodeScrollViewContent.removeAllChildren();
        for (let itemData of this.transferLogItems) {
            if (itemData.gameid == gameid) {
                this.loadOneItem(itemData);
                this.labelNone.node.active = false;
            }
        }
    }

    private onEditBoxTextChanged(text: string, sender: cc.EditBox) {
        if (text == '') {
            this.reloadItems();
        }
    }

    private onClickTipCancel() {
        this.nodeTip.active = false;
    }

    private onClickTipConfirm(event: any, customEventData: string) {
        let index = parseInt(customEventData);
        let itemData = this.transferLogItems[index];
        if (itemData.state == 0) {
            UIManager.getInstance().showLoadingTip('正在处理，请稍候...');
            NetManager.getInstance().sendNetMsgToHall('hall', 'request_team_transfer_cancel', {
                userid: GlobalModel.getInstance().globalUserData.userid,
                password: GlobalModel.getInstance().globalUserData.password,
                clubid: GlobalModel.getInstance().globalUserData.selected_clubid,
                id: itemData.id
            });
        }
        this.nodeTip.active = false;
    }

    private onClickItemCancel(event: any, customEventData: string) {
        let index = parseInt(customEventData);
        let itemData = this.transferLogItems[index];
        if (itemData.state != 0) {
            return;
        }

        this.nodeTip.active = true;
        this.buttonTipConfirm.clickEvents[0].customEventData = customEventData;
        this.labelTipGold.string = '转账金额：' + Utils.toMoney(itemData.transfer_score);
    }

    private response_team_log_transfer(msg: hall.response_team_log_transfer) {
        UIManager.getInstance().hideLoadingTip();

        this.transferLogItems = msg.items;
        this.reloadItems();
    }

    private response_team_transfer_cancel(msg: hall.response_team_transfer_cancel) {
        UIManager.getInstance().hideLoadingTip();

        UIManager.getInstance().showToast(msg.reason);
        if (msg.result_code == 0) {
            let item = this.nodeScrollViewContent.getChildByName(msg.id.toString());
            item.getChildByName('labelState').getComponent(cc.Label).string = TransferState[2];
            let stateLayout = item.getChildByName('stateLayout');
            stateLayout.active = false;
            let labelSec = stateLayout.getChildByName('labelState').getComponent(cc.Label);
            labelSec.unscheduleAllCallbacks();
        }
    }

    private loadOneItem(itemData: hall.Iteam_log_transfer_item) {
        let item = cc.instantiate(this.nodeScrollViewContentItem);
        item.name = itemData.id.toString();
        item.getChildByName('labelTime').getComponent(cc.Label).string = itemData.insert_date;
        item.getChildByName('labelName').getComponent(cc.Label).string = itemData.nickname;
        item.getChildByName('labelId').getComponent(cc.Label).string = itemData.gameid.toString();
        item.getChildByName('labelGold').getComponent(cc.Label).string = Utils.toMoney(itemData.transfer_score).toString();
        if (itemData.state == 0 && itemData.expired_seconds) {
            item.getChildByName('labelState').getComponent(cc.Label).string = '';
            let stateLayout = item.getChildByName('stateLayout');
            stateLayout.active = true;
            let labelSec = stateLayout.getChildByName('labelState').getComponent(cc.Label);
            labelSec.string = itemData.expired_seconds + 'S';
            this.labelTipTime.string = '撤回倒计时：' + itemData.expired_seconds + 'S';
            labelSec.schedule(() => {
                itemData.expired_seconds--;
                labelSec.string = itemData.expired_seconds + 'S';
                this.labelTipTime.string = '撤回倒计时：' + itemData.expired_seconds + 'S';
                if (itemData.expired_seconds <= 0) {
                    itemData.expired_seconds = null;
                    itemData.state = 1;
                    stateLayout.active = false;
                    this.nodeTip.active = false;
                    item.getChildByName('labelState').getComponent(cc.Label).string = TransferState[itemData.state];
                }
            }, 1, itemData.expired_seconds - 1);
            let btn = stateLayout.getChildByName('btnCancel').getComponent(cc.Button);
            btn.clickEvents[0].customEventData = this.transferLogItems.indexOf(itemData).toString();
        } else {
            item.getChildByName('labelState').getComponent(cc.Label).string = TransferState[itemData.state];
        }
        this.nodeScrollViewContent.addChild(item);
    }

    private reloadItems() {
        this.nodeScrollViewContent.removeAllChildren();

        for (let itemData of this.transferLogItems) {
            this.loadOneItem(itemData);
        }

        if (this.transferLogItems.length > 0) {
            this.labelNone.node.active = false;
        } else {
            this.labelNone.node.active = true;
        }
    }
}
