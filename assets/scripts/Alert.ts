// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

// 弹出框
@ccclass
export default class Alert extends cc.Component {

    @property(cc.RichText)
    labelContent: cc.RichText = null;
    @property(cc.Label)
    labelOK: cc.Label = null;
    @property(cc.Label)
    labelCancel: cc.Label = null;
    @property(cc.Button)
    buttonClose: cc.Button = null;
    @property(cc.Button)
    buttonOk: cc.Button = null;
    @property(cc.Button)
    buttonCancel: cc.Button = null;

    // { cancelTitle:'取消', okTitle:'确定', content:'text',cancelCallback:function, okCallback: function, hideOk:boolean, hideCancel: boolean, hasClose: boolean }
    private dataList: any[] = [];

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}

    onDisable() {
        this.dataList.pop();

        if (this.dataList.length > 0) {
            let data = this.dataList[this.dataList.length - 1];
            this.reloadData(data);
            this.node.active = true;
        }
    }

    public show(data: any) {
        this.dataList.push(data);
        this.reloadData(data);
        this.node.active = true;
    }

    private reloadData(data: any) {
        if (data.hasClose) {
            this.buttonClose.node.active = true;
        }

        if (data.hideOk) {
            this.buttonOk.node.active = false;
        }

        if (data.hideCancel) {
            this.buttonCancel.node.active = false;
        }

        if (data.cancelTitle) {
            this.labelCancel.string = data.cancelTitle;
        }
        if (data.okTitle) {
            this.labelOK.string = data.okTitle;
        }
        if (data.content) {
            this.labelContent.string = data.content;
        }
    }

    private onClickedOK() {
        if (this.dataList.length > 0) {
            let data = this.dataList[this.dataList.length - 1];
            if (data.okCallback) {
                data.okCallback();
            }
        }
        this.node.active = false;
    }

    private onClickedCancel() {
        if (this.dataList.length > 0) {
            let data = this.dataList[this.dataList.length - 1];
            if (data.cancelCallback) {
                data.cancelCallback();
            }
        }
        this.node.active = false;
    }

    private onClickedClose() {
        this.node.active = false;
    }
}
