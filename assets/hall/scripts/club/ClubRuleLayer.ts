// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import UIManager from "../../../scripts/UIManager"
import GameModel from "../../../scripts/model/GameModel"

const {ccclass, property} = cc._decorator;

const GameTitleKindID: number[] = [ 2, 2000 ];

// 游戏玩法介绍一栏的标题数量
const GameTitleItemCount: number[] = [5, 4];

@ccclass
export default class ClubRuleLayer extends cc.Component {

    @property([cc.Toggle])
    private toggleGames: cc.Toggle[] = [];
    @property([cc.Node])
    private nodeGames: cc.Node[] = [];
    @property(cc.Node)
    private nodeArrowUp: cc.Node = null;
    @property(cc.Node)
    private nodeArrowDown: cc.Node = null;

    // 子游戏的标题对应的滚动视图
    private nodeGameTitleScrollView = [];

    private kindID: number = 0;

    onInit(kindID: number) {
        this.kindID = kindID;
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        for (let i = 0; i < this.nodeGames.length; ++i) {
            let node = this.nodeGames[i];
            let toggleContainer = node.getChildByName('New ToggleContainer');
            let scrolls = [];
            for (let j = 0; j < GameTitleItemCount[i]; ++j) {
                let toggle = toggleContainer.getChildByName('toggle' + (j + 1));
                toggle.name = (i * 10000 + j).toString();
                toggle.on('toggle', this.onClickGameTitle, this);
                let scrollview = node.getChildByName('scrollView' + (j + 1));
                scrolls.push(scrollview);
            }
            this.nodeGameTitleScrollView.push(scrolls);
        }

        this.nodeArrowUp.active = false;
        this.nodeArrowDown.active = false;

        if (this.kindID > 0) {
            let idx = GameTitleKindID.indexOf(this.kindID);
            this.toggleGames[idx].isChecked = true;
            this.onClickTitle(this.toggleGames[idx], idx.toString());
        }
    }

    start () {

    }

    // update (dt) {}

    private onClickTitle(toggle: cc.Toggle, customEventData: string) {
        let index = parseInt(customEventData);
        for (let i = 0; i < this.nodeGames.length; ++i) {
            if (i == index) {
                this.nodeGames[i].active = true;
            } else {
                this.nodeGames[i].active = false;
            }
        }
    }

    private onClickGameTitle(toggle: cc.Toggle) {
        let v = parseInt(toggle.node.name);
        let i = Math.floor(v / 10000);
        let j = v % 10;
        for (let idx = 0; idx < GameTitleItemCount[i]; ++idx) {
            if (j == idx) {
                this.nodeGameTitleScrollView[i][idx].active = true;
            } else {
                this.nodeGameTitleScrollView[i][idx].active = false;
            }
        }
    }

    private onClickClose() {
        UIManager.getInstance().removeLayer('hall', 'prefabs/club/ClubRuleLayer');
    }
}
