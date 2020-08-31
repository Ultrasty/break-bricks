
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