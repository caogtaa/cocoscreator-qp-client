// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { Audios } from "./NNConstants"
import AudioManager from "../../../scripts/AudioManager"

const {ccclass, property} = cc._decorator;

@ccclass
export default class NNChipsEffect extends cc.Component {

    @property(cc.Node)
    private nodeSpriteChip: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}

    // 下注动画
    playBetEffect (startPos: cc.Vec3, endPos: cc.Vec3) {
        let chip = cc.instantiate(this.nodeSpriteChip);
        this.node.addChild(chip);
        chip.active = true;
        chip.position = startPos;
        cc.tween(chip).to(0.5, { position: endPos }, { easing: 'sineInOut'})
        .to(0.2, { opacity: 0 })
        .call(() => { chip.destroy(); })
        .start();
    }

    // 结束动画
    // 最多2次效果  1种是庄家通赔和通杀就只有一次效果 否则2次
    // effect2Array.length可以是0
    playResultEffect(effect1Array: [cc.Vec3, cc.Vec3][], effect2Array: [cc.Vec3, cc.Vec3][]) {
        AudioManager.getInstance().playEffect('niuniu', Audios.coinsfly);
        for (let i = 0; i < effect1Array.length; ++i) {
            let delay = 0;
            for (let j = 0; j < 5; ++j) {
                let chip = cc.instantiate(this.nodeSpriteChip);
                this.node.addChild(chip);
                chip.active = true;
                chip.position = effect1Array[i][0];
                cc.tween(chip)
                .delay(delay)
                .to(0.5, { position: effect1Array[i][1] }, { easing: 'sineInOut'})
                .call(() => { chip.destroy(); })
                .start();

                delay += 0.1;
            }

            if (effect2Array && effect2Array.length > 0 && i === effect1Array.length - 1) {
                cc.tween(this.node)
                .delay(0.5 + delay + 0.2)
                .call(() => {
                    AudioManager.getInstance().playEffect('niuniu', Audios.coinsfly);
                    for (let i = 0; i < effect2Array.length; ++i) {
                        let delay = 0;
                        for (let j = 0; j < 5; ++j) {
                            let chip = cc.instantiate(this.nodeSpriteChip);
                            this.node.addChild(chip);
                            chip.active = true;
                            chip.position = effect2Array[i][0];
                            cc.tween(chip)
                            .delay(delay)
                            .to(0.5, { position: effect2Array[i][1] }, { easing: 'sineInOut'})
                            .call(() => { chip.destroy(); })
                            .start();
            
                            delay += 0.1;
                        }
                    }
                })
                .start();
            }
        }
    }
}
