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

const MaxLayoutCount = 12;

@ccclass
export default class TeamHhrMemLayer extends cc.Component {

    @property(cc.Node)
    private nodeLayout: cc.Node = null;
    @property(cc.Node)
    private nodeLayoutItem: cc.Node = null;
    @property(cc.Label)
    private labelPageInfo: cc.Label = null;
    @property(cc.Label)
    private labelNum: cc.Label = null;
    @property(cc.Label)
    private labelNone: cc.Label = null;

    private partnerUserID: number = 0;
    private memberItems: hall.Iteam_partner_member_item[] = [];
    private itemIndex: number = 0;

    onInit(partnerUserID: number) {
        this.partnerUserID = partnerUserID;
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.nodeLayout.removeAllChildren();

        EventManager.getInstance().on('hall.response_team_partner_member_info', this.response_team_partner_member_info, this);
    }

    start () {
        UIManager.getInstance().showLoadingTip('正在加载，请稍候...');
        NetManager.getInstance().sendNetMsgToHall('hall', 'request_team_partner_member_info', {
            userid: GlobalModel.getInstance().globalUserData.userid,
            password: GlobalModel.getInstance().globalUserData.password,
            clubid: GlobalModel.getInstance().globalUserData.selected_clubid,
            partner_userid: this.partnerUserID,
        });
    }

    onDestroy() {
        EventManager.getInstance().off('hall.response_team_partner_member_info', this.response_team_partner_member_info, this);
    }

    // update (dt) {}

    private onClickClose() {
        UIManager.getInstance().removeLayer('hall', 'prefabs/TeamHhrMemLayer');
    }

    private onClickPre() {
        if (this.itemIndex == 0) {
            UIManager.getInstance().showToast("已经是第一页");
            return;
        }

        this.itemIndex--;
        this.reloadItems();
    }

    private onClickNext() {
        if (this.memberItems.length == 0 || this.itemIndex == Math.floor(this.memberItems.length / MaxLayoutCount)) {
            UIManager.getInstance().showToast("已经是最后一页");
            return;
        }

        this.itemIndex++;
        this.reloadItems();
    }

    private reloadItems() {
        this.nodeLayout.removeAllChildren();

        for (let i = this.itemIndex * MaxLayoutCount, j = 0; i < this.memberItems.length && j < MaxLayoutCount; ++i, ++j) {
            let itemData = this.memberItems[i];
            let item = cc.instantiate(this.nodeLayoutItem);
            UIManager.getInstance().loadingImage(item.getChildByName('headMask').getChildByName('headIcon'), itemData.head_img_url);
            item.getChildByName('New Layout').getChildByName('labelName').getComponent(cc.Label).string = itemData.nickname;
            item.getChildByName('New Layout').getChildByName('labelId').getComponent(cc.Label).string = itemData.gameid.toString();
            this.nodeLayout.addChild(item);
        }

        if (this.memberItems.length == 0) {
            this.labelNone.node.active = true;
            this.labelPageInfo.string = '0/0';
        } else {
            this.labelNone.node.active = false;
            this.labelPageInfo.string = (this.itemIndex + 1) + '/' + Math.ceil(this.memberItems.length / MaxLayoutCount);
        }
    }

    private response_team_partner_member_info(msg: hall.response_team_partner_member_info) {
        UIManager.getInstance().hideLoadingTip();

        this.memberItems = msg.items;

        this.labelNum.string = msg.items.length.toString();

        this.reloadItems();
    }
}
