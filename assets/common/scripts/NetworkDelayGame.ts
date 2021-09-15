// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import EventManager from "../../scripts/EventManager"
import { GateEvent } from "../../scripts/Constants"
import { networkInterfaces } from "os";

const {ccclass, property} = cc._decorator;

// 50ms下 5格 50-100ms 4格 100-150 3格 150-200 2格 200-300 1格 >300 0格
const NetworkDelaySignal: number[] = [ 50, 100, 150, 200, 300 ];

@ccclass
export default class NetworkDelayGame extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.Sprite)
    sprite: cc.Sprite = null;

    @property([cc.SpriteFrame])
    spriteFrames: cc.SpriteFrame[] = [];

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        EventManager.getInstance().on(GateEvent.DELAY, this.onEventNetworkDelay, this);
    }

    start () {

    }

    onDestroy() {
        EventManager.getInstance().off(GateEvent.DELAY, this.onEventNetworkDelay, this);
    }

    // update (dt) {}

    private onEventNetworkDelay(delay: number) {
        this.label.string = `${delay}ms`;

        for (let i = 0; i < NetworkDelaySignal.length; ++i) {
            if (delay <= NetworkDelaySignal[i]) {
                this.sprite.spriteFrame = this.spriteFrames[i];
                return;
            }
        }

        this.sprite.spriteFrame = this.spriteFrames[5];
    }
}
