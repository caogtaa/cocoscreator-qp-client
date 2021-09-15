// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameModel from "../../../scripts/model/GameModel"
import UIManager from "../../../scripts/UIManager"
import Utils from "../../../scripts/Utils"
import { game } from "../../../scripts/proto"

const {ccclass, property} = cc._decorator;

const NiuNiuTimesRule: string[] = [ '牛七2倍 牛八3倍 牛九4倍 牛牛5倍', '牛七2倍 牛八2倍 牛九2倍 牛牛3倍', '牛牛1-牛牛依次1-10倍' ];

@ccclass
export default class ClubTableWanFaLayer extends cc.Component {

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

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // 桌子规则
        let kindid = GameModel.getInstance().getKindID();
        let tableInfo = GameModel.getInstance().getMyTableInfo();
        if (tableInfo) {
            if (kindid === 2) {
                this.initNNParam(tableInfo);
            }
        }
    }

    start () {

    }

    // update (dt) {}

    private onClickClose() {
        UIManager.getInstance().removeLayer('hall', 'prefabs/club/ClubTableWanFaLayer');
    }

    // 牛牛规则
    private initNNParam(tableinfo: game.Itable_info) {
        let pp = cc.instantiate(this.prefabParam);
        let script = pp.getComponent('ClubEnterTableParam');
        let wanfa = '经典牛牛';
        if ((tableinfo.param.wanfa.item[2] & 0x04) !== 0) {
            wanfa = '王癞牛牛';
        }
        script.setTitleValue('牌桌玩法：', wanfa, '牌桌底注：', Utils.toMoney(tableinfo.param.base_score).toString(), true);
        this.nodeParam.addChild(pp);

        pp = cc.instantiate(this.prefabParam);
        script = pp.getComponent('ClubEnterTableParam');
        script.setTitleValue('牌桌准入：', Utils.toMoney(tableinfo.param.min_enter_score).toString(), '牌桌人数：', tableinfo.param.max_chair_count.toString());
        this.nodeParam.addChild(pp);

        pp = cc.instantiate(this.prefabParam2);
        script = pp.getComponent('ClubEnterTableParam2');
        script.setTitleValue('翻倍规则：', NiuNiuTimesRule[tableinfo.param.wanfa.item[0]], true);
        this.nodeParam.addChild(pp);

        pp = cc.instantiate(this.prefabParamNN2);
        script = pp.getComponent('ClubEnterTableParamNN2');
        script.setWanfa(tableinfo.param.wanfa.item[1]);
        this.nodeParam.addChild(pp);

        pp = cc.instantiate(this.prefabParamNN);
        script = pp.getComponent('ClubEnterTableParamNN');
        script.setWanfa(tableinfo.param.wanfa.item[2], true);
        this.nodeParam.addChild(pp);
    }
}
