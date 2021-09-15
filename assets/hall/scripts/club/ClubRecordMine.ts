// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import UIManager from "../../../scripts/UIManager"
import EventManager from "../../../scripts/EventManager"
import NetManager from "../../../scripts/NetManager"
import GlobalModel from "../../../scripts/model/GlobalModel"
import Utils from "../../../scripts/Utils"
import { hall } from "../../../scripts/proto"
import { GlobalEvent } from "../../../scripts/Constants"

const {ccclass, property} = cc._decorator;

const GameNameItems: string[] = [ '全部', '经典牛牛', '王癞牛牛', '百人龙虎', '拼庄百人龙虎' ];

@ccclass
export default class ClubRecordMine extends cc.Component {

    @property(cc.Node)
    private nodeScrollViewContent: cc.Node = null;
    @property(cc.Node)
    private nodeScrollViewContentItem: cc.Node = null;
    @property(cc.Label)
    private labelNone: cc.Label = null;
    @property(cc.EditBox)
    private editboxDrawID: cc.EditBox = null;
    @property(cc.Label)
    private labelComboboxContent: cc.Label = null;
    @property(cc.Node)
    private nodeComboboxList: cc.Node = null;
    @property(cc.Node)
    private nodeComboboxListContainer: cc.Node = null;
    @property(cc.Node)
    private nodeComboboxListItem: cc.Node = null;
    @property([cc.Button])
    private buttonPages: cc.Button[] = [];
    @property(cc.Label)
    private labelDealNum: cc.Label = null;

    private selectedDay: number = 0;
    private dataLoaded: boolean[] = [ false, false, false ];
    private gameRecordItems: Array<Array<hall.Iteam_game_record_item>> = [ [], [], [] ];

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.nodeScrollViewContent.removeAllChildren();

        this.labelComboboxContent.string = GameNameItems[0];
        this.nodeComboboxListContainer.removeAllChildren();
        for (let name of GameNameItems) {
            let item = cc.instantiate(this.nodeComboboxListItem);
            item.getChildByName('New Label').getComponent(cc.Label).string = name;
            item.getComponent(cc.Button).clickEvents[0].customEventData = name;
            this.nodeComboboxListContainer.addChild(item);
        }

    }

    start () {

    }

    onDestroy() {
        EventManager.getInstance().off('hall.response_team_game_records', this.response_team_game_records, this);
    }

    // update (dt) {}

    onEnable() {
        EventManager.getInstance().on('hall.response_team_game_records', this.response_team_game_records, this);

        if (!this.dataLoaded[this.selectedDay]) {
            UIManager.getInstance().showLoadingTip('正在加载，请稍候...');
            NetManager.getInstance().sendNetMsgToHall('hall', 'request_team_game_records', {
                userid: GlobalModel.getInstance().globalUserData.userid,
                password: GlobalModel.getInstance().globalUserData.password,
                clubid: GlobalModel.getInstance().globalUserData.selected_clubid,
                type: 0,
                day: this.selectedDay
            });
        }
    }

    onDisable() {
        EventManager.getInstance().off('hall.response_team_game_records', this.response_team_game_records, this);
    }

    private onClickClearDrawID() {
        this.editboxDrawID.string = '';
    }

    private onClickPaste() {
        
    }

    private onClickSearch() {
        let drawid: number = 0;
        if (this.editboxDrawID.string.length > 0 && this.editboxDrawID.string.length != 19) {
            UIManager.getInstance().showToast('请输入19位的牌局ID');
            return;
        } else {
            drawid = parseInt(this.editboxDrawID.string);
        }

        if (drawid != 0) {
            let items = this.gameRecordItems[this.selectedDay];
            for (let i = 0; i < items.length; ++i) {
                if (items[i].drawid == drawid) {
                    this.loadOneItem(1, items[i]);
                    return;
                }
            }
            UIManager.getInstance().showToast('您搜索的牌局不存在');
        } else {
            if (this.labelComboboxContent.string == GameNameItems[0]) {
                this.reloadItems();
            } else {
                let items = this.gameRecordItems[this.selectedDay];
                let count = 0;
                for (let i = 0; i < items.length; ++i) {
                    if (items[i].wanfa == this.labelComboboxContent.string) {
                        count++;
                        this.loadOneItem(count, items[i]);
                    }
                }
                if (count == 0) {
                    UIManager.getInstance().showToast('没有该游戏的记录');
                }
            }
        }
    }

    private onClickComboBox() {
        this.nodeComboboxList.active = true;
    }

    private onClickComboBoxListMask() {
        this.nodeComboboxList.active = false;
    }

    private onClickComboBoxListItem(event: any, customEventData: string) {
        this.labelComboboxContent.string = customEventData;
        this.nodeComboboxList.active = false;
    }

    private onClickPages(event: any, customEventData: string) {
        let index = parseInt(customEventData);
        this.buttonPages[this.selectedDay].interactable = true;
        this.buttonPages[index].interactable = false;
        this.selectedDay = index;
        if (!this.dataLoaded[this.selectedDay]) {
            UIManager.getInstance().showLoadingTip('正在加载，请稍候...');
            NetManager.getInstance().sendNetMsgToHall('hall', 'request_team_game_records', {
                userid: GlobalModel.getInstance().globalUserData.userid,
                password: GlobalModel.getInstance().globalUserData.password,
                clubid: GlobalModel.getInstance().globalUserData.selected_clubid,
                type: 0,
                day: this.selectedDay
            });
        } else {
            this.reloadItems();
        }
    }

    private onClickRecordItemLook(event: any, customEventData: string) {
        cc.log(customEventData);
    }

    private loadOneItem(index: number, itemData: hall.Iteam_game_record_item) {
        let item = cc.instantiate(this.nodeScrollViewContentItem);
        item.getChildByName('LabelId').getComponent(cc.Label).string = index.toString();
        item.getChildByName('LabelTime').getComponent(cc.Label).string = itemData.insert_date.substring(5);
        item.getChildByName('LabelDealId').getComponent(cc.Label).string = itemData.drawid.toString();
        item.getChildByName('LabelName').getComponent(cc.Label).string = itemData.wanfa;
        item.getChildByName('LabelWin').getComponent(cc.Label).string = Utils.toMoney(itemData.change_score).toString();
        item.getChildByName('LabelFee').getComponent(cc.Label).string = Utils.toMoney(itemData.revenue).toString();
        item.getChildByName('LabelTodayFee').getComponent(cc.Label).string = Utils.toMoney(itemData.commission).toString();
        item.getChildByName('btnLook').getComponent(cc.Button).clickEvents[0].customEventData = itemData.drawid.toString();
        this.nodeScrollViewContent.addChild(item);
    }

    private reloadItems() {
        this.nodeScrollViewContent.removeAllChildren();

        let items = this.gameRecordItems[this.selectedDay];
        for (let i = 0; i < items.length; ++i) {
            this.loadOneItem(i + 1, items[i]);
        }

        this.labelDealNum.string = `共${items.length}局`;
        if (items.length == 0) {
            this.labelNone.node.active = true;
        } else {
            this.labelNone.node.active = false;
        }
    }

    private response_team_game_records(msg: hall.response_team_game_records) {
        UIManager.getInstance().hideLoadingTip();

        this.dataLoaded[this.selectedDay] = true;
        this.gameRecordItems[this.selectedDay] = msg.items;
        this.reloadItems();
    }
}
