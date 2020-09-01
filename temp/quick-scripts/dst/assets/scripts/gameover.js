
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/gameover.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '60425zRIQ5LNIZ6KmZ5p/LN', 'gameover');
// scripts/gameover.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZ2FtZW92ZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJyZXN1bHRMYWJlbCIsIkxhYmVsIiwic2NvcmVMYWJlbCIsImZpcnN0c3RhcnRidG4iLCJOb2RlIiwiaW5pdCIsImdhbWVDdGwiLCJub2RlIiwiYWN0aXZlIiwic2hvdyIsInNjb3JlIiwiaXNXaW4iLCJzdHJpbmciLCJvbkJ0blJlc3RhcnQiLCJzdGFydEdhbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxXQUFXLEVBQUNKLEVBQUUsQ0FBQ0ssS0FEUDtBQUVSQyxJQUFBQSxVQUFVLEVBQUNOLEVBQUUsQ0FBQ0ssS0FGTjtBQUdSRSxJQUFBQSxhQUFhLEVBQUNQLEVBQUUsQ0FBQ1E7QUFIVCxHQUhQO0FBU0xDLEVBQUFBLElBVEssZ0JBU0FDLE9BVEEsRUFTUTtBQUNULFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLElBQUwsQ0FBVUMsTUFBVixHQUFtQixLQUFuQjtBQUNILEdBWkk7QUFjTEMsRUFBQUEsSUFkSyxnQkFjQUMsS0FkQSxFQWNNQyxLQWROLEVBY1k7QUFDYixTQUFLSixJQUFMLENBQVVDLE1BQVYsR0FBbUIsSUFBbkI7O0FBQ0EsUUFBR0csS0FBSCxFQUFTO0FBQ0wsV0FBS1gsV0FBTCxDQUFpQlksTUFBakIsR0FBMEIsVUFBMUI7QUFDSCxLQUZELE1BRUs7QUFDRCxXQUFLWixXQUFMLENBQWlCWSxNQUFqQixHQUEwQixXQUExQjtBQUNIOztBQUVELFNBQUtWLFVBQUwsQ0FBZ0JVLE1BQWhCLEdBQXdCLGtCQUFpQkYsS0FBekM7QUFDSCxHQXZCSTtBQXlCTEcsRUFBQUEsWUF6QkssMEJBeUJTO0FBQ1YsU0FBS1AsT0FBTCxDQUFhUSxTQUFiO0FBQ0EsU0FBS1gsYUFBTCxDQUFtQkssTUFBbkIsR0FBMEIsS0FBMUI7QUFDSDtBQTVCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHJlc3VsdExhYmVsOmNjLkxhYmVsLFxyXG4gICAgICAgIHNjb3JlTGFiZWw6Y2MuTGFiZWwsXHJcbiAgICAgICAgZmlyc3RzdGFydGJ0bjpjYy5Ob2RlLFxyXG4gICAgfSxcclxuXHJcbiAgICBpbml0KGdhbWVDdGwpe1xyXG4gICAgICAgIHRoaXMuZ2FtZUN0bCA9IGdhbWVDdGw7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICBzaG93KHNjb3JlLGlzV2luKXtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBpZihpc1dpbil7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdWx0TGFiZWwuc3RyaW5nID0gJ1lPVSBXSU4hJztcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5yZXN1bHRMYWJlbC5zdHJpbmcgPSAnR0FNRSBPVkVSJztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9J0ZpbmFsIFNjb3JlOiAnKyBzY29yZTtcclxuICAgIH0sXHJcblxyXG4gICAgb25CdG5SZXN0YXJ0KCl7XHJcbiAgICAgICAgdGhpcy5nYW1lQ3RsLnN0YXJ0R2FtZSgpO1xyXG4gICAgICAgIHRoaXMuZmlyc3RzdGFydGJ0bi5hY3RpdmU9ZmFsc2U7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=