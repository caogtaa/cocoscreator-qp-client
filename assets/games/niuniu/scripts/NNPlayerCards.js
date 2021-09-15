
import { MAX_PLAYER, ME_VIEWID } from "./NNConstants"

const POP_HEIGHT = 10;

cc.Class({
    extends: cc.Component,

    properties: {
        _playerCardsNode: [cc.Node],
        spriteCardBgBlack: cc.SpriteFrame,
        spriteCardBgWhite: cc.SpriteFrame,
        spriteframeCardRedNum: [cc.SpriteFrame],
        spriteframeCardBlackNum: [cc.SpriteFrame],
        spriteframeCardColor: [cc.SpriteFrame],
        spriteframeFlowerCardHeiTao: [cc.SpriteFrame],
        spriteframeFlowerCardHongTao: [cc.SpriteFrame],
        spriteframeFlowerCardMeiHua: [cc.SpriteFrame],
        spriteframeFlowerCardFangKuai: [cc.SpriteFrame],
        spriteframeCardTypeBg: [cc.SpriteFrame],
        spriteframeCardType: [cc.SpriteFrame],
        spriteframeCardTypeTimes: [cc.SpriteFrame],
        spriteframeCardJoker: [cc.SpriteFrame],
    },

    onLoad () {
        for (let i = 0; i < MAX_PLAYER; ++i) {
            this._playerCardsNode[i] = this.node.getChildByName('playercards' + i);
            this._playerCardsNode[i].srcpos = this._playerCardsNode[i].position;
            let nodecard = this._playerCardsNode[i].getChildByName('cards');
            this._playerCardsNode[i].nodeCards = [];
            for (let j = 0; j < 5; ++j) {
                this._playerCardsNode[i].nodeCards[j] = nodecard.getChildByName('card' + j);
                this._playerCardsNode[i].nodeCards[j].srcpos = this._playerCardsNode[i].nodeCards[j].position;
                this._playerCardsNode[i].nodeCards[j].sendcardSrcPos = nodecard.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(cc.v2(0, 0)));
                this._playerCardsNode[i].nodeCards[j].sendcardDstPos = this._playerCardsNode[i].nodeCards[j].position;
                this._playerCardsNode[i].nodeCards[j].imageCardBG = this._playerCardsNode[i].nodeCards[j].getChildByName('cardbg');
                this._playerCardsNode[i].nodeCards[j].nodeCardValue = this._playerCardsNode[i].nodeCards[j].getChildByName('cardvalue');
                this._playerCardsNode[i].nodeCards[j].nodeCardValue.imageValue = this._playerCardsNode[i].nodeCards[j].nodeCardValue.getChildByName('Image_value');
                this._playerCardsNode[i].nodeCards[j].nodeCardValue.imageCenter = this._playerCardsNode[i].nodeCards[j].nodeCardValue.getChildByName('Image_center');
            }
            this._playerCardsNode[i].nodeCardType = this._playerCardsNode[i].getChildByName('cardtype');
            this._playerCardsNode[i].nodeCardType.spriteBg = this._playerCardsNode[i].nodeCardType.getChildByName('Sprite_bg').getComponent(cc.Sprite);
            this._playerCardsNode[i].nodeCardType.spriteType = this._playerCardsNode[i].nodeCardType.getChildByName('Sprite_type').getComponent(cc.Sprite);
            this._playerCardsNode[i].nodeCardType.spriteTimes = this._playerCardsNode[i].nodeCardType.getChildByName('Sprite_times').getComponent(cc.Sprite);
        }
    },

    start () {

    },

    // update (dt) {},

    reset () {
        for (let i = 0; i < MAX_PLAYER; ++i) {
            this._playerCardsNode[i].active = false;
            this._playerCardsNode[i].scale = 1;
            this._playerCardsNode[i].nodeCardType.active = false;
            for (let j = 0; j < 5; ++j) {
                this._playerCardsNode[i].nodeCards[j].position = this._playerCardsNode[i].nodeCards[j].srcpos;
            }
        }
    },

    activePlayer(pos) {
        this._playerCardsNode[pos].active = true;
        for (let j = 0; j < 5; ++j) {
            this._playerCardsNode[pos].nodeCards[j].active = false;
        }
    },

    // 发牌
    sendCards (posArray, finishCallback) {
        this.reset();

        for (let i = 0; i < posArray.length; ++i) {
            let pos = posArray[i];
            this._playerCardsNode[pos].active = true;
            this._playerCardsNode[pos].nodeCardType.active = false;
            this._playerCardsNode[pos].nodeCards[4].active = false;
            for (let j = 0; j < 4; ++j) {
                this._playerCardsNode[pos].nodeCards[j].imageCardBG.getComponent(cc.Sprite).spriteFrame = this.spriteCardBgBlack;
                this._playerCardsNode[pos].nodeCards[j].nodeCardValue.active = false;
                this._playerCardsNode[pos].nodeCards[j].position = this._playerCardsNode[pos].nodeCards[j].sendcardSrcPos;
                this._playerCardsNode[pos].nodeCards[j].scale = 0;

                cc.tween(this._playerCardsNode[pos].nodeCards[j]).to(0.5, { position: this._playerCardsNode[pos].nodeCards[0].sendcardDstPos, scale: 1 }, { easing: 'sineIn'})
                .to(0.2, { position: this._playerCardsNode[pos].nodeCards[j].sendcardDstPos })
                .start();

                if (pos === ME_VIEWID && j === 3) {
                    cc.tween(this.node).delay(0.7).call(() => {
                        if (finishCallback) finishCallback();
                    }).start();
                }
            }
        }
    },

    // 最后一张牌
    sendLastCard (posArray, finishCallback) {
        for (let i = 0; i < posArray.length; ++i) {
            let pos = posArray[i];
            this._playerCardsNode[pos].nodeCards[4].active = true;
            this._playerCardsNode[pos].nodeCards[4].imageCardBG.getComponent(cc.Sprite).spriteFrame = this.spriteCardBgBlack;
            this._playerCardsNode[pos].nodeCards[4].nodeCardValue.active = false;
            this._playerCardsNode[pos].nodeCards[4].position = this._playerCardsNode[pos].nodeCards[4].sendcardSrcPos;
            this._playerCardsNode[pos].nodeCards[4].scale = 0;

            cc.tween(this._playerCardsNode[pos].nodeCards[4]).to(0.5, { position: this._playerCardsNode[pos].nodeCards[4].sendcardDstPos, scale: 1 }, { easing: 'sineIn'})
            .start();
        }
        cc.tween(this.node).delay(0.5).call(() => {
            if (finishCallback) finishCallback();
        }).start();
    },

    setCardData (pos, index, carddata) {
        if (carddata === 0) {
            this._playerCardsNode[pos].nodeCards[index].active = true;
            this._playerCardsNode[pos].nodeCards[index].imageCardBG.getComponent(cc.Sprite).spriteFrame = this.spriteCardBgBlack;
            this._playerCardsNode[pos].nodeCards[index].nodeCardValue.active = false;
            return;
        }
        this._playerCardsNode[pos].nodeCards[index].active = true;
        this._playerCardsNode[pos].nodeCards[index].nodeCardValue.active = true;

        if (carddata == 0x41 || carddata == 0x42) {
            this._playerCardsNode[pos].nodeCards[index].nodeCardValue.imageValue.active = false;
            this._playerCardsNode[pos].nodeCards[index].nodeCardValue.imageCenter.getComponent(cc.Sprite).spriteFrame = this.spriteframeCardJoker[(carddata & 0x0F) - 1];
        } else {
            let cardvalue = carddata & 0x0F;
            let cardcolor = (carddata & 0xF0) >>> 4;

            this._playerCardsNode[pos].nodeCards[index].nodeCardValue.imageValue.active = true;
            this._playerCardsNode[pos].nodeCards[index].nodeCardValue.imageCenter.getComponent(cc.Sprite).spriteFrame = this.spriteframeCardColor[cardcolor];
            if (cardcolor === 0 || cardcolor === 2) {
                this._playerCardsNode[pos].nodeCards[index].nodeCardValue.imageValue.getComponent(cc.Sprite).spriteFrame = this.spriteframeCardBlackNum[cardvalue - 1];
            } else {
                this._playerCardsNode[pos].nodeCards[index].nodeCardValue.imageValue.getComponent(cc.Sprite).spriteFrame = this.spriteframeCardRedNum[cardvalue - 1];
            }

            if (cardvalue > 10) {
                if (cardcolor === 0) {
                    this._playerCardsNode[pos].nodeCards[index].nodeCardValue.imageCenter.getComponent(cc.Sprite).spriteFrame = this.spriteframeFlowerCardFangKuai[cardvalue - 11];
                } else if (cardcolor === 1) {
                    this._playerCardsNode[pos].nodeCards[index].nodeCardValue.imageCenter.getComponent(cc.Sprite).spriteFrame = this.spriteframeFlowerCardMeiHua[cardvalue - 11];
                } else if (cardcolor === 2) {
                    this._playerCardsNode[pos].nodeCards[index].nodeCardValue.imageCenter.getComponent(cc.Sprite).spriteFrame = this.spriteframeFlowerCardHongTao[cardvalue - 11];
                } else {
                    this._playerCardsNode[pos].nodeCards[index].nodeCardValue.imageCenter.getComponent(cc.Sprite).spriteFrame = this.spriteframeFlowerCardHeiTao[cardvalue - 11];
                }
            }
        }
    },

    // 开牌
    openCards(pos, cardsArray, cardType, times) {
        if (cardsArray.length !== 5) {
            cc.error('扑克数据错误');
            return;
        }

        for (let i = 0; i < cardsArray.length; ++i) {
            this.setCardData(pos, i, cardsArray[i]);
        }

        this._playerCardsNode[pos].nodeCardType.active = true;
        if (cardType === 0) {
            this._playerCardsNode[pos].nodeCardType.spriteBg.spriteFrame = this.spriteframeCardTypeBg[0];
        } else if (cardType > 0 && cardType < 7) {
            this._playerCardsNode[pos].nodeCardType.spriteBg.spriteFrame = this.spriteframeCardTypeBg[1];
        } else if (cardType >= 7 && cardType < 10) {
            this._playerCardsNode[pos].nodeCardType.spriteBg.spriteFrame = this.spriteframeCardTypeBg[2];
        } else {
            this._playerCardsNode[pos].nodeCardType.spriteBg.spriteFrame = this.spriteframeCardTypeBg[3];
        }
        this._playerCardsNode[pos].nodeCardType.spriteType.spriteFrame = this.spriteframeCardType[cardType];
        this._playerCardsNode[pos].nodeCardType.spriteTimes.spriteFrame = this.spriteframeCardTypeTimes[times - 1];

        let position = this._playerCardsNode[pos].nodeCardType.spriteBg.node.position;
        this._playerCardsNode[pos].nodeCardType.spriteBg.node.position = cc.v2(position.x, position.y - 10);
        this._playerCardsNode[pos].nodeCardType.spriteBg.node.opacity = 125;
        cc.tween(this._playerCardsNode[pos].nodeCardType.spriteBg.node).to(0.25, {position: position, opacity: 255}).start();

        if (pos === 0) {
            this._playerCardsNode[pos].scale = 0.5;
            for (let i = 3; i < 5; ++i) {
                this._playerCardsNode[pos].nodeCards[i].position = cc.v2(this._playerCardsNode[pos].nodeCards[i].srcpos.x + 20, this._playerCardsNode[pos].nodeCards[i].srcpos.y);
            }
        } else if (pos >=1 && pos <= 3) {
            for (let i = 0; i < 3; ++i) {
                this._playerCardsNode[pos].nodeCards[i].position = cc.v2(this._playerCardsNode[pos].nodeCards[i].srcpos.x - 10, this._playerCardsNode[pos].nodeCards[i].srcpos.y);
            }
        } else {
            for (let i = 3; i < 5; ++i) {
                this._playerCardsNode[pos].nodeCards[i].position.x += cc.v2(this._playerCardsNode[pos].nodeCards[i].srcpos.x + 10, this._playerCardsNode[pos].nodeCards[i].srcpos.y);
            }
        }
    }
});
