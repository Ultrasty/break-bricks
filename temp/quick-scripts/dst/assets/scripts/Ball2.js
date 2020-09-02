
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Ball2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cddac13mk5Dkb3uKOvRGx43', 'Ball2');
// scripts/Ball2.js

"use strict";

cc.Class({
  "extends": cc.Component,
  init: function init(gameCtl) {
    this.gameCtl = gameCtl;
    this.node.position = cc.v2(910, -23); //初始化位置
    // let r1 = Math.random();
    // let r2=  Math.random();
    // let x=Math.sin(r1*Math.PI*2);
    // let y=Math.cos(r1*Math.PI*2);

    this.getComponent(cc.RigidBody).linearVelocity = cc.v2(-70, 500); //初始化速度
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQmFsbDIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsImluaXQiLCJnYW1lQ3RsIiwibm9kZSIsInBvc2l0aW9uIiwidjIiLCJnZXRDb21wb25lbnQiLCJSaWdpZEJvZHkiLCJsaW5lYXJWZWxvY2l0eSIsIm9uQmVnaW5Db250YWN0IiwiY29udGFjdCIsInNlbGYiLCJvdGhlciIsInRhZyIsIm9uQmFsbENvbnRhY3RCcmljayIsIm9uQmFsbENvbnRhY3RHcm91bmQiLCJvbkJhbGxDb250YWN0UGFkZGxlIiwib25CYWxsQ29udGFjdFdhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLElBSEssZ0JBR0FDLE9BSEEsRUFHUztBQUNWLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLElBQUwsQ0FBVUMsUUFBVixHQUFxQk4sRUFBRSxDQUFDTyxFQUFILENBQU0sR0FBTixFQUFVLENBQUMsRUFBWCxDQUFyQixDQUZVLENBRTBCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQUtDLFlBQUwsQ0FBa0JSLEVBQUUsQ0FBQ1MsU0FBckIsRUFBZ0NDLGNBQWhDLEdBQWlEVixFQUFFLENBQUNPLEVBQUgsQ0FBTSxDQUFDLEVBQVAsRUFBVSxHQUFWLENBQWpELENBUFUsQ0FPc0Q7QUFDbkUsR0FYSTtBQWFMSSxFQUFBQSxjQWJLLDBCQWFVQyxPQWJWLEVBYW1CQyxJQWJuQixFQWF5QkMsS0FiekIsRUFhZ0M7QUFDakM7QUFDQSxZQUFRQSxLQUFLLENBQUNDLEdBQWQ7QUFDSSxXQUFLLENBQUw7QUFDSSxhQUFLWCxPQUFMLENBQWFZLGtCQUFiLENBQWdDSCxJQUFJLENBQUNSLElBQXJDLEVBQTJDUyxLQUFLLENBQUNULElBQWpELEVBREosQ0FDMkQ7O0FBQ3ZEOztBQUNKLFdBQUssQ0FBTDtBQUNJLGFBQUtELE9BQUwsQ0FBYWEsbUJBQWIsQ0FBaUNKLElBQUksQ0FBQ1IsSUFBdEMsRUFBNENTLEtBQUssQ0FBQ1QsSUFBbEQsRUFESixDQUM0RDs7QUFDeEQ7O0FBQ0osV0FBSyxDQUFMO0FBQ0ksYUFBS0QsT0FBTCxDQUFhYyxtQkFBYixDQUFpQ0wsSUFBSSxDQUFDUixJQUF0QyxFQUE0Q1MsS0FBSyxDQUFDVCxJQUFsRCxFQURKLENBQzREOztBQUN4RDs7QUFDSixXQUFLLENBQUw7QUFDSSxhQUFLRCxPQUFMLENBQWFlLGlCQUFiLENBQStCTixJQUFJLENBQUNSLElBQXBDLEVBQTBDUyxLQUFLLENBQUNULElBQWhELEVBREosQ0FDMEQ7O0FBQ3REO0FBWlI7QUFjSDtBQTdCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgaW5pdChnYW1lQ3RsKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lQ3RsID0gZ2FtZUN0bDtcclxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBjYy52Mig5MTAsLTIzKTsvL+WIneWni+WMluS9jee9rlxyXG4gICAgICAgIC8vIGxldCByMSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgLy8gbGV0IHIyPSAgTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAvLyBsZXQgeD1NYXRoLnNpbihyMSpNYXRoLlBJKjIpO1xyXG4gICAgICAgIC8vIGxldCB5PU1hdGguY29zKHIxKk1hdGguUEkqMik7XHJcbiAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKC03MCw1MDApOy8v5Yid5aeL5YyW6YCf5bqmXHJcbiAgICB9LFxyXG5cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKSB7XHJcbiAgICAgICAgLy/moLnmja7norDliLDnmoTniankvZPkuI3lkIzvvIzop6blj5HkuI3lkIznmoTkuovku7blpITnkIblh73mlbBcclxuICAgICAgICBzd2l0Y2ggKG90aGVyLnRhZykge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVDdGwub25CYWxsQ29udGFjdEJyaWNrKHNlbGYubm9kZSwgb3RoZXIubm9kZSk7Ly/noJblnZdcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVDdGwub25CYWxsQ29udGFjdEdyb3VuZChzZWxmLm5vZGUsIG90aGVyLm5vZGUpOy8v5Zyw6Z2iXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lQ3RsLm9uQmFsbENvbnRhY3RQYWRkbGUoc2VsZi5ub2RlLCBvdGhlci5ub2RlKTsvL+adv+WtkFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUN0bC5vbkJhbGxDb250YWN0V2FsbChzZWxmLm5vZGUsIG90aGVyLm5vZGUpOy8v5aKZXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTsiXX0=