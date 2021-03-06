
// 热更新管理器
import EventManager from "./EventManager"
import { GlobalEvent } from "./Constants"

class AssetsManager {
    constructor(name: string) {
        this.name = name;
    }

    /**@description  当前资源管理器的状态*/
    code: any = -1;
    /**@description 当前资源管理器的名称 */
    name: string = "";
    /**@description 当前资源管理器的实体 jsb.AssetsManager */
    manager: jsb.AssetsManager = null;
}

export interface DownLoadInfo{
    downloadedBytes: number,
    totalBytes: number,
    downloadedFiles: number,
    totalFiles: number,
    percent: number,
    percentByFile: number,
    code: AssetManagerCode,
    state: (AssetManagerState | jsb.AssetsManager.State),
    needRestart: boolean
}

export enum AssetManagerCode {
    /**@description 找不到本地mainfest文件*/
    ERROR_NO_LOCAL_MANIFEST,
    /**@description 下载manifest文件错误 */
    ERROR_DOWNLOAD_MANIFEST,
    /**@description 解析manifest文件错误 */
    ERROR_PARSE_MANIFEST,
    /**@description 找到新版本 */
    NEW_VERSION_FOUND,
    /**@description 当前已经是最新版本 */
    ALREADY_UP_TO_DATE,
    /**@description 更新下载进度中 */
    UPDATE_PROGRESSION,
    /**@description 资源更新中 */
    ASSET_UPDATED,
    /**@description 更新错误 */
    ERROR_UPDATING,
    /**@description 更新完成 */
    UPDATE_FINISHED,
    /**@description 更新失败 */
    UPDATE_FAILED,
    /**@description 解压资源失败 */
    ERROR_DECOMPRESS,

    //以下是js中扩展的字段，上面是引擎中已经有的字段
    /**@description 正检测更新中 */
    CHECKING,
}

export enum AssetManagerState {
    /**@description 未初始化 */
    UNINITED,
    /**@description 找到manifest文件 */
    UNCHECKED,
    /**@description 准备下载版本文件 */
    PREDOWNLOAD_VERSION,
    /**@description 下载版本文件中 */
    DOWNLOADING_VERSION,
    /**@description 版本文件下载完成 */
    VERSION_LOADED,
    /**@description 准备加载project.manifest文件 */
    PREDOWNLOAD_MANIFEST,
    /**@description 下载project.manifest文件中 */
    DOWNLOADING_MANIFEST,
    /**@description 下载project.manifest文件完成 */
    MANIFEST_LOADED,
    /**@description 需要下载更新 */
    NEED_UPDATE,
    /**@description 准备更新 */
    READY_TO_UPDATE,
    /**@description 更新中 */
    UPDATING,
    /**@description 解压中 */
    UNZIPPING,
    /**@description 已经是最新版本 */
    UP_TO_DATE,
    /**@description 更新失败 */
    FAIL_TO_UPDATE,

    /**自定定义扩展 */
    /**@description 尝试重新下载失败文件 */
    TRY_DOWNLOAD_FAILED_ASSETS,
}

const HALL_ASSETS_MANAGER_NAME = "hall";
const HOT_UPDATE_URL = 'https://hotupdate.oss-cn-hangzhou.aliyuncs.com/hotupdate/';
const SKIP_CHECK_UPDATE = false;

export default class HotUpdateManager {
    private static instance: HotUpdateManager = null;

    private manifestRoot: string = `manifest/`;
    /**@description 本地存储热更新文件的路径 */
    private storagePath = "";
    /**@description 是否在热更新中或检测更新状态 */
    private updating: boolean = false;

    public hotUpdateUrls: { [key: string]: string } = {};
    /**@description 热更新地址，为了方便后面当只更新一个游戏，或cdn服务器 */
    private getHotUpdateUrl(moduleName: string) {
        if (this.hotUpdateUrls[moduleName]) {
            return this.hotUpdateUrls[moduleName];
        } else {
            return '';
        }
    }

    /**@description 大厅本地的版本项目更新文件配置路径 */
    public get hallProjectMainfest() {
        return `${this.manifestRoot}project.manifest`;
    }

