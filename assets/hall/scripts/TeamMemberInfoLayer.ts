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

const ItemActive: boolean[] = [ true, false, true, true, false, false, false, true ];

@ccclass
export default class TeamMemberInfoLayer extends cc.Component {

    @property(cc.Node)
    private nodeHead: cc.Node = null;
    @property(cc.Sprite)
    private spriteIconIdentity: cc.Sprite = null;
    @property([cc.SpriteFrame])
    private spriteframeIconIdentity: cc.SpriteFrame[] = [];
    @property(cc.Label)
    private labelName: cc.Label = null;
    @property(cc.Label)
    private labelGameID: cc.Label = null;
    @property(cc.Node)
    private nodeGold: cc.Node = null;
    @property(cc.Label)
    private labelGold: cc.Label = null;
    @property([cc.Node])
    private nodeItems: cc.Node[] = [];
    @property(cc.Button)
    private buttonBePartner: cc.Button = null;
    @property(cc.Button)
    private buttonLookMembers: cc.Button = null;

    // 设为合伙人
    @property(cc.Node)
    private nodeEdit1: cc.Node = null;
    @property(cc.EditBox)
    private editboxEdit1Ratio: cc.EditBox = null;
    @property(cc.Label)
    private labelEdit1Name: cc.Label = null;
    @property(cc.Label)
    private labelEdit1GameID: cc.Label = null;

    // 编辑合伙人
    @property(cc.Node)
    private nodeEdit2: cc.Node = null;
    @property(cc.Label)
    private labelEdit2Name: cc.Label = null;
    @property(cc.Label)
    private labelEdit2GameID: cc.Label = null;
    @property(cc.Label)
    private labelEdit2CurRatio: cc.Label = null;
    @property(cc.EditBox)
    private editboxEdit2Ratio: cc.EditBox = null;

    private memberInfo: hall.Iteam_member_item = null;
    private isPartner: boolean = false;
    private maxShareRatio: number = 0;

    onInit(memberItem: hall.Iteam_member_item, partner: boolean, maxShareRatio: number) {
        this.memberInfo = memberItem;
        this.isPartner = partner;
        this.maxShareRatio = maxShareRatio;
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        UIManager.getInstance().loadingImage(this.nodeHead, this.memberInfo.head_img_url);
        this.labelName.string = this.memberInfo.nickname;
        this.labelGameID.string = this.memberInfo.gameid.toString();
        this.nodeGold.active = false;

        this.labelEdit1Name.string = this.memberInfo.nickname;
        this.labelEdit1GameID.string = this.memberInfo.gameid.toString();
        this.labelEdit2Name.string = this.memberInfo.nickname;
        this.labelEdit2GameID.string = this.memberInfo.gameid.toString();
        this.labelEdit2CurRatio.string = this.memberInfo.share_ratio.toString() + '%';

        this.editboxEdit1Ratio.placeholder = `最低1%，最高${this.maxShareRatio}%`;
        this.editboxEdit2Ratio.placeholder = `最低1%，最高${this.maxShareRatio}%`;

        this.nodeItems[0].getChildByName('detail').getComponent(cc.Label).string = this.memberInfo.join_date;
        this.nodeItems[1].getChildByName('detail').getComponent(cc.Label).string = this.memberInfo.share_ratio.toString();
        this.nodeItems[2].getChildByName('detail').getComponent(cc.Label).string = Utils.toMoney(this.memberInfo.yestoday_total_performance).toString();
        this.nodeItems[3].getChildByName('detail').getComponent(cc.Label).string = Utils.toMoney(this.memberInfo.today_total_performance).toString();
        this.nodeItems[4].getChildByName('detail').getComponent(cc.Label).string = this.memberInfo.yestoday_new_members_count.toString();
        this.nodeItems[5].getChildByName('detail').getComponent(cc.Label).string = this.memberInfo.today_new_members_count.toString();
        this.nodeItems[6].getChildByName('detail').getComponent(cc.Label).string = this.memberInfo.direct_members_count.toString();
        this.nodeItems[7].getChildByName('detail').getComponent(cc.Label).string = this.memberInfo.last_login_date;

        //if (this.memberInfo.direct_members_count > 0) {
            this.buttonLookMembers.node.active = true;
        //}

        if (!this.isPartner) {
            this.spriteIconIdentity.spriteFrame = this.spriteframeIconIdentity[0];
            for (let i = 0; i < this.nodeItems.length; ++i) {
                this.nodeItems[i].active = ItemActive[i];
            }
        } else {
            this.buttonBePartner.node.active = false;
        }

        EventManager.getInstance().on('hall.response_team_be_partner', this.response_team_be_partner, this);
        EventManager.getInstance().on('hall.response_team_set_partner_share_ratio', this.response_team_set_partner_share_ratio, this);
    }

