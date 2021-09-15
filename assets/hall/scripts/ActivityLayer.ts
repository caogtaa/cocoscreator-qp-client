// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import UIManager from "../../scripts/UIManager"

const {ccclass, property} = cc._decorator;

@ccclass
export default class ActivityLayer extends cc.Component {

    @property([cc.Node])
    private nodePages: cc.Node[] = [];
    @property([cc.Toggle])
    private togglePages: cc.Toggle[] = [];

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}

    private onClickClose() {
        UIManager.getInstance().removeLayer('hall', 'prefabs/ActivityLayer');
    }

    private onClickUpgrade() {
        
    }

    private onClickKefu() {
        
    }

    private onClickToggles(toggle: cc.Toggle) {
        let index = this.togglePages.indexOf(toggle);
        for (let i = 0; i < this.nodePages.length; ++i) {
            if (i == index) {
                this.nodePages[i].active = true;
            } else {
                this.nodePages[i].active = false;
            }
        }
    }
}
