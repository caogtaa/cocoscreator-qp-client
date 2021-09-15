// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import UIManager from "../../../scripts/UIManager"
import * as proto from "./proto_lhd"
import Utils from "../../../scripts/Utils"

const {ccclass, property} = cc._decorator;

@ccclass
export default class LHDPlayerList extends cc.Component {

    @property(cc.Node)
    private nodeScrollViewContent: cc.Node = null;
    @property(cc.Node)
    private nodeContentItem: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
    }

    start () {

    }

    // update (dt) {}

    private onClickClose() {
        this.node.active = false;
    }

    public reset() {
        this.nodeScrollViewContent.removeAllChildren();
    }

    public addUser(index: number, head_img_url: string, nickname: string, score: number, bet_score: number, win_count: number) {
        let item = cc.instantiate(this.nodeContentItem);
        item.active = true;

        let labelRank = item.getChildByName('labelRank').getComponent(cc.Label);
        labelRank.string = 'NO.' + index.toString();
        let head = item.getChildByName('headIcon');
        UIManager.getInstance().loadingImage(head, head_img_url);

        let labelName = item.getChildByName('labelName').getComponent(cc.Label);
        labelName.string = nickname;
        let labelGold = item.getChildByName('labelGold').getComponent(cc.Label);
        labelGold.string = Utils.toMoney(score).toString();
        let labelBet = item.getChildByName('labelBet').getComponent(cc.Label);
        labelBet.string = Utils.toMoney(bet_score).toString();
        let labelWin = item.getChildByName('labelWin').getComponent(cc.Label);
        labelWin.string = win_count.toString();

        this.nodeScrollViewContent.addChild(item);
    }
}
