// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { netmsg, hall } from "../../scripts/proto"

const {ccclass, property} = cc._decorator;

@ccclass
export default class CashRecordDetail extends cc.Component {

    @property(cc.Label)
    private labelOrderNo: cc.Label = null;
    @property(cc.Label)
    private labelDate: cc.Label = null;
    @property(cc.Label)
    private labelAccount: cc.Label = null;
    @property(cc.Label)
    private labelAmount: cc.Label = null;
    @property(cc.Label)
    private labelRevenue: cc.Label = null;
    @property(cc.Label)
    private labelRealAmount: cc.Label = null;
    @property(cc.Sprite)
    private spriteStatus: cc.Sprite = null;
    @property(cc.Label)
    private labelReason: cc.Label = null;
    @property([cc.SpriteFrame])
    private spriteframeStatus: cc.SpriteFrame[] = [];

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}

    public show(msg: hall.Iexchange_record_item) {
        this.labelOrderNo.string = msg.id.toString();
        this.labelDate.string = msg.insert_date;
        this.labelAccount.string = msg.account;
        this.labelAmount.string = (msg.score + msg.revenue).toString();
        this.labelRevenue.string = msg.revenue.toString();
        this.labelRealAmount.string = msg.score.toString();
        this.spriteStatus.spriteFrame = this.spriteframeStatus[msg.state];
        this.labelReason.string = msg.reason;

        this.node.active = true;
    }

    private onClickClose() {
        this.node.active = false;
    }

    private onClickCopyOrder() {

    }

    private onClickKefu() {

    }
}
