
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/migration/use_v2.0.x_cc.Toggle_event');
require('./assets/scripts/controller/GameCtl');
require('./assets/scripts/model/GameModel');
require('./assets/scripts/view/Ball1');
require('./assets/scripts/view/Ball2');
require('./assets/scripts/view/Ball3');
require('./assets/scripts/view/BrickLayout');
require('./assets/scripts/view/GameView');
require('./assets/scripts/view/OverPanel');
require('./assets/scripts/view/Paddle');
require('./assets/scripts/view/firststart');

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
//------QC-SOURCE-SPLIT------

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
    this.node.position = cc.v2(-580, 580); //初始化位置

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdmlld1xcQmFsbDIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsImluaXQiLCJnYW1lQ3RsIiwibm9kZSIsInBvc2l0aW9uIiwidjIiLCJnZXRDb21wb25lbnQiLCJSaWdpZEJvZHkiLCJsaW5lYXJWZWxvY2l0eSIsIm9uQmVnaW5Db250YWN0IiwiY29udGFjdCIsInNlbGYiLCJvdGhlciIsInRhZyIsIm9uQmFsbENvbnRhY3RCcmljayIsIm9uQmFsbENvbnRhY3RHcm91bmQiLCJvbkJhbGxDb250YWN0UGFkZGxlIiwib25CYWxsQ29udGFjdFdhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLElBSEssZ0JBR0FDLE9BSEEsRUFHUztBQUNWLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLElBQUwsQ0FBVUMsUUFBVixHQUFxQk4sRUFBRSxDQUFDTyxFQUFILENBQU0sQ0FBQyxHQUFQLEVBQVcsR0FBWCxDQUFyQixDQUZVLENBRTJCOztBQUNyQyxTQUFLQyxZQUFMLENBQWtCUixFQUFFLENBQUNTLFNBQXJCLEVBQWdDQyxjQUFoQyxHQUFpRFYsRUFBRSxDQUFDTyxFQUFILENBQU0sQ0FBTixFQUFRLENBQVIsQ0FBakQsQ0FIVSxDQUdrRDtBQUMvRCxHQVBJO0FBU0xJLEVBQUFBLGNBVEssMEJBU1VDLE9BVFYsRUFTbUJDLElBVG5CLEVBU3lCQyxLQVR6QixFQVNnQztBQUNqQyxZQUFRQSxLQUFLLENBQUNDLEdBQWQ7QUFDSTtBQUNBLFdBQUssQ0FBTDtBQUNJLGFBQUtYLE9BQUwsQ0FBYVksa0JBQWIsQ0FBZ0NILElBQUksQ0FBQ1IsSUFBckMsRUFBMkNTLEtBQUssQ0FBQ1QsSUFBakQ7QUFDQTtBQUNKOztBQUNBLFdBQUssQ0FBTDtBQUNJLGFBQUtELE9BQUwsQ0FBYWEsbUJBQWIsQ0FBaUNKLElBQUksQ0FBQ1IsSUFBdEMsRUFBNENTLEtBQUssQ0FBQ1QsSUFBbEQ7QUFDQTtBQUNKOztBQUNBLFdBQUssQ0FBTDtBQUNJLGFBQUtELE9BQUwsQ0FBYWMsbUJBQWIsQ0FBaUNMLElBQUksQ0FBQ1IsSUFBdEMsRUFBNENTLEtBQUssQ0FBQ1QsSUFBbEQ7QUFDQTtBQUNKOztBQUNBLFdBQUssQ0FBTDtBQUNJLGFBQUtELE9BQUwsQ0FBYWUsaUJBQWIsQ0FBK0JOLElBQUksQ0FBQ1IsSUFBcEMsRUFBMENTLEtBQUssQ0FBQ1QsSUFBaEQ7QUFDQTtBQWhCUjtBQWtCSDtBQTVCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgaW5pdChnYW1lQ3RsKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lQ3RsID0gZ2FtZUN0bDtcclxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBjYy52MigtNTgwLDU4MCk7Ly/liJ3lp4vljJbkvY3nva5cclxuICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwwKTsvL+WIneWni+WMlumAn+W6plxyXG4gICAgfSxcclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcikge1xyXG4gICAgICAgIHN3aXRjaCAob3RoZXIudGFnKSB7XHJcbiAgICAgICAgICAgIC8v56Kw5Yiw56CW5Z2XXHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUN0bC5vbkJhbGxDb250YWN0QnJpY2soc2VsZi5ub2RlLCBvdGhlci5ub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvL+eisOWIsOWcsOmdolxyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVDdGwub25CYWxsQ29udGFjdEdyb3VuZChzZWxmLm5vZGUsIG90aGVyLm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8v56Kw5Yiw5omY55uYXHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUN0bC5vbkJhbGxDb250YWN0UGFkZGxlKHNlbGYubm9kZSwgb3RoZXIubm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy/norDliLDloplcclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lQ3RsLm9uQmFsbENvbnRhY3RXYWxsKHNlbGYubm9kZSwgb3RoZXIubm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_v2.0.x_cc.Toggle_event.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5827d5MIMBHppK1YDzTqvZI', 'use_v2.0.x_cc.Toggle_event');
// migration/use_v2.0.x_cc.Toggle_event.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only compatible with projects prior to v2.1.0.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Toggle in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0 之前版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Toggle，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */
if (cc.Toggle) {
  // Whether the 'toggle' and 'checkEvents' events are fired when 'toggle.check() / toggle.uncheck()' is called in the code
  // 在代码中调用 'toggle.check() / toggle.uncheck()' 时是否触发 'toggle' 与 'checkEvents' 事件
  cc.Toggle._triggerEventInScript_check = true;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbWlncmF0aW9uXFx1c2VfdjIuMC54X2NjLlRvZ2dsZV9ldmVudC5qcyJdLCJuYW1lcyI6WyJjYyIsIlRvZ2dsZSIsIl90cmlnZ2VyRXZlbnRJblNjcmlwdF9jaGVjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUFZQSxJQUFJQSxFQUFFLENBQUNDLE1BQVAsRUFBZTtBQUNYO0FBQ0E7QUFDQUQsRUFBQUEsRUFBRSxDQUFDQyxNQUFILENBQVVDLDJCQUFWLEdBQXdDLElBQXhDO0FBQ0giLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFRoaXMgc2NyaXB0IGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IENvY29zIENyZWF0b3IgYW5kIGlzIG9ubHkgY29tcGF0aWJsZSB3aXRoIHByb2plY3RzIHByaW9yIHRvIHYyLjEuMC5cclxuICogWW91IGRvIG5vdCBuZWVkIHRvIG1hbnVhbGx5IGFkZCB0aGlzIHNjcmlwdCBpbiBhbnkgb3RoZXIgcHJvamVjdC5cclxuICogSWYgeW91IGRvbid0IHVzZSBjYy5Ub2dnbGUgaW4geW91ciBwcm9qZWN0LCB5b3UgY2FuIGRlbGV0ZSB0aGlzIHNjcmlwdCBkaXJlY3RseS5cclxuICogSWYgeW91ciBwcm9qZWN0IGlzIGhvc3RlZCBpbiBWQ1Mgc3VjaCBhcyBnaXQsIHN1Ym1pdCB0aGlzIHNjcmlwdCB0b2dldGhlci5cclxuICpcclxuICog5q2k6ISa5pys55SxIENvY29zIENyZWF0b3Ig6Ieq5Yqo55Sf5oiQ77yM5LuF55So5LqO5YW85a65IHYyLjEuMCDkuYvliY3niYjmnKznmoTlt6XnqIvvvIxcclxuICog5L2g5peg6ZyA5Zyo5Lu75L2V5YW25a6D6aG555uu5Lit5omL5Yqo5re75Yqg5q2k6ISa5pys44CCXHJcbiAqIOWmguaenOS9oOeahOmhueebruS4reayoeeUqOWIsCBUb2dnbGXvvIzlj6/nm7TmjqXliKDpmaTor6XohJrmnKzjgIJcclxuICog5aaC5p6c5L2g55qE6aG555uu5pyJ5omY566h5LqOIGdpdCDnrYnniYjmnKzlupPvvIzor7flsIbmraTohJrmnKzkuIDlubbkuIrkvKDjgIJcclxuICovXHJcblxyXG5pZiAoY2MuVG9nZ2xlKSB7XHJcbiAgICAvLyBXaGV0aGVyIHRoZSAndG9nZ2xlJyBhbmQgJ2NoZWNrRXZlbnRzJyBldmVudHMgYXJlIGZpcmVkIHdoZW4gJ3RvZ2dsZS5jaGVjaygpIC8gdG9nZ2xlLnVuY2hlY2soKScgaXMgY2FsbGVkIGluIHRoZSBjb2RlXHJcbiAgICAvLyDlnKjku6PnoIHkuK3osIPnlKggJ3RvZ2dsZS5jaGVjaygpIC8gdG9nZ2xlLnVuY2hlY2soKScg5pe25piv5ZCm6Kem5Y+RICd0b2dnbGUnIOS4jiAnY2hlY2tFdmVudHMnIOS6i+S7tlxyXG4gICAgY2MuVG9nZ2xlLl90cmlnZ2VyRXZlbnRJblNjcmlwdF9jaGVjayA9IHRydWU7XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/controller/GameCtl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a337308uxxJva7vh8G06q7Z', 'GameCtl');
// scripts/controller/GameCtl.js

"use strict";

var GameModel = require('GameModel');

cc.Class({
  "extends": cc.Component,
  properties: {
    gameView: require('GameView'),
    ball1: require('Ball1'),
    ball2: require('Ball2'),
    ball3: require('Ball3'),
    firststart: require('firststart'),
    paddle: require('Paddle'),
    brickLayout: require('BrickLayout'),
    overPanel: require('OverPanel')
  },
  onLoad: function onLoad() {
    this.physicsManager = cc.director.getPhysicsManager();
    this.gameModel = new GameModel();
    this.physicsManager.enabled = true;
    this.gameModel.init();
    this.gameView.init(this);
    this.paddle.init();
    this.overPanel.init(this);
    this.firststart.init(this);
  },
  startGame: function startGame() {
    this.physicsManager.enabled = true;
    this.gameModel.init();
    this.gameView.init(this);
    this.ball1.init(this);
    this.ball2.init(this);
    this.ball3.init(this);
    this.paddle.init();
    this.brickLayout.init(this.gameModel.bricksNumber);
    this.overPanel.init(this);
  },
  stopGame: function stopGame() {
    this.physicsManager.enabled = false;
    this.overPanel.show(this.gameModel.score, this.gameModel.bricksNumber === 0);
  },
  onBallContactBrick: function onBallContactBrick(ballNode, brickNode) {
    brickNode.parent = null;
    this.gameModel.addScore(1);
    this.gameModel.minusBrick(1);
    this.gameView.updateScore(this.gameModel.score);

    if (this.gameModel.bricksNumber <= 0) {
      this.stopGame();
    }
  },
  onBallContactGround: function onBallContactGround(ballNode, groundNode) {
    this.stopGame();
  },
  onDestroy: function onDestroy() {
    this.physicsManager.enabled = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29udHJvbGxlclxcR2FtZUN0bC5qcyJdLCJuYW1lcyI6WyJHYW1lTW9kZWwiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJnYW1lVmlldyIsImJhbGwxIiwiYmFsbDIiLCJiYWxsMyIsImZpcnN0c3RhcnQiLCJwYWRkbGUiLCJicmlja0xheW91dCIsIm92ZXJQYW5lbCIsIm9uTG9hZCIsInBoeXNpY3NNYW5hZ2VyIiwiZGlyZWN0b3IiLCJnZXRQaHlzaWNzTWFuYWdlciIsImdhbWVNb2RlbCIsImVuYWJsZWQiLCJpbml0Iiwic3RhcnRHYW1lIiwiYnJpY2tzTnVtYmVyIiwic3RvcEdhbWUiLCJzaG93Iiwic2NvcmUiLCJvbkJhbGxDb250YWN0QnJpY2siLCJiYWxsTm9kZSIsImJyaWNrTm9kZSIsInBhcmVudCIsImFkZFNjb3JlIiwibWludXNCcmljayIsInVwZGF0ZVNjb3JlIiwib25CYWxsQ29udGFjdEdyb3VuZCIsImdyb3VuZE5vZGUiLCJvbkRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsU0FBUyxHQUFHQyxPQUFPLENBQUMsV0FBRCxDQUF6Qjs7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFFBQVEsRUFBRUwsT0FBTyxDQUFDLFVBQUQsQ0FEVDtBQUVSTSxJQUFBQSxLQUFLLEVBQUVOLE9BQU8sQ0FBQyxPQUFELENBRk47QUFHUk8sSUFBQUEsS0FBSyxFQUFFUCxPQUFPLENBQUMsT0FBRCxDQUhOO0FBSVJRLElBQUFBLEtBQUssRUFBRVIsT0FBTyxDQUFDLE9BQUQsQ0FKTjtBQUtSUyxJQUFBQSxVQUFVLEVBQUVULE9BQU8sQ0FBQyxZQUFELENBTFg7QUFNUlUsSUFBQUEsTUFBTSxFQUFFVixPQUFPLENBQUMsUUFBRCxDQU5QO0FBT1JXLElBQUFBLFdBQVcsRUFBRVgsT0FBTyxDQUFDLGFBQUQsQ0FQWjtBQVFSWSxJQUFBQSxTQUFTLEVBQUVaLE9BQU8sQ0FBQyxXQUFEO0FBUlYsR0FIUDtBQWNMYSxFQUFBQSxNQUFNLEVBQUUsa0JBQVk7QUFDaEIsU0FBS0MsY0FBTCxHQUFzQmIsRUFBRSxDQUFDYyxRQUFILENBQVlDLGlCQUFaLEVBQXRCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixJQUFJbEIsU0FBSixFQUFqQjtBQUNBLFNBQUtlLGNBQUwsQ0FBb0JJLE9BQXBCLEdBQThCLElBQTlCO0FBQ0EsU0FBS0QsU0FBTCxDQUFlRSxJQUFmO0FBQ0EsU0FBS2QsUUFBTCxDQUFjYyxJQUFkLENBQW1CLElBQW5CO0FBQ0EsU0FBS1QsTUFBTCxDQUFZUyxJQUFaO0FBQ0EsU0FBS1AsU0FBTCxDQUFlTyxJQUFmLENBQW9CLElBQXBCO0FBQ0EsU0FBS1YsVUFBTCxDQUFnQlUsSUFBaEIsQ0FBcUIsSUFBckI7QUFDSCxHQXZCSTtBQTBCTEMsRUFBQUEsU0ExQkssdUJBMEJPO0FBQ1IsU0FBS04sY0FBTCxDQUFvQkksT0FBcEIsR0FBOEIsSUFBOUI7QUFDQSxTQUFLRCxTQUFMLENBQWVFLElBQWY7QUFDQSxTQUFLZCxRQUFMLENBQWNjLElBQWQsQ0FBbUIsSUFBbkI7QUFDQSxTQUFLYixLQUFMLENBQVdhLElBQVgsQ0FBZ0IsSUFBaEI7QUFDQSxTQUFLWixLQUFMLENBQVdZLElBQVgsQ0FBZ0IsSUFBaEI7QUFDQSxTQUFLWCxLQUFMLENBQVdXLElBQVgsQ0FBZ0IsSUFBaEI7QUFDQSxTQUFLVCxNQUFMLENBQVlTLElBQVo7QUFDQSxTQUFLUixXQUFMLENBQWlCUSxJQUFqQixDQUFzQixLQUFLRixTQUFMLENBQWVJLFlBQXJDO0FBQ0EsU0FBS1QsU0FBTCxDQUFlTyxJQUFmLENBQW9CLElBQXBCO0FBQ0gsR0FwQ0k7QUFzQ0xHLEVBQUFBLFFBdENLLHNCQXNDTTtBQUNQLFNBQUtSLGNBQUwsQ0FBb0JJLE9BQXBCLEdBQThCLEtBQTlCO0FBQ0EsU0FBS04sU0FBTCxDQUFlVyxJQUFmLENBQW9CLEtBQUtOLFNBQUwsQ0FBZU8sS0FBbkMsRUFBMEMsS0FBS1AsU0FBTCxDQUFlSSxZQUFmLEtBQWdDLENBQTFFO0FBQ0gsR0F6Q0k7QUEyQ0xJLEVBQUFBLGtCQTNDSyw4QkEyQ2NDLFFBM0NkLEVBMkN3QkMsU0EzQ3hCLEVBMkNtQztBQUNwQ0EsSUFBQUEsU0FBUyxDQUFDQyxNQUFWLEdBQW1CLElBQW5CO0FBQ0EsU0FBS1gsU0FBTCxDQUFlWSxRQUFmLENBQXdCLENBQXhCO0FBQ0EsU0FBS1osU0FBTCxDQUFlYSxVQUFmLENBQTBCLENBQTFCO0FBQ0EsU0FBS3pCLFFBQUwsQ0FBYzBCLFdBQWQsQ0FBMEIsS0FBS2QsU0FBTCxDQUFlTyxLQUF6Qzs7QUFDQSxRQUFJLEtBQUtQLFNBQUwsQ0FBZUksWUFBZixJQUErQixDQUFuQyxFQUFzQztBQUNsQyxXQUFLQyxRQUFMO0FBQ0g7QUFDSixHQW5ESTtBQXFETFUsRUFBQUEsbUJBckRLLCtCQXFEZU4sUUFyRGYsRUFxRHlCTyxVQXJEekIsRUFxRHFDO0FBQ3RDLFNBQUtYLFFBQUw7QUFDSCxHQXZESTtBQXlETFksRUFBQUEsU0F6REssdUJBeURPO0FBQ1IsU0FBS3BCLGNBQUwsQ0FBb0JJLE9BQXBCLEdBQThCLEtBQTlCO0FBQ0g7QUEzREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgR2FtZU1vZGVsID0gcmVxdWlyZSgnR2FtZU1vZGVsJyk7XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgZ2FtZVZpZXc6IHJlcXVpcmUoJ0dhbWVWaWV3JyksXHJcbiAgICAgICAgYmFsbDE6IHJlcXVpcmUoJ0JhbGwxJyksXHJcbiAgICAgICAgYmFsbDI6IHJlcXVpcmUoJ0JhbGwyJyksXHJcbiAgICAgICAgYmFsbDM6IHJlcXVpcmUoJ0JhbGwzJyksXHJcbiAgICAgICAgZmlyc3RzdGFydDogcmVxdWlyZSgnZmlyc3RzdGFydCcpLFxyXG4gICAgICAgIHBhZGRsZTogcmVxdWlyZSgnUGFkZGxlJyksXHJcbiAgICAgICAgYnJpY2tMYXlvdXQ6IHJlcXVpcmUoJ0JyaWNrTGF5b3V0JyksXHJcbiAgICAgICAgb3ZlclBhbmVsOiByZXF1aXJlKCdPdmVyUGFuZWwnKSxcclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzTWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lTW9kZWwgPSBuZXcgR2FtZU1vZGVsKCk7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzTWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmdhbWVNb2RlbC5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5nYW1lVmlldy5pbml0KHRoaXMpO1xyXG4gICAgICAgIHRoaXMucGFkZGxlLmluaXQoKTtcclxuICAgICAgICB0aGlzLm92ZXJQYW5lbC5pbml0KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZmlyc3RzdGFydC5pbml0KHRoaXMpO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMucGh5c2ljc01hbmFnZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5nYW1lTW9kZWwuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZVZpZXcuaW5pdCh0aGlzKTtcclxuICAgICAgICB0aGlzLmJhbGwxLmluaXQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5iYWxsMi5pbml0KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYmFsbDMuaW5pdCh0aGlzKTtcclxuICAgICAgICB0aGlzLnBhZGRsZS5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5icmlja0xheW91dC5pbml0KHRoaXMuZ2FtZU1vZGVsLmJyaWNrc051bWJlcik7XHJcbiAgICAgICAgdGhpcy5vdmVyUGFuZWwuaW5pdCh0aGlzKTtcclxuICAgIH0sXHJcblxyXG4gICAgc3RvcEdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzTWFuYWdlci5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vdmVyUGFuZWwuc2hvdyh0aGlzLmdhbWVNb2RlbC5zY29yZSwgdGhpcy5nYW1lTW9kZWwuYnJpY2tzTnVtYmVyID09PSAwKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25CYWxsQ29udGFjdEJyaWNrKGJhbGxOb2RlLCBicmlja05vZGUpIHtcclxuICAgICAgICBicmlja05vZGUucGFyZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmdhbWVNb2RlbC5hZGRTY29yZSgxKTtcclxuICAgICAgICB0aGlzLmdhbWVNb2RlbC5taW51c0JyaWNrKDEpO1xyXG4gICAgICAgIHRoaXMuZ2FtZVZpZXcudXBkYXRlU2NvcmUodGhpcy5nYW1lTW9kZWwuc2NvcmUpO1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWVNb2RlbC5icmlja3NOdW1iZXIgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3BHYW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkJhbGxDb250YWN0R3JvdW5kKGJhbGxOb2RlLCBncm91bmROb2RlKSB7XHJcbiAgICAgICAgdGhpcy5zdG9wR2FtZSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzTWFuYWdlci5lbmFibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG59KTsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/view/BrickLayout.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '62398FSMJtHJ55jmSoqf4WF', 'BrickLayout');
// scripts/view/BrickLayout.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    padding: 0,
    spacing: 0,
    cols: 0,
    brickPrefab: cc.Prefab,
    bricksNumber: 0
  },
  init: function init(bricksNumber) {
    this.node.removeAllChildren();

    for (var i = 0; i < bricksNumber; i++) {
      //生成bricksNumber个小球
      var brickNode = cc.instantiate(this.brickPrefab); //生成新的节点

      brickNode.parent = this.node;
      brickNode.x = this.padding + i % this.cols * (brickNode.width + this.spacing) + brickNode.width / 2;
      brickNode.y = -this.padding - Math.floor(i / this.cols) * (brickNode.height + this.spacing) - brickNode.height / 2;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdmlld1xcQnJpY2tMYXlvdXQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJwYWRkaW5nIiwic3BhY2luZyIsImNvbHMiLCJicmlja1ByZWZhYiIsIlByZWZhYiIsImJyaWNrc051bWJlciIsImluaXQiLCJub2RlIiwicmVtb3ZlQWxsQ2hpbGRyZW4iLCJpIiwiYnJpY2tOb2RlIiwiaW5zdGFudGlhdGUiLCJwYXJlbnQiLCJ4Iiwid2lkdGgiLCJ5IiwiTWF0aCIsImZsb29yIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsT0FBTyxFQUFFLENBREQ7QUFFUkMsSUFBQUEsT0FBTyxFQUFFLENBRkQ7QUFHUkMsSUFBQUEsSUFBSSxFQUFFLENBSEU7QUFJUkMsSUFBQUEsV0FBVyxFQUFFUCxFQUFFLENBQUNRLE1BSlI7QUFLUkMsSUFBQUEsWUFBWSxFQUFFO0FBTE4sR0FIUDtBQVdMQyxFQUFBQSxJQVhLLGdCQVdBRCxZQVhBLEVBV2M7QUFDZixTQUFLRSxJQUFMLENBQVVDLGlCQUFWOztBQUNBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0osWUFBcEIsRUFBa0NJLENBQUMsRUFBbkMsRUFBdUM7QUFBQztBQUNwQyxVQUFJQyxTQUFTLEdBQUdkLEVBQUUsQ0FBQ2UsV0FBSCxDQUFlLEtBQUtSLFdBQXBCLENBQWhCLENBRG1DLENBQ2M7O0FBQ2pETyxNQUFBQSxTQUFTLENBQUNFLE1BQVYsR0FBbUIsS0FBS0wsSUFBeEI7QUFDQUcsTUFBQUEsU0FBUyxDQUFDRyxDQUFWLEdBQWMsS0FBS2IsT0FBTCxHQUFnQlMsQ0FBQyxHQUFHLEtBQUtQLElBQVYsSUFBbUJRLFNBQVMsQ0FBQ0ksS0FBVixHQUFrQixLQUFLYixPQUExQyxDQUFmLEdBQW9FUyxTQUFTLENBQUNJLEtBQVYsR0FBa0IsQ0FBcEc7QUFDQUosTUFBQUEsU0FBUyxDQUFDSyxDQUFWLEdBQWMsQ0FBQyxLQUFLZixPQUFOLEdBQWdCZ0IsSUFBSSxDQUFDQyxLQUFMLENBQVdSLENBQUMsR0FBRyxLQUFLUCxJQUFwQixLQUE2QlEsU0FBUyxDQUFDUSxNQUFWLEdBQW1CLEtBQUtqQixPQUFyRCxDQUFoQixHQUFnRlMsU0FBUyxDQUFDUSxNQUFWLEdBQW1CLENBQWpIO0FBQ0g7QUFDSjtBQW5CSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgc3BhY2luZzogMCxcclxuICAgICAgICBjb2xzOiAwLFxyXG4gICAgICAgIGJyaWNrUHJlZmFiOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgYnJpY2tzTnVtYmVyOiAwLFxyXG4gICAgfSxcclxuXHJcbiAgICBpbml0KGJyaWNrc051bWJlcikge1xyXG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnJpY2tzTnVtYmVyOyBpKyspIHsvL+eUn+aIkGJyaWNrc051bWJlcuS4quWwj+eQg1xyXG4gICAgICAgICAgICBsZXQgYnJpY2tOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5icmlja1ByZWZhYik7Ly/nlJ/miJDmlrDnmoToioLngrlcclxuICAgICAgICAgICAgYnJpY2tOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgYnJpY2tOb2RlLnggPSB0aGlzLnBhZGRpbmcgKyAoaSAlIHRoaXMuY29scykgKiAoYnJpY2tOb2RlLndpZHRoICsgdGhpcy5zcGFjaW5nKSArIGJyaWNrTm9kZS53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgIGJyaWNrTm9kZS55ID0gLXRoaXMucGFkZGluZyAtIE1hdGguZmxvb3IoaSAvIHRoaXMuY29scykgKiAoYnJpY2tOb2RlLmhlaWdodCArIHRoaXMuc3BhY2luZykgLSBicmlja05vZGUuaGVpZ2h0IC8gMjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/view/firststart.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '31d9fLSJV9JyIGQU2VrRyLx', 'firststart');
// scripts/view/firststart.js

"use strict";

cc.Class({
  "extends": cc.Component,
  init: function init(gameCtl) {
    this.gameCtl = gameCtl;
    this.node.active = false;
  },
  onBtnRestart: function onBtnRestart() {
    this.gameCtl.startGame();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdmlld1xcZmlyc3RzdGFydC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwiaW5pdCIsImdhbWVDdGwiLCJub2RlIiwiYWN0aXZlIiwib25CdG5SZXN0YXJ0Iiwic3RhcnRHYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUtMQyxFQUFBQSxJQUxLLGdCQUtBQyxPQUxBLEVBS1E7QUFDVCxTQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxJQUFMLENBQVVDLE1BQVYsR0FBbUIsS0FBbkI7QUFDSCxHQVJJO0FBVUxDLEVBQUFBLFlBVkssMEJBVVM7QUFDVixTQUFLSCxPQUFMLENBQWFJLFNBQWI7QUFDSDtBQVpJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiBcclxuXHJcbiAgICBpbml0KGdhbWVDdGwpe1xyXG4gICAgICAgIHRoaXMuZ2FtZUN0bCA9IGdhbWVDdGw7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkJ0blJlc3RhcnQoKXtcclxuICAgICAgICB0aGlzLmdhbWVDdGwuc3RhcnRHYW1lKCk7XHJcbiAgICB9XHJcbn0pOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/model/GameModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ac11fh/SXFFzZAzJ57bmcvY', 'GameModel');
// scripts/model/GameModel.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    score: 0,
    bricksNumber: 0
  },
  init: function init() {
    this.score = 0;
    this.bricksNumber = 50;
  },
  addScore: function addScore(score) {
    this.score += score;
  },
  minusBrick: function minusBrick(n) {
    this.bricksNumber -= n;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbW9kZWxcXEdhbWVNb2RlbC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNjb3JlIiwiYnJpY2tzTnVtYmVyIiwiaW5pdCIsImFkZFNjb3JlIiwibWludXNCcmljayIsIm4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxLQUFLLEVBQUMsQ0FERTtBQUVSQyxJQUFBQSxZQUFZLEVBQUM7QUFGTCxHQUhQO0FBUUxDLEVBQUFBLElBUkssa0JBUUM7QUFDRixTQUFLRixLQUFMLEdBQWEsQ0FBYjtBQUNBLFNBQUtDLFlBQUwsR0FBb0IsRUFBcEI7QUFDSCxHQVhJO0FBYUxFLEVBQUFBLFFBYkssb0JBYUlILEtBYkosRUFhVTtBQUNYLFNBQUtBLEtBQUwsSUFBY0EsS0FBZDtBQUNILEdBZkk7QUFpQkxJLEVBQUFBLFVBakJLLHNCQWlCTUMsQ0FqQk4sRUFpQlE7QUFDVCxTQUFLSixZQUFMLElBQXFCSSxDQUFyQjtBQUNIO0FBbkJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgc2NvcmU6MCxcclxuICAgICAgICBicmlja3NOdW1iZXI6MCxcclxuICAgIH0sXHJcblxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMuYnJpY2tzTnVtYmVyID0gNTA7XHJcbiAgICB9LFxyXG5cclxuICAgIGFkZFNjb3JlKHNjb3JlKXtcclxuICAgICAgICB0aGlzLnNjb3JlICs9IHNjb3JlO1xyXG4gICAgfSxcclxuXHJcbiAgICBtaW51c0JyaWNrKG4pe1xyXG4gICAgICAgIHRoaXMuYnJpY2tzTnVtYmVyIC09IG47XHJcbiAgICB9LFxyXG5cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/view/Ball3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a2983WNMIJKwrBsHTEXhdxh', 'Ball3');
// scripts/view/Ball3.js

"use strict";

cc.Class({
  "extends": cc.Component,
  init: function init(gameCtl) {
    this.gameCtl = gameCtl;
    this.node.position = cc.v2(2 + 80, 580); //初始化位置

    this.getComponent(cc.RigidBody).linearVelocity = cc.v2(200, 0); //初始化速度
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdmlld1xcQmFsbDMuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsImluaXQiLCJnYW1lQ3RsIiwibm9kZSIsInBvc2l0aW9uIiwidjIiLCJnZXRDb21wb25lbnQiLCJSaWdpZEJvZHkiLCJsaW5lYXJWZWxvY2l0eSIsIm9uQmVnaW5Db250YWN0IiwiY29udGFjdCIsInNlbGYiLCJvdGhlciIsInRhZyIsIm9uQmFsbENvbnRhY3RCcmljayIsIm9uQmFsbENvbnRhY3RHcm91bmQiLCJvbkJhbGxDb250YWN0UGFkZGxlIiwib25CYWxsQ29udGFjdFdhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLElBSEssZ0JBR0FDLE9BSEEsRUFHUztBQUNWLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLElBQUwsQ0FBVUMsUUFBVixHQUFxQk4sRUFBRSxDQUFDTyxFQUFILENBQU0sSUFBRSxFQUFSLEVBQVcsR0FBWCxDQUFyQixDQUZVLENBRTJCOztBQUNyQyxTQUFLQyxZQUFMLENBQWtCUixFQUFFLENBQUNTLFNBQXJCLEVBQWdDQyxjQUFoQyxHQUFpRFYsRUFBRSxDQUFDTyxFQUFILENBQU0sR0FBTixFQUFVLENBQVYsQ0FBakQsQ0FIVSxDQUdvRDtBQUNqRSxHQVBJO0FBU0xJLEVBQUFBLGNBVEssMEJBU1VDLE9BVFYsRUFTbUJDLElBVG5CLEVBU3lCQyxLQVR6QixFQVNnQztBQUNqQyxZQUFRQSxLQUFLLENBQUNDLEdBQWQ7QUFDSTtBQUNBLFdBQUssQ0FBTDtBQUNJLGFBQUtYLE9BQUwsQ0FBYVksa0JBQWIsQ0FBZ0NILElBQUksQ0FBQ1IsSUFBckMsRUFBMkNTLEtBQUssQ0FBQ1QsSUFBakQ7QUFDQTtBQUNKOztBQUNBLFdBQUssQ0FBTDtBQUNJLGFBQUtELE9BQUwsQ0FBYWEsbUJBQWIsQ0FBaUNKLElBQUksQ0FBQ1IsSUFBdEMsRUFBNENTLEtBQUssQ0FBQ1QsSUFBbEQ7QUFDQTtBQUNKOztBQUNBLFdBQUssQ0FBTDtBQUNJLGFBQUtELE9BQUwsQ0FBYWMsbUJBQWIsQ0FBaUNMLElBQUksQ0FBQ1IsSUFBdEMsRUFBNENTLEtBQUssQ0FBQ1QsSUFBbEQ7QUFDQTtBQUNKOztBQUNBLFdBQUssQ0FBTDtBQUNJLGFBQUtELE9BQUwsQ0FBYWUsaUJBQWIsQ0FBK0JOLElBQUksQ0FBQ1IsSUFBcEMsRUFBMENTLEtBQUssQ0FBQ1QsSUFBaEQ7QUFDQTtBQWhCUjtBQWtCSDtBQTVCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgaW5pdChnYW1lQ3RsKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lQ3RsID0gZ2FtZUN0bDtcclxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBjYy52MigyKzgwLDU4MCk7Ly/liJ3lp4vljJbkvY3nva5cclxuICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMjAwLDApOy8v5Yid5aeL5YyW6YCf5bqmXHJcbiAgICB9LFxyXG5cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKSB7XHJcbiAgICAgICAgc3dpdGNoIChvdGhlci50YWcpIHtcclxuICAgICAgICAgICAgLy/norDliLDnoJblnZdcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lQ3RsLm9uQmFsbENvbnRhY3RCcmljayhzZWxmLm5vZGUsIG90aGVyLm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8v56Kw5Yiw5Zyw6Z2iXHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUN0bC5vbkJhbGxDb250YWN0R3JvdW5kKHNlbGYubm9kZSwgb3RoZXIubm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy/norDliLDmiZjnm5hcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lQ3RsLm9uQmFsbENvbnRhY3RQYWRkbGUoc2VsZi5ub2RlLCBvdGhlci5ub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvL+eisOWIsOWimVxyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVDdGwub25CYWxsQ29udGFjdFdhbGwoc2VsZi5ub2RlLCBvdGhlci5ub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/view/GameView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e4735UW3lFPMoW0rK22obsG', 'GameView');
// scripts/view/GameView.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    scoreLabel: cc.Label
  },
  init: function init(gameCtl) {
    this.gameCtl = gameCtl;
    this.scoreLabel.string = '0';
  },
  updateScore: function updateScore(score) {
    this.scoreLabel.string = score;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdmlld1xcR2FtZVZpZXcuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzY29yZUxhYmVsIiwiTGFiZWwiLCJpbml0IiwiZ2FtZUN0bCIsInN0cmluZyIsInVwZGF0ZVNjb3JlIiwic2NvcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxVQUFVLEVBQUNKLEVBQUUsQ0FBQ0s7QUFETixHQUhQO0FBT0xDLEVBQUFBLElBUEssZ0JBT0FDLE9BUEEsRUFPUTtBQUNULFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtILFVBQUwsQ0FBZ0JJLE1BQWhCLEdBQXlCLEdBQXpCO0FBQ0gsR0FWSTtBQVlMQyxFQUFBQSxXQVpLLHVCQVlPQyxLQVpQLEVBWWE7QUFDZCxTQUFLTixVQUFMLENBQWdCSSxNQUFoQixHQUF5QkUsS0FBekI7QUFDSDtBQWRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgc2NvcmVMYWJlbDpjYy5MYWJlbCxcclxuICAgIH0sXHJcblxyXG4gICAgaW5pdChnYW1lQ3RsKXtcclxuICAgICAgICB0aGlzLmdhbWVDdGwgPSBnYW1lQ3RsO1xyXG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSAnMCc7XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZVNjb3JlKHNjb3JlKXtcclxuICAgICAgICB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nID0gc2NvcmU7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/view/OverPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '60425zRIQ5LNIZ6KmZ5p/LN', 'OverPanel');
// scripts/view/OverPanel.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    resultLabel: cc.Label,
    scoreLabel: cc.Label,
    firststartbtn: cc.Node
  },
  init: function init(gameCtl) {
    this.gameCtl = gameCtl;
    this.node.active = false;
  },
  show: function show(score, isWin) {
    this.node.active = true;

    if (isWin) {
      this.resultLabel.string = 'YOU WIN!';
    } else {
      this.resultLabel.string = 'GAME OVER';
    }

    this.scoreLabel.string = 'Final Score: ' + score;
  },
  onBtnRestart: function onBtnRestart() {
    this.gameCtl.startGame();
    this.firststartbtn.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdmlld1xcT3ZlclBhbmVsLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicmVzdWx0TGFiZWwiLCJMYWJlbCIsInNjb3JlTGFiZWwiLCJmaXJzdHN0YXJ0YnRuIiwiTm9kZSIsImluaXQiLCJnYW1lQ3RsIiwibm9kZSIsImFjdGl2ZSIsInNob3ciLCJzY29yZSIsImlzV2luIiwic3RyaW5nIiwib25CdG5SZXN0YXJ0Iiwic3RhcnRHYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsV0FBVyxFQUFDSixFQUFFLENBQUNLLEtBRFA7QUFFUkMsSUFBQUEsVUFBVSxFQUFDTixFQUFFLENBQUNLLEtBRk47QUFHUkUsSUFBQUEsYUFBYSxFQUFDUCxFQUFFLENBQUNRO0FBSFQsR0FIUDtBQVNMQyxFQUFBQSxJQVRLLGdCQVNBQyxPQVRBLEVBU1E7QUFDVCxTQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxJQUFMLENBQVVDLE1BQVYsR0FBbUIsS0FBbkI7QUFDSCxHQVpJO0FBY0xDLEVBQUFBLElBZEssZ0JBY0FDLEtBZEEsRUFjTUMsS0FkTixFQWNZO0FBQ2IsU0FBS0osSUFBTCxDQUFVQyxNQUFWLEdBQW1CLElBQW5COztBQUNBLFFBQUdHLEtBQUgsRUFBUztBQUNMLFdBQUtYLFdBQUwsQ0FBaUJZLE1BQWpCLEdBQTBCLFVBQTFCO0FBQ0gsS0FGRCxNQUVLO0FBQ0QsV0FBS1osV0FBTCxDQUFpQlksTUFBakIsR0FBMEIsV0FBMUI7QUFDSDs7QUFDRCxTQUFLVixVQUFMLENBQWdCVSxNQUFoQixHQUF3QixrQkFBaUJGLEtBQXpDO0FBQ0gsR0F0Qkk7QUF3QkxHLEVBQUFBLFlBeEJLLDBCQXdCUztBQUNWLFNBQUtQLE9BQUwsQ0FBYVEsU0FBYjtBQUNBLFNBQUtYLGFBQUwsQ0FBbUJLLE1BQW5CLEdBQTBCLEtBQTFCO0FBQ0g7QUEzQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICByZXN1bHRMYWJlbDpjYy5MYWJlbCxcclxuICAgICAgICBzY29yZUxhYmVsOmNjLkxhYmVsLFxyXG4gICAgICAgIGZpcnN0c3RhcnRidG46Y2MuTm9kZSxcclxuICAgIH0sXHJcblxyXG4gICAgaW5pdChnYW1lQ3RsKXtcclxuICAgICAgICB0aGlzLmdhbWVDdGwgPSBnYW1lQ3RsO1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgc2hvdyhzY29yZSxpc1dpbil7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgaWYoaXNXaW4pe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3VsdExhYmVsLnN0cmluZyA9ICdZT1UgV0lOISc7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdWx0TGFiZWwuc3RyaW5nID0gJ0dBTUUgT1ZFUic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSdGaW5hbCBTY29yZTogJysgc2NvcmU7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQnRuUmVzdGFydCgpe1xyXG4gICAgICAgIHRoaXMuZ2FtZUN0bC5zdGFydEdhbWUoKTtcclxuICAgICAgICB0aGlzLmZpcnN0c3RhcnRidG4uYWN0aXZlPWZhbHNlO1xyXG4gICAgfVxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/view/Ball1.js';
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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/view/Paddle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4dc82c1qO9KbZBsMZGbHlMV', 'Paddle');
// scripts/view/Paddle.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdmlld1xcUGFkZGxlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJvbkxvYWQiLCJub2RlIiwicGFyZW50Iiwib24iLCJldmVudCIsIngiLCJnZXRMb2NhdGlvbiIsImluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLE1BQU0sRUFBRSxrQkFBWTtBQUFBOztBQUNoQixTQUFLQyxJQUFMLENBQVVDLE1BQVYsQ0FBaUJDLEVBQWpCLENBQW9CLFdBQXBCLEVBQWlDLFVBQUNDLEtBQUQsRUFBVztBQUFDO0FBQ3pDLE1BQUEsS0FBSSxDQUFDSCxJQUFMLENBQVVJLENBQVYsR0FBY0QsS0FBSyxDQUFDRSxXQUFOLEdBQW9CRCxDQUFsQyxDQUR3QyxDQUNKO0FBQ3ZDLEtBRkQ7QUFHSCxHQVBJO0FBU0xFLEVBQUFBLElBVEssa0JBU0M7QUFDRixTQUFLTixJQUFMLENBQVVJLENBQVYsR0FBYyxHQUFkO0FBQ0g7QUFYSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5vbihcIm1vdXNlbW92ZVwiLCAoZXZlbnQpID0+IHsvLy/kvb/nlKjkuovku7blkI1tb3VzZW1vdmXmnaXms6jlhozpvKDmoIfkuovku7ZcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnggPSBldmVudC5nZXRMb2NhdGlvbigpLng7Ly/pvKDmoIfnp7vliqjop6blj5Hkuovku7bnu5lQYWRkbGXnmoTkvY3nva7ph43mlrDotYvlgLxcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIHRoaXMubm9kZS54ID0gNDgwO1xyXG4gICAgfVxyXG5cclxufSk7Il19
//------QC-SOURCE-SPLIT------
