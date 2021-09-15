
// UI管理器
import AssetManager from "./AssetManager"
export default class UIManager {
    private static instance: UIManager = null;

    private sceneRootNode: cc.Node = null;
    private layerRootNode: cc.Node = null;
    private sceneList: { name: string, scene: cc.Node }[] = [];
    private layerList: { name: string, layer: cc.Node, scene: cc.Node }[] = [];
    private currentScene: cc.Node = null;

    private toast: cc.Node = null;
    private loadingTip: cc.Node = null;
    private loadingCircle: cc.Node = null;
    private changeTableAlert: cc.Node = null;
    private alert: cc.Node = null;

    public static getInstance() : UIManager {
        if (this.instance === null) {
            this.instance = new UIManager();
        }
        return this.instance;
    }

    private constructor() {

    }

    public init(sceneRootNode: cc.Node, layerRootNode: cc.Node, toast: cc.Node, loadingTip: cc.Node, loadingCircle: cc.Node, changeTableAlert: cc.Node,
        alert: cc.Node) {
        this.sceneRootNode = sceneRootNode;
        this.layerRootNode = layerRootNode;
        this.toast = toast;
        this.loadingTip = loadingTip;
        this.loadingCircle = loadingCircle;
        this.changeTableAlert = changeTableAlert;
        this.alert = alert;
    }

    public replaceScene(bundle: string | cc.AssetManager.Bundle, path: string, ...param: any[]) {
        if (this.currentScene) {
            this.removeLayers(this.currentScene);
            this.currentScene.destroy();
        }

        var self = this;
        AssetManager.getInstance().load(bundle, path, cc.Prefab, null, function (err, prefab: cc.Prefab) {
            if (err) {
                cc.log(err.message || err);
                return;
            }
            let scene = cc.instantiate(prefab);
            self.currentScene = scene;
            let bundleName = typeof bundle == 'string' ? bundle : bundle.name;
            self.sceneList.push({name: `${bundleName}/${path}`, scene: scene});
            if (param.length > 0) {
                let scriptname = path.split('/');
                // TODO 这里默认脚本名和文件名是相同的 可以提供一个可选参数来告知脚本名。下同
                let script = scene.getComponent(scriptname[scriptname.length - 1]);
                if (script && script.onInit) {
                    script.onInit(...param);
                }
            }
            self.sceneRootNode.addChild(scene);
        });
    }

    public replaceLoadingScene(...param: any[]) {
        if (this.currentScene) {
            this.removeLayers(this.currentScene);
            this.currentScene.destroy();
        }

        let path = 'prefabs/LoadingScene';
        var self = this;
        cc.resources.load(path, cc.Prefab, function (err, prefab: cc.Prefab) {
            if (err) {
                cc.log(err.message || err);
                return;
            }
            let scene = cc.instantiate(prefab);
            self.currentScene = scene;
            self.sceneList.push({name: path, scene: scene});
            if (param.length > 0) {
                let scriptname = path.split('/');
                // TODO 这里默认脚本名和文件名是相同的 可以提供一个可选参数来告知脚本名。下同
                let script = scene.getComponent(scriptname[scriptname.length - 1]);
                if (script && script.onInit) {
                    script.onInit(...param);
                }
            }
            self.sceneRootNode.addChild(scene);
        });
    }

    public pushScene(bundle: string | cc.AssetManager.Bundle, path: string, ...param: any[]) {
        this.activeLayers(false);

        var self = this;
        AssetManager.getInstance().load(bundle, path, cc.Prefab, null, function (err, prefab: cc.Prefab) {
            if (err) {
                cc.log(err.message || err);
                return;
            }
            let scene = cc.instantiate(prefab);
            self.currentScene = scene;
            let bundleName = typeof bundle == 'string' ? bundle : bundle.name;
            self.sceneList.push({name: `${bundleName}/${path}`, scene: scene});
            if (param.length > 0) {
                let scriptname = path.split('/');
                let script = scene.getComponent(scriptname[scriptname.length - 1]);
                if (script && script.onInit) {
                    script.onInit(...param);
                }
            }
            self.sceneRootNode.addChild(scene);
        });
    }

    public popScene() {
        if (this.sceneList.length <= 1) {
            cc.log('only have one scene');
            return;
        }

        var scene = this.sceneList.pop();
        this.removeLayers(scene.scene);
        scene.scene.destroy();
        this.currentScene = this.sceneList[this.sceneList.length - 1].scene;
        this.activeLayers(true);
    }

    public getCurrentSceneName(): string {
        if (this.sceneList.length === 0) {
            return 'undefined';
        }
        return this.sceneList[this.sceneList.length - 1].name;
    }

    public getCurrentScene(): cc.Node {
        // if (this.sceneList.length === 0) {
        //     return null;
        // }
        // return this.sceneList[this.sceneList.length - 1].scene;
        return this.currentScene;
    }

    public getCurrentLayer(): cc.Node {
        if (this.layerList.length === 0) {
            return null;
        }
        return this.layerList[this.layerList.length - 1].layer;
    }

