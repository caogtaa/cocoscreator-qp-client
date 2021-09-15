// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import UIManager from "../../../scripts/UIManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ClubRecordLayer extends cc.Component {

    @property(cc.Node)
    private nodeMine: cc.Node = null;
    @property(cc.Node)
    private nodeMember: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
    }

    start () {

    }

    // update (dt) {}

    private onClickClose() {
        UIManager.getInstance().removeLayer('hall', 'prefabs/club/ClubRecordLayer');
    }

    private onClickToggle1() {
        this.nodeMember.active = false;
        this.nodeMine.active = true;
    }

    private onClickToggle2() {
        this.nodeMine.active = false;
        this.nodeMember.active = true;
    }
}
