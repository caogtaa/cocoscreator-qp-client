// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Battery extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.ProgressBar)
    progressBar: cc.ProgressBar = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let level = cc.sys.getBatteryLevel();
        this.label.string = `${Math.floor(level * 100)}%`;
        this.progressBar.progress = level;

        this.schedule(() => {
            let level = cc.sys.getBatteryLevel();
            this.label.string = `${Math.floor(level * 100)}%`;
            this.progressBar.progress = level;
        }, 5);
    }

    start () {

    }

    // update (dt) {}
}
