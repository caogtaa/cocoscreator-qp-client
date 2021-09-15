
import { game } from "../../../../scripts/proto"
import GameModel from "../../../../scripts/model/GameModel"
import { TableEvent, UserStatus } from "../../../../scripts/Constants"
import EventManager from "../../../../scripts/EventManager"
import Utils from "../../../../scripts/Utils"

const {ccclass, property} = cc._decorator;

@ccclass
export default class ClubTableItemBR extends cc.Component {

    @property(cc.Label)
    private labelGameName: cc.Label = null;
    @property(cc.Label)
    private labelBet: cc.Label = null;
    @property(cc.Label)
    private labelBanker: cc.Label = null;
    @property(cc.Label)
    private labelNum: cc.Label = null;
    @property([cc.Node])
    private nodePlayers: cc.Node[] = [];
    @property([cc.Node])
    private nodeBankers: cc.Node[] = [];
    @property(cc.Prefab)
    private prefabHeadItem: cc.Prefab = null;

    private tableInfo: game.Itable_info = null;
    private tableUsers: Array<game.Iuser_info> = null;
    private tableBankerUsers: Array<game.Iuser_info> = [];
    private nodeBankersUsed: cc.Node[] = [];
    private subRoomID: number = null;
    private subRoomWanfaID: number = null;

    public initTableData(tableInfo: game.Itable_info, users: Array<game.Iuser_info>, subroomid: number, subroomWanfaID: number) {
        this.tableInfo = tableInfo;
        this.tableUsers = users;
        if (this.tableUsers == undefined) {
            this.tableUsers = [];
        }
        this.subRoomID = subroomid;
        this.subRoomWanfaID = subroomWanfaID;
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        for (let item of this.nodeBankers) {
            item.active = false;
        }

        let subrooms = GameModel.getInstance().getSubRoomList();
        this.labelGameName.string = subrooms[this.tableInfo.subroomid - 1].name;
        if (this.tableInfo.param.wanfa.item[0] != 0) {
            this.labelGameName.string = '拼庄' + subrooms[this.tableInfo.subroomid - 1].name;
        }
        this.labelBet.string = '下注需要：' + Utils.toMoney(this.tableInfo.param.wanfa.item[1]);
        this.labelBanker.string = '上庄需要：' + Utils.toMoney(this.tableInfo.param.wanfa.item[2]);

        if (this.tableUsers.length > 0) {
            for (let i = 0; i < this.tableInfo.param.max_chair_count; ++i) {
                let user = this.tableUsers[i];
                if (user !== undefined) {
                    if (user.banker) {
                        // 加入庄家列表
                        let nodeBanker = this.nodeBankers.pop();
                        nodeBanker.active = true;
                        let head = nodeBanker.getChildByName('playerHead').getChildByName('head');
                        if (head) {
                            let script = head.getComponent('ClubHeadItem');
                            script.setHeadImgUrl(user.head_img_url);
                        }
                        else
                        {
                            let head = cc.instantiate(this.prefabHeadItem);
                            head.name = 'head';
                            let script = head.getComponent('ClubHeadItem');
                            script.setHeadImgUrl(user.head_img_url);
                            nodeBanker.getChildByName('playerHead').addChild(head);
                        }
                        this.nodeBankersUsed.push(nodeBanker);
                        this.tableBankerUsers.push(user);
                    } else if (user.chairid <= this.nodePlayers.length) {
                        let head = cc.instantiate(this.prefabHeadItem);
                        head.name = 'head';
                        let headscript = head.getComponent('ClubHeadItem');
                        headscript.setHeadImgUrl(user.head_img_url);
                        this.nodePlayers[user.chairid - 1].addChild(head);
                    }
                }
            }
            this.countOnline();
        }
    }

    onEnable() {
        EventManager.getInstance().on(TableEvent.USER_STATUS, this.onEventUserStatus, this);
        EventManager.getInstance().on(TableEvent.BANKER_STATUS, this.onEventBankerStatus, this);
        EventManager.getInstance().on(TableEvent.DELETE, this.onEventTableDelete, this);
    }

    start () {

    }

    // update (dt) {}

