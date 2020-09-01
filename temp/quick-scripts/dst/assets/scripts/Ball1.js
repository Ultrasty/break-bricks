
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Ball1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4574auBLBVOtKn3wpewbEGW', 'Ball1');
// scripts/view/Ball1.js

"use strict";

cc.Class({
  "extends": cc.Component,
  init: function init(gameCtl) {
    this.gameCtl = gameCtl;
    this.node.position = cc.v2(-380, 580); //初始化位置

    this.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 0); //初始化速度
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdmlld1xcQmFsbDEuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsImluaXQiLCJnYW1lQ3RsIiwibm9kZSIsInBvc2l0aW9uIiwidjIiLCJnZXRDb21wb25lbnQiLCJSaWdpZEJvZHkiLCJsaW5lYXJWZWxvY2l0eSIsIm9uQmVnaW5Db250YWN0IiwiY29udGFjdCIsInNlbGYiLCJvdGhlciIsInRhZyIsIm9uQmFsbENvbnRhY3RCcmljayIsIm9uQmFsbENvbnRhY3RHcm91bmQiLCJvbkJhbGxDb250YWN0UGFkZGxlIiwib25CYWxsQ29udGFjdFdhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLElBSEssZ0JBR0FDLE9BSEEsRUFHUztBQUNWLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLElBQUwsQ0FBVUMsUUFBVixHQUFxQk4sRUFBRSxDQUFDTyxFQUFILENBQU0sQ0FBQyxHQUFQLEVBQVcsR0FBWCxDQUFyQixDQUZVLENBRTJCOztBQUNyQyxTQUFLQyxZQUFMLENBQWtCUixFQUFFLENBQUNTLFNBQXJCLEVBQWdDQyxjQUFoQyxHQUFpRFYsRUFBRSxDQUFDTyxFQUFILENBQU0sQ0FBTixFQUFRLENBQVIsQ0FBakQsQ0FIVSxDQUdrRDtBQUMvRCxHQVBJO0FBU0xJLEVBQUFBLGNBVEssMEJBU1VDLE9BVFYsRUFTbUJDLElBVG5CLEVBU3lCQyxLQVR6QixFQVNnQztBQUNqQyxZQUFRQSxLQUFLLENBQUNDLEdBQWQ7QUFDSTtBQUNBLFdBQUssQ0FBTDtBQUNJLGFBQUtYLE9BQUwsQ0FBYVksa0JBQWIsQ0FBZ0NILElBQUksQ0FBQ1IsSUFBckMsRUFBMkNTLEtBQUssQ0FBQ1QsSUFBakQ7QUFDQTtBQUNKOztBQUNBLFdBQUssQ0FBTDtBQUNJLGFBQUtELE9BQUwsQ0FBYWEsbUJBQWIsQ0FBaUNKLElBQUksQ0FBQ1IsSUFBdEMsRUFBNENTLEtBQUssQ0FBQ1QsSUFBbEQ7QUFDQTtBQUNKOztBQUNBLFdBQUssQ0FBTDtBQUNJLGFBQUtELE9BQUwsQ0FBYWMsbUJBQWIsQ0FBaUNMLElBQUksQ0FBQ1IsSUFBdEMsRUFBNENTLEtBQUssQ0FBQ1QsSUFBbEQ7QUFDQTtBQUNKOztBQUNBLFdBQUssQ0FBTDtBQUNJLGFBQUtELE9BQUwsQ0FBYWUsaUJBQWIsQ0FBK0JOLElBQUksQ0FBQ1IsSUFBcEMsRUFBMENTLEtBQUssQ0FBQ1QsSUFBaEQ7QUFDQTtBQWhCUjtBQWtCSDtBQTVCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgaW5pdChnYW1lQ3RsKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lQ3RsID0gZ2FtZUN0bDtcclxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBjYy52MigtMzgwLDU4MCk7Ly/liJ3lp4vljJbkvY3nva5cclxuICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwwKTsvL+WIneWni+WMlumAn+W6plxyXG4gICAgfSxcclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcikge1xyXG4gICAgICAgIHN3aXRjaCAob3RoZXIudGFnKSB7XHJcbiAgICAgICAgICAgIC8v56Kw5Yiw56CW5Z2XXHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUN0bC5vbkJhbGxDb250YWN0QnJpY2soc2VsZi5ub2RlLCBvdGhlci5ub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvL+eisOWIsOWcsOmdolxyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVDdGwub25CYWxsQ29udGFjdEdyb3VuZChzZWxmLm5vZGUsIG90aGVyLm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8v56Kw5Yiw5omY55uYXHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUN0bC5vbkJhbGxDb250YWN0UGFkZGxlKHNlbGYubm9kZSwgb3RoZXIubm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy/norDliLDloplcclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lQ3RsLm9uQmFsbENvbnRhY3RXYWxsKHNlbGYubm9kZSwgb3RoZXIubm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTsiXX0=