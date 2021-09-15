// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import UIManager from "../../../scripts/UIManager"

const {ccclass, property} = cc._decorator;

@ccclass
export default class ClubHeadItem extends cc.Component {

    @property(cc.Node)
    private headIcon: cc.Node = null;
    @property(cc.Node)
    private bankerIcon: cc.Node = null;
    @property(cc.Node)
    private headNoneIcon: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}

    // 设置头像
    setHeadImgUrl(url: string) {
        UIManager.getInstance().loadingImage(this.headIcon, url);
    }

    // 设置庄家标志
    setBankerFlag(banker: boolean) {
        this.bankerIcon.active = banker;
    }
}
