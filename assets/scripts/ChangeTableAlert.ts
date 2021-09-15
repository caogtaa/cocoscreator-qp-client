// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

// 换桌提示框
@ccclass
export default class ChangeTableAlert extends cc.Component {
    private closeCallback: Function = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}

    show(closeCallback?: Function) {
        this.closeCallback = closeCallback;
        this.node.active = true;
    }

    hide() {
        this.closeCallback = null;
        this.node.active = false;
    }

    onClickedClose() {
        if (this.closeCallback) {
            this.closeCallback();
        }
        this.node.active = false;
    }
}
