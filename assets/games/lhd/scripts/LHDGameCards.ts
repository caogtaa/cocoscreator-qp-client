// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class LHDGameCards extends cc.Component {

    @property(cc.Node)
    private gameCard: cc.Node = null;
    @property(cc.SpriteAtlas)
    private cardAtlas: cc.SpriteAtlas = null;

    @property
    private cardScale: number = 0.4;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}

    public reset() {
        this.node.removeAllChildren();
    }

    public sendCards(noani: boolean = false) {
        let card = cc.instantiate(this.gameCard);
        card.active = true;
        card.scale = this.cardScale;
        card.getChildByName('typeNode').active = false;
        card.getChildByName('valueNode').active = false;
        card.getComponent(cc.Sprite).spriteFrame = this.cardAtlas.getSpriteFrame('pic_poker_bm');
        card.x = 0;
        card.y = 220;
        card.name = 'long';
        this.node.addChild(card);
        if (noani) {
            card.x = -270;
            card.y = 220;
        } else {
            cc.tween(card).to(0.25, { position: cc.v3(-270, 220, 0) }).start();
        }

        card = cc.instantiate(this.gameCard);
        card.active = true;
        card.scale = this.cardScale;
        card.getChildByName('typeNode').active = false;
        card.getChildByName('valueNode').active = false;
        card.getComponent(cc.Sprite).spriteFrame = this.cardAtlas.getSpriteFrame('pic_poker_bm');
        card.x = 0;
        card.y = 220;
        card.name = 'hu';
        this.node.addChild(card);
        if (noani) {
            card.x = 270;
            card.y = 220;
        } else {
            cc.tween(card).to(0.25, { position: cc.v3(270, 220, 0) }).start();
        }
    }

    public openCards(data: number[]) {
        let cardlong = this.node.getChildByName('long');
        let self = this;
        cc.tween(cardlong).to(0.2, { scale: 0.5 }).to(0.17, { scaleX: 0.5 * 0.1, scaleY: 0.5}).call(() => {
            cardlong.getComponent(cc.Sprite).spriteFrame = self.cardAtlas.getSpriteFrame('pic_poker_px_5');
            let typenode = cardlong.getChildByName('typeNode');
            typenode.active = true;
            typenode.getComponent(cc.Sprite).spriteFrame = self.getCardColor(data[0]);
            let valueNode = cardlong.getChildByName('valueNode');
            valueNode.active = true;
            valueNode.getComponent(cc.Sprite).spriteFrame = self.getCardValue(data[0]);
        }).to(0.17, { scaleX: 0.5, scaleY: 0.5 }).to(0.2, { scale: 0.4 }).start();
        
        let cardhu = this.node.getChildByName('hu');
        cc.tween(cardhu).delay(0.5).to(0.2, { scale: 0.5 }).to(0.17, { scaleX: 0.5 * 0.1, scaleY: 0.5}).call(() => {
            cardhu.getComponent(cc.Sprite).spriteFrame = self.cardAtlas.getSpriteFrame('pic_poker_px_5');
            let typenode = cardhu.getChildByName('typeNode');
            typenode.active = true;
            typenode.getComponent(cc.Sprite).spriteFrame = self.getCardColor(data[1]);
            let valueNode = cardhu.getChildByName('valueNode');
            valueNode.active = true;
            valueNode.getComponent(cc.Sprite).spriteFrame = self.getCardValue(data[1]);
        }).to(0.17, { scaleX: 0.5, scaleY: 0.5 }).to(0.2, { scale: 0.4 }).start();
    }

    private getCardColor(data: number): cc.SpriteFrame {
        let cvalue = data&0x0F;
        let ccolor = (data&0xF0) >>> 4;
        if (cvalue > 10) {
            let colorStr: string[] = [ 'pic_poker_fangkuai_', 'pic_poker_meihua_', 'pic_poker_hongtao_', 'pic_poker_heitao_' ];
            return this.cardAtlas.getSpriteFrame(colorStr[ccolor] + cvalue);
        } else {
            let colorStr: string[] = [ 'pic_poker_px_2', 'pic_poker_px_1', 'pic_poker_px_3', 'pic_poker_px_4' ];
            return this.cardAtlas.getSpriteFrame(colorStr[ccolor]);
        }
    }

    private getCardValue(data: number): cc.SpriteFrame {
        let cvalue = data&0x0F;
        let ccolor = (data&0xF0) >>> 4;
        if (ccolor === 1 || ccolor === 3) {
            return this.cardAtlas.getSpriteFrame('pic_poker_a_' + cvalue);
        } else {
            return this.cardAtlas.getSpriteFrame('pic_poker_b_' + cvalue);
        }
    }

    public setCardsData(data: number[]) {
        let cardlong = this.node.getChildByName('long');
        cardlong.getComponent(cc.Sprite).spriteFrame = this.cardAtlas.getSpriteFrame('pic_poker_px_5');
        let typenode = cardlong.getChildByName('typeNode');
        typenode.active = true;
        typenode.getComponent(cc.Sprite).spriteFrame = this.getCardColor(data[0]);
        let valueNode = cardlong.getChildByName('valueNode');
        valueNode.active = true;
        valueNode.getComponent(cc.Sprite).spriteFrame = this.getCardValue(data[0]);
        
        let cardhu = this.node.getChildByName('hu');
        cardhu.getComponent(cc.Sprite).spriteFrame = this.cardAtlas.getSpriteFrame('pic_poker_px_5');
        typenode = cardhu.getChildByName('typeNode');
        typenode.active = true;
        typenode.getComponent(cc.Sprite).spriteFrame = this.getCardColor(data[1]);
        valueNode = cardhu.getChildByName('valueNode');
        valueNode.active = true;
        valueNode.getComponent(cc.Sprite).spriteFrame = this.getCardValue(data[1]);
    }
}
