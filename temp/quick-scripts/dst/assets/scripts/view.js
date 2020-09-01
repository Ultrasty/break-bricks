
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/view.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e4735UW3lFPMoW0rK22obsG', 'view');
// scripts/view.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdmlldy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNjb3JlTGFiZWwiLCJMYWJlbCIsImluaXQiLCJnYW1lQ3RsIiwic3RyaW5nIiwidXBkYXRlU2NvcmUiLCJzY29yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFVBQVUsRUFBQ0osRUFBRSxDQUFDSztBQUROLEdBSFA7QUFPTEMsRUFBQUEsSUFQSyxnQkFPQUMsT0FQQSxFQU9RO0FBQ1QsU0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0gsVUFBTCxDQUFnQkksTUFBaEIsR0FBeUIsR0FBekI7QUFDSCxHQVZJO0FBWUxDLEVBQUFBLFdBWkssdUJBWU9DLEtBWlAsRUFZYTtBQUNkLFNBQUtOLFVBQUwsQ0FBZ0JJLE1BQWhCLEdBQXlCRSxLQUF6QjtBQUNIO0FBZEksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBzY29yZUxhYmVsOmNjLkxhYmVsLFxyXG4gICAgfSxcclxuXHJcbiAgICBpbml0KGdhbWVDdGwpe1xyXG4gICAgICAgIHRoaXMuZ2FtZUN0bCA9IGdhbWVDdGw7XHJcbiAgICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9ICcwJztcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlU2NvcmUoc2NvcmUpe1xyXG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSBzY29yZTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==