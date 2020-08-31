"use strict";
cc._RF.push(module, '4dc82c1qO9KbZBsMZGbHlMV', 'Paddle');
// scripts/view/Paddle.js

"use strict";

cc.Class({
  "extends": cc.Component,
  onLoad: function onLoad() {
    var _this = this;

    this.node.parent.on("touchmove", function (event) {
      //将世界坐标转化为本地坐标
      var touchPoint = _this.node.parent.convertToNodeSpace(event.getLocation());

      _this.node.x = touchPoint.x;
    });
  },
  init: function init() {
    this.node.x = 480;
  }
});

cc._RF.pop();