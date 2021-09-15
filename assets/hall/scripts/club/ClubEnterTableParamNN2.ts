// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class ClubEnterTableParamNN2 extends cc.Component {

    @property([cc.Label])
    private labelValue: cc.Label[] = [];
    @property(cc.Node)
    private bgNode: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}

    public setWanfa(wanfa: number, bgVisible: boolean = false) {
        this.bgNode.active = bgVisible;

        for (let i = 0; i < this.labelValue.length; ++i) {
            this.labelValue[i].node.active = false;
        }

        // 特殊牌型 顺子牛0x01 银牛0x02 同花牛0x04 金牛0x08 葫芦牛0x10 五小牛0x20 炸弹牛0x40 一条龙0x80 同花顺0x100
        let valueArray = [0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x100];
        for (let i = 0; i < valueArray.length; ++i) {
            if ((wanfa & valueArray[i]) !== 0) {
                this.labelValue[i].node.active = true;
            }
        }
    }
}
