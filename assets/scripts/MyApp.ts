
// APP初始化

import AudioManager from "./AudioManager"
import UIManager from "./UIManager"
import EventManager from "./EventManager"
import { GlobalEvent } from "./Constants"
import GameModel from "./model/GameModel"
import GlobalModel from "./model/GlobalModel"
import NetManager from "./NetManager"

const {ccclass, property} = cc._decorator;

@ccclass
export default class MyApp extends cc.Component {
    @property(cc.Node)
    private sceneNode: cc.Node = null;
    @property(cc.Node)
    private layerNode: cc.Node = null;
    @property(cc.Node)
    private loadingCircle: cc.Node = null;
    @property(cc.Node)
    private loadingTip: cc.Node = null;
    @property(cc.Node)
    private changeTableAlert: cc.Node = null;
    @property(cc.Node)
    private alert: cc.Node = null;
    @property(cc.Node)
    private toast: cc.Node = null;

    onLoad () {
        AudioManager.getInstance().init();
        GlobalModel.getInstance().init();

        UIManager.getInstance().init(this.sceneNode, this.layerNode, this.toast, this.loadingTip, this.loadingCircle, this.changeTableAlert, this.alert);

        EventManager.getInstance().on(GlobalEvent.RELOGIN, this.onEventGlobalRelogin, this);
        EventManager.getInstance().on(GlobalEvent.QUIT_GAME, this.onEventGlobalQuitGame, this);

        // 给按钮加上默认音效
        // @ts-ignore
        cc.Button.prototype._onTouchEnded = function (event) {
            if (!this.interactable || !this.enabledInHierarchy) return;
            
            if (this._pressed) {
                AudioManager.getInstance().playBtnClick();
                cc.Component.EventHandler.emitEvents(this.clickEvents, event);
                this.node.emit('click', this);
            }
            this._pressed = false;
            this._updateState();
            event.stopPropagation();
        };

        //UIManager.getInstance().replaceScene('hall/prefabs/LoginScene');
        //UIManager.getInstance().replaceScene('hall/prefabs/HallScene');
        //UIManager.getInstance().replaceScene('games/niuniu/prefabs/NiuNiuScene');
        UIManager.getInstance().replaceLoadingScene();
    }

    start () {
    }

    // update (dt) {}

    onDestroy () {
    }

    // 重新登陆
    private onEventGlobalRelogin() {
        AudioManager.getInstance().stopAll();
        GameModel.getInstance().reset();
        GlobalModel.getInstance().reset();
        NetManager.getInstance().close();
        UIManager.getInstance().replaceScene('hall', 'prefabs/LoginScene');
    }

    // 退出游戏
    private onEventGlobalQuitGame() {
        if (cc.sys.isMobile) {
            window.history.back();
        } else {
            cc.game.end();
        }
    }
}