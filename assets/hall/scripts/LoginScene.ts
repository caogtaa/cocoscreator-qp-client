// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import EventManager from "../../scripts/EventManager"
import NetManager from "../../scripts/NetManager"
import HotUpdateManager from "../../scripts/HotUpdateManager"
import {AssetManagerState, AssetManagerCode} from "../../scripts/HotUpdateManager"
import UIManager from "../../scripts/UIManager";
import MultiPlatform from "../../scripts/MultiPlatform"
import AssetManager from "../../scripts/AssetManager"

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoginScene extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

    }

    start () {

    }

    // update (dt) {}

    private onClickedWxLogin() {
        cc.log('onClickedWxLogin');
        UIManager.getInstance().showLoadingTip('正在登陆游戏......');
        NetManager.getInstance().connectLoginServer('121.41.0.0:8081', 'username', 'e10adc3949ba59abbe56e057f20f883e', 1, 'uuid', 'device');
    }

    private onClickedPhoneLogin() {
        UIManager.getInstance().addLayer('hall', 'prefabs/AccountLoginLayer');

        // AssetManager.getInstance().preload('mj', (finish: number, total: number) => {
        // }, (error: Error) => {
        //     if (error) {
        //         UIManager.getInstance().showAlert(error.message);
        //     } else {
        //         UIManager.getInstance().replaceScene('mj', 'prefabs/MJScene');
        //     }
        // });

        //NetManager.getInstance().connectLoginServer('121.41.0.0:8081', 'username2', 'e10adc3949ba59abbe56e057f20f883e', 1, 'uuid', 'device');
        //cc.log(`--------------onEnterLogin--------------`);
        //cc.log(jsb.fileUtils.getDefaultResourceRootPath());
        //cc.log(jsb.fileUtils.getWritablePath());
        // HotUpdateManager.getInstance().checkHallUpdate((code, state) => {
        //     if (code == AssetManagerCode.NEW_VERSION_FOUND || state == AssetManagerState.TRY_DOWNLOAD_FAILED_ASSETS) {
        //         //有新版本
        //         cc.log(`提示更新`);
        //         HotUpdateManager.getInstance().hotUpdate();
        //     } else if (code == AssetManagerCode.ALREADY_UP_TO_DATE) {
        //         //已经是最新版本
        //         cc.log(`已经是最新版本`);
        //     } else if (code == AssetManagerCode.ERROR_DOWNLOAD_MANIFEST ||
        //         code == AssetManagerCode.ERROR_NO_LOCAL_MANIFEST ||
        //         code == AssetManagerCode.ERROR_PARSE_MANIFEST) {
        //         cc.log('下载失败');
        //     } else if (code == AssetManagerCode.CHECKING) {
        //         //当前正在检测更新
        //         cc.log(`正在检测更新!!`);
        //     } else {
        //         cc.log(`检测更新当前状态 code : ${code} state : ${state}`);
        //     }
        // });

        // HotUpdateManager.getInstance().checkGameUpdate('niuniu', (code, state) => {
        //     if (code == AssetManagerCode.NEW_VERSION_FOUND || state == AssetManagerState.TRY_DOWNLOAD_FAILED_ASSETS) {
        //         //有新版本
        //         cc.log(`提示更新`);
        //         HotUpdateManager.getInstance().hotUpdate();
        //     } else if (code == AssetManagerCode.ALREADY_UP_TO_DATE) {
        //         //已经是最新版本
        //         cc.log(`已经是最新版本`);
        //     } else if (code == AssetManagerCode.ERROR_DOWNLOAD_MANIFEST ||
        //         code == AssetManagerCode.ERROR_NO_LOCAL_MANIFEST ||
        //         code == AssetManagerCode.ERROR_PARSE_MANIFEST) {
        //         cc.log('下载失败');
        //     } else if (code == AssetManagerCode.CHECKING) {
        //         //当前正在检测更新
        //         cc.log(`正在检测更新!!`);
        //     } else {
        //         cc.log(`检测更新当前状态 code : ${code} state : ${state}`);
        //     }
        // });
    }
}