    onDisable() {
        EventManager.getInstance().off(TableEvent.USER_STATUS, this.onEventBankerStatus, this);
        EventManager.getInstance().off(TableEvent.BANKER_STATUS, this.onEventUserStatus, this);
        EventManager.getInstance().off(TableEvent.DELETE, this.onEventTableDelete, this);
    }

    onEventBankerStatus(tableid: number, chairid: number, user: game.Iuser_info) {
        if (this.tableInfo && tableid === this.tableInfo.tableid) {
            if (user.banker) {
                // 加入庄家列表
                let nodeBanker = this.nodeBankers.pop();
                nodeBanker.active = true;
                let head = nodeBanker.getChildByName('playerHead').getChildByName('head');
                if (head) {
                    head.active = true;
                    let script = head.getComponent('ClubHeadItem');
                    script.setHeadImgUrl(user.head_img_url);
                }
                else
                {
                    let head = cc.instantiate(this.prefabHeadItem);
                    head.name = 'head';
                    let script = head.getComponent('ClubHeadItem');
                    script.setHeadImgUrl(user.head_img_url);
                    nodeBanker.getChildByName('playerHead').addChild(head);
                }
                this.nodeBankersUsed.push(nodeBanker);
                this.tableBankerUsers.push(user);
            } else {
                // 从庄家列表移除
                for (let i = 0; i < this.tableBankerUsers.length; ++i) {
                    if (this.tableBankerUsers[i].userid == user.userid) {
                        let nodeBanker = this.nodeBankersUsed.splice(i, 1)[0];
                        nodeBanker.active = false;
                        this.nodeBankers.push(nodeBanker);
                        this.tableBankerUsers.splice(i, 1);
                        break;
                    }
                }
            }

            if (chairid <= this.nodePlayers.length) {
                if (user.banker) {
                    let head = this.nodePlayers[chairid - 1].getChildByName('head');
                    head.active = false;
                } else {
                    let head = this.nodePlayers[chairid - 1].getChildByName('head');
                    if (head) {
                        head.active = true;
                        let script = head.getComponent('ClubHeadItem');
                        script.setHeadImgUrl(user.head_img_url);
                    }
                    else
                    {
                        let head = cc.instantiate(this.prefabHeadItem);
                        head.name = 'head';
                        let script = head.getComponent('ClubHeadItem');
                        script.setHeadImgUrl(user.head_img_url);
                        this.nodePlayers[chairid - 1].addChild(head);
                    }
                }
            }
        }
    }

    onEventUserStatus(tableid: number, chairid: number, user: game.Iuser_info) {
        if (this.tableInfo && tableid === this.tableInfo.tableid) {
            if (user) {
                this.tableUsers[chairid - 1] = user;
                if (chairid <= this.nodePlayers.length) {
                    let head = this.nodePlayers[chairid - 1].getChildByName('head');
                    if (head) {
                        head.active = true;
                        let script = head.getComponent('ClubHeadItem');
                        script.setHeadImgUrl(user.head_img_url);
                    }
                    else
                    {
                        let head = cc.instantiate(this.prefabHeadItem);
                        head.name = 'head';
                        let script = head.getComponent('ClubHeadItem');
                        script.setHeadImgUrl(user.head_img_url);
                        this.nodePlayers[chairid - 1].addChild(head);
                    }
                }
            }
            else {
                this.tableUsers[chairid - 1] = null;
                if (chairid <= this.nodePlayers.length) {
                    let head = this.nodePlayers[chairid - 1].getChildByName('head');
                    head.active = false;
                }
            }
            this.countOnline();
        }
    }

    onEventTableDelete(tableid: number) {
        if (this.tableInfo && tableid === this.tableInfo.tableid) {
            this.node.destroy();
        }
    }

    onClickTable() {
        // 百人直接进游戏
        GameModel.getInstance().requestSitdown(this.tableInfo.tableid, 0);
    }

    private countOnline() {
        let count = 0;
        for (let i = 0; i < this.tableInfo.param.max_chair_count; ++i) {
            let user = this.tableUsers[i];
            if (user !== undefined) {
                count++;
            }
        }
        this.labelNum.string = count.toString();
    }
}
