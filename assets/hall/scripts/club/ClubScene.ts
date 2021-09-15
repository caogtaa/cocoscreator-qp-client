// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import EventManager from "../../../scripts/EventManager"
import AudioManager from "../../../scripts/AudioManager"
import GameModel from "../../../scripts/model/GameModel"
import UIManager from "../../../scripts/UIManager"
import { GlobalEvent } from "../../../scripts/Constants"
import Utils from "../../../scripts/Utils"
import GlobalModel from "../../../scripts/model/GlobalModel"

const {ccclass, property} = cc._decorator;

@ccclass
export default class ClubScene extends cc.Component {

    @property(cc.Label)
    private labelGold: cc.Label = null;
    @property(cc.Node)
    private nodeNormal: cc.Node = null;
    @property(cc.Node)
    private nodePrivate: cc.Node = null;    // 私人场暂时不做处理

    private kindID: number = 0;

    onInit(kindID: number) {
        this.kindID = kindID;
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.labelGold.string = Utils.toMoney(GlobalModel.getInstance().globalUserData.score).toString();

        EventManager.getInstance().on(GlobalEvent.UPDATE_SCORE, this.onEventUpdateScore, this);
    }

    start () {
        if (this.kindID != 0) {
            this.nodeNormal.getComponent('ClubNormalRoom').initGame(this.kindID);
        }

        AudioManager.getInstance().playHallMusic();
    }

    onDestroy() {
        EventManager.getInstance().off(GlobalEvent.UPDATE_SCORE, this.onEventUpdateScore, this);
    }

    // update (dt) {}

    private onClickBack() {
        GameModel.getInstance().leaveRoom();
    }

    private onClickGameRecords() {
        UIManager.getInstance().addLayer('hall', 'prefabs/club/ClubRecordLayer');
    }

    private onClickTeam() {
        UIManager.getInstance().addLayer('hall', 'prefabs/TeamLayer');
    }

    private onClickSetting() {
        UIManager.getInstance().addLayer('hall', 'prefabs/SettingLayer');
    }

    private onEventUpdateScore() {
        this.labelGold.string = Utils.toMoney(GlobalModel.getInstance().globalUserData.score).toString();
    }
}
