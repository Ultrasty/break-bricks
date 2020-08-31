
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