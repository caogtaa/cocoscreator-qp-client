
// 资源管理器

export default class AssetManager {
    private static instance: AssetManager = null;

    public static getInstance() : AssetManager {
        if (this.instance === null) {
            this.instance = new AssetManager();
        }
        return this.instance;
    }

    private constructor() {
    }

    public getBundle(bundle: string | cc.AssetManager.Bundle) {
        if (bundle) {
            if (typeof bundle == "string"){
                return cc.assetManager.getBundle(bundle);
            }
            return bundle;
        }
        return null;
    }

    public loadBundle(nameOrUrl: string, onComplete: (err: Error, bundle: cc.AssetManager.Bundle) => void): void{
        cc.assetManager.loadBundle(nameOrUrl, onComplete);
    }

    public removeBundle(bundle : string | cc.AssetManager.Bundle){
        let result = this.getBundle(bundle);
        if (result) {
            result.releaseAll();
            cc.assetManager.removeBundle(result);
        }
    }

    public load(bundle: string | cc.AssetManager.Bundle, path: string, type: typeof cc.Asset,
        onProgress: (finish: number, total: number, item: cc.AssetManager.RequestItem) => void,
        onComplete: (error: Error, assets: cc.Asset | cc.Asset[]) => void): void {
        if (typeof bundle == "string") {
            bundle = cc.assetManager.getBundle(bundle);
        }

        if (bundle) {
            if (onProgress) {
                bundle.load(path, type, onProgress, onComplete);
            } else {
                bundle.load(path, type, onComplete);
            }
        } else {
            let error = new Error(`${bundle} 没有加载，请先加载`);
            onComplete(error, null);
        }
    }

    // 和引擎的preload不同 这个函数会加载和解析资源 默认加载hall和common
    public preload(nameOrUrl: string, onProgress: (finish: number, total: number) => void, onComplete: (err: Error) => void) {
        if (nameOrUrl) {
            cc.assetManager.loadBundle(nameOrUrl, (error: Error, bundle: cc.AssetManager.Bundle) => {
                if (error) {
                    cc.error(`loadBundle加载 ${nameOrUrl} ${error.message}`);
                } else {
                    bundle.loadDir('', (finish: number, total: number, item: cc.AssetManager.RequestItem) => {
                        onProgress(finish, total);
                    }, (err: Error, assets: Array<cc.Asset>) => {
                        if (err) {
                            onComplete(new Error(`loadDir加载 ${nameOrUrl}/ ${err.message}`));
                        } else {
                            onComplete(null);
                        }
                    });
                }
            });
        } else {
            // 加载大厅资源 common hall
            cc.assetManager.loadBundle('common', (error: Error, bundle: cc.AssetManager.Bundle) => {
                if (error) {
                    cc.error(`loadBundle加载 common ${error.message}`);
                } else {
                    bundle.loadDir('', (finish: number, total: number, item: cc.AssetManager.RequestItem) => {
                        onProgress(finish, total);
                    }, (err: Error, assets: Array<cc.Asset>) => {
                        if (err) {
                            onComplete(new Error(`loadDir加载 common/ ${err.message}`));
                        } else {
                            cc.assetManager.loadBundle('hall', (error: Error, bundle: cc.AssetManager.Bundle) => {
                                if (error) {
                                    cc.error(`loadBundle加载 hall ${error.message}`);
                                    onComplete(new Error(`loadBundle加载 hall ${error.message}`));
                                } else {
                                    bundle.loadDir('', (finish: number, total: number, item: cc.AssetManager.RequestItem) => {
                                        onProgress(finish, total);
                                    }, (err: Error, assets: Array<cc.Asset>) => {
                                        if (err) {
                                            onComplete(new Error(`loadDir加载 hall/ ${err.message}`));
                                        } else {
                                            onComplete(null);
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    }

    public release(bundle: string | cc.AssetManager.Bundle, path: string) {
        if (typeof bundle == "string") {
            bundle = cc.assetManager.getBundle(bundle);
        }

        if (bundle) {
            bundle.release(path);
        } else {
            cc.error(`${bundle} 没有加载，请先加载`);
        }
    }

    public releaseAll(bundle: string | cc.AssetManager.Bundle) {
        if (typeof bundle == "string") {
            bundle = cc.assetManager.getBundle(bundle);
        }

        if (bundle) {
            bundle.releaseAll();
        } else {
            cc.error(`${bundle} 没有加载，请先加载`);
        }
    }
}
