
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