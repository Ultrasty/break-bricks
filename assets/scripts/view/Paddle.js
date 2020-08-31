cc.Class({
    extends: cc.Component,

    onLoad: function () {
        this.node.parent.on("mousemove", (event) => {///使用事件名mousemove来注册鼠标事件
            this.node.x = event.getLocation().x;//鼠标移动触发事件给Paddle的位置重新赋值
        });
    },

    init(){
        this.node.x = 480;
    }

});