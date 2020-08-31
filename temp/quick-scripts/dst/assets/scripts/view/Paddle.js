
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/view/Paddle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4dc82c1qO9KbZBsMZGbHlMV', 'Paddle');
// scripts/view/Paddle.js

"use strict";

cc.Class({
  "extends": cc.Component,
  onLoad: function onLoad() {
    var _this = this;

    this.node.parent.on("touchmove", function (event) {
      //将世界坐标转化为本地坐标
      var touchPoint = _this.node.parent.convertToNodeSpace(event.getLocation());

      _this.node.x = touchPoint.x;
    });
  },
  init: function init() {
    this.node.x = 480;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdmlld1xcUGFkZGxlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJvbkxvYWQiLCJub2RlIiwicGFyZW50Iiwib24iLCJldmVudCIsInRvdWNoUG9pbnQiLCJjb252ZXJ0VG9Ob2RlU3BhY2UiLCJnZXRMb2NhdGlvbiIsIngiLCJpbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxNQUFNLEVBQUUsa0JBQVk7QUFBQTs7QUFDaEIsU0FBS0MsSUFBTCxDQUFVQyxNQUFWLENBQWlCQyxFQUFqQixDQUFvQixXQUFwQixFQUFpQyxVQUFDQyxLQUFELEVBQVc7QUFDeEM7QUFDQSxVQUFJQyxVQUFVLEdBQUcsS0FBSSxDQUFDSixJQUFMLENBQVVDLE1BQVYsQ0FBaUJJLGtCQUFqQixDQUFvQ0YsS0FBSyxDQUFDRyxXQUFOLEVBQXBDLENBQWpCOztBQUNBLE1BQUEsS0FBSSxDQUFDTixJQUFMLENBQVVPLENBQVYsR0FBY0gsVUFBVSxDQUFDRyxDQUF6QjtBQUNILEtBSkQ7QUFLSCxHQVRJO0FBV0xDLEVBQUFBLElBWEssa0JBV0M7QUFDRixTQUFLUixJQUFMLENBQVVPLENBQVYsR0FBYyxHQUFkO0FBQ0g7QUFiSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQub24oXCJ0b3VjaG1vdmVcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAvL+WwhuS4lueVjOWdkOagh+i9rOWMluS4uuacrOWcsOWdkOagh1xuICAgICAgICAgICAgbGV0IHRvdWNoUG9pbnQgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZShldmVudC5nZXRMb2NhdGlvbigpKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS54ID0gdG91Y2hQb2ludC54O1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgaW5pdCgpe1xuICAgICAgICB0aGlzLm5vZGUueCA9IDQ4MDtcbiAgICB9XG5cbn0pOyJdfQ==