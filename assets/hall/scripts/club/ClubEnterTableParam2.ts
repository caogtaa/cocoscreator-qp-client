// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class ClubEnterTableParam2 extends cc.Component {

    @property(cc.Label)
    private labelTitle1: cc.Label = null;
    @property(cc.Label)
    private labelValue1: cc.Label = null;
    @property(cc.Node)
    private bgNode: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}

    setTitleValue(title1: string, value1: string, bgVisible: boolean = false) {
        this.labelTitle1.string = title1;
        this.labelValue1.string = value1;
        this.bgNode.active = bgVisible;
    }
}
