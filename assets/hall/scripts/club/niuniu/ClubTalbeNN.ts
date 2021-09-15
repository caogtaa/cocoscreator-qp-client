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
export default class ClubTalbeNN extends cc.Component {

    @property(cc.Prefab)
    private itemPrefab: cc.Prefab = null;
    @property(cc.Node)
    private contentNode: cc.Node = null;

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

    private onEventTableCreate(tableInfo: game.Itable_info) {
        let item = cc.instantiate(this.itemPrefab);
        let script = item.getComponent('ClubTableItemNN');
        script.initTableData(tableInfo, null);
        this.contentNode.addChild(item);
    }

    private onEventInitSubRoom(data) {
        this.contentNode.removeAllChildren();

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
            let col = 0;

            // 添加固定的桌子用于快速进入
            for (let i = 0; i < subrooms[data - 1].wanfa.length; ++i) {
                let item = cc.instantiate(self.itemPrefab);
                let script = item.getComponent('ClubTableItemNN');
                script.initTableData(null, null, subroomid, i + 1);
                self.contentNode.addChild(item);

                col++;
                if (col % 2 === 0) {
                    width += item.width;
                }
            }

            GameModel.getInstance().getTableList().forEach(function (value, key, map) {
                if (value.subroomid === subroomid) {
                    let item = cc.instantiate(self.itemPrefab);
                    let script = item.getComponent('ClubTableItemNN');
                    script.initTableData(value, tablesUserInfo.get(key));
                    self.contentNode.addChild(item);

                    col++;
                    if (col % 2 === 0) {
                        width += item.width;
                    }
                }
            });
            self.contentNode.width = width;
        } else {
            // 显示所有桌子
            let tablesUserInfo = new Map();
            GameModel.getInstance().getTableList().forEach(function (value, key, map) {
                tablesUserInfo.set(key, []);
            });

            GameModel.getInstance().getUserList().forEach(function (value, key, map) {
                if (value.tableid !== 0 && value.chairid !== 0) {
                    tablesUserInfo.get(value.tableid)[value.chairid - 1] = value;
                }
            });

            let self = this;
            let width = 0;
            let col = 0;

            for (let i = 0; i < subrooms.length; ++i) {
                let subroomid = subrooms[i].subroomid;
                for (let j = 0; j < subrooms[i].wanfa.length; ++j) {
                    let item = cc.instantiate(self.itemPrefab);
                    let script = item.getComponent('ClubTableItemNN');
                    script.initTableData(null, null, subroomid, j + 1);
                    self.contentNode.addChild(item);
                    
                    col++;
                    if (col % 2 === 0) {
                        width += item.width;
                    }
                }
            }

            GameModel.getInstance().getTableList().forEach(function (value, key, map) {
                let item = cc.instantiate(self.itemPrefab);
                let script = item.getComponent('ClubTableItemNN');
                script.initTableData(value, tablesUserInfo.get(key));
                self.contentNode.addChild(item);
                
                col++;
                if (col % 2 === 0) {
                    width += item.width;
                }
            });
            self.contentNode.width = width;
        }
    }
}
