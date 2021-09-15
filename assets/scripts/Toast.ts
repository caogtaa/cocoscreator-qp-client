// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Toast extends cc.Component {

    @property(cc.Label)
    private labelTip: cc.Label = null;

    private elapsedTime: number = -1;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    update (dt) {
        if (this.elapsedTime > 0) {
            this.elapsedTime -= dt;
            if (this.elapsedTime < 0) {
                this.node.active = false;
            }
        }
    }

    show (text: string) {
        this.elapsedTime = 3;
        this.labelTip.string = text;
        this.node.active = true;
    }
}
