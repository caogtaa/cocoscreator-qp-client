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

const enum MemberType {
    PARTNER = 0x01,
    DIRECT_MEM = 0x02,
    MEMBER = 0x04
}

const LayoutItemCount: number = 9;

@ccclass
export default class TeamMembersInfo extends cc.Component {

    @property(cc.EditBox)
    private editbox: cc.EditBox = null;
    @property(cc.Node)
    private nodeItem: cc.Node = null;
    @property(cc.Label)
    private labelPageInfo: cc.Label = null;
    @property(cc.Label)
    private labelDirectMemberNum: cc.Label = null;
    @property(cc.Label)
    private labelDirectPartnerNum: cc.Label = null;
    @property(cc.Label)
    private labelMemberNum: cc.Label = null;
    @property(cc.Label)
    private labelClubMemberNum: cc.Label = null;
    @property(cc.Node)
    private nodeTip: cc.Node = null;
    @property(cc.Label)
    private labelNone: cc.Label = null;
    @property(cc.Node)
    private nodeLayout: cc.Node = null;
    @property([cc.SpriteFrame])
    private spriteframeIcons: cc.SpriteFrame[] = [];    // 馆主 上级 自己 合伙人 直属成员 间接成员
    @property([cc.Toggle])
    private toggles: cc.Toggle[] = [];

    private dataLoaded: boolean = false;
    private membersInfo: hall.response_team_members_info = null;
    private selectedItems: Array<{ type: MemberType, custom: string, item: hall.Iteam_member_item}> = [];
    private itemIndex: number = 0;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.nodeLayout.removeAllChildren();

