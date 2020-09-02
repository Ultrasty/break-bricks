
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Ball3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a2983WNMIJKwrBsHTEXhdxh', 'Ball3');
// scripts/Ball3.js

"use strict";

cc.Class({
  "extends": cc.Component,
  init: function init(gameCtl) {
    this.gameCtl = gameCtl;
    this.node.position = cc.v2(50, -23); //初始化位置
    // let r1 = Math.random();
    // let r2=  Math.random();
    // let x=Math.sin(r1*Math.PI*2);
    // let y=Math.cos(r1*Math.PI*2);

    this.getComponent(cc.RigidBody).linearVelocity = cc.v2(85, 860); //初始化速度
  },
  onBeginContact: function onBeginContact(contact, self, other) {
    //根据碰到的物体不同，触发不同的事件处理函数
    switch (other.tag) {
      case 1:
        this.gameCtl.onBallContactBrick(self.node, other.node); //砖块

        break;

      case 2:
        this.gameCtl.onBallContactGround(self.node, other.node); //地面

        break;

      case 3:
        this.gameCtl.onBallContactPaddle(self.node, other.node); //板子

        break;

      case 4:
        this.gameCtl.onBallContactWall(self.node, other.node); //墙

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQmFsbDMuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsImluaXQiLCJnYW1lQ3RsIiwibm9kZSIsInBvc2l0aW9uIiwidjIiLCJnZXRDb21wb25lbnQiLCJSaWdpZEJvZHkiLCJsaW5lYXJWZWxvY2l0eSIsIm9uQmVnaW5Db250YWN0IiwiY29udGFjdCIsInNlbGYiLCJvdGhlciIsInRhZyIsIm9uQmFsbENvbnRhY3RCcmljayIsIm9uQmFsbENvbnRhY3RHcm91bmQiLCJvbkJhbGxDb250YWN0UGFkZGxlIiwib25CYWxsQ29udGFjdFdhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLElBSEssZ0JBR0FDLE9BSEEsRUFHUztBQUNWLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLElBQUwsQ0FBVUMsUUFBVixHQUFxQk4sRUFBRSxDQUFDTyxFQUFILENBQU0sRUFBTixFQUFTLENBQUMsRUFBVixDQUFyQixDQUZVLENBRXlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQUtDLFlBQUwsQ0FBa0JSLEVBQUUsQ0FBQ1MsU0FBckIsRUFBZ0NDLGNBQWhDLEdBQWlEVixFQUFFLENBQUNPLEVBQUgsQ0FBTSxFQUFOLEVBQVMsR0FBVCxDQUFqRCxDQVBVLENBT3FEO0FBQ2xFLEdBWEk7QUFhTEksRUFBQUEsY0FiSywwQkFhVUMsT0FiVixFQWFtQkMsSUFibkIsRUFheUJDLEtBYnpCLEVBYWdDO0FBQ2pDO0FBQ0EsWUFBUUEsS0FBSyxDQUFDQyxHQUFkO0FBQ0ksV0FBSyxDQUFMO0FBQ0ksYUFBS1gsT0FBTCxDQUFhWSxrQkFBYixDQUFnQ0gsSUFBSSxDQUFDUixJQUFyQyxFQUEyQ1MsS0FBSyxDQUFDVCxJQUFqRCxFQURKLENBQzJEOztBQUN2RDs7QUFDSixXQUFLLENBQUw7QUFDSSxhQUFLRCxPQUFMLENBQWFhLG1CQUFiLENBQWlDSixJQUFJLENBQUNSLElBQXRDLEVBQTRDUyxLQUFLLENBQUNULElBQWxELEVBREosQ0FDNEQ7O0FBQ3hEOztBQUNKLFdBQUssQ0FBTDtBQUNJLGFBQUtELE9BQUwsQ0FBYWMsbUJBQWIsQ0FBaUNMLElBQUksQ0FBQ1IsSUFBdEMsRUFBNENTLEtBQUssQ0FBQ1QsSUFBbEQsRUFESixDQUM0RDs7QUFDeEQ7O0FBQ0osV0FBSyxDQUFMO0FBQ0ksYUFBS0QsT0FBTCxDQUFhZSxpQkFBYixDQUErQk4sSUFBSSxDQUFDUixJQUFwQyxFQUEwQ1MsS0FBSyxDQUFDVCxJQUFoRCxFQURKLENBQzBEOztBQUN0RDtBQVpSO0FBY0g7QUE3QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIGluaXQoZ2FtZUN0bCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZUN0bCA9IGdhbWVDdGw7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjIoNTAsLTIzKTsvL+WIneWni+WMluS9jee9rlxyXG4gICAgICAgIC8vIGxldCByMSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgLy8gbGV0IHIyPSAgTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAvLyBsZXQgeD1NYXRoLnNpbihyMSpNYXRoLlBJKjIpO1xyXG4gICAgICAgIC8vIGxldCB5PU1hdGguY29zKHIxKk1hdGguUEkqMik7XHJcbiAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDg1LDg2MCk7Ly/liJ3lp4vljJbpgJ/luqZcclxuICAgIH0sXHJcblxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpIHtcclxuICAgICAgICAvL+agueaNrueisOWIsOeahOeJqeS9k+S4jeWQjO+8jOinpuWPkeS4jeWQjOeahOS6i+S7tuWkhOeQhuWHveaVsFxyXG4gICAgICAgIHN3aXRjaCAob3RoZXIudGFnKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUN0bC5vbkJhbGxDb250YWN0QnJpY2soc2VsZi5ub2RlLCBvdGhlci5ub2RlKTsvL+egluWdl1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUN0bC5vbkJhbGxDb250YWN0R3JvdW5kKHNlbGYubm9kZSwgb3RoZXIubm9kZSk7Ly/lnLDpnaJcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVDdGwub25CYWxsQ29udGFjdFBhZGRsZShzZWxmLm5vZGUsIG90aGVyLm5vZGUpOy8v5p2/5a2QXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lQ3RsLm9uQmFsbENvbnRhY3RXYWxsKHNlbGYubm9kZSwgb3RoZXIubm9kZSk7Ly/loplcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pOyJdfQ==