
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/controller/GameCtl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a337308uxxJva7vh8G06q7Z', 'GameCtl');
// scripts/controller/GameCtl.js

"use strict";

var GameModel = require('GameModel');

cc.Class({
  "extends": cc.Component,
  properties: {
    gameView: require('GameView'),
    ball1: require('Ball1'),
    ball2: require('Ball2'),
    paddle: require('Paddle'),
    brickLayout: require('BrickLayout'),
    overPanel: require('OverPanel')
  },
  // use this for initialization
  onLoad: function onLoad() {
    this.physicsManager = cc.director.getPhysicsManager();
    this.gameModel = new GameModel();
    this.startGame();
  },
  startGame: function startGame() {
    this.physicsManager.enabled = true;
    this.gameModel.init();
    this.gameView.init(this);
    this.ball1.init(this);
    this.ball2.init(this);
    this.paddle.init();
    this.brickLayout.init(this.gameModel.bricksNumber);
    this.overPanel.init(this);
  },
  stopGame: function stopGame() {
    this.physicsManager.enabled = false;
    this.overPanel.show(this.gameModel.score, this.gameModel.bricksNumber === 0);
  },
  onBallContactBrick: function onBallContactBrick(ballNode, brickNode) {
    brickNode.parent = null;
    this.gameModel.addScore(1);
    this.gameModel.minusBrick(1);
    this.gameView.updateScore(this.gameModel.score);

    if (this.gameModel.bricksNumber <= 0) {
      this.stopGame();
    }
  },
  onBallContactGround: function onBallContactGround(ballNode, groundNode) {
    this.stopGame();
  },
  onDestroy: function onDestroy() {
    this.physicsManager.enabled = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29udHJvbGxlclxcR2FtZUN0bC5qcyJdLCJuYW1lcyI6WyJHYW1lTW9kZWwiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJnYW1lVmlldyIsImJhbGwxIiwiYmFsbDIiLCJwYWRkbGUiLCJicmlja0xheW91dCIsIm92ZXJQYW5lbCIsIm9uTG9hZCIsInBoeXNpY3NNYW5hZ2VyIiwiZGlyZWN0b3IiLCJnZXRQaHlzaWNzTWFuYWdlciIsImdhbWVNb2RlbCIsInN0YXJ0R2FtZSIsImVuYWJsZWQiLCJpbml0IiwiYnJpY2tzTnVtYmVyIiwic3RvcEdhbWUiLCJzaG93Iiwic2NvcmUiLCJvbkJhbGxDb250YWN0QnJpY2siLCJiYWxsTm9kZSIsImJyaWNrTm9kZSIsInBhcmVudCIsImFkZFNjb3JlIiwibWludXNCcmljayIsInVwZGF0ZVNjb3JlIiwib25CYWxsQ29udGFjdEdyb3VuZCIsImdyb3VuZE5vZGUiLCJvbkRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsU0FBUyxHQUFHQyxPQUFPLENBQUMsV0FBRCxDQUF6Qjs7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFFBQVEsRUFBRUwsT0FBTyxDQUFDLFVBQUQsQ0FEVDtBQUVSTSxJQUFBQSxLQUFLLEVBQUVOLE9BQU8sQ0FBQyxPQUFELENBRk47QUFHUk8sSUFBQUEsS0FBSyxFQUFFUCxPQUFPLENBQUMsT0FBRCxDQUhOO0FBSVJRLElBQUFBLE1BQU0sRUFBRVIsT0FBTyxDQUFDLFFBQUQsQ0FKUDtBQUtSUyxJQUFBQSxXQUFXLEVBQUVULE9BQU8sQ0FBQyxhQUFELENBTFo7QUFNUlUsSUFBQUEsU0FBUyxFQUFFVixPQUFPLENBQUMsV0FBRDtBQU5WLEdBSFA7QUFZTDtBQUNBVyxFQUFBQSxNQUFNLEVBQUUsa0JBQVk7QUFDaEIsU0FBS0MsY0FBTCxHQUFzQlgsRUFBRSxDQUFDWSxRQUFILENBQVlDLGlCQUFaLEVBQXRCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixJQUFJaEIsU0FBSixFQUFqQjtBQUNBLFNBQUtpQixTQUFMO0FBQ0gsR0FqQkk7QUFvQkxBLEVBQUFBLFNBcEJLLHVCQW9CTztBQUNSLFNBQUtKLGNBQUwsQ0FBb0JLLE9BQXBCLEdBQThCLElBQTlCO0FBQ0EsU0FBS0YsU0FBTCxDQUFlRyxJQUFmO0FBQ0EsU0FBS2IsUUFBTCxDQUFjYSxJQUFkLENBQW1CLElBQW5CO0FBQ0EsU0FBS1osS0FBTCxDQUFXWSxJQUFYLENBQWdCLElBQWhCO0FBQ0EsU0FBS1gsS0FBTCxDQUFXVyxJQUFYLENBQWdCLElBQWhCO0FBQ0EsU0FBS1YsTUFBTCxDQUFZVSxJQUFaO0FBQ0EsU0FBS1QsV0FBTCxDQUFpQlMsSUFBakIsQ0FBc0IsS0FBS0gsU0FBTCxDQUFlSSxZQUFyQztBQUNBLFNBQUtULFNBQUwsQ0FBZVEsSUFBZixDQUFvQixJQUFwQjtBQUNILEdBN0JJO0FBK0JMRSxFQUFBQSxRQS9CSyxzQkErQk07QUFDUCxTQUFLUixjQUFMLENBQW9CSyxPQUFwQixHQUE4QixLQUE5QjtBQUNBLFNBQUtQLFNBQUwsQ0FBZVcsSUFBZixDQUFvQixLQUFLTixTQUFMLENBQWVPLEtBQW5DLEVBQTBDLEtBQUtQLFNBQUwsQ0FBZUksWUFBZixLQUFnQyxDQUExRTtBQUNILEdBbENJO0FBb0NMSSxFQUFBQSxrQkFwQ0ssOEJBb0NjQyxRQXBDZCxFQW9Dd0JDLFNBcEN4QixFQW9DbUM7QUFDcENBLElBQUFBLFNBQVMsQ0FBQ0MsTUFBVixHQUFtQixJQUFuQjtBQUNBLFNBQUtYLFNBQUwsQ0FBZVksUUFBZixDQUF3QixDQUF4QjtBQUNBLFNBQUtaLFNBQUwsQ0FBZWEsVUFBZixDQUEwQixDQUExQjtBQUNBLFNBQUt2QixRQUFMLENBQWN3QixXQUFkLENBQTBCLEtBQUtkLFNBQUwsQ0FBZU8sS0FBekM7O0FBQ0EsUUFBSSxLQUFLUCxTQUFMLENBQWVJLFlBQWYsSUFBK0IsQ0FBbkMsRUFBc0M7QUFDbEMsV0FBS0MsUUFBTDtBQUNIO0FBQ0osR0E1Q0k7QUE4Q0xVLEVBQUFBLG1CQTlDSywrQkE4Q2VOLFFBOUNmLEVBOEN5Qk8sVUE5Q3pCLEVBOENxQztBQUN0QyxTQUFLWCxRQUFMO0FBQ0gsR0FoREk7QUFrRExZLEVBQUFBLFNBbERLLHVCQWtETztBQUNSLFNBQUtwQixjQUFMLENBQW9CSyxPQUFwQixHQUE4QixLQUE5QjtBQUNIO0FBcERJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEdhbWVNb2RlbCA9IHJlcXVpcmUoJ0dhbWVNb2RlbCcpO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGdhbWVWaWV3OiByZXF1aXJlKCdHYW1lVmlldycpLFxyXG4gICAgICAgIGJhbGwxOiByZXF1aXJlKCdCYWxsMScpLFxyXG4gICAgICAgIGJhbGwyOiByZXF1aXJlKCdCYWxsMicpLFxyXG4gICAgICAgIHBhZGRsZTogcmVxdWlyZSgnUGFkZGxlJyksXHJcbiAgICAgICAgYnJpY2tMYXlvdXQ6IHJlcXVpcmUoJ0JyaWNrTGF5b3V0JyksXHJcbiAgICAgICAgb3ZlclBhbmVsOiByZXF1aXJlKCdPdmVyUGFuZWwnKSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnBoeXNpY3NNYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKTtcclxuICAgICAgICB0aGlzLmdhbWVNb2RlbCA9IG5ldyBHYW1lTW9kZWwoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMucGh5c2ljc01hbmFnZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5nYW1lTW9kZWwuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZVZpZXcuaW5pdCh0aGlzKTtcclxuICAgICAgICB0aGlzLmJhbGwxLmluaXQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5iYWxsMi5pbml0KHRoaXMpO1xyXG4gICAgICAgIHRoaXMucGFkZGxlLmluaXQoKTtcclxuICAgICAgICB0aGlzLmJyaWNrTGF5b3V0LmluaXQodGhpcy5nYW1lTW9kZWwuYnJpY2tzTnVtYmVyKTtcclxuICAgICAgICB0aGlzLm92ZXJQYW5lbC5pbml0KHRoaXMpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdG9wR2FtZSgpIHtcclxuICAgICAgICB0aGlzLnBoeXNpY3NNYW5hZ2VyLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm92ZXJQYW5lbC5zaG93KHRoaXMuZ2FtZU1vZGVsLnNjb3JlLCB0aGlzLmdhbWVNb2RlbC5icmlja3NOdW1iZXIgPT09IDApO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkJhbGxDb250YWN0QnJpY2soYmFsbE5vZGUsIGJyaWNrTm9kZSkge1xyXG4gICAgICAgIGJyaWNrTm9kZS5wYXJlbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZ2FtZU1vZGVsLmFkZFNjb3JlKDEpO1xyXG4gICAgICAgIHRoaXMuZ2FtZU1vZGVsLm1pbnVzQnJpY2soMSk7XHJcbiAgICAgICAgdGhpcy5nYW1lVmlldy51cGRhdGVTY29yZSh0aGlzLmdhbWVNb2RlbC5zY29yZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZU1vZGVsLmJyaWNrc051bWJlciA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcEdhbWUoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQmFsbENvbnRhY3RHcm91bmQoYmFsbE5vZGUsIGdyb3VuZE5vZGUpIHtcclxuICAgICAgICB0aGlzLnN0b3BHYW1lKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnBoeXNpY3NNYW5hZ2VyLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbn0pOyJdfQ==