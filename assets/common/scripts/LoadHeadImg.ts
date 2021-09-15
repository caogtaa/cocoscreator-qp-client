// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import AssetManager from "../../scripts/AssetManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoadHeadImg extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}

    setHeadImgUrl(headImgUrl: string) {
        if (headImgUrl == '') return;

        // 原生平台 判断文件已经下载过
        if (CC_JSB) {
            let cacheDir = cc.assetManager.cacheManager.getCache(headImgUrl);
            if (cacheDir != '') {
                cc.assetManager.loadRemote(headImgUrl, {ext: '.jpg'}, (err, tex: cc.Texture2D) => {
                    if (err) {
                        cc.error(err);
                        return;
                    }
                    if (!cc.isValid(this.node, true)) {
                        return;
                    }
    
                    let spriteFrame = new cc.SpriteFrame(tex);
                    if (spriteFrame) {
                        this.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    }
                });
                return;
            }
        }

        AssetManager.getInstance().load('common', 'prefabs/LoadingImg', cc.Prefab, null, (err, prefab: cc.Prefab) => {
            if (err) {
                cc.log(err.message || err);
                return;
            }
            if (!cc.isValid(this.node, true)) {
                return;
            }
            let loadingnode = cc.instantiate(prefab);
            loadingnode.scaleX = this.node.width / loadingnode.width;
            loadingnode.scaleY = this.node.height / loadingnode.height;
            this.node.addChild(loadingnode);
    
            cc.assetManager.loadRemote(headImgUrl, {ext: '.jpg'}, (err, tex: cc.Texture2D) => {
                if (err) {
                    cc.error(err);
                    return;
                }
                if (!cc.isValid(this.node, true)) {
                    return;
                }

                let spriteFrame = new cc.SpriteFrame(tex);
                if (spriteFrame) {
                    this.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                }
                loadingnode.destroy();
            });
        });
    }
}
