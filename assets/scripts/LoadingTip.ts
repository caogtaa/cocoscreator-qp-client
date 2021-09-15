// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

// 加载提示文字
@ccclass
export default class LoadingTip extends cc.Component {

    @property(cc.Label)
    private labelTip: cc.Label = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}

    show (text: string) {
        this.labelTip.string = text;
        this.node.active = true;
    }

    hide () {
        this.node.active = false;
    }
}