    start () {

    }

    onDestroy() {
        EventManager.getInstance().off('hall.response_team_be_partner', this.response_team_be_partner, this);
        EventManager.getInstance().off('hall.response_team_set_partner_share_ratio', this.response_team_set_partner_share_ratio, this);
    }

    // update (dt) {}

    private onClickClose() {
        UIManager.getInstance().removeLayer('hall', 'prefabs/TeamMemberInfoLayer');
    }

    private onClickTransfer() {
        UIManager.getInstance().addLayer('hall', 'prefabs/TeamTransferLayer', this.memberInfo.userid, this.memberInfo.nickname);
    }

    private onClickBePartner() {
        this.nodeEdit1.active = true;
    }

    private onClickEditPartnerRatio() {
        this.nodeEdit2.active = true;
    }

    private onClickLookDirectMembers() {
        UIManager.getInstance().addLayer('hall', 'prefabs/TeamHhrMemLayer', this.memberInfo.userid);
    }

    private onClickEdit1Close() {
        this.nodeEdit1.active = false;
    }

    private onClickEdit1Confirm() {
        if (this.editboxEdit1Ratio.string.length == 0) {
            UIManager.getInstance().showToast(this.editboxEdit1Ratio.placeholder);
            return;
        }
        let ratio = parseInt(this.editboxEdit1Ratio.string);
        if (ratio > this.maxShareRatio || ratio <= 0) {
            UIManager.getInstance().showToast(this.editboxEdit1Ratio.placeholder);
            return;
        }
        this.nodeEdit1.active = false;
        UIManager.getInstance().showLoadingTip('正在处理，请稍候...');
        NetManager.getInstance().sendNetMsgToHall('hall', 'request_team_be_partner', {
            userid: GlobalModel.getInstance().globalUserData.userid,
            password: GlobalModel.getInstance().globalUserData.password,
            clubid: GlobalModel.getInstance().globalUserData.selected_clubid,
            dest_userid: this.memberInfo.userid,
            share_ratio: ratio
        });
    }

    private onClickEdit2Close() {
        this.nodeEdit2.active = false;
    }

    private onClickEdit2Confirm() {
        if (this.editboxEdit2Ratio.string.length == 0) {
            UIManager.getInstance().showToast(this.editboxEdit2Ratio.placeholder);
            return;
        }
        let ratio = parseInt(this.editboxEdit2Ratio.string);
        if (ratio > this.maxShareRatio || ratio <= 0) {
            UIManager.getInstance().showToast(this.editboxEdit2Ratio.placeholder);
            return;
        }
        this.nodeEdit2.active = false;
        UIManager.getInstance().showLoadingTip('正在处理，请稍候...');
        NetManager.getInstance().sendNetMsgToHall('hall', 'request_team_set_partner_share_ratio', {
            userid: GlobalModel.getInstance().globalUserData.userid,
            password: GlobalModel.getInstance().globalUserData.password,
            clubid: GlobalModel.getInstance().globalUserData.selected_clubid,
            partner_userid: this.memberInfo.userid,
            share_ratio: ratio
        });
    }

    private response_team_be_partner(msg: hall.response_team_be_partner) {
        UIManager.getInstance().hideLoadingTip();
        UIManager.getInstance().showToast(msg.reason);

        if (msg.result_code == 0) {
            this.buttonBePartner.node.active = false;
            this.nodeItems[1].getChildByName('detail').getComponent(cc.Label).string = this.editboxEdit1Ratio.string;
            this.memberInfo.share_ratio = parseInt(this.editboxEdit1Ratio.string);
            this.labelEdit2CurRatio.string = this.editboxEdit1Ratio.string;
            this.spriteIconIdentity.spriteFrame = this.spriteframeIconIdentity[1];
            for (let i = 0; i < this.nodeItems.length; ++i) {
                this.nodeItems[i].active = true;
            }
            // 通知更新
            EventManager.getInstance().emit('hall.team.set_share_ratio', this.memberInfo.userid, parseInt(this.editboxEdit1Ratio.string), false);
        }
    }

    private response_team_set_partner_share_ratio(msg: hall.response_team_set_partner_share_ratio) {
        UIManager.getInstance().hideLoadingTip();
        UIManager.getInstance().showToast(msg.reason);

        if (msg.result_code == 0) {
            this.nodeItems[1].getChildByName('detail').getComponent(cc.Label).string = this.editboxEdit2Ratio.string;
            this.labelEdit2CurRatio.string = this.editboxEdit2Ratio.string + '%';
            this.memberInfo.share_ratio = parseInt(this.editboxEdit2Ratio.string);

            // 通知更新
            EventManager.getInstance().emit('hall.team.set_share_ratio', this.memberInfo.userid, parseInt(this.editboxEdit2Ratio.string), true);
        }
    }
}
