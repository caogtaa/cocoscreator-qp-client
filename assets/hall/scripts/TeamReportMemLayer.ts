// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import UIManager from "../../scripts/UIManager"
import EventManager from "../../scripts/EventManager"
import NetManager from "../../scripts/NetManager"
import GlobalModel from "../../scripts/model/GlobalModel"
import Utils from "../../scripts/Utils"
import { hall } from "../../scripts/proto"
import { GlobalEvent } from "../../scripts/Constants"

const {ccclass, property} = cc._decorator;

@ccclass
export default class TeamReportMemLayer extends cc.Component {

    @property(cc.Node)
    private nodeScrollViewContent: cc.Node = null;
    @property(cc.Node)
    private nodeScrollViewContentItem: cc.Node = null;
    @property(cc.Label)
    private labelNone: cc.Label = null;
    @property(cc.Label)
    private labelTotalPerformance: cc.Label = null;
    @property(cc.Label)
    private labelTotalCommission: cc.Label = null;

    private requestID: number = 0;

    onInit(id: number) {
        this.requestID = id;
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.nodeScrollViewContent.removeAllChildren();

        EventManager.getInstance().on('hall.response_team_report_member_info', this.response_team_report_member_info, this);
    }

    start () {
        UIManager.getInstance().showLoadingTip('正在加载，请稍候...');
        NetManager.getInstance().sendNetMsgToHall('hall', 'request_team_report_member_info', {
            userid: GlobalModel.getInstance().globalUserData.userid,
            password: GlobalModel.getInstance().globalUserData.password,
            clubid: GlobalModel.getInstance().globalUserData.selected_clubid,
            id: this.requestID
        });
    }

    onDestroy() {
        EventManager.getInstance().off('hall.response_team_report_member_info', this.response_team_report_member_info, this);
    }

    // update (dt) {}

    private onClickClose() {
        UIManager.getInstance().removeLayer('hall', 'prefabs/TeamReportMemLayer');
    }

    private response_team_report_member_info(msg: hall.response_team_report_member_info) {
        UIManager.getInstance().hideLoadingTip();

        if (msg.items.length > 0) {
            this.labelNone.node.active = false;

            let totalPerformance = 0;
            let totalCommission = 0;
            for (let itemData of msg.items) {
                let item = cc.instantiate(this.nodeScrollViewContentItem);
                item.getChildByName('iconHhr').active = itemData.partner;
                item.getChildByName('LabelId').getComponent(cc.Label).string = itemData.gameid.toString();
                item.getChildByName('LabelName').getComponent(cc.Label).string = itemData.nickname;
                item.getChildByName('LabelTime').getComponent(cc.Label).string = itemData.date.substring(0, 10);
                item.getChildByName('LabelTotal').getComponent(cc.Label).string = Utils.toMoney(itemData.performance).toString();
                item.getChildByName('LabelRate').getComponent(cc.Label).string = itemData.share_ratio.toString();
                item.getChildByName('LabelCut').getComponent(cc.Label).string = Utils.toMoney(itemData.commission).toString();
                this.nodeScrollViewContent.addChild(item);

                totalPerformance += itemData.performance;
                totalCommission += itemData.commission;
            }

            this.labelTotalPerformance.string = `总税收：${totalPerformance}`;
            this.labelTotalCommission.string = `总收益：${totalCommission}`;
        }
    }
}
