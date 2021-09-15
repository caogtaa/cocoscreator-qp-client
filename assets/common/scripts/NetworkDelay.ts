// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import EventManager from "../../scripts/EventManager"
import { GateEvent } from "../../scripts/Constants"

const {ccclass, property} = cc._decorator;

@ccclass
export default class NetworkDelay extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

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

    private onEventNetworkDelay(delay) {
        this.label.string = `${delay}ms`;
    }
}
