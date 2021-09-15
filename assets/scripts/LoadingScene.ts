// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

import UIManager from "./UIManager"
import EventManager from "./EventManager"
import { GlobalEvent, GameNameMap } from "./Constants"
import HotUpdateManager from "./HotUpdateManager"
import {AssetManagerState, AssetManagerCode, DownLoadInfo} from "./HotUpdateManager"
import AssetManager from "./AssetManager"

@ccclass
export default class LoadingScene extends cc.Component {

    @property(cc.Label)
    private labelTips: cc.Label = null;
    @property(cc.Label)
    private labelVer: cc.Label = null;
    @property(cc.ProgressBar)
    private progressbar: cc.ProgressBar = null;
    @property(cc.Button)
    private buttonBack: cc.Button = null;

    private kindID: number = 0;
    private sitdownCallback: Function = null;

    public onInit(kindid: number, sitdownCallback: Function) {
        this.kindID = kindid;
        this.sitdownCallback = sitdownCallback;
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.labelTips.string = '正在检查更新......';
        this.progressbar.progress = 0;

        if (this.kindID == 0) {
            this.buttonBack.node.active = false;
        }

        EventManager.getInstance().on(GlobalEvent.HOTUPDATE, this.onEventHotUpdate, this);
    }

    start () {
        this.checkUpdate();
    }

    // update (dt) {}

    onDestroy() {
        EventManager.getInstance().off(GlobalEvent.HOTUPDATE, this.onEventHotUpdate, this);
    }

    private onClickBack() {
        if (this.kindID == 0) {
            return;
        }
    }

    private checkUpdate() {
        let callback = (code: AssetManagerCode, state: AssetManagerState) => {
            if (code == AssetManagerCode.NEW_VERSION_FOUND) {
                //有新版本
                cc.log(`提示更新`);
                this.labelTips.string = '正在下载更新中，请稍候…';
                this.progressbar.progress = 0;
                HotUpdateManager.getInstance().hotUpdate();
            } else if (state == AssetManagerState.TRY_DOWNLOAD_FAILED_ASSETS) {
                //尝试重新下载之前下载失败的文件
                this.labelTips.string = '正在下载更新中，请稍候…';
                this.progressbar.progress = 0;
                HotUpdateManager.getInstance().downloadFailedAssets();
            } else if (code == AssetManagerCode.ALREADY_UP_TO_DATE || code == AssetManagerCode.UPDATE_FINISHED) {
                //已经是最新版本
                cc.log(`已经是最新版本`);
                this.preload();
            } else if (code == AssetManagerCode.ERROR_DOWNLOAD_MANIFEST ||
                code == AssetManagerCode.ERROR_NO_LOCAL_MANIFEST ||
                code == AssetManagerCode.ERROR_PARSE_MANIFEST) {
                cc.log('下载失败');
                this.showAlert();
            } else if (code == AssetManagerCode.CHECKING) {
                //当前正在检测更新
                cc.log(`正在检测更新!!`);
            } else {
                cc.log(`检测更新当前状态 code : ${code} state : ${state}`);
            }
        };

        if (this.kindID == 0) {
            HotUpdateManager.getInstance().checkHallUpdate(callback);
        } else {
            HotUpdateManager.getInstance().checkGameUpdate(GameNameMap[this.kindID][0], callback);
        }
    }

    private onEventHotUpdate(downloadInfo: DownLoadInfo) {
        if (downloadInfo.code == AssetManagerCode.UPDATE_PROGRESSION) {
            this.progressbar.progress = downloadInfo.percent == Number.NaN ? 0 : downloadInfo.percent;
        } else if (downloadInfo.code == AssetManagerCode.ALREADY_UP_TO_DATE || downloadInfo.code == AssetManagerCode.UPDATE_FINISHED) {
            this.progressbar.progress = 1;
            // 进入登录或者游戏
            this.preload();
        } else if (downloadInfo.code == AssetManagerCode.UPDATE_FAILED ||
            downloadInfo.code == AssetManagerCode.ERROR_NO_LOCAL_MANIFEST ||
            downloadInfo.code == AssetManagerCode.ERROR_DOWNLOAD_MANIFEST ||
            downloadInfo.code == AssetManagerCode.ERROR_PARSE_MANIFEST ||
            downloadInfo.code == AssetManagerCode.ERROR_UPDATING ||
            downloadInfo.code == AssetManagerCode.ERROR_DECOMPRESS) {
            cc.log('下载失败');
            this.showAlert();
        }
    }

    private preload() {
        this.labelTips.string = '正在全力加载中，请稍候…';
        this.progressbar.progress = 0;
        let name = null;
        if (this.kindID != 0) {
            name = GameNameMap[this.kindID][0];
        }
        AssetManager.getInstance().preload(name, (finish: number, total: number) => {
            this.progressbar.progress = finish / total;
        }, (error: Error) => {
            if (error) {
                UIManager.getInstance().showAlert(error.message);
            } else {
                this.progressbar.progress = 1;
                this.enterScene();
            }
        });
    }

    private enterScene() {
        if (this.kindID == 0) {
            UIManager.getInstance().replaceScene('hall', 'prefabs/LoginScene');
        } else {
            /*
            if (this.kindID == 2000) {
                UIManager.getInstance().replaceScene(GameNameMap[this.kindID][0], GameNameMap[this.kindID][1]);
            } else if (this.kindID == 2) {
                UIManager.getInstance().replaceScene(GameNameMap[this.kindID][0], GameNameMap[this.kindID][1]);
            }
            */
            if (this.sitdownCallback) {
                this.sitdownCallback();
            }
        }
    }

    private showAlert() {
        UIManager.getInstance().showAlert('更新失败，请重新启动游戏或者重新安装那个游戏', () => {
            EventManager.getInstance().emit(GlobalEvent.QUIT_GAME);
        });
    }
}
