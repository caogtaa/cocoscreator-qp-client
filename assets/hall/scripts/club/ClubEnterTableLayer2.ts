// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameModel from "../../../scripts/model/GameModel"
import UIManager from "../../../scripts/UIManager"
import Utils from "../../../scripts/Utils"

const {ccclass, property} = cc._decorator;

const NiuNiuTimesRule: string[] = [ '牛七2倍 牛八3倍 牛九4倍 牛牛5倍', '牛七2倍 牛八2倍 牛九2倍 牛牛3倍', '牛牛1-牛牛依次1-10倍' ];

@ccclass
export default class ClubEnterTableLayer2 extends cc.Component {

    @property(cc.Node)
    private nodeParam: cc.Node = null;
    @property(cc.Prefab)
    private prefabParam: cc.Prefab = null;
    @property(cc.Prefab)
    private prefabParam2: cc.Prefab = null;
    @property(cc.Prefab)
    private prefabParamNN: cc.Prefab = null;
    @property(cc.Prefab)
    private prefabParamNN2: cc.Prefab = null;

    private subRoomID: number = 0;
    private subRoomWanfaID: number = 0;

    public onInit(subRoomID: number, subRoomWanfaID: number) {
        this.subRoomID = subRoomID;
        this.subRoomWanfaID = subRoomWanfaID;
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // 桌子规则
        let kindid = GameModel.getInstance().getKindID();
        if (kindid === 2) {
            this.initNNParam();
        }
    }

    start () {

    }

    // update (dt) {}

    private onClickClose() {
        UIManager.getInstance().removeLayer('hall', 'prefabs/club/ClubEnterTableLayer2');
    }

    // 进入游戏
    private onClickEnter() {
        GameModel.getInstance().requestSitdown(0, 0, this.subRoomID, this.subRoomWanfaID);
    }

    // 牛牛规则
    private initNNParam() {
        let subrooms = GameModel.getInstance().getSubRoomList();

        let pp = cc.instantiate(this.prefabParam);
        let script = pp.getComponent('ClubEnterTableParam');
        let wanfa = '经典牛牛';
        if ((subrooms[this.subRoomID - 1].wanfa[this.subRoomWanfaID - 1].item[2] & 0x04) !== 0) {
            wanfa = '王癞牛牛';
        }
        script.setTitleValue('牌桌玩法：', wanfa, '牌桌底注：', Utils.toMoney(subrooms[this.subRoomID - 1].base_score).toString(), true);
        this.nodeParam.addChild(pp);

        pp = cc.instantiate(this.prefabParam);
        script = pp.getComponent('ClubEnterTableParam');
        script.setTitleValue('牌桌准入：', Utils.toMoney(subrooms[this.subRoomID - 1].min_enter_score).toString(), '牌桌人数：', subrooms[this.subRoomID - 1].max_chair_count.toString());
        this.nodeParam.addChild(pp);

        pp = cc.instantiate(this.prefabParam2);
        script = pp.getComponent('ClubEnterTableParam2');
        script.setTitleValue('翻倍规则：', NiuNiuTimesRule[subrooms[this.subRoomID - 1].wanfa[this.subRoomWanfaID - 1].item[0]], true);
        this.nodeParam.addChild(pp);

        pp = cc.instantiate(this.prefabParamNN2);
        script = pp.getComponent('ClubEnterTableParamNN2');
        script.setWanfa(subrooms[this.subRoomID - 1].wanfa[this.subRoomWanfaID - 1].item[1]);
        this.nodeParam.addChild(pp);

        pp = cc.instantiate(this.prefabParamNN);
        script = pp.getComponent('ClubEnterTableParamNN');
        script.setWanfa(subrooms[this.subRoomID - 1].wanfa[this.subRoomWanfaID - 1].item[2], true);
        this.nodeParam.addChild(pp);
    }
}
