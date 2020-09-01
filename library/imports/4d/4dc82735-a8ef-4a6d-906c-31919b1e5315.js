"use strict";
cc._RF.push(module, '4dc82c1qO9KbZBsMZGbHlMV', 'board');
// scripts/board.js

"use strict";

cc.Class({
  "extends": cc.Component,
  onLoad: function onLoad() {
    var _this = this;

    this.node.parent.on("mousemove", function (event) {
      ///使用事件名mousemove来注册鼠标事件
      _this.node.x = event.getLocation().x; //鼠标移动触发事件给Paddle的位置重新赋值
    });
  },
  init: function init() {
    this.node.x = 480;
  }
});

cc._RF.pop();