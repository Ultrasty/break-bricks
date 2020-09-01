
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/board.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYm9hcmQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsIm9uTG9hZCIsIm5vZGUiLCJwYXJlbnQiLCJvbiIsImV2ZW50IiwieCIsImdldExvY2F0aW9uIiwiaW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsTUFBTSxFQUFFLGtCQUFZO0FBQUE7O0FBRWhCLFNBQUtDLElBQUwsQ0FBVUMsTUFBVixDQUFpQkMsRUFBakIsQ0FBb0IsV0FBcEIsRUFBaUMsVUFBQ0MsS0FBRCxFQUFXO0FBQUM7QUFDekMsTUFBQSxLQUFJLENBQUNILElBQUwsQ0FBVUksQ0FBVixHQUFjRCxLQUFLLENBQUNFLFdBQU4sR0FBb0JELENBQWxDLENBRHdDLENBQ0o7QUFDdkMsS0FGRDtBQUdILEdBUkk7QUFVTEUsRUFBQUEsSUFWSyxrQkFVQztBQUNGLFNBQUtOLElBQUwsQ0FBVUksQ0FBVixHQUFjLEdBQWQ7QUFDSDtBQVpJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50Lm9uKFwibW91c2Vtb3ZlXCIsIChldmVudCkgPT4gey8vL+S9v+eUqOS6i+S7tuWQjW1vdXNlbW92ZeadpeazqOWGjOm8oOagh+S6i+S7tlxyXG4gICAgICAgICAgICB0aGlzLm5vZGUueCA9IGV2ZW50LmdldExvY2F0aW9uKCkueDsvL+m8oOagh+enu+WKqOinpuWPkeS6i+S7tue7mVBhZGRsZeeahOS9jee9rumHjeaWsOi1i+WAvFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBpbml0KCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLnggPSA0ODA7XHJcbiAgICB9LFxyXG5cclxufSk7Il19