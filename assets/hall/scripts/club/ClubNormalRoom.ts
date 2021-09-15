// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import EventManager from "../../../scripts/EventManager"
import GameModel from "../../../scripts/model/GameModel"
import GlobalModel from "../../../scripts/model/GlobalModel"
import UIManager from "../../../scripts/UIManager"
import Utils from "../../../scripts/Utils"
import { ClubEvent } from "../../../scripts/Constants"

const {ccclass, property} = cc._decorator;

const GameIconKindID: number[] = [ 2, 3, 2000, 5, 6, 7, 8, 9, 10, 11, 12, 1000 ];

@ccclass
export default class ClubNormalRoom extends cc.Component {

    @property(cc.Button)
    private btnEdit: cc.Button = null;
    @property(cc.Button)
    private btnRefresh: cc.Button = null;
    @property(cc.Node)
    private listNode: cc.Node = null;
    @property(cc.ScrollView)
    private tabLeftScrollView: cc.ScrollView = null;
    @property(cc.Layout)
    private tabBottomBtnsContainer: cc.Layout = null;
    @property([cc.Node])
    private tabBottomNormalBtns: cc.Node[] = [];
    @property([cc.SpriteFrame])
    private tabBottomNormalBtnSpriteFrames: cc.SpriteFrame[] = [];
    @property([cc.BitmapFont])
    private tabBottomNormalBtnFonts: cc.BitmapFont[] = [];
    @property([cc.Node])
    private tabBottomNoneBtns: cc.Node[] = [];
    @property([cc.Button])
    private buttonTabs: cc.Button[] = [];

    @property([cc.ScrollView])
    private scrollViewGames: cc.ScrollView[] = [];

    private lastSelectGameIndex: number = -1;
    private lastSelectedTabIndex: number = -1;

    private kindID: number = 0;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let visiSize = cc.view.getVisibleSize();
        let itemWidth = visiSize.width / 6;
        for (let i = 0; i < this.tabBottomNormalBtns.length; i++) {
            this.tabBottomNormalBtns[i].width = itemWidth;
            this.tabBottomNormalBtns[i].getChildByName('icon').width = itemWidth;
        }
        for (let i = 0; i < this.tabBottomNoneBtns.length; i++) {
            this.tabBottomNoneBtns[i].width = itemWidth;
            this.tabBottomNoneBtns[i].getChildByName('icon').width = itemWidth;
        }
    }

    onEnable() {
        EventManager.getInstance().on(ClubEvent.RELOAD, this.onEventReload, this);
    }

    start () {
    }

    // update (dt) {}

    onDisable() {
        EventManager.getInstance().off(ClubEvent.RELOAD, this.onEventReload, this);
    }

    public initGame(kindID: number) {
        this.reloadSubRoomTitle();
        this.activeScrollView(kindID);

        this.onClickGameIcon(null, GameIconKindID.indexOf(kindID).toString());
        this.onClickBottomTabButtons(null, '0');
    }

    private onEventReload (kindID: number) {
        this.reloadSubRoomTitle();

        if (this.kindID != kindID) {
            this.activeScrollView(kindID);
            // 游戏不同默认第一个
            this.onClickBottomTabButtons(null, '0');
            return;
        }

        EventManager.getInstance().emit(ClubEvent.INIT_SUBROOM, this.lastSelectedTabIndex === -1 ? 1 : this.lastSelectedTabIndex + 1);
    }

    private onClickBottomTabButtons(event: any, customEventData: string) {
        let idx = parseInt(customEventData);
        if (idx === this.lastSelectedTabIndex) {
            return;
        }

        if (this.lastSelectedTabIndex !== -1) {
            this.tabBottomNormalBtns[this.lastSelectedTabIndex].getChildByName('icon').getComponent(cc.Sprite).spriteFrame = this.tabBottomNormalBtnSpriteFrames[0];

            this.tabBottomNormalBtns[this.lastSelectedTabIndex].getChildByName('label').getComponent(cc.Label).font = this.tabBottomNormalBtnFonts[0];
            //this.tabBottomNormalBtns[this.lastSelectedTabIndex].getChildByName('labelNum').getComponent(cc.Label).color = cc.color();

            this.tabBottomNormalBtns[this.lastSelectedTabIndex].y -= 10;
        }

        this.tabBottomNormalBtns[idx].getChildByName('icon').getComponent(cc.Sprite).spriteFrame = this.tabBottomNormalBtnSpriteFrames[1];

        this.tabBottomNormalBtns[idx].getChildByName('label').getComponent(cc.Label).font = this.tabBottomNormalBtnFonts[1];
        //this.tabBottomNormalBtns[idx].getChildByName('labelNum').getComponent(cc.Label).color = cc.color();

        this.tabBottomNormalBtns[idx].y += 10;

        this.lastSelectedTabIndex = idx;

        EventManager.getInstance().emit(ClubEvent.INIT_SUBROOM, idx + 1);
    }

    private onClickGameIcon(event: any, customEventData: string) {
        let idx = parseInt(customEventData);
        if (idx !== this.lastSelectGameIndex) {
            if (this.lastSelectGameIndex !== -1) {
                if (GlobalModel.getInstance().roomList.has(GameIconKindID[idx])) {
                    GameModel.getInstance().enterRoom(GameIconKindID[idx]);
                } else {
                    UIManager.getInstance().showToast('房间未开放');
                    return;
                }
                this.buttonTabs[this.lastSelectGameIndex].node.scale = 1;
                this.buttonTabs[this.lastSelectGameIndex].node.getChildByName('bgMask').active = true;
            }

            this.buttonTabs[idx].node.scale = 1.05;
            this.buttonTabs[idx].node.getChildByName('bgMask').active = false;

            this.lastSelectGameIndex = idx;
        }
    }

    private reloadSubRoomTitle() {
        let subRoomsList = GameModel.getInstance().getSubRoomList();
        for (let i = 0; i < this.tabBottomNormalBtns.length; i++) {
            let subroom = subRoomsList[i];
            if (subroom != undefined && subroom.open) {
                this.tabBottomNormalBtns[i].getChildByName('label').getComponent(cc.Label).string = subroom.name;
                this.tabBottomNormalBtns[i].getChildByName('labelNum').getComponent(cc.Label).string = '准入:' + Utils.toMoney(subroom.min_enter_score);
                this.tabBottomNormalBtns[i].getChildByName('labelSoon').active = false;

                this.tabBottomNormalBtns[i].active = true;
            } else {
                // 有可能重连后subrooms有的已经关闭了 重置为第一个
                if (this.lastSelectedTabIndex == i) {
                    this.lastSelectedTabIndex = -1;
                }
                this.tabBottomNormalBtns[i].active = false;
            }
        }
    }

    private activeScrollView(newKindID: number) {
        if (this.kindID != 0 && newKindID != this.kindID) {
            let idx = GameIconKindID.indexOf(this.kindID);
            this.scrollViewGames[idx].node.active = false;
        }

        this.kindID = newKindID;
        let idx = GameIconKindID.indexOf(newKindID);
        this.scrollViewGames[idx].node.active = true;
    }
}
