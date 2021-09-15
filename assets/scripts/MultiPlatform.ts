
// 多平台
export default class MultiPlatform {
    private static instance: MultiPlatform = null;

    public static getInstance() : MultiPlatform {
        if (this.instance === null) {
            this.instance = new MultiPlatform();
        }
        return this.instance;
    }

    private constructor() {

    }

    // 设备名字 比如iPhone X, HUAWEI MATE 40 PRO等
    public getDeviceName() {
        if (cc.sys.platform == cc.sys.ANDROID) {
            return jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AndroidDevice", "getDeviceName", "()Ljava/lang/String;");
        } else if (cc.sys.platform == cc.sys.IPHONE || cc.sys.platform == cc.sys.IPAD) {
            return 'TODO';
        } else if (cc.sys.isBrowser) {
            return 'browser';
        } else {
            return 'windows';
        }
    }

    // 设备唯一标识
    public getUUID() {
        if (cc.sys.platform == cc.sys.ANDROID) {
            return jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AndroidDevice", "getUUID", "()Ljava/lang/String;");
        } else if (cc.sys.platform == cc.sys.IPHONE || cc.sys.platform == cc.sys.IPAD) {
            return 'TODO';
        } else if (cc.sys.isBrowser) {
            return 'browser';
        } else {
            return 'windows';
        }
    }

    // 获取当前设备的网络类型
    public getNetworkType() {
        return cc.sys.getNetworkType();
    }

    // 获取当前设备的网络强度
    public getNetworkStrength() {
        if (cc.sys.platform == cc.sys.ANDROID) {
            return jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AndroidDevice", "getNetworkStrength", "()I");
        } else if (cc.sys.platform == cc.sys.IPHONE || cc.sys.platform == cc.sys.IPAD) {
            return 5; //TODO
        } else if (cc.sys.isBrowser) {
            return 5;
        } else {
            return 5;
        }
    }

    // 获取当前设备的电池电量
    public getBatteryLevel() {
        return cc.sys.getBatteryLevel();
    }
}