    public addLayer(bundle: string | cc.AssetManager.Bundle, path: string, ...param: any[]) {
        var self = this;
        AssetManager.getInstance().load(bundle, path, cc.Prefab, null, function (err, prefab: cc.Prefab) {
            if (err) {
                console.log(err.message || err);
                return;
            }
            let layer = cc.instantiate(prefab);
            let bundleName = typeof bundle == 'string' ? bundle : bundle.name;
            self.layerList.push({name: `${bundleName}/${path}`, layer: layer, scene: self.currentScene});
            if (param.length > 0) {
                let scriptname = path.split('/');
                let script = layer.getComponent(scriptname[scriptname.length - 1]);
                if (script && script.onInit) {
                    script.onInit(...param);
                }
            }
            self.layerRootNode.addChild(layer);
            layer.opacity = 255 * 0.3;
            layer.scale = 0.9;
            cc.tween(layer).to(10/60, { scale:1.05, opacity: 255 }).to(4/60, { scale: 1 }).start();
        });
    }

    public removeLayer(bundle: string | cc.AssetManager.Bundle, path: string) {
        // 有可能有相同的
        let bundleName = typeof bundle == 'string' ? bundle : bundle.name;
        let name = `${bundleName}/${path}`;
        for (let i = this.layerList.length - 1; i >= 0; i--) {
            if (this.layerList[i].name === name) {
                let layer = this.layerList.splice(i, 1);
                layer[0].layer.destroy();
                return;
            }
        }
    }

    public popLayer() {
        if (this.layerList.length === 0) {
            return;
        }

        var layer = this.layerList.pop();
        layer.layer.destroy();
    }

    // 移除指定场景的layers
    private removeLayers(scene: cc.Node) {
        for (let i = this.layerList.length - 1; i >= 0; i--) {
            if (this.layerList[i].scene === scene) {
                let layer = this.layerList.splice(i, 1);
                layer[0].layer.destroy();
            }
        }
    }

    // 激活layers 当active=true时 active前面隐藏的layers
    private activeLayers(active: boolean) {
        if (active) {
            for (let i = this.layerList.length - 1; i >= 0; i--) {
                if (this.layerList[i].scene === this.currentScene) {
                    this.layerList[i].layer.active = true;
                }
            }
        } else {
            for (let i = this.layerList.length - 1; i >= 0; i--) {
                this.layerList[i].layer.active = false;
            }
        }
    }

    public showToast(text: string) {
        let script = this.toast.getComponent('Toast');
        script.show(text);
    }

    public showLoadingTip(text: string) {
        let script = this.loadingTip.getComponent('LoadingTip');
        script.show(text);
    }

    public hideLoadingTip() {
        let script = this.loadingTip.getComponent('LoadingTip');
        script.hide();
    }

    public showLoadingCircle() {
        this.loadingCircle.active = true;
    }

    public hideLoadingCircle() {
        this.loadingCircle.active = false;
    }

    public showChangeTableAlert(closeCallback?: Function) {
        let script = this.changeTableAlert.getComponent('ChangeTableAlert');
        script.show(closeCallback);
    }

    public hideChangeTableAlert() {
        let script = this.changeTableAlert.getComponent('ChangeTableAlert');
        script.hide();
    }

    public showAlert(text: string, okCallback?: Function) {
        let script = this.alert.getComponent('Alert');
        script.show({ content:text, hideCancel:true, okCallback:okCallback });
    }

    public showCustomAlert(style: { content:string, cancelTitle?:string, okTitle?:string, cancelCallback?:Function, okCallback?: Function, hideOk?:boolean, hideCancel?: boolean, hasClose?: boolean }) {
        let script = this.alert.getComponent('Alert');
        script.show(style);
    }

    public loadingImage(node: cc.Node, url: string) {
        if (url === '') {
            return;
        }

        // 原生平台 判断文件已经下载过
        if (CC_JSB) {
            let cacheDir = cc.assetManager.cacheManager.getCache(url);
            if (cacheDir != '') {
                cc.assetManager.loadRemote(url, {ext: '.jpg'}, (err, tex: cc.Texture2D) => {
                    if (err) {
                        cc.error(err);
                        return;
                    }
                    if (!cc.isValid(node, true)) {
                        return;
                    }
    
                    let spriteFrame = new cc.SpriteFrame(tex);
                    if (spriteFrame) {
                        node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
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
            if (!cc.isValid(node, true)) {
                return;
            }
            let loadingnode = cc.instantiate(prefab);
            loadingnode.scaleX = node.width / loadingnode.width;
            loadingnode.scaleY = node.height / loadingnode.height;
            node.addChild(loadingnode);
    
            cc.assetManager.loadRemote(url, {ext: '.jpg'}, (err, tex: cc.Texture2D) => {
                if (err) {
                    cc.error(err);
                    return;
                }
                if (!cc.isValid(node, true)) {
                    return;
                }

                let spriteFrame = new cc.SpriteFrame(tex);
                if (spriteFrame) {
                    node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                }
                loadingnode.destroy();
            });
        });
    }
}
