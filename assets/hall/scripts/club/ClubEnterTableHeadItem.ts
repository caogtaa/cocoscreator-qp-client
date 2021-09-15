// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import UIManager from "../../../scripts/UIManager"

const {ccclass, property} = cc._decorator;

@ccclass
export default class ClubEnterTableHeadItem extends cc.Component {

    @property(cc.Node)
    private spriteHead: cc.Node = null;
    @property(cc.Label)
    private labelName: cc.Label = null;
    @property(cc.Node)
    private spriteBanker: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}

    public setUserInfo(headImgUrl: string, name: string, banker: boolean = false) {
        UIManager.getInstance().loadingImage(this.spriteHead, headImgUrl);
        this.labelName.string = name;
        this.spriteBanker.active = banker;
    }
}
