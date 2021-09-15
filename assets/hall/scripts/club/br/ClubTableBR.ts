// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { game } from "../../../../scripts/proto"
import GameModel from "../../../../scripts/model/GameModel"
import { TableEvent, UserStatus, ClubEvent } from "../../../../scripts/Constants"
import EventManager from "../../../../scripts/EventManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ClubTableBR extends cc.Component {

    @property(cc.Prefab)
    private prefabTableItem: cc.Prefab = null;

    @property(cc.Node)
    private nodeScrollViewContent: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
    }

    onEnable() {
        EventManager.getInstance().on(TableEvent.CREATE, this.onEventTableCreate, this);
        EventManager.getInstance().on(ClubEvent.INIT_SUBROOM, this.onEventInitSubRoom, this);
    }

    start () {

    }

    // update (dt) {}

    onDisable() {
        EventManager.getInstance().off(TableEvent.CREATE, this.onEventTableCreate, this);
        EventManager.getInstance().off(ClubEvent.INIT_SUBROOM, this.onEventInitSubRoom, this);
    }

    onDestroy () {
    }

    onEventTableCreate(tableInfo: game.Itable_info) {
        let item = cc.instantiate(this.prefabTableItem);
        let script = item.getComponent('ClubTableItemBR');
        script.initTableData(tableInfo, null, tableInfo.subroomid, 1);
        this.nodeScrollViewContent.addChild(item);
    }

    onEventInitSubRoom(data: number) {
        this.nodeScrollViewContent.removeAllChildren();

        let subrooms = GameModel.getInstance().getSubRoomList();
        if (data > 0) {
            let subroomid = subrooms[data - 1].subroomid

            let tablesUserInfo = new Map();
            GameModel.getInstance().getTableList().forEach(function (value, key, map) {
                if (value.subroomid === subroomid) {
                    tablesUserInfo.set(key, []);
                }
            });

            GameModel.getInstance().getUserList().forEach(function (value, key, map) {
                if (value.tableid !== 0 && value.chairid !== 0 && value.user_status !== UserStatus.OB) {
                    let v = tablesUserInfo.get(value.tableid);
                    if (v) {
                        v[value.chairid - 1] = value;
                    }
                }
            });

            let self = this;
            let width = 0;

            GameModel.getInstance().getTableList().forEach(function (value, key, map) {
                if (value.subroomid === subroomid) {
                    let item = cc.instantiate(self.prefabTableItem);
                    let script = item.getComponent('ClubTableItemBR');
                    script.initTableData(value, tablesUserInfo.get(key), subroomid);
                    self.nodeScrollViewContent.addChild(item);

                    width += item.width;
                }
            });
            self.nodeScrollViewContent.width = width;
        }
    }
}
