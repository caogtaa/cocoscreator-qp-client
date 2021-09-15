// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class ClubEnterTableParam extends cc.Component {

    @property(cc.Label)
    private labelTitle1: cc.Label = null;
    @property(cc.Label)
    private labelValue1: cc.Label = null;
    @property(cc.Label)
    private labelTitle2: cc.Label = null;
    @property(cc.Label)
    private labelValue2: cc.Label = null;
    @property(cc.Node)
    private bgNode: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}

    setTitleValue(title1: string, value1: string, title2: string, value2: string, bgVisible: boolean = false) {
        this.labelTitle1.string = title1;
        this.labelValue1.string = value1;
        this.labelTitle2.string = title2;
        this.labelValue2.string = value2;
        this.bgNode.active = bgVisible;
    }
}
