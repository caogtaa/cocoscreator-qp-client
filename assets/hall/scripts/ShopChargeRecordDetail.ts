// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { netmsg, hall } from "../../scripts/proto"

const RechargeStatus: string[] = [ '待支付', '已支付' ];

const {ccclass, property} = cc._decorator;

@ccclass
export default class ShopChargeRecordDetail extends cc.Component {

    @property(cc.Label)
    private labelOrderNo: cc.Label = null;
    @property(cc.Button)
    private buttonOrderNoCopy: cc.Button = null;
    @property(cc.Label)
    private labelDate: cc.Label = null;
    @property(cc.Button)
    private buttonDateCopy: cc.Button = null;
    @property(cc.Label)
    private labelChannel: cc.Label = null;
    @property(cc.Button)
    private buttonChannelCopy: cc.Button = null;
    @property(cc.Label)
    private labelPayAmount: cc.Label = null;
    @property(cc.Button)
    private buttonPayAmountCopy: cc.Button = null;
    @property(cc.Label)
    private labelRealAmount: cc.Label = null;
    @property(cc.Button)
    private buttonRealAmountCopy: cc.Button = null;
    @property(cc.Label)
    private labelStatus: cc.Label = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}

    public show(msg: hall.Irecharge_record_item) {
        this.labelOrderNo.string = msg.order_no;
        this.buttonOrderNoCopy.clickEvents[0].customEventData = msg.order_no;
        this.labelDate.string = msg.insert_date;
        this.buttonDateCopy.clickEvents[0].customEventData = msg.insert_date;
        this.labelChannel.string = msg.channel;
        this.buttonChannelCopy.clickEvents[0].customEventData = msg.channel;
        this.labelPayAmount.string = msg.pay_amount.toString();
        this.buttonPayAmountCopy.clickEvents[0].customEventData = msg.pay_amount.toString();
        this.labelRealAmount.string = msg.real_amount.toString();
        this.buttonRealAmountCopy.clickEvents[0].customEventData = msg.real_amount.toString();
        this.labelStatus.string = RechargeStatus[msg.state];

        this.node.active = true;
    }

    private onClickClose() {
        this.node.active = false;
    }

    private onClickCopy(event: any, customEventData: string) {
        cc.log(customEventData);
    }

    private onClickKefu() {
    }
}
