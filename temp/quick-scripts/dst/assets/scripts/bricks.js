
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/bricks.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '62398FSMJtHJ55jmSoqf4WF', 'bricks');
// scripts/bricks.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYnJpY2tzLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicGFkZGluZyIsInNwYWNpbmciLCJjb2xzIiwiYnJpY2tQcmVmYWIiLCJQcmVmYWIiLCJicmlja3NOdW1iZXIiLCJpbml0Iiwibm9kZSIsInJlbW92ZUFsbENoaWxkcmVuIiwiaSIsImJyaWNrTm9kZSIsImluc3RhbnRpYXRlIiwicGFyZW50IiwieCIsIndpZHRoIiwieSIsIk1hdGgiLCJmbG9vciIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLE9BQU8sRUFBRSxDQUREO0FBRVJDLElBQUFBLE9BQU8sRUFBRSxDQUZEO0FBR1JDLElBQUFBLElBQUksRUFBRSxDQUhFO0FBSVJDLElBQUFBLFdBQVcsRUFBRVAsRUFBRSxDQUFDUSxNQUpSO0FBS1JDLElBQUFBLFlBQVksRUFBRTtBQUxOLEdBSFA7QUFXTEMsRUFBQUEsSUFYSyxnQkFXQUQsWUFYQSxFQVdjO0FBQ2YsU0FBS0UsSUFBTCxDQUFVQyxpQkFBVjs7QUFDQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdKLFlBQXBCLEVBQWtDSSxDQUFDLEVBQW5DLEVBQXVDO0FBQUM7QUFDcEMsVUFBSUMsU0FBUyxHQUFHZCxFQUFFLENBQUNlLFdBQUgsQ0FBZSxLQUFLUixXQUFwQixDQUFoQixDQURtQyxDQUNjOztBQUNqRE8sTUFBQUEsU0FBUyxDQUFDRSxNQUFWLEdBQW1CLEtBQUtMLElBQXhCO0FBQ0FHLE1BQUFBLFNBQVMsQ0FBQ0csQ0FBVixHQUFjLEtBQUtiLE9BQUwsR0FBZ0JTLENBQUMsR0FBRyxLQUFLUCxJQUFWLElBQW1CUSxTQUFTLENBQUNJLEtBQVYsR0FBa0IsS0FBS2IsT0FBMUMsQ0FBZixHQUFvRVMsU0FBUyxDQUFDSSxLQUFWLEdBQWtCLENBQXBHO0FBQ0FKLE1BQUFBLFNBQVMsQ0FBQ0ssQ0FBVixHQUFjLENBQUMsS0FBS2YsT0FBTixHQUFnQmdCLElBQUksQ0FBQ0MsS0FBTCxDQUFXUixDQUFDLEdBQUcsS0FBS1AsSUFBcEIsS0FBNkJRLFNBQVMsQ0FBQ1EsTUFBVixHQUFtQixLQUFLakIsT0FBckQsQ0FBaEIsR0FBZ0ZTLFNBQVMsQ0FBQ1EsTUFBVixHQUFtQixDQUFqSDtBQUNIO0FBQ0o7QUFuQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgIHNwYWNpbmc6IDAsXHJcbiAgICAgICAgY29sczogMCxcclxuICAgICAgICBicmlja1ByZWZhYjogY2MuUHJlZmFiLFxyXG4gICAgICAgIGJyaWNrc051bWJlcjogMCxcclxuICAgIH0sXHJcblxyXG4gICAgaW5pdChicmlja3NOdW1iZXIpIHtcclxuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJyaWNrc051bWJlcjsgaSsrKSB7Ly/nlJ/miJBicmlja3NOdW1iZXLkuKrlsI/nkINcclxuICAgICAgICAgICAgbGV0IGJyaWNrTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYnJpY2tQcmVmYWIpOy8v55Sf5oiQ5paw55qE6IqC54K5XHJcbiAgICAgICAgICAgIGJyaWNrTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgICAgIGJyaWNrTm9kZS54ID0gdGhpcy5wYWRkaW5nICsgKGkgJSB0aGlzLmNvbHMpICogKGJyaWNrTm9kZS53aWR0aCArIHRoaXMuc3BhY2luZykgKyBicmlja05vZGUud2lkdGggLyAyO1xyXG4gICAgICAgICAgICBicmlja05vZGUueSA9IC10aGlzLnBhZGRpbmcgLSBNYXRoLmZsb29yKGkgLyB0aGlzLmNvbHMpICogKGJyaWNrTm9kZS5oZWlnaHQgKyB0aGlzLnNwYWNpbmcpIC0gYnJpY2tOb2RlLmhlaWdodCAvIDI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTsiXX0=