    /**
     * @description 获取子游戏manifest url
     * @param gameName 子游戏名
     * @returns manifest url
     */
    public getGameManifest(gameName: string): string {
        return `${this.manifestRoot}${gameName}_project.manifest`;
    }

    /**@description 检测更新回调 */
    private checkCallback: (code: AssetManagerCode, state: (AssetManagerState | jsb.AssetsManager.State)) => void = null;

    /**@description 资源管理器 */
    private assetsManagers: { [key: string]: AssetsManager } = {};

    /**@description 当前热更新的资源管理器 */
    private currentAssetsManager: AssetsManager = null;

    public static getInstance() : HotUpdateManager {
        if (this.instance === null) {
            this.instance = new HotUpdateManager();
        }
        return this.instance;
    }

    private constructor() {

    }

    /**@description 释放资源管理器，默认为hall 大厅资源管理器 */
    private destroyAssetsManager(name: string = HALL_ASSETS_MANAGER_NAME) {
        if (this.assetsManagers[name]) {
            cc.log("destroyAssetsManager : " + name);
            this.currentAssetsManager = null;
            delete this.assetsManagers[name];
        }
    }

    /**@description 获取资源管理器，默认为hall 大厅的资源管理器 */
    private getAssetsManager(name: string = HALL_ASSETS_MANAGER_NAME) {
        if (this.assetsManagers[name]) {
            return this.assetsManagers[name];
        } else {
            //初始化资源管理器
            if (CC_JSB) {
                this.storagePath = jsb.fileUtils.getWritablePath();
                cc.log(`Storage path for remote asset : ${this.storagePath}`);
                this.assetsManagers[name] = new AssetsManager(name);
                this.assetsManagers[name].manager = new jsb.AssetsManager(name == HALL_ASSETS_MANAGER_NAME ? "type.hall" : `type.${name}_`, this.storagePath, this.versionCompareHanle.bind(this));
                this.assetsManagers[name].manager.setMaxConcurrentTask(8);
                this.assetsManagers[name].manager.setHotUpdateUrl(this.getHotUpdateUrl(name));
                this.assetsManagers[name].manager.setVerifyCallback(function (path, asset) {
                    let compressed = asset.compressed;
                    let expectedMD5 = asset.md5;
                    let relativePath = asset.path;
                    let size = asset.size;
                    if (compressed) {
                        cc.log(`Verification passed : ${relativePath}`);
                        return true;
                    }
                    else {
                        cc.log(`Verification passed : ${relativePath} ( ${expectedMD5} )`);
                        return true;
                    }
                });
                cc.log(`Hot update is ready , please check or directly update.`);
            }
            return this.assetsManagers[name];
        }
    }

    /**@description 判断是否需要重新尝试下载之前下载失败的文件 */
    private isTryDownloadFailedAssets() {
        if (this.currentAssetsManager &&
            this.currentAssetsManager.manager.getState() == jsb.AssetsManager.State.FAIL_TO_UPDATE &&
            this.currentAssetsManager.code == AssetManagerCode.ERROR_NO_LOCAL_MANIFEST &&
            this.currentAssetsManager.code == AssetManagerCode.ERROR_DOWNLOAD_MANIFEST &&
            this.currentAssetsManager.code == AssetManagerCode.ERROR_PARSE_MANIFEST) {
            return true;
        }
        return false;
    }

    /**@description 是否是预览或浏览器 */
    private get isBrowser() {
        return cc.sys.platform == cc.sys.WECHAT_GAME || CC_PREVIEW || cc.sys.isBrowser;
        //return cc.sys.platform == cc.sys.WECHAT_GAME || cc.sys.isBrowser;
    }

    private isNeedUpdate(callback: (code: AssetManagerCode, state: AssetManagerState) => void) {
        if (this.isBrowser) {
            //预览及浏览器下，不需要有更新的操作
            cc.log('预览及浏览器下，不需要有更新的操作');
            this.updating = false;
            callback(AssetManagerCode.ALREADY_UP_TO_DATE, AssetManagerState.UP_TO_DATE);
            return false;
        } else {
            if (SKIP_CHECK_UPDATE) {
                cc.log("跳过热更新，直接使用本地资源代码");
                this.updating = false;
                callback(AssetManagerCode.ALREADY_UP_TO_DATE, AssetManagerState.UP_TO_DATE);
            }
            return !SKIP_CHECK_UPDATE;
        }
    }

