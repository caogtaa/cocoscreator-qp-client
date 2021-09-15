// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

import { Area } from "./LHDConstants"

const MAX_RECORD_COUNT = 18;

@ccclass
export default class LHDGameRecord extends cc.Component {

    @property(cc.Label)
    private labelLong: cc.Label = null;
    @property(cc.Label)
    private labelHu: cc.Label = null;

    @property(cc.Node)
    private nodeZouShi: cc.Node = null;
    @property(cc.Node)
    private nodeZouShiItem: cc.Node = null;
    @property(cc.Node)
    private nodeZouShiIconNew: cc.Node = null;
    @property([cc.SpriteFrame])
    private zouShiItemFrames: cc.SpriteFrame[] = [];

    @property(cc.Node)
    private nodePaiLu: cc.Node = null;
    @property(cc.Node)
    private nodePaiLuItem: cc.Node = null;
    @property([cc.SpriteFrame])
    private paiLuItemFrames: cc.SpriteFrame[] = [];

    private gameRecords: Area[] = [];
    private pailuRecords: { area: Area, count: number }[] = [];

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
    }

    start () {

    }

    // update (dt) {}

    public reset() {
        this.nodeZouShi.removeAllChildren();
        this.nodePaiLu.removeAllChildren();
        this.gameRecords = [];
        this.pailuRecords = [];
    }

    public addRecord(winArea: Area) {
        this.addZouShiItem(winArea);
        this.addPaiLuRecord(winArea);

        let area: number[] = [ 0, 0, 0 ];
        for (let item of this.gameRecords) {
            area[item]++;
        }
        this.labelLong.string = (area[0] * 100 / this.gameRecords.length).toFixed(2) + '%';
        this.labelHu.string = (area[1] * 100 / this.gameRecords.length).toFixed(2) + '%';
    }

    private onClickClose() {
        this.node.active = false;
    }

    private addZouShiItem(winArea: Area) {
        if (this.gameRecords.length === MAX_RECORD_COUNT) {
            this.gameRecords.shift();
            this.nodeZouShi.children.shift();
        }
        else if (this.gameRecords.length >= 1) {
            this.nodeZouShiIconNew.x += 52.2;
        } else {
            this.nodeZouShiIconNew.active = true;
        }

        this.gameRecords.push(winArea);
        let item = cc.instantiate(this.nodeZouShiItem)
        item.getComponent(cc.Sprite).spriteFrame = this.zouShiItemFrames[winArea];
        this.nodeZouShi.addChild(item);
    }

    private addPaiLuRecord(winArea: Area) {
        let last = this.pailuRecords[this.pailuRecords.length - 1];
        if (this.pailuRecords.length === MAX_RECORD_COUNT && (last.area !== winArea || last.count === 7)) {
            this.pailuRecords.shift();
            this.nodePaiLu.children.shift();
        }

        if (this.pailuRecords.length === 0 || last.area !== winArea) {
            let itemNode = cc.instantiate(this.nodePaiLuItem);
            itemNode.getChildByName('item').getComponent(cc.Sprite).spriteFrame = this.paiLuItemFrames[winArea];
            this.nodePaiLu.addChild(itemNode);
            this.pailuRecords.push({ area: winArea, count: 1 });
        } else {
            if (this.pailuRecords[this.pailuRecords.length - 1].count === 7) {
                let itemNode = cc.instantiate(this.nodePaiLuItem);
                itemNode.getChildByName('item').getComponent(cc.Sprite).spriteFrame = this.paiLuItemFrames[winArea];
                this.nodePaiLu.addChild(itemNode);
                this.pailuRecords.push({ area: winArea, count: 1 });
            } else {
                let itemNode = this.nodePaiLu.children[this.nodePaiLu.childrenCount - 1];
                let item = cc.instantiate(itemNode.children[itemNode.childrenCount - 1]);
                item.getComponent(cc.Sprite).spriteFrame = this.paiLuItemFrames[winArea];
                item.y -= 40.5;
                itemNode.addChild(item);
                this.pailuRecords[this.pailuRecords.length - 1].count++;
            }
        }
    }
}
