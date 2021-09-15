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

const enum DataLoad {
    UNLOADED = 0,
    PENDING,
    LOADED
}

const enum MonthType {
    CURRENT = 0,
    LAST
}

@ccclass
export default class TeamReportInfo extends cc.Component {

    @property(cc.Node)
    private nodeScrollViewContent: cc.Node = null;
    @property(cc.Node)
    private nodeScrollViewContentItem: cc.Node = null;
    @property(cc.Label)
    private labelTodayRevenue: cc.Label = null;
    @property(cc.Label)
    private labelMonthRevenue: cc.Label = null;
    @property(cc.Label)
    private labelMonthCommission: cc.Label = null;
    @property(cc.Node)
    private nodeNone: cc.Node = null;
    @property(cc.Button)
    private buttonCurMonth: cc.Button = null;
    @property(cc.Button)
    private buttonLastMonth: cc.Button = null;

    private dataLoaded: DataLoad = DataLoad.UNLOADED;
    private dataLoadedLast: DataLoad = DataLoad.UNLOADED;

    private currentMonthData: hall.Iteam_report_item[] = [];
    private lastMonthData: hall.Iteam_report_item[] = [];

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.nodeScrollViewContent.removeAllChildren();

        EventManager.getInstance().on('hall.response_team_report_info', this.response_team_report_info, this);
    }

    start () {

    }

    onDestroy() {
        EventManager.getInstance().off('hall.response_team_report_info', this.response_team_report_info, this);
    }

    // update (dt) {}

    onEnable() {
        if (this.dataLoaded != DataLoad.LOADED) {
            this.dataLoaded = DataLoad.PENDING;
            UIManager.getInstance().showLoadingTip('正在加载，请稍候...');
            NetManager.getInstance().sendNetMsgToHall('hall', 'request_team_report_info', {
                userid: GlobalModel.getInstance().globalUserData.userid,
                password: GlobalModel.getInstance().globalUserData.password,
                clubid: GlobalModel.getInstance().globalUserData.selected_clubid,
                month: 0
            });
        }
    }

    private onClickCurMonth() {
        this.buttonCurMonth.interactable = false;
        this.buttonLastMonth.interactable = true;

        this.reloadItems(MonthType.CURRENT);
    }

    private onClickLastMonth() {
        if (this.dataLoadedLast != DataLoad.LOADED) {
            this.dataLoadedLast = DataLoad.PENDING;
            UIManager.getInstance().showLoadingTip('正在加载，请稍候...');
            NetManager.getInstance().sendNetMsgToHall('hall', 'request_team_report_info', {
                userid: GlobalModel.getInstance().globalUserData.userid,
                password: GlobalModel.getInstance().globalUserData.password,
                clubid: GlobalModel.getInstance().globalUserData.selected_clubid,
                month: 1
            });
        } else {
            this.reloadItems(MonthType.LAST);
        }

        this.buttonCurMonth.interactable = true;
        this.buttonLastMonth.interactable = false;
    }

    private onClickItemLook(event: any, customEventData: string) {
        let index = parseInt(customEventData);
        if (this.buttonCurMonth.interactable) {
            UIManager.getInstance().addLayer('hall', 'prefabs/TeamReportMemLayer', this.lastMonthData[index].id);
        } else {
            UIManager.getInstance().addLayer('hall', 'prefabs/TeamReportMemLayer',  this.currentMonthData[index].id);
        }
    }

    private onClickItemLookPartner(event: any, customEventData: string) {
        let index = parseInt(customEventData);
        if (this.buttonCurMonth.interactable) {
            UIManager.getInstance().addLayer('hall', 'prefabs/TeamReportHhrLayer', this.lastMonthData[index].id);
        } else {
            UIManager.getInstance().addLayer('hall', 'prefabs/TeamReportHhrLayer',  this.currentMonthData[index].id);
        }
    }

    private response_team_report_info(msg: hall.response_team_report_info) {
        UIManager.getInstance().hideLoadingTip();
        if (this.dataLoaded == DataLoad.PENDING) {
            this.dataLoaded = DataLoad.LOADED;
            this.labelTodayRevenue.string = msg.today_total_performance.toString();
            this.labelMonthRevenue.string = msg.month_total_performance.toString();
            this.labelMonthCommission.string = msg.month_total_commission.toString();

            this.currentMonthData = msg.items;
            this.reloadItems(MonthType.CURRENT);
        } else if (this.dataLoadedLast == DataLoad.PENDING) {
            this.dataLoadedLast = DataLoad.LOADED;

            this.lastMonthData = msg.items;
            this.reloadItems(MonthType.LAST);
        }
    }

    private reloadItems(type: MonthType) {
        this.nodeScrollViewContent.removeAllChildren();
        
        let data = this.currentMonthData;
        if (type == MonthType.LAST) {
            data = this.lastMonthData;
        }

        for (let i = 0; i < data.length; ++i) {
            let itemData = data[i];
            let item = cc.instantiate(this.nodeScrollViewContentItem);
            item.getChildByName('LabelTime').getComponent(cc.Label).string = itemData.create_date.substring(5);
            item.getChildByName('LabelTotal').getComponent(cc.Label).string = itemData.performance.toString();
            item.getChildByName('LabelRate').getComponent(cc.Label).string = itemData.share_ratio.toString();
            item.getChildByName('LabelCut').getComponent(cc.Label).string = itemData.commission.toString();
            item.getChildByName('LabelCutHhr').getComponent(cc.Label).string = itemData.partner_commission.toString();
            if (itemData.direct_members_performance > 0) {
                let nodeLook = item.getChildByName('btnLook');
                nodeLook.active = true;
                nodeLook.getComponent(cc.Button).clickEvents[0].customEventData = i.toString();
            } else {
                item.getChildByName('btnLook').active = false;
            }
            if (itemData.direct_partner_commission > 0) {
                let nodeLookHhr = item.getChildByName('btnLookHhr');
                nodeLookHhr.active = true;
                nodeLookHhr.getComponent(cc.Button).clickEvents[0].customEventData = i.toString();
            } else {
                item.getChildByName('btnLookHhr').active = false;
            }
            this.nodeScrollViewContent.addChild(item);
        }

        if (this.nodeScrollViewContent.childrenCount > 0) {
            this.nodeNone.active = false;
        } else {
            this.nodeNone.active = true;
        }
    }
}
