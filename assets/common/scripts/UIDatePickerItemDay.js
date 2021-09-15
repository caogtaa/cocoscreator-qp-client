cc.Class({
    extends: cc.Component,

    properties: {
        lbDay: cc.Label,
        spSel: cc.Sprite,
    },

    setDay(index, day, sel, cb) {
        this.index = index;
        this.day = day;
        this.cb = cb;

        this.lbDay.string = day;
        this.spSel.enabled = sel;
    },

    onClickItem() {
        if (this.cb) {
            this.cb(this.index, this.day);
        }
    },
});
