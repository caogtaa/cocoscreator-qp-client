// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import AudioManager from "../../scripts/AudioManager"
import UIManager from "../../scripts/UIManager"

const {ccclass, property} = cc._decorator;

@ccclass
export default class SettingLayer extends cc.Component {

    @property(cc.Label)
    private labelVer: cc.Label = null;
    @property(cc.Toggle)
    private toggleEffect: cc.Toggle = null;
    @property(cc.Toggle)
    private toggleMusic: cc.Toggle = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let t = cc.sys.localStorage.getItem("bgmVolume");
        if (t == null || parseFloat(t) > 0) {
            this.toggleMusic.isChecked = true;
        } else {
            this.toggleMusic.isChecked = false;
        }

        t = cc.sys.localStorage.getItem("effectVolume");
        if (t == null || parseFloat(t) > 0) {
            this.toggleEffect.isChecked = true;
        } else {
            this.toggleEffect.isChecked = false;
        }

        if (this.toggleEffect.isChecked) {
            this.toggleEffect.node.getChildByName('Background').active = false;
        } else {
            this.toggleEffect.node.getChildByName('Background').active = true;
        }

        if (this.toggleMusic.isChecked) {
            this.toggleMusic.node.getChildByName('Background').active = false;
        } else {
            this.toggleMusic.node.getChildByName('Background').active = true;
        }
    }

    start () {

    }

    // update (dt) {}

    private onClickClose() {
        UIManager.getInstance().removeLayer('hall', 'prefabs/SettingLayer');
    }

    private onClickEffect() {
        if (this.toggleEffect.isChecked) {
            this.toggleEffect.node.getChildByName('Background').active = false;
        } else {
            this.toggleEffect.node.getChildByName('Background').active = true;
        }
        AudioManager.getInstance().setEffectVolume(this.toggleEffect.isChecked ? 1 : 0);
    }

    private onClickMusic() {
        if (this.toggleMusic.isChecked) {
            this.toggleMusic.node.getChildByName('Background').active = false;
        } else {
            this.toggleMusic.node.getChildByName('Background').active = true;
        }
        AudioManager.getInstance().setMusicVolume(this.toggleMusic.isChecked ? 1 : 0);
    }
}