    /**@description 检测更新 */
    private checkUpdate(callback: (code: AssetManagerCode, state: AssetManagerState) => void) {
        if( this.isNeedUpdate(callback) ){
            cc.log('--checkUpdate--');
            if (this.updating) {
                cc.log(`Checking or updating...`);
                callback(AssetManagerCode.CHECKING, AssetManagerState.PREDOWNLOAD_VERSION);
                return;
            }
            if (!this.currentAssetsManager.manager.getLocalManifest() || !this.currentAssetsManager.manager.getLocalManifest().isLoaded()) {
                cc.log(`Failed to load local manifest ....`);
                callback(AssetManagerCode.ERROR_DOWNLOAD_MANIFEST, AssetManagerState.FAIL_TO_UPDATE);
                return;
            }
            if (this.isTryDownloadFailedAssets()) {
                //已经更新失败，尝试获取更新下载失败的
                cc.log(`之前下载资源未完全下载完成，请尝试重新下载`);
                callback(AssetManagerCode.UPDATE_FAILED, AssetManagerState.TRY_DOWNLOAD_FAILED_ASSETS);
            } else {
                this.updating = true;
                this.checkCallback = callback;
                this.currentAssetsManager.manager.setEventCallback(this.checkCb.bind(this));
                this.currentAssetsManager.manager.checkUpdate();
            }
        }
    }

    public downloadFailedAssets() {
        if (this.currentAssetsManager) {
            this.currentAssetsManager.manager.downloadFailedAssets();
        }
    }

    /**@description 检查大厅是否需要更新 */
    checkHallUpdate(callback: (code: AssetManagerCode, state: AssetManagerState) => void) {
        cc.log('checkHallUpdate');
        if (this.isNeedUpdate(callback)) {
            this.currentAssetsManager = this.getAssetsManager();
            this.currentAssetsManager.manager.loadLocalManifest(this.hallProjectMainfest);
            this.checkUpdate(callback);
        }
    }

    /**
     * @description 检测子游戏更新
     * @param gameName 子游戏名
     * @param callback 检测完成回调
     */
     checkGameUpdate(gameName: string, callback: (code: AssetManagerCode, state: AssetManagerState) => void) {
        if( this.isNeedUpdate(callback) ){
            this.currentAssetsManager = this.getAssetsManager(gameName);
            let manifestUrl = this.getGameManifest(gameName);
            //先检测本地是否已经存在子游戏版本控制文件 
            if (jsb.fileUtils.isFileExist(manifestUrl)) {
                //存在版本控制文件 
                let content = jsb.fileUtils.getStringFromFile(manifestUrl);
                let jsbGameManifest = new jsb.Manifest(content, this.storagePath, this.getHotUpdateUrl(this.currentAssetsManager.name));
                cc.log(`--存在本地版本控制文件checkUpdate--`);
                cc.log(`mainifestUrl : ${manifestUrl}`);
                this.currentAssetsManager.manager.loadLocalManifest(jsbGameManifest, "");
                this.checkUpdate(callback);
            } else {
                //不存在版本控制文件 ，生成一个初始版本
                if (this.updating) {
                    cc.log(`Checking or updating...`);
                    callback(AssetManagerCode.CHECKING, AssetManagerState.PREDOWNLOAD_VERSION);
                    return;
                }

                let packageUrl = this.getHotUpdateUrl(gameName);
                if (packageUrl.length == 0) {
                    packageUrl = HOT_UPDATE_URL;
                }
                let gameManifest = {
                    version: "0",
                    packageUrl: packageUrl,
                    remoteManifestUrl: `${packageUrl}${manifestUrl}`,
                    remoteVersionUrl: `${packageUrl}${this.manifestRoot}${gameName}_version.manifest`,
                    assets: {},
                    searchPaths: []
                };
                let gameManifestContent = JSON.stringify(gameManifest);
                let jsbGameManifest = new jsb.Manifest(gameManifestContent, this.storagePath, this.getHotUpdateUrl(this.currentAssetsManager.name));
                cc.log(`--checkUpdate--`);
                cc.log(`mainifest content : ${gameManifestContent}`);
                this.currentAssetsManager.manager.loadLocalManifest(jsbGameManifest, "");
                this.checkUpdate(callback);
            }
        }
    }

