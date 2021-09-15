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
export default class TeamLayer extends cc.Component {

    @property([cc.Toggle])
    private togglePages: cc.Toggle[] = [];
    @property([cc.Node])
    private nodePages: cc.Node[] = [];
    @property(cc.Node)
    private nodeTeamAD: cc.Node = null;
    @property(cc.Node)
    private nodeTeamNone: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let globalUserData = GlobalModel.getInstance().globalUserData;
        if (globalUserData.selected_clubid == 0) {
            for (let i = 1; i < this.togglePages.length; ++i) {
                this.togglePages[i].node.active = false;
            }
            this.nodeTeamNone.active = true;
        } else if (globalUserData.mobilephone == '') {
            this.nodeTeamAD.active = true;
        } else {
            this.nodePages[0].active = true;
        }

        EventManager.getInstance().on('hall.response_operate_result', this.response_operate_result, this);
    }

    start () {

    }

    onDestroy() {
        EventManager.getInstance().off('hall.response_operate_result', this.response_operate_result, this);
    }

    // update (dt) {}

    private onClickClose() {
        UIManager.getInstance().removeLayer('hall', 'prefabs/TeamLayer');
    }

    private onClickToggles(toggle: cc.Toggle) {
        let index = this.togglePages.indexOf(toggle);
        if (GlobalModel.getInstance().globalUserData.mobilephone != '') {
            for (let i = 0; i < this.togglePages.length; ++i) {
                if (i == index) {
                    this.nodePages[i].active = true;
                } else {
                    this.nodePages[i].active = false;
                }
            }
        }
    }

    private onClickCreateClub() {
        UIManager.getInstance().addLayer('hall', 'prefabs/TeamCreateClubLayer');
    }

    private onClickJoinClub() {
        UIManager.getInstance().addLayer('hall', 'prefabs/TeamJoinClubLayer');
    }

    private response_operate_result(msg: hall.response_operate_result) {
        UIManager.getInstance().hideLoadingTip();

        UIManager.getInstance().showToast(msg.reason);
    }
}
