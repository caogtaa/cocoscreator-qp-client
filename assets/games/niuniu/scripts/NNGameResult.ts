// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import Utils from "../../../scripts/Utils"

const {ccclass, property} = cc._decorator;

@ccclass
export default class NNGameResult extends cc.Component {

    @property([cc.Node])
    private nodeEffect: cc.Node[] = [];

    private posEffectSource: cc.Vec3[] = [];

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        for (let i = 0; i < this.nodeEffect.length; ++i) {
            this.posEffectSource[i] = this.nodeEffect[i].position;
            this.nodeEffect[i].active = false;
        }
    }

    start () {

    }

    // update (dt) {}

    reset() {
        this.node.active = false;
        for (let i = 0; i < this.nodeEffect.length; ++i) {
            this.nodeEffect[i].active = false;
        }
    }

    setGameResult(posArray: number[], scoreArray: number[]) {
        this.node.active = true;
        for (let i = 0; i < posArray.length; ++i) {
            let pos = posArray[i];
            let score = scoreArray[i];
            this.nodeEffect[pos].active = true;
            let labelW = this.nodeEffect[pos].getChildByName('BitmapLabel_w').getComponent(cc.Label);
            let labelL = this.nodeEffect[pos].getChildByName('BitmapLabel_l').getComponent(cc.Label);
            if (score >= 0) {
                labelL.node.active = false;
                labelW.node.active = true;
                labelW.string = '+' + Utils.toMoney(score);
            } else {
                labelL.node.active = true;
                labelW.node.active = false;
                labelL.string = Utils.toMoney(score).toString();
            }
            this.nodeEffect[pos].position = this.posEffectSource[pos];
            this.nodeEffect[pos].opacity = 128;
            cc.tween(this.nodeEffect[pos]).by(0.5, { position: cc.v3(0, 95), opacity: 127 }).start();
        }
    }
}
