
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
require('./assets/scripts/view/Ball');
require('./assets/scripts/view/BrickLayout');
require('./assets/scripts/view/GameView');
require('./assets/scripts/view/OverPanel');
require('./assets/scripts/view/Paddle');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbW9kZWxcXEdhbWVNb2RlbC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNjb3JlIiwiYnJpY2tzTnVtYmVyIiwiaW5pdCIsImFkZFNjb3JlIiwibWludXNCcmljayIsIm4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxLQUFLLEVBQUMsQ0FERTtBQUVSQyxJQUFBQSxZQUFZLEVBQUM7QUFGTCxHQUhQO0FBUUxDLEVBQUFBLElBUkssa0JBUUM7QUFDRixTQUFLRixLQUFMLEdBQWEsQ0FBYjtBQUNBLFNBQUtDLFlBQUwsR0FBb0IsRUFBcEI7QUFDSCxHQVhJO0FBYUxFLEVBQUFBLFFBYkssb0JBYUlILEtBYkosRUFhVTtBQUNYLFNBQUtBLEtBQUwsSUFBY0EsS0FBZDtBQUNILEdBZkk7QUFpQkxJLEVBQUFBLFVBakJLLHNCQWlCTUMsQ0FqQk4sRUFpQlE7QUFDVCxTQUFLSixZQUFMLElBQXFCSSxDQUFyQjtBQUNIO0FBbkJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHNjb3JlOjAsXG4gICAgICAgIGJyaWNrc051bWJlcjowLFxuICAgIH0sXG5cbiAgICBpbml0KCl7XG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLmJyaWNrc051bWJlciA9IDUwO1xuICAgIH0sXG5cbiAgICBhZGRTY29yZShzY29yZSl7XG4gICAgICAgIHRoaXMuc2NvcmUgKz0gc2NvcmU7XG4gICAgfSxcblxuICAgIG1pbnVzQnJpY2sobil7XG4gICAgICAgIHRoaXMuYnJpY2tzTnVtYmVyIC09IG47XG4gICAgfSxcblxufSk7XG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdmlld1xcR2FtZVZpZXcuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzY29yZUxhYmVsIiwiTGFiZWwiLCJpbml0IiwiZ2FtZUN0bCIsInN0cmluZyIsInVwZGF0ZVNjb3JlIiwic2NvcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxVQUFVLEVBQUNKLEVBQUUsQ0FBQ0s7QUFETixHQUhQO0FBT0xDLEVBQUFBLElBUEssZ0JBT0FDLE9BUEEsRUFPUTtBQUNULFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtILFVBQUwsQ0FBZ0JJLE1BQWhCLEdBQXlCLEdBQXpCO0FBQ0gsR0FWSTtBQVlMQyxFQUFBQSxXQVpLLHVCQVlPQyxLQVpQLEVBWWE7QUFDZCxTQUFLTixVQUFMLENBQWdCSSxNQUFoQixHQUF5QkUsS0FBekI7QUFDSDtBQWRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHNjb3JlTGFiZWw6Y2MuTGFiZWwsXG4gICAgfSxcblxuICAgIGluaXQoZ2FtZUN0bCl7XG4gICAgICAgIHRoaXMuZ2FtZUN0bCA9IGdhbWVDdGw7XG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSAnMCc7XG4gICAgfSxcblxuICAgIHVwZGF0ZVNjb3JlKHNjb3JlKXtcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IHNjb3JlO1xuICAgIH1cbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

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
    ball: require('Ball'),
    paddle: require('Paddle'),
    brickLayout: require('BrickLayout'),
    overPanel: require('OverPanel')
  },
  // use this for initialization
  onLoad: function onLoad() {
    //安卓返回键退出
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function (event) {
      if (event.keyCode === cc.KEY.back) {
        cc.director.end();
      }
    });
    this.physicsManager = cc.director.getPhysicsManager();
    this.gameModel = new GameModel();
    this.startGame();
  },
  init: function init() {
    this.physicsManager.enabled = true;
    this.gameModel.init();
    this.gameView.init(this);
    this.ball.init(this);
    this.paddle.init();
    this.brickLayout.init(this.gameModel.bricksNumber);
    this.overPanel.init(this);
  },
  startGame: function startGame() {
    this.init();
  },
  pauseGame: function pauseGame() {
    this.physicsManager.enabled = false;
  },
  resumeGame: function resumeGame() {
    this.physicsManager.enabled = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29udHJvbGxlclxcR2FtZUN0bC5qcyJdLCJuYW1lcyI6WyJHYW1lTW9kZWwiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJnYW1lVmlldyIsImJhbGwiLCJwYWRkbGUiLCJicmlja0xheW91dCIsIm92ZXJQYW5lbCIsIm9uTG9hZCIsInN5c3RlbUV2ZW50Iiwib24iLCJTeXN0ZW1FdmVudCIsIkV2ZW50VHlwZSIsIktFWV9ET1dOIiwiZXZlbnQiLCJrZXlDb2RlIiwiS0VZIiwiYmFjayIsImRpcmVjdG9yIiwiZW5kIiwicGh5c2ljc01hbmFnZXIiLCJnZXRQaHlzaWNzTWFuYWdlciIsImdhbWVNb2RlbCIsInN0YXJ0R2FtZSIsImluaXQiLCJlbmFibGVkIiwiYnJpY2tzTnVtYmVyIiwicGF1c2VHYW1lIiwicmVzdW1lR2FtZSIsInN0b3BHYW1lIiwic2hvdyIsInNjb3JlIiwib25CYWxsQ29udGFjdEJyaWNrIiwiYmFsbE5vZGUiLCJicmlja05vZGUiLCJwYXJlbnQiLCJhZGRTY29yZSIsIm1pbnVzQnJpY2siLCJ1cGRhdGVTY29yZSIsIm9uQmFsbENvbnRhY3RHcm91bmQiLCJncm91bmROb2RlIiwib25EZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFNBQVMsR0FBR0MsT0FBTyxDQUFDLFdBQUQsQ0FBekI7O0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxRQUFRLEVBQUVMLE9BQU8sQ0FBQyxVQUFELENBRFQ7QUFFUk0sSUFBQUEsSUFBSSxFQUFFTixPQUFPLENBQUMsTUFBRCxDQUZMO0FBR1JPLElBQUFBLE1BQU0sRUFBRVAsT0FBTyxDQUFDLFFBQUQsQ0FIUDtBQUlSUSxJQUFBQSxXQUFXLEVBQUVSLE9BQU8sQ0FBQyxhQUFELENBSlo7QUFLUlMsSUFBQUEsU0FBUyxFQUFFVCxPQUFPLENBQUMsV0FBRDtBQUxWLEdBSFA7QUFXTDtBQUNBVSxFQUFBQSxNQUFNLEVBQUUsa0JBQVk7QUFDaEI7QUFDQVQsSUFBQUEsRUFBRSxDQUFDVSxXQUFILENBQWVDLEVBQWYsQ0FBa0JYLEVBQUUsQ0FBQ1ksV0FBSCxDQUFlQyxTQUFmLENBQXlCQyxRQUEzQyxFQUFxRCxVQUFDQyxLQUFELEVBQVc7QUFDNUQsVUFBSUEsS0FBSyxDQUFDQyxPQUFOLEtBQWtCaEIsRUFBRSxDQUFDaUIsR0FBSCxDQUFPQyxJQUE3QixFQUFtQztBQUMvQmxCLFFBQUFBLEVBQUUsQ0FBQ21CLFFBQUgsQ0FBWUMsR0FBWjtBQUNIO0FBQ0osS0FKRDtBQUtBLFNBQUtDLGNBQUwsR0FBc0JyQixFQUFFLENBQUNtQixRQUFILENBQVlHLGlCQUFaLEVBQXRCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixJQUFJekIsU0FBSixFQUFqQjtBQUNBLFNBQUswQixTQUFMO0FBRUgsR0F2Qkk7QUF5QkxDLEVBQUFBLElBekJLLGtCQXlCRTtBQUNILFNBQUtKLGNBQUwsQ0FBb0JLLE9BQXBCLEdBQThCLElBQTlCO0FBQ0EsU0FBS0gsU0FBTCxDQUFlRSxJQUFmO0FBRUEsU0FBS3JCLFFBQUwsQ0FBY3FCLElBQWQsQ0FBbUIsSUFBbkI7QUFDQSxTQUFLcEIsSUFBTCxDQUFVb0IsSUFBVixDQUFlLElBQWY7QUFDQSxTQUFLbkIsTUFBTCxDQUFZbUIsSUFBWjtBQUNBLFNBQUtsQixXQUFMLENBQWlCa0IsSUFBakIsQ0FBc0IsS0FBS0YsU0FBTCxDQUFlSSxZQUFyQztBQUNBLFNBQUtuQixTQUFMLENBQWVpQixJQUFmLENBQW9CLElBQXBCO0FBRUgsR0FuQ0k7QUFxQ0xELEVBQUFBLFNBckNLLHVCQXFDTztBQUNSLFNBQUtDLElBQUw7QUFDSCxHQXZDSTtBQXlDTEcsRUFBQUEsU0F6Q0ssdUJBeUNPO0FBQ1IsU0FBS1AsY0FBTCxDQUFvQkssT0FBcEIsR0FBOEIsS0FBOUI7QUFDSCxHQTNDSTtBQTZDTEcsRUFBQUEsVUE3Q0ssd0JBNkNRO0FBQ1QsU0FBS1IsY0FBTCxDQUFvQkssT0FBcEIsR0FBOEIsSUFBOUI7QUFDSCxHQS9DSTtBQWlETEksRUFBQUEsUUFqREssc0JBaURNO0FBQ1AsU0FBS1QsY0FBTCxDQUFvQkssT0FBcEIsR0FBOEIsS0FBOUI7QUFDQSxTQUFLbEIsU0FBTCxDQUFldUIsSUFBZixDQUFvQixLQUFLUixTQUFMLENBQWVTLEtBQW5DLEVBQTBDLEtBQUtULFNBQUwsQ0FBZUksWUFBZixLQUFnQyxDQUExRTtBQUNILEdBcERJO0FBc0RMTSxFQUFBQSxrQkF0REssOEJBc0RjQyxRQXREZCxFQXNEd0JDLFNBdER4QixFQXNEbUM7QUFDcENBLElBQUFBLFNBQVMsQ0FBQ0MsTUFBVixHQUFtQixJQUFuQjtBQUNBLFNBQUtiLFNBQUwsQ0FBZWMsUUFBZixDQUF3QixDQUF4QjtBQUNBLFNBQUtkLFNBQUwsQ0FBZWUsVUFBZixDQUEwQixDQUExQjtBQUNBLFNBQUtsQyxRQUFMLENBQWNtQyxXQUFkLENBQTBCLEtBQUtoQixTQUFMLENBQWVTLEtBQXpDOztBQUNBLFFBQUksS0FBS1QsU0FBTCxDQUFlSSxZQUFmLElBQStCLENBQW5DLEVBQXNDO0FBQ2xDLFdBQUtHLFFBQUw7QUFDSDtBQUNKLEdBOURJO0FBZ0VMVSxFQUFBQSxtQkFoRUssK0JBZ0VlTixRQWhFZixFQWdFeUJPLFVBaEV6QixFQWdFcUM7QUFDdEMsU0FBS1gsUUFBTDtBQUNILEdBbEVJO0FBcUVMWSxFQUFBQSxTQXJFSyx1QkFxRU87QUFDUixTQUFLckIsY0FBTCxDQUFvQkssT0FBcEIsR0FBOEIsS0FBOUI7QUFDSDtBQXZFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBHYW1lTW9kZWwgPSByZXF1aXJlKCdHYW1lTW9kZWwnKTtcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGdhbWVWaWV3OiByZXF1aXJlKCdHYW1lVmlldycpLFxuICAgICAgICBiYWxsOiByZXF1aXJlKCdCYWxsJyksXG4gICAgICAgIHBhZGRsZTogcmVxdWlyZSgnUGFkZGxlJyksXG4gICAgICAgIGJyaWNrTGF5b3V0OiByZXF1aXJlKCdCcmlja0xheW91dCcpLFxuICAgICAgICBvdmVyUGFuZWw6IHJlcXVpcmUoJ092ZXJQYW5lbCcpLFxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy/lronljZPov5Tlm57plK7pgIDlh7pcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBjYy5LRVkuYmFjaykge1xuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmVuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5waHlzaWNzTWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCk7XG4gICAgICAgIHRoaXMuZ2FtZU1vZGVsID0gbmV3IEdhbWVNb2RlbCgpO1xuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xuXG4gICAgfSxcblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMucGh5c2ljc01hbmFnZXIuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2FtZU1vZGVsLmluaXQoKTtcblxuICAgICAgICB0aGlzLmdhbWVWaWV3LmluaXQodGhpcyk7XG4gICAgICAgIHRoaXMuYmFsbC5pbml0KHRoaXMpO1xuICAgICAgICB0aGlzLnBhZGRsZS5pbml0KCk7XG4gICAgICAgIHRoaXMuYnJpY2tMYXlvdXQuaW5pdCh0aGlzLmdhbWVNb2RlbC5icmlja3NOdW1iZXIpO1xuICAgICAgICB0aGlzLm92ZXJQYW5lbC5pbml0KHRoaXMpO1xuXG4gICAgfSxcblxuICAgIHN0YXJ0R2FtZSgpIHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfSxcblxuICAgIHBhdXNlR2FtZSgpIHtcbiAgICAgICAgdGhpcy5waHlzaWNzTWFuYWdlci5lbmFibGVkID0gZmFsc2U7XG4gICAgfSxcblxuICAgIHJlc3VtZUdhbWUoKSB7XG4gICAgICAgIHRoaXMucGh5c2ljc01hbmFnZXIuZW5hYmxlZCA9IHRydWU7XG4gICAgfSxcblxuICAgIHN0b3BHYW1lKCkge1xuICAgICAgICB0aGlzLnBoeXNpY3NNYW5hZ2VyLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vdmVyUGFuZWwuc2hvdyh0aGlzLmdhbWVNb2RlbC5zY29yZSwgdGhpcy5nYW1lTW9kZWwuYnJpY2tzTnVtYmVyID09PSAwKTtcbiAgICB9LFxuXG4gICAgb25CYWxsQ29udGFjdEJyaWNrKGJhbGxOb2RlLCBicmlja05vZGUpIHtcbiAgICAgICAgYnJpY2tOb2RlLnBhcmVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuZ2FtZU1vZGVsLmFkZFNjb3JlKDEpO1xuICAgICAgICB0aGlzLmdhbWVNb2RlbC5taW51c0JyaWNrKDEpO1xuICAgICAgICB0aGlzLmdhbWVWaWV3LnVwZGF0ZVNjb3JlKHRoaXMuZ2FtZU1vZGVsLnNjb3JlKTtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZU1vZGVsLmJyaWNrc051bWJlciA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BHYW1lKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25CYWxsQ29udGFjdEdyb3VuZChiYWxsTm9kZSwgZ3JvdW5kTm9kZSkge1xuICAgICAgICB0aGlzLnN0b3BHYW1lKCk7XG4gICAgfSxcblxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnBoeXNpY3NNYW5hZ2VyLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG5cbn0pOyJdfQ==
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
    scoreLabel: cc.Label
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

    this.scoreLabel.string = "Final Score: " + score;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdmlld1xcT3ZlclBhbmVsLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicmVzdWx0TGFiZWwiLCJMYWJlbCIsInNjb3JlTGFiZWwiLCJpbml0IiwiZ2FtZUN0bCIsIm5vZGUiLCJhY3RpdmUiLCJzaG93Iiwic2NvcmUiLCJpc1dpbiIsInN0cmluZyIsIm9uQnRuUmVzdGFydCIsInN0YXJ0R2FtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFdBQVcsRUFBQ0osRUFBRSxDQUFDSyxLQURQO0FBRVJDLElBQUFBLFVBQVUsRUFBQ04sRUFBRSxDQUFDSztBQUZOLEdBSFA7QUFRTEUsRUFBQUEsSUFSSyxnQkFRQUMsT0FSQSxFQVFRO0FBQ1QsU0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsSUFBTCxDQUFVQyxNQUFWLEdBQW1CLEtBQW5CO0FBQ0gsR0FYSTtBQWFMQyxFQUFBQSxJQWJLLGdCQWFBQyxLQWJBLEVBYU1DLEtBYk4sRUFhWTtBQUNiLFNBQUtKLElBQUwsQ0FBVUMsTUFBVixHQUFtQixJQUFuQjs7QUFDQSxRQUFHRyxLQUFILEVBQVM7QUFDTCxXQUFLVCxXQUFMLENBQWlCVSxNQUFqQixHQUEwQixVQUExQjtBQUNILEtBRkQsTUFFSztBQUNELFdBQUtWLFdBQUwsQ0FBaUJVLE1BQWpCLEdBQTBCLFdBQTFCO0FBQ0g7O0FBQ0QsU0FBS1IsVUFBTCxDQUFnQlEsTUFBaEIsR0FBeUIsa0JBQWtCRixLQUEzQztBQUNILEdBckJJO0FBdUJMRyxFQUFBQSxZQXZCSywwQkF1QlM7QUFDVixTQUFLUCxPQUFMLENBQWFRLFNBQWI7QUFDSDtBQXpCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICByZXN1bHRMYWJlbDpjYy5MYWJlbCxcbiAgICAgICAgc2NvcmVMYWJlbDpjYy5MYWJlbCxcbiAgICB9LFxuXG4gICAgaW5pdChnYW1lQ3RsKXtcbiAgICAgICAgdGhpcy5nYW1lQ3RsID0gZ2FtZUN0bDtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBzaG93KHNjb3JlLGlzV2luKXtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGlmKGlzV2luKXtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0TGFiZWwuc3RyaW5nID0gJ1lPVSBXSU4hJztcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdExhYmVsLnN0cmluZyA9ICdHQU1FIE9WRVInO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSBcIkZpbmFsIFNjb3JlOiBcIiArIHNjb3JlO1xuICAgIH0sXG5cbiAgICBvbkJ0blJlc3RhcnQoKXtcbiAgICAgICAgdGhpcy5nYW1lQ3RsLnN0YXJ0R2FtZSgpO1xuICAgIH1cbn0pO1xuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdmlld1xcUGFkZGxlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJvbkxvYWQiLCJub2RlIiwicGFyZW50Iiwib24iLCJldmVudCIsIngiLCJnZXRMb2NhdGlvbiIsImluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLE1BQU0sRUFBRSxrQkFBWTtBQUFBOztBQUNoQixTQUFLQyxJQUFMLENBQVVDLE1BQVYsQ0FBaUJDLEVBQWpCLENBQW9CLFdBQXBCLEVBQWlDLFVBQUNDLEtBQUQsRUFBVztBQUFDO0FBQ3pDLE1BQUEsS0FBSSxDQUFDSCxJQUFMLENBQVVJLENBQVYsR0FBY0QsS0FBSyxDQUFDRSxXQUFOLEdBQW9CRCxDQUFsQyxDQUR3QyxDQUNKO0FBQ3ZDLEtBRkQ7QUFHSCxHQVBJO0FBU0xFLEVBQUFBLElBVEssa0JBU0M7QUFDRixTQUFLTixJQUFMLENBQVVJLENBQVYsR0FBYyxHQUFkO0FBQ0g7QUFYSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQub24oXCJtb3VzZW1vdmVcIiwgKGV2ZW50KSA9PiB7Ly8v5L2/55So5LqL5Lu25ZCNbW91c2Vtb3Zl5p2l5rOo5YaM6byg5qCH5LqL5Lu2XG4gICAgICAgICAgICB0aGlzLm5vZGUueCA9IGV2ZW50LmdldExvY2F0aW9uKCkueDsvL+m8oOagh+enu+WKqOinpuWPkeS6i+S7tue7mVBhZGRsZeeahOS9jee9rumHjeaWsOi1i+WAvFxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgaW5pdCgpe1xuICAgICAgICB0aGlzLm5vZGUueCA9IDQ4MDtcbiAgICB9XG5cbn0pOyJdfQ==
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
    this.bricksNumber = bricksNumber;

    for (var i = 0; i < this.bricksNumber; i++) {
      var brickNode = cc.instantiate(this.brickPrefab);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdmlld1xcQnJpY2tMYXlvdXQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJwYWRkaW5nIiwic3BhY2luZyIsImNvbHMiLCJicmlja1ByZWZhYiIsIlByZWZhYiIsImJyaWNrc051bWJlciIsImluaXQiLCJub2RlIiwicmVtb3ZlQWxsQ2hpbGRyZW4iLCJpIiwiYnJpY2tOb2RlIiwiaW5zdGFudGlhdGUiLCJwYXJlbnQiLCJ4Iiwid2lkdGgiLCJ5IiwiTWF0aCIsImZsb29yIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsT0FBTyxFQUFFLENBREQ7QUFFUkMsSUFBQUEsT0FBTyxFQUFFLENBRkQ7QUFHUkMsSUFBQUEsSUFBSSxFQUFFLENBSEU7QUFJUkMsSUFBQUEsV0FBVyxFQUFFUCxFQUFFLENBQUNRLE1BSlI7QUFLUkMsSUFBQUEsWUFBWSxFQUFFO0FBTE4sR0FIUDtBQVdMQyxFQUFBQSxJQVhLLGdCQVdBRCxZQVhBLEVBV2M7QUFDZixTQUFLRSxJQUFMLENBQVVDLGlCQUFWO0FBQ0EsU0FBS0gsWUFBTCxHQUFvQkEsWUFBcEI7O0FBQ0EsU0FBSyxJQUFJSSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtKLFlBQXpCLEVBQXVDSSxDQUFDLEVBQXhDLEVBQTRDO0FBQ3hDLFVBQUlDLFNBQVMsR0FBR2QsRUFBRSxDQUFDZSxXQUFILENBQWUsS0FBS1IsV0FBcEIsQ0FBaEI7QUFDQU8sTUFBQUEsU0FBUyxDQUFDRSxNQUFWLEdBQW1CLEtBQUtMLElBQXhCO0FBQ0FHLE1BQUFBLFNBQVMsQ0FBQ0csQ0FBVixHQUFjLEtBQUtiLE9BQUwsR0FBZ0JTLENBQUMsR0FBRyxLQUFLUCxJQUFWLElBQW1CUSxTQUFTLENBQUNJLEtBQVYsR0FBa0IsS0FBS2IsT0FBMUMsQ0FBZixHQUFvRVMsU0FBUyxDQUFDSSxLQUFWLEdBQWtCLENBQXBHO0FBQ0FKLE1BQUFBLFNBQVMsQ0FBQ0ssQ0FBVixHQUFjLENBQUMsS0FBS2YsT0FBTixHQUFnQmdCLElBQUksQ0FBQ0MsS0FBTCxDQUFXUixDQUFDLEdBQUcsS0FBS1AsSUFBcEIsS0FBNkJRLFNBQVMsQ0FBQ1EsTUFBVixHQUFtQixLQUFLakIsT0FBckQsQ0FBaEIsR0FBZ0ZTLFNBQVMsQ0FBQ1EsTUFBVixHQUFtQixDQUFqSDtBQUNIO0FBQ0o7QUFwQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgc3BhY2luZzogMCxcbiAgICAgICAgY29sczogMCxcbiAgICAgICAgYnJpY2tQcmVmYWI6IGNjLlByZWZhYixcbiAgICAgICAgYnJpY2tzTnVtYmVyOiAwLFxuICAgIH0sXG5cbiAgICBpbml0KGJyaWNrc051bWJlcikge1xuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgdGhpcy5icmlja3NOdW1iZXIgPSBicmlja3NOdW1iZXI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5icmlja3NOdW1iZXI7IGkrKykge1xuICAgICAgICAgICAgbGV0IGJyaWNrTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYnJpY2tQcmVmYWIpO1xuICAgICAgICAgICAgYnJpY2tOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgICAgIGJyaWNrTm9kZS54ID0gdGhpcy5wYWRkaW5nICsgKGkgJSB0aGlzLmNvbHMpICogKGJyaWNrTm9kZS53aWR0aCArIHRoaXMuc3BhY2luZykgKyBicmlja05vZGUud2lkdGggLyAyO1xuICAgICAgICAgICAgYnJpY2tOb2RlLnkgPSAtdGhpcy5wYWRkaW5nIC0gTWF0aC5mbG9vcihpIC8gdGhpcy5jb2xzKSAqIChicmlja05vZGUuaGVpZ2h0ICsgdGhpcy5zcGFjaW5nKSAtIGJyaWNrTm9kZS5oZWlnaHQgLyAyO1xuICAgICAgICB9XG4gICAgfVxufSk7Il19
//------QC-SOURCE-SPLIT------
