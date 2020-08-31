
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/view/Ball.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9b280YbFuZJv4QPGPL8e8iv', 'Ball');
// scripts/view/Ball.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  init: function init(gameCtl) {
    this.gameCtl = gameCtl;
    this.node.position = cc.v2(480, 60); //初始化位置

    this.getComponent(cc.RigidBody).linearVelocity = cc.v2(500, 500); //初始化速度
  },
  onBeginContact: function onBeginContact(contact, self, other) {
    switch (other.tag) {
      case 1:
        //球碰到砖块
        this.gameCtl.onBallContactBrick(self.node, other.node);
        break;

      case 2:
        //球碰到地面
        this.gameCtl.onBallContactGround(self.node, other.node);
        break;

      case 3:
        //球碰到托盘
        this.gameCtl.onBallContactPaddle(self.node, other.node);
        break;

      case 4:
        //球碰到墙
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdmlld1xcQmFsbC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImluaXQiLCJnYW1lQ3RsIiwibm9kZSIsInBvc2l0aW9uIiwidjIiLCJnZXRDb21wb25lbnQiLCJSaWdpZEJvZHkiLCJsaW5lYXJWZWxvY2l0eSIsIm9uQmVnaW5Db250YWN0IiwiY29udGFjdCIsInNlbGYiLCJvdGhlciIsInRhZyIsIm9uQmFsbENvbnRhY3RCcmljayIsIm9uQmFsbENvbnRhY3RHcm91bmQiLCJvbkJhbGxDb250YWN0UGFkZGxlIiwib25CYWxsQ29udGFjdFdhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBT0xDLEVBQUFBLElBUEssZ0JBT0FDLE9BUEEsRUFPUztBQUNWLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLElBQUwsQ0FBVUMsUUFBVixHQUFxQlAsRUFBRSxDQUFDUSxFQUFILENBQU0sR0FBTixFQUFVLEVBQVYsQ0FBckIsQ0FGVSxDQUV5Qjs7QUFDbkMsU0FBS0MsWUFBTCxDQUFrQlQsRUFBRSxDQUFDVSxTQUFyQixFQUFnQ0MsY0FBaEMsR0FBaURYLEVBQUUsQ0FBQ1EsRUFBSCxDQUFNLEdBQU4sRUFBVSxHQUFWLENBQWpELENBSFUsQ0FHc0Q7QUFDbkUsR0FYSTtBQWFMSSxFQUFBQSxjQWJLLDBCQWFVQyxPQWJWLEVBYW1CQyxJQWJuQixFQWF5QkMsS0FiekIsRUFhZ0M7QUFDakMsWUFBUUEsS0FBSyxDQUFDQyxHQUFkO0FBQ0ksV0FBSyxDQUFMO0FBQU87QUFDSCxhQUFLWCxPQUFMLENBQWFZLGtCQUFiLENBQWdDSCxJQUFJLENBQUNSLElBQXJDLEVBQTJDUyxLQUFLLENBQUNULElBQWpEO0FBQ0E7O0FBQ0osV0FBSyxDQUFMO0FBQU87QUFDSCxhQUFLRCxPQUFMLENBQWFhLG1CQUFiLENBQWlDSixJQUFJLENBQUNSLElBQXRDLEVBQTRDUyxLQUFLLENBQUNULElBQWxEO0FBQ0E7O0FBQ0osV0FBSyxDQUFMO0FBQU87QUFDSCxhQUFLRCxPQUFMLENBQWFjLG1CQUFiLENBQWlDTCxJQUFJLENBQUNSLElBQXRDLEVBQTRDUyxLQUFLLENBQUNULElBQWxEO0FBQ0E7O0FBQ0osV0FBSyxDQUFMO0FBQU87QUFDSCxhQUFLRCxPQUFMLENBQWFlLGlCQUFiLENBQStCTixJQUFJLENBQUNSLElBQXBDLEVBQTBDUyxLQUFLLENBQUNULElBQWhEO0FBQ0E7QUFaUjtBQWNIO0FBNUJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIFxuICAgIH0sXG5cbiAgICBpbml0KGdhbWVDdGwpIHtcbiAgICAgICAgdGhpcy5nYW1lQ3RsID0gZ2FtZUN0bDtcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjIoNDgwLDYwKTsvL+WIneWni+WMluS9jee9rlxuICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoNTAwLDUwMCk7Ly/liJ3lp4vljJbpgJ/luqZcbiAgICB9LFxuXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpIHtcbiAgICAgICAgc3dpdGNoIChvdGhlci50YWcpIHtcbiAgICAgICAgICAgIGNhc2UgMTovL+eQg+eisOWIsOegluWdl1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUN0bC5vbkJhbGxDb250YWN0QnJpY2soc2VsZi5ub2RlLCBvdGhlci5ub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjovL+eQg+eisOWIsOWcsOmdolxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUN0bC5vbkJhbGxDb250YWN0R3JvdW5kKHNlbGYubm9kZSwgb3RoZXIubm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6Ly/nkIPnorDliLDmiZjnm5hcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVDdGwub25CYWxsQ29udGFjdFBhZGRsZShzZWxmLm5vZGUsIG90aGVyLm5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0Oi8v55CD56Kw5Yiw5aKZXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lQ3RsLm9uQmFsbENvbnRhY3RXYWxsKHNlbGYubm9kZSwgb3RoZXIubm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9LFxufSk7Il19