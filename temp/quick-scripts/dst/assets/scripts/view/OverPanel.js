
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
  // use this for initialization
  onLoad: function onLoad() {},
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdmlld1xcT3ZlclBhbmVsLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicmVzdWx0TGFiZWwiLCJMYWJlbCIsInNjb3JlTGFiZWwiLCJvbkxvYWQiLCJpbml0IiwiZ2FtZUN0bCIsIm5vZGUiLCJhY3RpdmUiLCJzaG93Iiwic2NvcmUiLCJpc1dpbiIsInN0cmluZyIsIm9uQnRuUmVzdGFydCIsInN0YXJ0R2FtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFdBQVcsRUFBQ0osRUFBRSxDQUFDSyxLQURQO0FBRVJDLElBQUFBLFVBQVUsRUFBQ04sRUFBRSxDQUFDSztBQUZOLEdBSFA7QUFRTDtBQUNBRSxFQUFBQSxNQUFNLEVBQUUsa0JBQVksQ0FFbkIsQ0FYSTtBQWFMQyxFQUFBQSxJQWJLLGdCQWFBQyxPQWJBLEVBYVE7QUFDVCxTQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxJQUFMLENBQVVDLE1BQVYsR0FBbUIsS0FBbkI7QUFDSCxHQWhCSTtBQWtCTEMsRUFBQUEsSUFsQkssZ0JBa0JBQyxLQWxCQSxFQWtCTUMsS0FsQk4sRUFrQlk7QUFDYixTQUFLSixJQUFMLENBQVVDLE1BQVYsR0FBbUIsSUFBbkI7O0FBQ0EsUUFBR0csS0FBSCxFQUFTO0FBQ0wsV0FBS1YsV0FBTCxDQUFpQlcsTUFBakIsR0FBMEIsVUFBMUI7QUFDSCxLQUZELE1BRUs7QUFDRCxXQUFLWCxXQUFMLENBQWlCVyxNQUFqQixHQUEwQixXQUExQjtBQUNIOztBQUNELFNBQUtULFVBQUwsQ0FBZ0JTLE1BQWhCLEdBQXdCLGtCQUFpQkYsS0FBekM7QUFDSCxHQTFCSTtBQTRCTEcsRUFBQUEsWUE1QkssMEJBNEJTO0FBQ1YsU0FBS1AsT0FBTCxDQUFhUSxTQUFiO0FBQ0g7QUE5QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgcmVzdWx0TGFiZWw6Y2MuTGFiZWwsXG4gICAgICAgIHNjb3JlTGFiZWw6Y2MuTGFiZWwsXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuXG4gICAgfSxcblxuICAgIGluaXQoZ2FtZUN0bCl7XG4gICAgICAgIHRoaXMuZ2FtZUN0bCA9IGdhbWVDdGw7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgc2hvdyhzY29yZSxpc1dpbil7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBpZihpc1dpbil7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdExhYmVsLnN0cmluZyA9ICdZT1UgV0lOISc7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5yZXN1bHRMYWJlbC5zdHJpbmcgPSAnR0FNRSBPVkVSJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nID0nRmluYWwgU2NvcmU6ICcrIHNjb3JlO1xuICAgIH0sXG5cbiAgICBvbkJ0blJlc3RhcnQoKXtcbiAgICAgICAgdGhpcy5nYW1lQ3RsLnN0YXJ0R2FtZSgpO1xuICAgIH1cbn0pO1xuIl19