    /**@description 检测更新 */
    private checkCb(event) {
        //存储当前的状态，当下载版本文件失败时，state的状态与下载非版本文件是一样的状态
        this.currentAssetsManager.code = event.getEventCode();
        cc.log(`checkCb event code : ${event.getEventCode()} state : ${this.currentAssetsManager.manager.getState()}`);
        switch (event.getEventCode()) {
            case AssetManagerCode.ERROR_NO_LOCAL_MANIFEST:
                cc.log(`No local manifest file found, hot update skipped.`);
                break;
            case AssetManagerCode.ERROR_DOWNLOAD_MANIFEST:
            case AssetManagerCode.ERROR_PARSE_MANIFEST:
                cc.log(`Fail to download manifest file, hot update skipped.`);
                break;
            case AssetManagerCode.ALREADY_UP_TO_DATE:
                cc.log(`Already up to date with the latest remote version.`);
                break;
            case AssetManagerCode.NEW_VERSION_FOUND:
                cc.log(`New version found, please try to update.`);
                // TODO 大版本更新 重新下载处理
                break;
            case AssetManagerCode.UPDATE_FINISHED:
                // 如果只更新了project.manifest的版本号 会先触发UPDATE_FINISHED然后触发NEW_VERSION_FOUND 但是没有实际的内容更新
                // 所以取消回调 不让触发NEW_VERSION_FOUND
                this.currentAssetsManager.manager.setEventCallback(null);
                break;
            default:
                return;
        }

        //this.currentAssetsManager.setEventCallback(null);
        this.updating = false;

        //如果正在下载更新文件，先下载更新文件比较完成后，再回调
        if (this.checkCallback && this.currentAssetsManager.manager.getState() != jsb.AssetsManager.State.DOWNLOADING_VERSION) {
            this.checkCallback(event.getEventCode(), this.currentAssetsManager.manager.getState());
            this.checkCallback = null;
        }
    }

    /**
     * @description 热更新
     * @param manifestUrl manifest地址
     * @param gameName 
     */
    public hotUpdate() {
        if (!this.currentAssetsManager) {
            cc.error(`热更新管理器未初始化`);
            return;
        }
        cc.log(`即将热更新模块为:${this.currentAssetsManager.name} , updating : ${this.updating}`);
        if (!this.updating) {
            cc.log(`执行更新 ${this.currentAssetsManager.name} `);
            this.currentAssetsManager.manager.setEventCallback(this.updateCb.bind(this));
            this.currentAssetsManager.manager.update();
        }
    }

