// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class ClubEnterTableParamNN extends cc.Component {

    @property([cc.Node])
    private nodeRule: cc.Node[] = [];
    @property([cc.Node])
    private nodeTip: cc.Node[] = [];
    @property(cc.Node)
    private bgNode: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}

    private onClickTip(event: any, customEventData: string) {
        let idx = parseInt(customEventData);
        this.nodeTip[idx].active = true;
    }

    private onClickMask(event: any, customEventData: string) {
        let idx = parseInt(customEventData);
        this.nodeTip[idx].active = false;
    }

    public setWanfa(wanfa: number, bgVisible: boolean = false) {
        this.bgNode.active = bgVisible;

        for (let i = 0; i < this.nodeRule.length; ++i) {
            this.nodeRule[i].active = false;
        }

        // 可咪牌0x01 下注翻倍0x02 王赖0x04
        if ((wanfa & 0x01) !== 0) {
            this.nodeRule[1].active = true;
        }

        if ((wanfa & 0x02) !== 0) {
            this.nodeRule[2].active = true;
        }

        if ((wanfa & 0x04) !== 0) {
            this.nodeRule[0].active = true;
        }
    }
}
