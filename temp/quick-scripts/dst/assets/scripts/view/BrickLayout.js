
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