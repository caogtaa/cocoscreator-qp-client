// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { game } from "../../../../scripts/proto"
import GameModel from "../../../../scripts/model/GameModel"
import { TableEvent, UserStatus } from "../../../../scripts/Constants"
import EventManager from "../../../../scripts/EventManager"
import Utils from "../../../../scripts/Utils"
import UIManager from "../../../../scripts/UIManager"

const {ccclass, property} = cc._decorator;

@ccclass
export default class ClubTableItemNN extends cc.Component {

    @property(cc.Label)
    private labelGameName: cc.Label = null;
    @property([cc.Node])
    private playerNode: cc.Node[] = [];
    @property(cc.Node)
    private tableAddNode: cc.Node = null;
    @property(cc.Node)
    private startNode: cc.Node = null;
    @property(cc.Node)
    private iconParamNode: cc.Node = null;
    @property(cc.Button)
    private btnDelete: cc.Button = null;
    @property(cc.Prefab)
    private headPrefab: cc.Prefab = null;
    @property([cc.SpriteFrame])
    private tableFrames: cc.SpriteFrame[] = [];

    private tableInfo: game.Itable_info = null;
    private tableUsers: game.Iuser_info[] = [];
    private tableSubRoomID: number = null;
    private tableSubRoomWanfaID: number = null;

    public initTableData(tableInfo: game.Itable_info, tableUsers: game.Iuser_info[], tableSubRoomID?: number, tableSubRoomWanfaID?: number) {
        this.tableInfo = tableInfo;
        this.tableUsers = tableUsers;
        if (this.tableUsers == undefined) {
            this.tableUsers = [];
        }
        this.tableSubRoomID = tableSubRoomID;
        this.tableSubRoomWanfaID = tableSubRoomWanfaID;
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.btnDelete.node.active = false;

        if (this.tableInfo) {
            this.startNode.active = false;
            this.labelGameName.string = '经典牛/' + Utils.toMoney(this.tableInfo.param.base_score);

            let rule = this.tableInfo.param.wanfa.item[2];
            if ((rule & 0x04) === 0) {
                this.iconParamNode.active = false;
            }
        } else {
            let subrooms = GameModel.getInstance().getSubRoomList();
            this.labelGameName.string = '经典牛/' + Utils.toMoney(subrooms[this.tableSubRoomID - 1].base_score);

            let rule = subrooms[this.tableSubRoomID - 1].wanfa[this.tableSubRoomWanfaID - 1].item[2];
            if ((rule & 0x04) === 0) {
                this.iconParamNode.active = false;
            }
        }

        if (this.tableUsers.length > 0) {
            for (let i = 0; i < this.tableInfo.param.max_chair_count; i++) {
                if (this.tableUsers[i] !== undefined) {
                    let head = cc.instantiate(this.headPrefab);
                    head.name = 'head';
                    let headitem = head.getComponent('ClubHeadItem');
                    headitem.setHeadImgUrl(this.tableUsers[i].head_img_url);
                    this.playerNode[this.tableUsers[i].chairid - 1].addChild(head);
                }
            }
        }
    }

    onEnable() {
        EventManager.getInstance().on(TableEvent.USER_STATUS, this.onEventUserStatus, this);
        EventManager.getInstance().on(TableEvent.DELETE, this.onEventTableDelete, this);
    }

    start () {

    }

    // update (dt) {}

    onDisable() {
        EventManager.getInstance().off(TableEvent.USER_STATUS, this.onEventUserStatus, this);
        EventManager.getInstance().off(TableEvent.DELETE, this.onEventTableDelete, this);
    }

    onEventUserStatus(tableid: number, chairid: number, user: game.Iuser_info) {
        if (this.tableInfo && tableid === this.tableInfo.tableid) {
            if (user) {
                this.tableUsers[chairid - 1] = user;
                let head = this.playerNode[chairid - 1].getChildByName('head');
                if (head) {
                    head.active = true;
                    let headitem = head.getComponent('ClubHeadItem');
                    headitem.setHeadImgUrl(user.head_img_url);
                } else {
                    let head = cc.instantiate(this.headPrefab);
                    head.name = 'head';
                    let headitem = head.getComponent('ClubHeadItem');
                    headitem.setHeadImgUrl(user.head_img_url);
                    this.playerNode[user.chairid - 1].addChild(head);
                }
            } else {
                this.tableUsers[chairid - 1] = null;
                let head = this.playerNode[chairid - 1].getChildByName('head');
                head.active = false;
            }
        }
    }

    onEventTableDelete(tableid: number) {
        if (this.tableInfo && tableid === this.tableInfo.tableid) {
            this.node.destroy();
        }
    }

    onClickTable() {
        if (this.tableInfo) {
            UIManager.getInstance().addLayer('hall', 'prefabs/club/ClubEnterTableLayer', this.tableUsers, this.tableInfo);
        } else {
            UIManager.getInstance().addLayer('hall', 'prefabs/club/ClubEnterTableLayer2', this.tableSubRoomID, this.tableSubRoomWanfaID);
        }
    }
}