    /**@description 热更新回调 */
    private updateCb(event: any) {
        var isUpdateFinished = false;
        var failed = false;
        cc.log(`--update cb code : ${event.getEventCode()} state : ${this.currentAssetsManager.manager.getState()}`);
        //存储当前的状态，当下载版本文件失败时，state的状态与下载非版本文件是一样的状态
        this.currentAssetsManager.code = event.getEventCode();
        switch (event.getEventCode()) {
            case AssetManagerCode.ERROR_NO_LOCAL_MANIFEST:
                cc.log(`No local manifest file found, hot update skipped.`);
                failed = true;
                break;
            case AssetManagerCode.UPDATE_PROGRESSION:
                cc.log(`${event.getDownloadedBytes()} / ${event.getTotalBytes()}`);
                cc.log(`${event.getDownloadedFiles()} / ${event.getTotalFiles()}`);
                cc.log(`percent : ${event.getPercent()}`);
                cc.log(`percent by file : ${event.getPercentByFile()}`);
                var msg = event.getMessage();
                if (msg) {
                    cc.log(`Updated file: ${msg}`);
                }
                break;
            case AssetManagerCode.ERROR_DOWNLOAD_MANIFEST:
            case AssetManagerCode.ERROR_PARSE_MANIFEST:
                cc.log(`Fail to download manifest file, hot update skipped.`);
                failed = true;
                break;
            case AssetManagerCode.ALREADY_UP_TO_DATE:
                cc.log(`Already up to date with the latest remote version.`);
                failed = true;
                break;
            case AssetManagerCode.UPDATE_FINISHED:
                cc.log(`Update finished. ${event.getMessage()}`);
                isUpdateFinished = true;
                break;
            case AssetManagerCode.UPDATE_FAILED:
                cc.log(`Update failed. ${event.getMessage()}`);
                this.updating = false;
                break;
            case AssetManagerCode.ERROR_UPDATING:
                cc.log(`Asset update error: ${event.getAssetId()} , ${event.getMessage()}`);
                break;
            case AssetManagerCode.ERROR_DECOMPRESS:
                cc.log(`${event.getMessage()}`);
                break;
            default:
                break;
        }
        if (failed) {
            this.currentAssetsManager.manager.setEventCallback(null);
            this.updating = false;
        }

        if (isUpdateFinished) {
            //下载完成,需要重新设置搜索路径，添加下载路径
            // Prepend the manifest's search path
            var searchPaths: string[] = jsb.fileUtils.getSearchPaths();
            var newPaths: string[] = this.currentAssetsManager.manager.getLocalManifest().getSearchPaths();
            cc.log(JSON.stringify(newPaths));
            Array.prototype.unshift.apply(searchPaths, newPaths);
            // This value will be retrieved and appended to the default search path during game startup,
            // please refer to samples/js-tests/main.js for detailed usage.
            // !!! Re-add the search paths in main.js is very important, otherwise, new scripts won't take effect.

            //这里做一个搜索路径去重处理
            let obj = {};
            for (let i = 0; i < searchPaths.length; i++) {
                obj[searchPaths[i]] = true;
            }
            searchPaths = Object.keys(obj);
            cc.sys.localStorage.setItem('HotUpdateSearchPaths', JSON.stringify(searchPaths));
            jsb.fileUtils.setSearchPaths(searchPaths);
        }

        let state = this.currentAssetsManager.manager.getState();
        if (this.currentAssetsManager.name == HALL_ASSETS_MANAGER_NAME) {
            if (isUpdateFinished) {
                this.currentAssetsManager.manager.setEventCallback(null);
                //下载数量大于0，才有必要进入重启，在如下这种情况下，并不会发生下载
                //当只提升了版本号，而并未对代码进行修改时，此时的只下载了一个project.manifest文件，
                //不需要对游戏进行重启的操作
                if (event.getDownloadedFiles() > 0) {
                    cc.game.restart();
                }
                //下载完成 删除资源管理器
                this.destroyAssetsManager(this.currentAssetsManager.name);
            }
        } else {
            //子游戏更新
            if (isUpdateFinished) {
                cc.log(`${this.currentAssetsManager.name} 下载资源数 : ${event.getDownloadedFiles()}`)
                //下载完成 删除资源管理器
                this.destroyAssetsManager(this.currentAssetsManager.name);
            }
        }

        let info : DownLoadInfo = { 
            downloadedBytes : event.getDownloadedBytes(),
            totalBytes : event.getTotalBytes(),
            downloadedFiles : event.getDownloadedFiles(),
            totalFiles : event.getTotalFiles(),
            percent : event.getPercent(),
            percentByFile : event.getPercentByFile(),
            code : event.getEventCode(),
            state : state,
            needRestart : isUpdateFinished,
        };

        // 事件分发
        EventManager.getInstance().emit(GlobalEvent.HOTUPDATE, info);

        cc.log(`update cb  failed : ${failed}  , need restart : ${isUpdateFinished} , updating : ${this.updating}`);
    }

    private versionCompareHanle(versionA: string, versionB: string) {
        cc.log(`JS Custom Version Compare : version A is ${versionA} , version B is ${versionB}`);
        let vA = versionA.split('.');
        let vB = versionB.split('.');
        cc.log(`version A ${vA} , version B ${vB}`);
        for (let i = 0; i < vA.length && i < vB.length; ++i) {
            let a = parseInt(vA[i]);
            let b = parseInt(vB[i]);
            if (a === b) {
                continue;
            } else {
                return a - b;
            }
        }
        if (vB.length > vA.length) {
            return -1;
        }
        return 0;
    }
}
