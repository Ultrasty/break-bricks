
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
    this.bricksNumber = 10;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbW9kZWxcXEdhbWVNb2RlbC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNjb3JlIiwiYnJpY2tzTnVtYmVyIiwiaW5pdCIsImFkZFNjb3JlIiwibWludXNCcmljayIsIm4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxLQUFLLEVBQUMsQ0FERTtBQUVSQyxJQUFBQSxZQUFZLEVBQUM7QUFGTCxHQUhQO0FBUUxDLEVBQUFBLElBUkssa0JBUUM7QUFDRixTQUFLRixLQUFMLEdBQWEsQ0FBYjtBQUNBLFNBQUtDLFlBQUwsR0FBb0IsRUFBcEI7QUFDSCxHQVhJO0FBYUxFLEVBQUFBLFFBYkssb0JBYUlILEtBYkosRUFhVTtBQUNYLFNBQUtBLEtBQUwsSUFBY0EsS0FBZDtBQUNILEdBZkk7QUFpQkxJLEVBQUFBLFVBakJLLHNCQWlCTUMsQ0FqQk4sRUFpQlE7QUFDVCxTQUFLSixZQUFMLElBQXFCSSxDQUFyQjtBQUNIO0FBbkJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgc2NvcmU6MCxcclxuICAgICAgICBicmlja3NOdW1iZXI6MCxcclxuICAgIH0sXHJcblxyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMuYnJpY2tzTnVtYmVyID0gMTA7XHJcbiAgICB9LFxyXG5cclxuICAgIGFkZFNjb3JlKHNjb3JlKXtcclxuICAgICAgICB0aGlzLnNjb3JlICs9IHNjb3JlO1xyXG4gICAgfSxcclxuXHJcbiAgICBtaW51c0JyaWNrKG4pe1xyXG4gICAgICAgIHRoaXMuYnJpY2tzTnVtYmVyIC09IG47XHJcbiAgICB9LFxyXG5cclxufSk7XHJcbiJdfQ==