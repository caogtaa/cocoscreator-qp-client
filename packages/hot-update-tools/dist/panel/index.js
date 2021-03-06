"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var os = require("os");
var Electron = require("electron");
var JSZIP = require("jszip");
var _Helper = /** @class */ (function () {
    function _Helper() {
        this.elements = {
            /**@description ??????????????? */
            version: "#version",
            /**@description ????????????????????? */
            serverIP: "#serverIP",
            /**@description ?????????????????? */
            userLocalIP: "#userLocalIP",
            /**@description ??????????????????????????? */
            historyServerIPSelect: "#historyServerIPSelect",
            /**@description ???????????? */
            buildDir: "#buildDir",
            /**@description ?????????????????? */
            selectBulidDir: "#selectBulidDir",
            /**@description ?????????????????? */
            openSelectBulidDir: "#openSelectBulidDir",
            /**@description Manifest???????????? */
            manifestDir: "#manifestDir",
            /**@description ??????Manifest???????????? */
            openManifestDir: "#openManifestDir",
            /**@description ??????bundle */
            delBunles: "#delBunles",
            /**@description ??????Manifest */
            createManifest: "#createManifest",
            /**@description ?????????????????? */
            remoteUrl: "#remoteUrl",
            /**@description ???????????????????????? */
            refreshMainVersion: "#refreshMainVersion",
            /**@description ?????????????????? */
            remoteDir: "#remoteDir",
            /**@description ???????????????????????? */
            selectRemoteDir: "#selectRemoteDir",
            /**@description ???????????????????????? */
            openSelectRemoteDir: "#openSelectRemoteDir",
            /**@description ?????? */
            deployToRemote: "#deployToRemote",
            /**@description ???????????? */
            deployProgress: "#deployProgress",
            /**@description ?????? */
            logView: "#logView",
        };
        /**@description ?????????????????????Html */
        this.view = null;
        this.userCache = {
            /**@description ??????????????? */
            version: "",
            /**@description ????????????????????? */
            serverIP: "",
            /**@description ????????????????????? */
            historyIps: [],
            historySelectedUrl: "",
            /**@description ?????????????????? */
            buildDir: "",
            /**@description ???bundle??????????????? */
            bundles: {},
            /**@description ????????????????????? */
            remoteUrl: "",
            /**@description ?????????bundle??????????????? */
            remoteBundleUrls: {},
            /**@description ??????????????????????????? */
            remoteDir: "",
        };
        this.bundles = {};
        this._isDoCreate = false;
        this._config = null;
        this._template = null;
    }
    Object.defineProperty(_Helper.prototype, "userCachePath", {
        get: function () {
            return path.join(Editor.Project.path + "/packages/config/userCache.json");
        },
        enumerable: false,
        configurable: true
    });
    _Helper.prototype.getManifestDir = function (buildDir) {
        if (buildDir && buildDir.length > 0) {
            return buildDir + "\\manifest";
        }
        else {
            return "";
        }
    };
    /**@description ???????????????????????? */
    _Helper.prototype.saveUserCache = function () {
        var cacheString = JSON.stringify(this.userCache);
        fs.writeFileSync(this.userCachePath, cacheString);
        // this.addLog(`???????????? :`, userCache);
    };
    /**@description ???????????? */
    _Helper.prototype.checkUserCache = function () {
        //???????????????bundle????????????
        var _this = this;
        var notExist = [];
        Object.keys(this.userCache.bundles).forEach(function (value) {
            if (_this.bundles[value] == undefined || _this.bundles[value] == null) {
                notExist.push(value);
            }
        });
        var isRemoved = false;
        for (var i = 0; i < notExist.length; i++) {
            delete this.userCache.bundles[notExist[i]];
            isRemoved = true;
        }
        notExist = [];
        Object.keys(this.userCache.remoteBundleUrls).forEach(function (value) {
            if (_this.bundles[value] == undefined || _this.bundles[value] == null) {
                notExist.push(value);
            }
        });
        for (var i = 0; i < notExist.length; i++) {
            delete this.userCache.remoteBundleUrls[notExist[i]];
            isRemoved = true;
        }
        return isRemoved;
    };
    /**@description ?????????????????? */
    _Helper.prototype.generateDefaultUseCache = function () {
        var _this = this;
        this.userCache.version = this.config.version;
        this.userCache.serverIP = this.config.packageUrl;
        this.userCache.historyIps = [this.userCache.serverIP];
        this.userCache.buildDir = "";
        this.userCache.bundles = this.bundles;
        this.userCache.remoteUrl = "-";
        this.userCache.remoteBundleUrls = {},
            Object.keys(this.bundles).forEach(function (key) {
                _this.userCache.remoteBundleUrls[key] = "-";
            });
        this.userCache.remoteDir = "";
    };
    /**@description ?????????????????? */
    _Helper.prototype.readCache = function () {
        if (fs.existsSync(this.userCachePath)) {
            var data = fs.readFileSync(this.userCachePath, "utf-8");
            this.userCache = JSON.parse(data);
            if (this.checkUserCache()) {
                this.saveUserCache();
            }
            //this.addLog(`???????????? : ${userCachePath}`, userCache);
        }
        else {
            //this.addLog(`??????????????? : ${userCachePath}`);
            this.generateDefaultUseCache();
            this.addLog("\u751F\u5B58\u9ED8\u8BA4\u7F13\u5B58 : ", this.userCache);
            this.saveUserCache();
        }
    };
    /**@description ?????????UI?????? */
    _Helper.prototype.initUIDatas = function () {
        var _this = this;
        this.view.version.value = this.userCache.version;
        this.view.serverIP.value = this.userCache.serverIP;
        setTimeout(function () {
            _this.updateHistoryUrl();
            if (_this.userCache.historySelectedUrl = "") {
                _this.userCache.historySelectedUrl = _this.userCache.historyIps[0];
            }
            var isFind = false;
            var options = _this.view.historyServerIPSelect.$select.options;
            for (var i = 0; i < options.length; i++) {
                if (options.text == _this.userCache.historySelectedUrl) {
                    _this.view.historyServerIPSelect.$select.value = i;
                    isFind = true;
                    break;
                }
            }
            if (!isFind) {
                _this.userCache.historySelectedUrl = _this.userCache.historyIps[0];
                _this.view.historyServerIPSelect.$select.value = 0;
            }
        }, 10);
        this.view.buildDir.value = this.userCache.buildDir;
        this.view.manifestDir.value = this.getManifestDir(this.userCache.buildDir);
        //bundles ??????
        //`is${gameInfo.dir}includeApp`
        Object.keys(this.userCache.bundles).forEach(function (key) {
            //???????????????
            _this.view["is" + key + "includeApp"].value = _this.userCache.bundles[key].includeApk;
            //?????????
            _this.view[key + "Version"].value = _this.userCache.bundles[key].version;
        });
        //????????????
        this.view.remoteUrl.value = this.getShowRemoteString();
        Object.keys(this.userCache.remoteBundleUrls).forEach(function (key) {
            _this.view[key + "remoteUrl"].value = _this.getShowRemoteString(key);
        });
        this.view.remoteDir.value = this.userCache.remoteDir;
    };
    /**@description ????????????????????????+????????? */
    _Helper.prototype.getShowRemoteString = function (bundleName) {
        if (bundleName) {
            return "[" + this.userCache.bundles[bundleName].version + "] : " + this.userCache.remoteBundleUrls[bundleName];
        }
        else {
            return "[" + this.userCache.version + "] : " + this.userCache.remoteUrl;
        }
    };
    /**@description ??????????????? */
    _Helper.prototype.initDatas = function () {
        this._isDoCreate = false;
        this.readCache();
        this.initUIDatas();
    };
    /**@description ?????????????????? */
    _Helper.prototype.bindingEvents = function () {
        var _this = this;
        var view = this.view;
        this.view.userLocalIP.addEventListener("confirm", this.onUseLocalIP.bind(this));
        this.view.serverIP.addEventListener("blur", this.onInputServerUrlOver.bind(this, this.view.serverIP));
        this.view.historyServerIPSelect.addEventListener("change", this.onHistoryServerIPChange.bind(this, this.view.historyServerIPSelect));
        this.view.version.addEventListener("blur", this.onVersionChange.bind(this, this.view.version));
        //bundles ????????????
        var keys = Object.keys(this.userCache.bundles);
        keys.forEach(function (key) {
            //???????????????
            //this.$[`is${key}includeApp`].value = userCache.bundles[key].includeApk;
            //?????????
            view[key + "Version"].addEventListener('blur', _this.onBundleVersionChange.bind(_this, view[key + "Version"], key));
        });
        //??????????????????
        this.view.selectBulidDir.addEventListener("confirm", this.onBuildDirConfirm.bind(this, this.view.selectBulidDir));
        //??????????????????
        this.view.openSelectBulidDir.addEventListener("confirm", this.onOpenSelectBulidDir.bind(this));
        //??????Manifest??????
        this.view.openManifestDir.addEventListener("confirm", this.onOpenManifestDir.bind(this));
        //??????????????????
        //?????????????????????????????????
        this.view.selectRemoteDir.addEventListener("confirm", this.onRemoteDirConfirm.bind(this));
        this.view.openSelectRemoteDir.addEventListener("confirm", this.onOpenRemoteDir.bind(this));
        //??????
        this.view.createManifest.addEventListener("confirm", this.onCreateManifest.bind(this, this.view.createManifest));
        //??????
        this.view.deployToRemote.addEventListener("confirm", this.onDeployToRemote.bind(this));
        //?????????????????? 
        this.view.refreshMainVersion.addEventListener("confirm", this.onRefreshMainVersion.bind(this));
        //refresh${gameInfo.dir}Version ??????????????????
        keys.forEach(function (key) {
            view["is" + key + "includeApp"].addEventListener("confirm", _this.onIncludeAppChange.bind(_this, view["is" + key + "includeApp"], key));
            view["refresh" + key + "Version"].addEventListener("confirm", _this.onRefreshBundleLocalServerVersion.bind(_this, key));
        });
        //???????????????????????????bundles
        this.view.delBunles.addEventListener("confirm", this.onDelBundles.bind(this));
    };
    //?????????
    _Helper.prototype.init = function (view) {
        this.view = view;
        this.initDatas();
        this.bindingEvents();
    };
    _Helper.prototype.onIncludeAppChange = function (element, key) {
        // console.log("element",element);
        // console.log("key",key);
        // console.log("value",element.value);
        this.userCache.bundles[key].includeApk = element.value;
        this.saveUserCache();
    };
    /**@description ???????????????????????????bundles */
    _Helper.prototype.onDelBundles = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.isDoCreate())
                    return [2 /*return*/];
                //??????????????????????????????????????????????????????
                Editor.Panel.open('confirm_del_subgames');
                return [2 /*return*/];
            });
        });
    };
    _Helper.prototype.onConfirmDelBundle = function () {
        this.removeNotInApkBundle();
    };
    /**@description ?????????????????????????????????bundles */
    _Helper.prototype.removeNotInApkBundle = function () {
        var _this = this;
        var keys = Object.keys(this.userCache.bundles);
        var removeBundles = [];
        keys.forEach(function (key) {
            if (!_this.userCache.bundles[key].includeApk) {
                removeBundles.push(key);
            }
        });
        var manifests = [];
        var removeDirs = [];
        for (var i = 0; i < removeBundles.length; i++) {
            var key = removeBundles[i];
            removeDirs.push(path.join(this.userCache.buildDir, "assets/" + key));
            manifests.push(path.join(this.userCache.buildDir, "manifest/" + key + "_project.manifest"));
            manifests.push(path.join(this.userCache.buildDir, "manifest/" + key + "_version.manifest"));
        }
        for (var i = 0; i < removeDirs.length; i++) {
            this.addLog("\u5220\u9664\u76EE\u5F55 : " + removeDirs[i]);
            this.delDir(removeDirs[i], true);
        }
        for (var i = 0; i < manifests.length; i++) {
            this.addLog("\u5220\u9664\u7248\u672C\u6587\u4EF6 : " + manifests[i]);
            this.delFile(manifests[i]);
        }
    };
    /**
     * @description ??????????????????????????????
     */
    _Helper.prototype.onRefreshMainVersion = function () {
        var _this = this;
        if (this.isDoCreate())
            return;
        if (this.userCache.remoteDir.length > 0) {
            var versionManifestPath_1 = path.join(this.userCache.remoteDir, "manifest/version.manifest");
            fs.readFile(versionManifestPath_1, "utf-8", function (err, data) {
                if (err) {
                    _this.addLog("\u627E\u4E0D\u5230 : " + versionManifestPath_1);
                }
                else {
                    var versionConfig = JSON.parse(data);
                    _this.userCache.remoteUrl = versionConfig.packageUrl;
                    _this.view.remoteUrl.value = _this.getShowRemoteString();
                    _this.saveUserCache();
                }
            });
        }
        else {
            this.addLog("\u53EA\u80FD\u5237\u65B0\u90E8\u7F72\u5728\u672C\u5730\u7684\u7248\u672C");
        }
    };
    /**
     * @description ??????????????????????????????
     * @param {*} key
     */
    _Helper.prototype.onRefreshBundleLocalServerVersion = function (key) {
        var _this = this;
        if (this.isDoCreate())
            return;
        if (this.userCache.remoteDir.length > 0) {
            var versionManifestPath_2 = path.join(this.userCache.remoteDir, "manifest/" + key + "_version.manifest");
            fs.readFile(versionManifestPath_2, "utf-8", function (err, data) {
                if (err) {
                    _this.addLog("\u627E\u4E0D\u5230 : " + versionManifestPath_2);
                }
                else {
                    var versionConfig = JSON.parse(data);
                    _this.userCache.remoteBundleUrls[key] = versionConfig.packageUrl;
                    _this.view[key + "remoteUrl"].value = _this.getShowRemoteString(key);
                    _this.saveUserCache();
                }
            });
        }
        else {
            this.addLog("\u53EA\u80FD\u5237\u65B0\u90E8\u7F72\u5728\u672C\u5730\u7684\u7248\u672C");
        }
    };
    /**
     * @description ??????
     */
    _Helper.prototype.onDeployToRemote = function () {
        if (this.isDoCreate())
            return;
        if (this.userCache.remoteDir.length <= 0) {
            this.addLog("[??????]?????????????????????????????????");
            return;
        }
        if (!fs.existsSync(this.userCache.remoteDir)) {
            this.addLog("[\u90E8\u7F72]\u672C\u5730\u6D4B\u8BD5\u670D\u52A1\u5668\u76EE\u5F55\u4E0D\u5B58\u5728 : " + this.userCache.remoteDir);
            return;
        }
        if (!fs.existsSync(this.userCache.buildDir)) {
            this.addLog("[\u90E8\u7F72]\u6784\u5EFA\u76EE\u5F55\u4E0D\u5B58\u5728 : " + this.userCache.buildDir + " , \u8BF7\u5148\u6784\u5EFA");
            return;
        }
        var includes = this.getMainBundleIncludes();
        var temps = [];
        for (var i = 0; i < includes.length; i++) {
            //??????????????????
            var dir = includes[i];
            var index = dir.search(/\\|\//);
            if (index == -1) {
                if (temps.indexOf(dir) == -1) {
                    temps.push(dir);
                }
            }
            else {
                dir = dir.substr(0, index);
                if (temps.indexOf(dir) == -1) {
                    temps.push(dir);
                }
            }
        }
        var copyDirs = ["manifest"].concat(temps);
        for (var i = 0; i < copyDirs.length; i++) {
            var dir = path.join(this.userCache.buildDir, copyDirs[i]);
            if (!fs.existsSync(dir)) {
                this.addLog(this.userCache.buildDir + " [\u90E8\u7F72]\u4E0D\u5B58\u5728" + copyDirs[i] + "\u76EE\u5F55,\u65E0\u6CD5\u62F7\u8D1D\u6587\u4EF6");
                return;
            }
        }
        this.addLog("[\u90E8\u7F72]\u5F00\u59CB\u62F7\u8D1D\u6587\u4EF6\u5230 : " + this.userCache.remoteDir);
        this.view.deployProgress.value = 0;
        this.addLog("[\u90E8\u7F72]\u5220\u9664\u65E7\u76EE\u5F55 : " + this.userCache.remoteDir);
        var count = this.getFileCount(this.userCache.remoteDir);
        this.addLog("[\u90E8\u7F72]\u5220\u9664\u6587\u4EF6\u4E2A\u6570:" + count);
        this.delDir(this.userCache.remoteDir);
        count = 0;
        for (var i = 0; i < copyDirs.length; i++) {
            var dir = path.join(this.userCache.buildDir, copyDirs[i]);
            count += this.getFileCount(dir);
        }
        this.addLog("[\u90E8\u7F72]\u590D\u5236\u6587\u4EF6\u4E2A\u6570 : " + count);
        for (var i = 0; i < copyDirs.length; i++) {
            this.copySourceDirToDesDir(path.join(this.userCache.buildDir, copyDirs[i]), path.join(this.userCache.remoteDir, copyDirs[i]));
        }
    };
    _Helper.prototype.addProgress = function () {
        var value = this.view.deployProgress.value;
        value = value + 1;
        if (value > 100) {
            value = 100;
        }
        this.view.deployProgress.value = value;
    };
    _Helper.prototype.copySourceDirToDesDir = function (source, dest) {
        this.addLog("[\u90E8\u7F72]\u590D\u5236" + source + " => " + dest);
        var self = this;
        var makeDir = function (_source, _dest, _copyFileCb) {
            fs.exists(_dest, function (isExist) {
                isExist ? _copyFileCb(_source, _dest) : fs.mkdir(_dest, function () {
                    self.addProgress(), _copyFileCb(_source, _dest);
                });
            });
        };
        var copyFile = function (_source, _dest) {
            fs.readdir(_source, function (err, files) {
                if (err)
                    throw err;
                files.forEach(function (filename) {
                    var readStream;
                    var writeStram;
                    var sourcePath = _source + "/" + filename;
                    var destPath = _dest + "/" + filename;
                    fs.stat(sourcePath, function (err, stats) {
                        if (err)
                            throw err;
                        if (stats.isFile()) {
                            readStream = fs.createReadStream(sourcePath);
                            writeStram = fs.createWriteStream(destPath);
                            readStream.pipe(writeStram);
                            self.addProgress();
                        }
                        else {
                            stats.isDirectory() && makeDir(sourcePath, destPath, copyFile);
                        }
                    });
                });
            });
        };
        makeDir(source, dest, copyFile);
    };
    _Helper.prototype.getFileCount = function (dir) {
        var count = 0;
        var counter = function (dir) {
            var readdir = fs.readdirSync(dir);
            for (var i in readdir) {
                count++;
                var fullPath = path.join(dir, readdir[i]);
                fs.statSync(fullPath).isDirectory() && counter(fullPath);
            }
        };
        return counter(dir), count;
    };
    /**@description ???????????????????????????????????????????????? */
    _Helper.prototype.getMainBundleIncludes = function () {
        return [
            "src",
            "assets/internal",
            "assets/main",
            "assets/resources",
        ];
    };
    /**@description ??????manifest???????????? */
    _Helper.prototype.onCreateManifest = function () {
        if (this.isDoCreate())
            return;
        this._isDoCreate = true;
        this.saveUserCache();
        this.addLog("\u5F53\u524D\u7528\u6237\u914D\u7F6E\u4E3A : ", this.userCache);
        this.addLog("????????????Manifest????????????...");
        var version = this.userCache.version;
        this.addLog("???????????????:", version);
        var buildDir = this.userCache.buildDir;
        buildDir = buildDir.replace(/\\/g, "/");
        this.addLog("????????????:", buildDir);
        var manifestDir = this.getManifestDir(buildDir);
        manifestDir = manifestDir.replace(/\\/g, "/");
        this.addLog("??????????????????Manifest??????:", manifestDir);
        var serverUrl = this.userCache.serverIP;
        this.addLog("???????????????:", serverUrl);
        var subBundles = Object.keys(this.userCache.bundles);
        this.addLog("????????????:", subBundles);
        var manifest = {
            version: version,
            packageUrl: serverUrl,
            remoteManifestUrl: "",
            remoteVersionUrl: "",
            assets: {},
            searchPaths: [],
        };
        if ("/" == serverUrl[serverUrl.length - 1]) {
            manifest.remoteManifestUrl = serverUrl + "manifest/project.manifest";
            manifest.remoteVersionUrl = serverUrl + "manifest/version.manifest";
        }
        else {
            manifest.remoteManifestUrl = serverUrl + "/manifest/project.manifest";
            manifest.remoteVersionUrl = serverUrl + "/manifest/version.manifest";
        }
        //??????????????????????????????
        this.addLog("????????????Manifest??????", manifestDir);
        if (fs.existsSync(manifestDir)) {
            this.addLog("????????????????????????");
            this.delDir(manifestDir);
        }
        this.mkdirSync(manifestDir);
        //???????????????????????????????????????
        var mainIncludes = this.getMainBundleIncludes();
        for (var i = 0; i < mainIncludes.length; i++) {
            this.readDir(path.join(buildDir, mainIncludes[i]), manifest.assets, buildDir);
        }
        //??????project.manifest
        var projectManifestPath = path.join(manifestDir, "project.manifest");
        var versionManifestPath = path.join(manifestDir, "version.manifest");
        fs.writeFileSync(projectManifestPath, JSON.stringify(manifest));
        this.addLog("\u751F\u6210" + projectManifestPath + "\u6210\u529F");
        delete manifest.assets;
        delete manifest.searchPaths;
        fs.writeFileSync(versionManifestPath, JSON.stringify(manifest));
        this.addLog("\u751F\u6210" + versionManifestPath + "\u6210\u529F");
        //?????????bundles????????????
        for (var i = 0; i < subBundles.length; i++) {
            var key = subBundles[i];
            this.addLog("\u6B63\u5728\u751F\u6210:" + key);
            manifest.version = this.userCache.bundles[key].version;
            manifest.remoteVersionUrl = "";
            manifest.remoteManifestUrl = "";
            manifest.assets = {};
            manifest.searchPaths = [];
            if ("/" == serverUrl[serverUrl.length - 1]) {
                manifest.remoteManifestUrl = serverUrl + ("manifest/" + key + "_project.manifest");
                manifest.remoteVersionUrl = serverUrl + ("manifest/" + key + "_version.manifest");
            }
            else {
                manifest.remoteManifestUrl = serverUrl + ("/manifest/" + key + "_project.manifest");
                manifest.remoteVersionUrl = serverUrl + ("/manifest/" + key + "_version.manifest");
            }
            this.readDir(path.join(buildDir, "assets/" + key), manifest.assets, buildDir);
            projectManifestPath = path.join(manifestDir, key + "_project.manifest");
            versionManifestPath = path.join(manifestDir, key + "_version.manifest");
            fs.writeFileSync(projectManifestPath, JSON.stringify(manifest));
            this.addLog("\u751F\u6210" + projectManifestPath + "\u6210\u529F");
            delete manifest.assets;
            delete manifest.searchPaths;
            fs.writeFileSync(versionManifestPath, JSON.stringify(manifest));
            this.addLog("\u751F\u6210" + versionManifestPath + "\u6210\u529F");
        }
        // this._isDoCreate = false;
        this.packageZip(mainIncludes);
    };
    _Helper.prototype.packageDir = function (dir, jszip) {
        if (!fs.existsSync(dir)) {
            return;
        }
        var readDirs = fs.readdirSync(dir);
        for (var i = 0; i < readDirs.length; i++) {
            var file = readDirs[i];
            var fullPath = path.join(dir, file);
            var stat = fs.statSync(fullPath);
            if (stat.isFile()) {
                jszip.file(file, fs.readFileSync(fullPath));
            }
            else {
                stat.isDirectory() && this.packageDir(fullPath, jszip.folder(file));
            }
        }
    };
    _Helper.prototype.packageZip = function (mainIncludes) {
        var _this = this;
        this.addLog("[\u6253\u5305] \u5F00\u59CB\u6253\u5305\u7248\u672C...");
        var versionManifest = path.join(this.getManifestDir(this.userCache.buildDir), "version.manifest");
        var jszip = new JSZIP();
        for (var index = 0; index < mainIncludes.length; index++) {
            var element = mainIncludes[index];
            var fullPath = path.join(this.userCache.buildDir, element);
            this.packageDir(fullPath, jszip.folder(element));
        }
        //??????manifest???????????????
        var manifest = path.join(this.userCache.buildDir, "manifest");
        this.packageDir(manifest, jszip.folder("manifest"));
        var mainVersionManifest = fs.readFileSync(versionManifest, "utf-8");
        var mainVersion = JSON.parse(mainVersionManifest).version;
        if (this.addLog("[??????] ????????????:" + mainVersion), mainVersion !== this.userCache.version) {
            this.addLog("[??????] ?????????????????????????????????????????????,????????????,????????????!");
            return;
        }
        var packZipName = "ver_main_" + (mainVersion = mainVersion.replace(".", "_")) + ".zip";
        var packZipRootPath = Editor.Project.path + "/PackageVersion";
        fs.existsSync(packZipRootPath) || fs.mkdirSync(packZipRootPath);
        var packVersionZipPath = path.join(packZipRootPath, packZipName);
        if (fs.existsSync(packVersionZipPath)) {
            fs.unlinkSync(packVersionZipPath);
            this.addLog("[??????] ??????????????????zip, ????????????!");
        }
        jszip.generateNodeStream({
            type: "nodebuffer",
            streamFiles: !0
        }).pipe(fs.createWriteStream(packVersionZipPath)).on("finish", function () {
            _this.addLog("[??????] ????????????: " + packVersionZipPath);
        }).on("error", function (e) {
            _this.addLog("[??????] ????????????:" + e.message);
        });
        //???????????????
        var bundles = this.config.bundles;
        var _loop_1 = function (index) {
            var element = bundles[index];
            var versionManifest_1 = path.join(this_1.getManifestDir(this_1.userCache.buildDir), element.dir + "_version.manifest");
            var mainVersionManifest_1 = fs.readFileSync(versionManifest_1, "utf-8");
            var mainVersion_1 = JSON.parse(mainVersionManifest_1).version;
            var packZipName_1 = "ver_" + element.dir + "_" + (mainVersion_1 = mainVersion_1.replace(".", "_")) + ".zip";
            var packVersionZipPath_1 = path.join(packZipRootPath, packZipName_1);
            var jszip_1 = new JSZIP();
            var fullPath = path.join(this_1.userCache.buildDir, "assets/" + element.dir);
            this_1.packageDir(fullPath, jszip_1.folder("assets/" + element.dir));
            if (fs.existsSync(packVersionZipPath_1)) {
                fs.unlinkSync(packVersionZipPath_1);
                this_1.addLog("[??????] ??????????????????zip, ????????????!");
            }
            this_1.addLog("[\u6253\u5305] " + element.name + " " + element.dir + " ...");
            jszip_1.generateNodeStream({
                type: "nodebuffer",
                streamFiles: !0
            }).pipe(fs.createWriteStream(packVersionZipPath_1)).on("finish", function () {
                _this.addLog("[??????] ????????????: " + packVersionZipPath_1);
            }).on("error", function (e) {
                _this.addLog("[??????] ????????????:" + e.message);
            });
        };
        var this_1 = this;
        for (var index = 0; index < bundles.length; index++) {
            _loop_1(index);
        }
        this._isDoCreate = false;
    };
    _Helper.prototype.delDir = function (sourceDir, isRemoveSourceDir) {
        if (isRemoveSourceDir === void 0) { isRemoveSourceDir = false; }
        var delFile = function (dir) {
            if (!fs.existsSync(dir))
                return;
            var readDir = fs.readdirSync(dir);
            for (var i in readDir) {
                var fullPath = path.join(dir, readDir[i]);
                fs.statSync(fullPath).isDirectory() ? delFile(fullPath) : fs.unlinkSync(fullPath);
            }
        };
        var delDir = function (dir) {
            if (!fs.existsSync(dir))
                return;
            var readDir = fs.readdirSync(dir);
            if (readDir.length > 0) {
                for (var i in readDir) {
                    var fullPath = path.join(dir, readDir[i]);
                    delDir(fullPath);
                }
                (dir !== sourceDir || isRemoveSourceDir) && fs.rmdirSync(dir);
            }
            else {
                (dir !== sourceDir || isRemoveSourceDir) && fs.rmdirSync(dir);
            }
        };
        delFile(sourceDir);
        delDir(sourceDir);
    };
    _Helper.prototype.delFile = function (filePath) {
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            return true;
        }
        return false;
    };
    _Helper.prototype.mkdirSync = function (dir) {
        try {
            fs.mkdirSync(dir);
        }
        catch (e) {
            if ("EEXIST" !== e.code)
                throw e;
        }
    };
    _Helper.prototype.readDir = function (dir, obj, source) {
        var stat = fs.statSync(dir);
        if (!stat.isDirectory()) {
            return;
        }
        var subpaths = fs.readdirSync(dir), subpath, size, md5, compressed, relative;
        for (var i = 0; i < subpaths.length; ++i) {
            if (subpaths[i][0] === '.') {
                continue;
            }
            subpath = path.join(dir, subpaths[i]);
            stat = fs.statSync(subpath);
            if (stat.isDirectory()) {
                this.readDir(subpath, obj, source);
            }
            else if (stat.isFile()) {
                // Size in Bytes
                size = stat['size'];
                md5 = require("crypto").createHash('md5').update(fs.readFileSync(subpath)).digest('hex');
                compressed = path.extname(subpath).toLowerCase() === '.zip';
                relative = path.relative(source, subpath);
                relative = relative.replace(/\\/g, '/');
                relative = encodeURI(relative);
                obj[relative] = {
                    'size': size,
                    'md5': md5
                };
                if (compressed) {
                    obj[relative].compressed = true;
                }
            }
        }
    };
    /**
     * @description ?????????????????????????????????
     * @param {*} element
     */
    _Helper.prototype.onRemoteDirConfirm = function (element) {
        if (this.isDoCreate())
            return;
        var result = Editor.Dialog.openFile({
            title: "?????????????????????????????????",
            defaultPath: Editor.Project.path,
            properties: ["openDirectory"]
        });
        if (-1 !== result) {
            var fullPath = result[0];
            this.userCache.remoteDir = fullPath;
            this.view.remoteDir.value = fullPath;
            this.saveUserCache();
        }
    };
    _Helper.prototype.onOpenRemoteDir = function () {
        this.openDir(this.userCache.remoteDir);
    };
    _Helper.prototype.onOpenSelectBulidDir = function () {
        this.openDir(this.userCache.buildDir);
    };
    _Helper.prototype.onOpenManifestDir = function () {
        this.openDir(this.getManifestDir(this.userCache.buildDir));
    };
    _Helper.prototype.openDir = function (dir) {
        if (fs.existsSync(dir)) {
            Electron.shell.showItemInFolder(dir);
            Electron.shell.beep();
        }
        else {
            this.addLog("??????????????????" + dir);
        }
    };
    /**
     * @description ??????????????????
     * @param {*} element
     */
    _Helper.prototype.onBuildDirConfirm = function (element) {
        if (this.isDoCreate())
            return;
        var result = Editor.Dialog.openFile({
            title: "???????????????????????????",
            defaultPath: Editor.Project.path,
            properties: ["openDirectory"]
        });
        if (-1 !== result) {
            var fullPath = result[0];
            if (this.checkBuildDir(fullPath)) {
                this.userCache.buildDir = fullPath;
                this.view.buildDir.value = fullPath;
                this.view.manifestDir.value = this.getManifestDir(this.userCache.buildDir);
                this.saveUserCache();
            }
        }
    };
    _Helper.prototype.checkBuildDir = function (fullPath) {
        if (fs.existsSync(fullPath)) {
            //??????????????????src / assets??????
            var srcPath = path.join(fullPath, "src");
            var assetsPath = path.join(fullPath, "assets");
            if (fs.existsSync(srcPath) && fs.existsSync(assetsPath)) {
                return true;
            }
        }
        this.addLog("\u8BF7\u5148\u6784\u5EFA\u9879\u76EE");
        return false;
    };
    /**
     * @description ???????????? curVersion >= prevVersion ??????ture
     * @example (1.0.1 > 1.0)  (1.0.1 <= 1.0.1) (1.0.1 < 1.0.2) (1.0.1 > 1.0.0)
     * @param curVersion ??????????????????
     * @param prevVersion ?????????????????????
     */
    _Helper.prototype.isVersionPass = function (curVersion, prevVersion) {
        if (undefined === curVersion || null === curVersion || undefined === prevVersion || null === prevVersion)
            return false;
        var curVersionArr = curVersion.split(".");
        var prevVersionArr = prevVersion.split(".");
        var len = curVersionArr.length > prevVersionArr.length ? curVersionArr.length : prevVersionArr.length;
        for (var i = 0; i < len; i++) {
            var curValue = curVersionArr[i], genValue = prevVersionArr[i];
            if (undefined === curValue && undefined !== genValue)
                return false;
            if (undefined !== curValue && undefined === genValue)
                return true;
            if (curValue && genValue && parseInt(curValue) >= parseInt(genValue))
                return true;
        }
        return false;
    };
    /** @description ??????????????????*/
    _Helper.prototype.onVersionChange = function (element) {
        if (this.isDoCreate())
            return;
        var version = element.value;
        if (this.isVersionPass(version, this.userCache.version)) {
            //????????????
            this.userCache.version = version;
            this.saveUserCache();
            return;
        }
        this.addLog("\u65E0\u6548\u7248\u672C\u53F7," + version + " \u5E94\u5927\u4E8E " + this.userCache.version);
    };
    /**
     * @description bundle?????????????????????
     * @param {*} element
     * @param {*} key
     * @returns
     */
    _Helper.prototype.onBundleVersionChange = function (element, key) {
        if (this.isDoCreate())
            return;
        var version = element.value;
        if (this.isVersionPass(version, this.userCache.bundles[key].version)) {
            this.userCache.bundles[key].version = version;
            this.saveUserCache();
            return;
        }
        this.addLog(this.userCache.bundles[key].name + "\u8BBE\u7F6E\u7248\u672C\u53F7\u65E0\u6548," + version + " \u5E94\u5927\u4E8E " + this.userCache.bundles[key].version);
    };
    /**
     * @description ??????????????????
     * @param element ????????????
     */
    _Helper.prototype.onHistoryServerIPChange = function (element) {
        if (this.isDoCreate())
            return;
        //??????????????????
        var options = this.view.historyServerIPSelect.$select.options;
        for (var i = 0; i < options.length; i++) {
            if (options[i].value == element.value) {
                this.userCache.serverIP = options[i].text;
                break;
            }
        }
        this.onInputServerUrlOver();
    };
    /** @description ?????????????????????*/
    _Helper.prototype.onUseLocalIP = function () {
        if (this.isDoCreate())
            return;
        var network = os.networkInterfaces();
        var url = "";
        Object.keys(network).forEach(function (key) {
            network[key].forEach(function (info) {
                if (info.family == "IPv4" && !info.internal) {
                    url = info.address;
                }
            });
        });
        if (url.length > 0) {
            this.userCache.serverIP = "http://" + url;
        }
        this.onInputServerUrlOver();
    };
    /**
     * @description ???????????????????????????
     * @param {*} element
     * @returns
     */
    _Helper.prototype.onInputServerUrlOver = function (element) {
        if (this.isDoCreate())
            return;
        var url = this.userCache.serverIP;
        if (element) {
            //?????????????????????
            url = element.value;
            if (url.length <= 0) {
                return;
            }
        }
        if (/^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/.test(url) == false) {
            this.addLog(url + "\u4E0D\u662F\u4EE5http://https://\u5F00\u5934\uFF0C\u6216\u8005\u4E0D\u662F\u7F51\u5740");
            return;
        }
        this.view.serverIP.value = url;
        this.userCache.serverIP = url;
        if (this.addHotAddress(url)) {
            this.updateHistoryUrl();
        }
        this.saveUserCache();
    };
    /**@description ?????????????????? */
    _Helper.prototype.updateHistoryUrl = function () {
        this.view.historyServerIPSelect.$select.options.length = 0;
        for (var i = 0; i < this.userCache.historyIps.length; i++) {
            var option = document.createElement("option");
            option.value = i;
            option.text = this.userCache.historyIps[i];
            this.view.historyServerIPSelect.$select.options.add(option);
        }
    };
    /**
     * @description ??????????????????
     * @param url
     * */
    _Helper.prototype.addHotAddress = function (url) {
        if (this.userCache.historyIps.indexOf(url) == -1) {
            this.userCache.historyIps.push(url);
            this.addLog("\u6DFB\u52A0\u5386\u53F2\u8BB0\u5F55 :" + url + " \u6210\u529F");
            return true;
        }
        return false;
    };
    /**
     * @description ??????????????????
     * @returns
     */
    _Helper.prototype.isDoCreate = function () {
        if (this._isDoCreate) {
            this.addLog("\u6B63\u5728\u6267\u884C\u751F\u6210\u64CD\u4F5C\uFF0C\u8BF7\u52FF\u64CD\u4F5C");
        }
        return this._isDoCreate;
    };
    /**
     * @description ????????????
     * @param {*} message
     * @param {*} obj
     * @returns
     */
    _Helper.prototype.addLog = function (message, obj) {
        var _this = this;
        if (typeof obj == "function") {
            return;
        }
        if (obj) {
            console.log(message, obj);
        }
        else {
            console.log(message);
        }
        var text = "";
        if (obj == null) {
            text = message;
        }
        else if (typeof obj == "object") {
            text = message + JSON.stringify(obj);
        }
        else {
            text = message + obj.toString();
        }
        var temp = this.view.logView.value;
        if (temp.length > 0) {
            this.view.logView.value = temp + "\n" + text;
        }
        else {
            this.view.logView.value = text;
        }
        setTimeout(function () {
            _this.view.logView.scrollTop = _this.view.logView.scrollHeight;
        }, 10);
    };
    Object.defineProperty(_Helper.prototype, "indexHtmlContent", {
        /**@description ??????index.html????????? */
        get: function () {
            var content = fs.readFileSync(path.join(Editor.Project.path, "/packages/hot-update-tools/dist/panel/index.html"), "utf-8");
            return content;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_Helper.prototype, "config", {
        get: function () {
            if (this._config) {
                return this._config;
            }
            var content = fs.readFileSync(path.join(Editor.Project.path, "/packages/config/bundles.json"), "utf-8");
            this._config = JSON.parse(content);
            return this._config;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_Helper.prototype, "style", {
        get: function () {
            var content = fs.readFileSync(path.join(Editor.Project.path, "/packages/hot-update-tools/dist/panel/index.html"), "utf-8");
            return content;
        },
        enumerable: false,
        configurable: true
    });
    _Helper.prototype.generateTemplate = function () {
        var _template = this.indexHtmlContent;
        //?????????????????????????????????
        //?????????????????????????????????
        var _subGameServerVersionView = "";
        var _subGameVersionView = "";
        for (var i = 0; i < this.config.bundles.length; i++) {
            var gameInfo = this.config.bundles[i];
            if (gameInfo.dir && gameInfo.dir.length > 0) {
                _subGameVersionView += "\n        <ui-prop name=\"" + gameInfo.name + "(" + gameInfo.dir + ")\">\n            <div class=\"flex-1 layout horizontal center\">\n                <ui-checkbox id = \"is" + gameInfo.dir + "includeApp\"> \u662F\u5426\u5305\u542B\u5728\u539F\u59CB\u5305\u5185 </ui-checkbox>\n                <ui-input class=\"flex-1\" id = \"" + gameInfo.dir + "Version\"></ui-input>\n            </div>\n        </ui-prop>\n        ";
                this.elements["is" + gameInfo.dir + "includeApp"] = "#is" + gameInfo.dir + "includeApp";
                this.elements[gameInfo.dir + "Version"] = "#" + gameInfo.dir + "Version";
                _subGameServerVersionView += "\n        <ui-prop name=\"" + gameInfo.name + "(" + gameInfo.dir + ")\">\n            <div class=\"flex-1 layout horizontal center\">\n                <ui-input disabled=\"disabled\" id = \"" + gameInfo.dir + "remoteUrl\" class=\"flex-2\"></ui-input>\n                <ui-button class=\"end-justified\" id = \"refresh" + gameInfo.dir + "Version\"><i\n                    class=\"icon-arrows-cw\"></i></ui-button>\n            </div>\n        </ui-prop>\n        ";
                this.elements[gameInfo.dir + "remoteUrl"] = "#" + gameInfo.dir + "remoteUrl";
                this.elements["refresh" + gameInfo.dir + "Version"] = "#refresh" + gameInfo.dir + "Version";
                this.bundles[gameInfo.dir] = JSON.parse(JSON.stringify(gameInfo));
            }
        }
        var templateReplaceManifest = function templateReplace() {
            return arguments[1] + _subGameVersionView + arguments[3];
        };
        //???????????????????????????
        _template = _template.replace(/(<!--subgame start-->)([\s\w\S]*)(<!--subgame end-->)/g, templateReplaceManifest);
        var templateReplaceTestManifest = function templateReplace() {
            return arguments[1] + _subGameServerVersionView + arguments[3];
        };
        //????????????????????????????????????
        _template = _template.replace(/(<!--subgame test start-->)([\s\w\S]*)(<!--subgame test end-->)/g, templateReplaceTestManifest);
        return _template;
    };
    Object.defineProperty(_Helper.prototype, "template", {
        get: function () {
            if (this._template) {
                return this._template;
            }
            this._template = this.generateTemplate();
            return this._template;
        },
        enumerable: false,
        configurable: true
    });
    return _Helper;
}());
var Helper = new _Helper();
Editor.Panel.extend({
    style: Helper.style,
    template: Helper.template,
    $: Helper.elements,
    ready: function () {
        var _this = this;
        //??????????????????????????????html??????
        var view = {};
        Object.keys(Helper.elements).forEach(function (key) {
            view[key] = _this["$" + key];
        });
        Helper.init(view);
    },
    messages: {
        'hot-update-tools:onConfirmDelBundle': function () {
            Helper.onConfirmDelBundle();
        }
    }
});
