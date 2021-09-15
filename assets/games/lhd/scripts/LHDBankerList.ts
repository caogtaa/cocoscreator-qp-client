// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

import * as proto from "./proto_lhd"
import EventManager from "../../../scripts/EventManager"
import GameModel from "../../../scripts/model/GameModel"
import UIManager from "../../../scripts/UIManager"
import Utils from "../../../scripts/Utils"

const PACKAGE_NAME = 'lhd';

@ccclass
export default class LHDBankerList extends cc.Component {

    @property(cc.Label)
    private labelTip: cc.Label = null;

    @property(cc.Node)
    private listitem: cc.Node = null;

    @property(cc.Node)
    private nodeScrollViewContent: cc.Node = null;

    private upbankerUserList: {chairid: number, reserve_score: number, user: any}[] = [];

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
    }

    onEnable() {
        this.reloadBankerList();
    }

    // update (dt) {}

    public setBankerList(bankerList: {chairid: number, reserve_score: number, user: any}[]) {
        this.upbankerUserList = bankerList;

        if (this.node.active) {
            this.reloadBankerList();
        }
    }

    // 发送网络消息
    private sendNetMsgToGame(msgTypeName: string, data: Object) {
        let msgType = proto[PACKAGE_NAME][msgTypeName];
		let msg = msgType.create(data);
        let bytes = msgType.encode(msg).finish();

        GameModel.getInstance().sendGameMsgToGame(PACKAGE_NAME, msgTypeName, bytes);
    }

    private reloadBankerList() {
        this.nodeScrollViewContent.removeAllChildren();

        for (let i = 0; i < this.upbankerUserList.length; ++i) {
            let banker = this.upbankerUserList[i];

            let item = cc.instantiate(this.listitem);
            item.active = true;

            let labelRank = item.getChildByName('iconRank').getChildByName('labelRank').getComponent(cc.Label);
            labelRank.string = (i + 1).toString();
            let head = item.getChildByName('headIcon');
            UIManager.getInstance().loadingImage(head, banker.user.head_img_url);

            let labelName = item.getChildByName('labelName').getComponent(cc.Label);
            labelName.string = banker.user.nickname;
            let labelGold = item.getChildByName('labelGold').getComponent(cc.Label);
            labelGold.string = Utils.toMoney(banker.reserve_score).toString();

            this.nodeScrollViewContent.addChild(item);
        }
    }

    private onClickClose() {
        this.node.active = false;
    }

    private onClickApplyBanker() {
        // 金币判断
        if (GameModel.getInstance().getMeUserInfo().score < 500000) {
            UIManager.getInstance().showToast('您的金额不足');
        } else {
            this.sendNetMsgToGame('request_apply_banker', { reserve_score: GameModel.getInstance().getMeUserInfo().score });
        }
        this.node.active = false;
    }
}
