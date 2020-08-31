
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

    this.node.parent.on("mousemove", function (event) {
      ///使用事件名mousemove来注册鼠标事件
      _this.node.x = event.getLocation().x; //鼠标移动触发事件给Paddle的位置重新赋值
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdmlld1xcUGFkZGxlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJvbkxvYWQiLCJub2RlIiwicGFyZW50Iiwib24iLCJldmVudCIsIngiLCJnZXRMb2NhdGlvbiIsImluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLE1BQU0sRUFBRSxrQkFBWTtBQUFBOztBQUNoQixTQUFLQyxJQUFMLENBQVVDLE1BQVYsQ0FBaUJDLEVBQWpCLENBQW9CLFdBQXBCLEVBQWlDLFVBQUNDLEtBQUQsRUFBVztBQUFDO0FBQ3pDLE1BQUEsS0FBSSxDQUFDSCxJQUFMLENBQVVJLENBQVYsR0FBY0QsS0FBSyxDQUFDRSxXQUFOLEdBQW9CRCxDQUFsQyxDQUR3QyxDQUNKO0FBQ3ZDLEtBRkQ7QUFHSCxHQVBJO0FBU0xFLEVBQUFBLElBVEssa0JBU0M7QUFDRixTQUFLTixJQUFMLENBQVVJLENBQVYsR0FBYyxHQUFkO0FBQ0g7QUFYSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQub24oXCJtb3VzZW1vdmVcIiwgKGV2ZW50KSA9PiB7Ly8v5L2/55So5LqL5Lu25ZCNbW91c2Vtb3Zl5p2l5rOo5YaM6byg5qCH5LqL5Lu2XG4gICAgICAgICAgICB0aGlzLm5vZGUueCA9IGV2ZW50LmdldExvY2F0aW9uKCkueDsvL+m8oOagh+enu+WKqOinpuWPkeS6i+S7tue7mVBhZGRsZeeahOS9jee9rumHjeaWsOi1i+WAvFxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgaW5pdCgpe1xuICAgICAgICB0aGlzLm5vZGUueCA9IDQ4MDtcbiAgICB9XG5cbn0pOyJdfQ==