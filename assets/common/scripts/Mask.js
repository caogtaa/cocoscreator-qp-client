cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad () {
        let visiSize = cc.view.getVisibleSize();
        let x = visiSize.width / 2;
        let y = visiSize.height / 2;
        let p = this.node.parent.convertToNodeSpaceAR(cc.Vec2(x, y));
        this.node.setContentSize(visiSize);
        this.node.x = p.x;
        this.node.y = p.y;
    }
});