        EventManager.getInstance().on('hall.response_team_members_info', this.response_team_members_info, this);
        EventManager.getInstance().on('hall.team.set_share_ratio', this.onEventSetShareRatio, this);
        EventManager.getInstance().on('hall.temp.team.auto_be_partner', this.onEventAutoBePartner, this);
    }

    start () {

    }

    onDestroy() {
        EventManager.getInstance().off('hall.response_team_members_info', this.response_team_members_info, this);
        EventManager.getInstance().off('hall.team.set_share_ratio', this.onEventSetShareRatio, this);
        EventManager.getInstance().off('hall.temp.team.auto_be_partner', this.onEventAutoBePartner, this);
    }

    // update (dt) {}

    onEnable() {
        if (!this.dataLoaded) {
            UIManager.getInstance().showLoadingTip('正在加载，请稍候...');
            NetManager.getInstance().sendNetMsgToHall('hall', 'request_team_members_info', {
                userid: GlobalModel.getInstance().globalUserData.userid,
                password: GlobalModel.getInstance().globalUserData.password,
                clubid: GlobalModel.getInstance().globalUserData.selected_clubid
            });
        }
    }

    private onClickCloseSearch() {
        this.onClickToggleMemberType();
    }

    private onClickSearch() {
        if (this.editbox.string.length != 8) {
            UIManager.getInstance().showToast('请输入8位数ID');
            return;
        }

        let id = parseInt(this.editbox.string);

        let success = false;
        for (let i = 0; i < this.selectedItems.length; ++i) {
            let item = this.selectedItems[i];
            if (item.item.gameid == id) {
                this.nodeLayout.removeAllChildren();
                this.loadOneItem(item.item, item.custom, item.type);
                success = true;
                break;
            }
        }
        if (!success) {
            cc.tween(this.nodeTip).show().delay(1).hide().start();
        }
    }

    private onClickPre() {
        if (this.itemIndex == 0) {
            UIManager.getInstance().showToast("已经是第一页");
            return;
        }

        this.labelPageInfo.string = this.itemIndex.toString() + '/' + Math.ceil(this.selectedItems.length / LayoutItemCount);
        this.itemIndex--;
        this.reloadItems();
    }

    private onClickNext() {
        if (this.selectedItems.length == 0 || this.itemIndex == Math.floor(this.selectedItems.length / LayoutItemCount)) {
            UIManager.getInstance().showToast("已经是最后一页");
            return;
        }

        this.itemIndex++;
        this.labelPageInfo.string = this.itemIndex.toString() + '/' + Math.ceil(this.selectedItems.length / LayoutItemCount);
        this.reloadItems();
    }

    private onClickToggleMemberType() {
        let type = 0;
        if (this.toggles[0].isChecked) {
            type |= MemberType.PARTNER;
        }
        if (this.toggles[1].isChecked) {
            type |= MemberType.DIRECT_MEM;
        }
        if (this.toggles[2].isChecked) {
            type |= MemberType.MEMBER;
        }
        if (type == 0) {
            type = MemberType.PARTNER | MemberType.DIRECT_MEM | MemberType.MEMBER;
        }
        this.itemIndex = 0;
        this.selectedItems = [];
        if ((type & MemberType.PARTNER) != 0) {
            for (let i = 0; i < this.membersInfo.direct_partner_items.length; ++i) {
                this.selectedItems.push({ type: MemberType.PARTNER, custom: i.toString(), item: this.membersInfo.direct_partner_items[i]});
            }
        }
        if ((type & MemberType.DIRECT_MEM) != 0) {
            for (let i = 0; i < this.membersInfo.direct_member_items.length; ++i) {
                this.selectedItems.push({ type: MemberType.DIRECT_MEM, custom: i.toString(), item: this.membersInfo.direct_member_items[i]});
            }
        }
        if ((type & MemberType.MEMBER) != 0) {
            for (let i = 0; i < this.membersInfo.member_items.length; ++i) {
                this.selectedItems.push({ type: MemberType.MEMBER, custom: '', item: this.membersInfo.member_items[i]});
            }
        }
        this.reloadItems();
        if (this.selectedItems.length > 0) {
            this.labelPageInfo.string = '1/' + Math.ceil(this.selectedItems.length / LayoutItemCount);
        } else {
            this.labelPageInfo.string = '0/0';
        }
    }

    private onClickTransferLog() {
        UIManager.getInstance().addLayer('hall', 'prefabs/TeamTransferLogLayer');
    }

    private onClickAutoPartner() {
        UIManager.getInstance().addLayer('hall', 'prefabs/TeamAutoHhrLayer', this.membersInfo.share_ratio, this.membersInfo.auto_be_partner, this.membersInfo.auto_partner_share_ratio);
    }

    private onClickItemCheck(event: any, customEventData: string) {
        let index = parseInt(customEventData);
        UIManager.getInstance().addLayer('hall', 'prefabs/TeamMemberInfoLayer', this.selectedItems[index].item, this.selectedItems[index].type == MemberType.PARTNER, this.membersInfo.share_ratio);
    }

    private response_team_members_info(msg: hall.response_team_members_info) {
        UIManager.getInstance().hideLoadingTip();
        this.dataLoaded = true;

        this.membersInfo = msg;

        this.labelDirectPartnerNum.string = this.membersInfo.direct_partner_items.length.toString();
        this.labelDirectMemberNum.string = this.membersInfo.direct_member_items.length.toString();
        this.labelMemberNum.string = this.membersInfo.member_items.length.toString();

        this.onClickToggleMemberType();
    }

    private loadOneItem(item: hall.Iteam_member_item, customEventData: string, type: MemberType) {
        let nodeItem = cc.instantiate(this.nodeItem);
        let nodeHead = nodeItem.getChildByName('headMask').getChildByName('headIcon');
        UIManager.getInstance().loadingImage(nodeHead, item.head_img_url);
        if (type == MemberType.PARTNER) {
            nodeItem.getChildByName('iconIdentity').getComponent(cc.Sprite).spriteFrame = this.spriteframeIcons[3];
        } else if (type == MemberType.DIRECT_MEM) {
            nodeItem.getChildByName('iconIdentity').getComponent(cc.Sprite).spriteFrame = this.spriteframeIcons[4];
        } else {
            nodeItem.getChildByName('iconIdentity').getComponent(cc.Sprite).spriteFrame = this.spriteframeIcons[5];
        }
        let layout = nodeItem.getChildByName('New Layout');
        layout.getChildByName('labelName').getComponent(cc.Label).string = item.nickname;
        layout.getChildByName('labelId').getComponent(cc.Label).string = item.gameid.toString();
        let labelParterId = layout.getChildByName('labelParterId');
        if (item.parent_gameid == 0) {
            labelParterId.active = false;
        } else {
            labelParterId.getComponent(cc.Label).string = item.parent_gameid.toString();
        }
        layout.getChildByName('goldNode').active = false;
        if (customEventData != '') {
            nodeItem.getChildByName('New Node').getComponent(cc.Button).clickEvents[0].customEventData = customEventData;
        } else {
            nodeItem.getChildByName('New Node').getComponent(cc.Button).interactable = false;
            nodeItem.getChildByName('New Node').getChildByName('New Sprite').active = false;
        }
        
        this.nodeLayout.addChild(nodeItem);
    }

    private reloadItems() {
        this.nodeLayout.removeAllChildren();

        for (let i = this.itemIndex * LayoutItemCount, j = 0; i < this.selectedItems.length && j < LayoutItemCount; ++i, ++j) {
            let itemData = this.selectedItems[i];
            this.loadOneItem(itemData.item, itemData.custom, itemData.type);
        }

        if (this.nodeLayout.childrenCount == 0) {
            this.labelNone.node.active = true;
        } else {
            this.labelNone.node.active = false;
        }
    }

    private onEventSetShareRatio(userid: number, share_ratio: number, isPartner: boolean) {
        if (!isPartner) {
            for (let i = 0; i < this.membersInfo.direct_member_items.length; ++i) {
                let item = this.membersInfo.direct_member_items[i];
                if (item.userid == userid) {
                    item.share_ratio = share_ratio;
                    this.membersInfo.direct_partner_items.push(item);
                    this.membersInfo.direct_member_items.splice(i, 1);
                    this.onClickToggleMemberType();
                    break;
                }
            }
        } else {
            for (let item of this.membersInfo.direct_partner_items) {
                if (item.userid == userid) {
                    item.share_ratio = share_ratio;
                    break;
                }
            }
        }
    }

    private onEventAutoBePartner(autoBePartner: boolean, share_ratio: number) {
        this.membersInfo.auto_be_partner = autoBePartner;
        this.membersInfo.auto_partner_share_ratio = autoBePartner ? share_ratio : 0;
    }
}
