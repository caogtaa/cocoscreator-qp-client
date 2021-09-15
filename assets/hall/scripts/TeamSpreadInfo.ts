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
export default class TeamSpreadInfo extends cc.Component {

    @property(cc.PageView)
    private pageviewLeft: cc.PageView = null;
    @property([cc.Toggle])
    private togglePageViewLeft: cc.Toggle[] = [];

    @property([cc.Label])
    private labelLeftCodes: cc.Label[] = [];
    @property([cc.Node])
    private nodeLeftQRCodes: cc.Node[] = [];

    @property([cc.Toggle])
    private toggleRight: cc.Toggle[] = [];

    @property(cc.Label)
    private labelNewTotalMembers: cc.Label = null;
    @property(cc.Label)
    private labelNewDirectMembers: cc.Label = null;
    @property(cc.Label)
    private labelNewMembers: cc.Label = null;

    @property(cc.Label)
    private labelInviteCode: cc.Label = null;

    private dataLoaded: boolean = false;
    private dataSpread: hall.response_team_spread_info = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let date = new Date();
        for (let i = 2; i < this.toggleRight.length; ++i) {
            this.toggleRight[i].node.getChildByName('New Label').getComponent(cc.Label).string = new Date(new Date().setDate(date.getDate() - i)).getDate().toString();
        }

        EventManager.getInstance().on('hall.response_team_spread_info', this.response_team_spread_info, this);
    }

    start () {

    }

    onDestroy() {
        EventManager.getInstance().off('hall.response_team_spread_info', this.response_team_spread_info, this);
    }

    // update (dt) {}

    onEnable() {
        if (!this.dataLoaded) {
            UIManager.getInstance().showLoadingTip('正在加载，请稍候...');
            NetManager.getInstance().sendNetMsgToHall('hall', 'request_team_spread_info', {
                userid: GlobalModel.getInstance().globalUserData.userid,
                password: GlobalModel.getInstance().globalUserData.password,
                clubid: GlobalModel.getInstance().globalUserData.selected_clubid
            });
        }
    }

    private onClickLeftToggles(toggle: cc.Toggle) {
        this.pageviewLeft.scrollToPage(this.togglePageViewLeft.indexOf(toggle), 0);
    }

    private onPageEvent(sender: cc.PageView, eventType: cc.PageView.EventType) {
        // 翻页事件
        if (eventType !== cc.PageView.EventType.PAGE_TURNING) {
            return;
        }
        this.togglePageViewLeft[sender.getCurrentPageIndex()].isChecked = true;
    }

    private onClickRightToggles(toggle: cc.Toggle) {
        let index = this.toggleRight.indexOf(toggle);
        if (this.dataSpread.new_members_item.length > index) {
            let item = this.dataSpread.new_members_item[index];
            this.labelNewTotalMembers.string = item.new_members_count.toString();
            this.labelNewDirectMembers.string = item.new_direct_members_count.toString();
            this.labelNewMembers.string = (item.new_members_count - item.new_direct_members_count).toString();
        } else {
            this.labelNewTotalMembers.string = '0';
            this.labelNewDirectMembers.string = '0';
            this.labelNewMembers.string = '0';
        }
    }

    private onClickCopyWx() {
        cc.log(this.dataSpread.invite_urls[0]);
    }

    private onClickCopyWx2() {
        cc.log(this.dataSpread.invite_urls[1]);
    }

    private onClickCopyBrowser() {
        cc.log(this.dataSpread.invite_urls[2]);
    }

    private onClickCopyBrowser2() {
        cc.log(this.dataSpread.invite_urls[3]);
    }

    private onClickCopyInviteCode() {
        
    }

    private onClickWx() {
        
    }

    private onClickQq() {
        
    }

    private onClickSave() {
        
    }

    private response_team_spread_info(msg: hall.response_team_spread_info) {
        UIManager.getInstance().hideLoadingTip();
        this.dataLoaded = true;
        this.dataSpread = msg;

        for (let i = 0; i < 4; ++i) {
            this.labelLeftCodes[i].string = msg.invited_code;
            // TODO labelLeftQRCodes
        }

        if (msg.new_members_item.length > 0) {
            let item = msg.new_members_item[0];
            this.labelNewTotalMembers.string = item.new_members_count.toString();
            this.labelNewDirectMembers.string = item.new_direct_members_count.toString();
            this.labelNewMembers.string = (item.new_members_count - item.new_direct_members_count).toString();
        } else {
            this.labelNewTotalMembers.string = '0';
            this.labelNewDirectMembers.string = '0';
            this.labelNewMembers.string = '0';
        }
        
        this.labelInviteCode.string = msg.invited_code;
    }
}
