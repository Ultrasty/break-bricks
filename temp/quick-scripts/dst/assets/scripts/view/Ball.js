
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
  init: function init(gameCtl) {
    this.gameCtl = gameCtl;
    this.node.position = cc.v2(480, 600); //初始化位置

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdmlld1xcQmFsbC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwiaW5pdCIsImdhbWVDdGwiLCJub2RlIiwicG9zaXRpb24iLCJ2MiIsImdldENvbXBvbmVudCIsIlJpZ2lkQm9keSIsImxpbmVhclZlbG9jaXR5Iiwib25CZWdpbkNvbnRhY3QiLCJjb250YWN0Iiwic2VsZiIsIm90aGVyIiwidGFnIiwib25CYWxsQ29udGFjdEJyaWNrIiwib25CYWxsQ29udGFjdEdyb3VuZCIsIm9uQmFsbENvbnRhY3RQYWRkbGUiLCJvbkJhbGxDb250YWN0V2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsSUFISyxnQkFHQUMsT0FIQSxFQUdTO0FBQ1YsU0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsSUFBTCxDQUFVQyxRQUFWLEdBQXFCTixFQUFFLENBQUNPLEVBQUgsQ0FBTSxHQUFOLEVBQVUsR0FBVixDQUFyQixDQUZVLENBRTBCOztBQUNwQyxTQUFLQyxZQUFMLENBQWtCUixFQUFFLENBQUNTLFNBQXJCLEVBQWdDQyxjQUFoQyxHQUFpRFYsRUFBRSxDQUFDTyxFQUFILENBQU0sR0FBTixFQUFVLEdBQVYsQ0FBakQsQ0FIVSxDQUdzRDtBQUNuRSxHQVBJO0FBU0xJLEVBQUFBLGNBVEssMEJBU1VDLE9BVFYsRUFTbUJDLElBVG5CLEVBU3lCQyxLQVR6QixFQVNnQztBQUNqQyxZQUFRQSxLQUFLLENBQUNDLEdBQWQ7QUFDQztBQUNHLFdBQUssQ0FBTDtBQUNJLGFBQUtYLE9BQUwsQ0FBYVksa0JBQWIsQ0FBZ0NILElBQUksQ0FBQ1IsSUFBckMsRUFBMkNTLEtBQUssQ0FBQ1QsSUFBakQ7QUFDQTtBQUNKOztBQUNBLFdBQUssQ0FBTDtBQUNJLGFBQUtELE9BQUwsQ0FBYWEsbUJBQWIsQ0FBaUNKLElBQUksQ0FBQ1IsSUFBdEMsRUFBNENTLEtBQUssQ0FBQ1QsSUFBbEQ7QUFDQTtBQUNKOztBQUNBLFdBQUssQ0FBTDtBQUNJLGFBQUtELE9BQUwsQ0FBYWMsbUJBQWIsQ0FBaUNMLElBQUksQ0FBQ1IsSUFBdEMsRUFBNENTLEtBQUssQ0FBQ1QsSUFBbEQ7QUFDQTtBQUNKOztBQUNBLFdBQUssQ0FBTDtBQUNJLGFBQUtELE9BQUwsQ0FBYWUsaUJBQWIsQ0FBK0JOLElBQUksQ0FBQ1IsSUFBcEMsRUFBMENTLEtBQUssQ0FBQ1QsSUFBaEQ7QUFDQTtBQWhCUjtBQWtCSDtBQTVCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgaW5pdChnYW1lQ3RsKSB7XG4gICAgICAgIHRoaXMuZ2FtZUN0bCA9IGdhbWVDdGw7XG4gICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IGNjLnYyKDQ4MCw2MDApOy8v5Yid5aeL5YyW5L2N572uXG4gICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkgPSBjYy52MigyMDAsNzAwKTsvL+WIneWni+WMlumAn+W6plxuICAgIH0sXG5cbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcikge1xuICAgICAgICBzd2l0Y2ggKG90aGVyLnRhZykge1xuICAgICAgICAgLy/norDliLDnoJblnZdcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVDdGwub25CYWxsQ29udGFjdEJyaWNrKHNlbGYubm9kZSwgb3RoZXIubm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvL+eisOWIsOWcsOmdolxuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUN0bC5vbkJhbGxDb250YWN0R3JvdW5kKHNlbGYubm9kZSwgb3RoZXIubm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvL+eisOWIsOaJmOebmFxuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUN0bC5vbkJhbGxDb250YWN0UGFkZGxlKHNlbGYubm9kZSwgb3RoZXIubm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvL+eisOWIsOWimVxuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUN0bC5vbkJhbGxDb250YWN0V2FsbChzZWxmLm5vZGUsIG90aGVyLm5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSxcbn0pOyJdfQ==