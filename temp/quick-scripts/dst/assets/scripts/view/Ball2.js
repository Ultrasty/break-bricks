
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/view/Ball2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cddac13mk5Dkb3uKOvRGx43', 'Ball2');
// scripts/view/Ball2.js

"use strict";

cc.Class({
  "extends": cc.Component,
  init: function init(gameCtl) {
    this.gameCtl = gameCtl;
    this.node.position = cc.v2(560, 600); //初始化位置

    this.getComponent(cc.RigidBody).linearVelocity = cc.v2(200, 700); //初始化速度
  },
  onBeginContact: function onBeginContact(contact, self, other) {
    switch (other.tag) {
      //碰到砖块
      case 1:
        this.gameCtl.onBallContactBrick(self.node, other.node);
        break;
      //碰到地面

      case 2:
        this.gameCtl.onBallContactGround(self.node, other.node);
        break;
      //碰到托盘

      case 3:
        this.gameCtl.onBallContactPaddle(self.node, other.node);
        break;
      //碰到墙

      case 4:
        this.gameCtl.onBallContactWall(self.node, other.node);
        break;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdmlld1xcQmFsbDIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsImluaXQiLCJnYW1lQ3RsIiwibm9kZSIsInBvc2l0aW9uIiwidjIiLCJnZXRDb21wb25lbnQiLCJSaWdpZEJvZHkiLCJsaW5lYXJWZWxvY2l0eSIsIm9uQmVnaW5Db250YWN0IiwiY29udGFjdCIsInNlbGYiLCJvdGhlciIsInRhZyIsIm9uQmFsbENvbnRhY3RCcmljayIsIm9uQmFsbENvbnRhY3RHcm91bmQiLCJvbkJhbGxDb250YWN0UGFkZGxlIiwib25CYWxsQ29udGFjdFdhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLElBSEssZ0JBR0FDLE9BSEEsRUFHUztBQUNWLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLElBQUwsQ0FBVUMsUUFBVixHQUFxQk4sRUFBRSxDQUFDTyxFQUFILENBQU0sR0FBTixFQUFVLEdBQVYsQ0FBckIsQ0FGVSxDQUUwQjs7QUFDcEMsU0FBS0MsWUFBTCxDQUFrQlIsRUFBRSxDQUFDUyxTQUFyQixFQUFnQ0MsY0FBaEMsR0FBaURWLEVBQUUsQ0FBQ08sRUFBSCxDQUFNLEdBQU4sRUFBVSxHQUFWLENBQWpELENBSFUsQ0FHc0Q7QUFDbkUsR0FQSTtBQVNMSSxFQUFBQSxjQVRLLDBCQVNVQyxPQVRWLEVBU21CQyxJQVRuQixFQVN5QkMsS0FUekIsRUFTZ0M7QUFDakMsWUFBUUEsS0FBSyxDQUFDQyxHQUFkO0FBQ0k7QUFDQSxXQUFLLENBQUw7QUFDSSxhQUFLWCxPQUFMLENBQWFZLGtCQUFiLENBQWdDSCxJQUFJLENBQUNSLElBQXJDLEVBQTJDUyxLQUFLLENBQUNULElBQWpEO0FBQ0E7QUFDSjs7QUFDQSxXQUFLLENBQUw7QUFDSSxhQUFLRCxPQUFMLENBQWFhLG1CQUFiLENBQWlDSixJQUFJLENBQUNSLElBQXRDLEVBQTRDUyxLQUFLLENBQUNULElBQWxEO0FBQ0E7QUFDSjs7QUFDQSxXQUFLLENBQUw7QUFDSSxhQUFLRCxPQUFMLENBQWFjLG1CQUFiLENBQWlDTCxJQUFJLENBQUNSLElBQXRDLEVBQTRDUyxLQUFLLENBQUNULElBQWxEO0FBQ0E7QUFDSjs7QUFDQSxXQUFLLENBQUw7QUFDSSxhQUFLRCxPQUFMLENBQWFlLGlCQUFiLENBQStCTixJQUFJLENBQUNSLElBQXBDLEVBQTBDUyxLQUFLLENBQUNULElBQWhEO0FBQ0E7QUFoQlI7QUFrQkg7QUE1QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIGluaXQoZ2FtZUN0bCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZUN0bCA9IGdhbWVDdGw7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjIoNTYwLDYwMCk7Ly/liJ3lp4vljJbkvY3nva5cclxuICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMjAwLDcwMCk7Ly/liJ3lp4vljJbpgJ/luqZcclxuICAgIH0sXHJcblxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpIHtcclxuICAgICAgICBzd2l0Y2ggKG90aGVyLnRhZykge1xyXG4gICAgICAgICAgICAvL+eisOWIsOegluWdl1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVDdGwub25CYWxsQ29udGFjdEJyaWNrKHNlbGYubm9kZSwgb3RoZXIubm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy/norDliLDlnLDpnaJcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lQ3RsLm9uQmFsbENvbnRhY3RHcm91bmQoc2VsZi5ub2RlLCBvdGhlci5ub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvL+eisOWIsOaJmOebmFxyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVDdGwub25CYWxsQ29udGFjdFBhZGRsZShzZWxmLm5vZGUsIG90aGVyLm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8v56Kw5Yiw5aKZXHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUN0bC5vbkJhbGxDb250YWN0V2FsbChzZWxmLm5vZGUsIG90aGVyLm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7Il19