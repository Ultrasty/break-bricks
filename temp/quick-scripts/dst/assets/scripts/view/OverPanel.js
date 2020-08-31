
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