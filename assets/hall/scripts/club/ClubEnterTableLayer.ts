// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { game } from "../../../scripts/proto"
import GameModel from "../../../scripts/model/GameModel"
import UIManager from "../../../scripts/UIManager"
import { UserStatus } from "../../../scripts/Constants"
import Utils from "../../../scripts/Utils"

const {ccclass, property} = cc._decorator;

const NiuNiuTimesRule: string[] = [ '牛七2倍 牛八3倍 牛九4倍 牛牛5倍', '牛七2倍 牛八2倍 牛九2倍 牛牛3倍', '牛牛1-牛牛依次1-10倍' ];

@ccclass
export default class ClubEnterTableLayer extends cc.Component {

    @property(cc.Node)
    private scrollViewHeadContent: cc.Node = null;
    @property(cc.Prefab)
    private headItemPrefab: cc.Prefab = null;
    @property(cc.Button)
    private buttonOBEnter: cc.Button = null;
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

    private tableUsers: game.Iuser_info[] = [];
    private tableInfo: game.Itable_info = null;

    public onInit(tableUsers: game.Iuser_info[], tableInfo: game.Itable_info) {
        this.tableUsers = tableUsers;
        this.tableInfo = tableInfo;
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let width = 0;
        for (let i = 0; i < this.tableInfo.param.max_chair_count; ++i) {
            let user = this.tableUsers[i];
            if (user) {
                let headitem = cc.instantiate(this.headItemPrefab);
                let script = headitem.getComponent('ClubEnterTableHeadItem');
                script.setUserInfo(user.head_img_url, user.nickname, false);
                this.scrollViewHeadContent.addChild(headitem);
                width += headitem.width;
            }
        }
        this.scrollViewHeadContent.width = width;

        // 桌子规则
        let kindid = GameModel.getInstance().getKindID();
        if (kindid === 2) {
            this.initNNParam();
        }

        // 是否允许旁观
        this.buttonOBEnter.node.active = GameModel.getInstance().isAllowOB();
    }

    start () {

    }

    // update (dt) {}

    private onClickClose() {
        UIManager.getInstance().removeLayer('hall', 'prefabs/club/ClubEnterTableLayer');
    }

    // 旁观进入
    private onClickOBEnter() {
        GameModel.getInstance().requestSitdownOB(this.tableInfo.tableid, 0, null, null);
    }

    // 进入游戏
    private onClickEnter() {
        let usercount = 0;
        let tableid = this.tableInfo.tableid;
        let userlist = GameModel.getInstance().getUserList();
        userlist.forEach(function (value, key, map) {
            if (value.tableid === tableid && value.user_status !== UserStatus.OB) {
                usercount++;
            }
        });
        if (usercount === this.tableInfo.param.max_chair_count) {
            UIManager.getInstance().showAlert('房间人数已满');
            return;
        }

        GameModel.getInstance().requestSitdown(this.tableInfo.tableid, 0);
    }

    // 牛牛规则
    private initNNParam() {
        let tableinfo = this.tableInfo;

        let pp = cc.instantiate(this.prefabParam);
        let script = pp.getComponent('ClubEnterTableParam');
        let wanfa = '经典牛牛';
        if ((tableinfo.param.wanfa.item[2] & 0x04) !== 0) {
            wanfa = '王癞牛牛';
        }
        script.setTitleValue('牌桌玩法：', wanfa, '牌桌底注：', Utils.toMoney(this.tableInfo.param.base_score).toString(), true);
        this.nodeParam.addChild(pp);

        pp = cc.instantiate(this.prefabParam);
        script = pp.getComponent('ClubEnterTableParam');
        script.setTitleValue('牌桌准入：', Utils.toMoney(this.tableInfo.param.min_enter_score).toString(), '牌桌人数：', this.tableInfo.param.max_chair_count.toString());
        this.nodeParam.addChild(pp);

        pp = cc.instantiate(this.prefabParam2);
        script = pp.getComponent('ClubEnterTableParam2');
        script.setTitleValue('翻倍规则：', NiuNiuTimesRule[this.tableInfo.param.wanfa.item[0]], true);
        this.nodeParam.addChild(pp);

        pp = cc.instantiate(this.prefabParamNN2);
        script = pp.getComponent('ClubEnterTableParamNN2');
        script.setWanfa(this.tableInfo.param.wanfa.item[1]);
        this.nodeParam.addChild(pp);

        pp = cc.instantiate(this.prefabParamNN);
        script = pp.getComponent('ClubEnterTableParamNN');
        script.setWanfa(this.tableInfo.param.wanfa.item[2], true);
        this.nodeParam.addChild(pp);
    }
}
