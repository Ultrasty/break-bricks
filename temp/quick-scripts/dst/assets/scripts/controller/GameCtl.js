
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
    ball: require('Ball'),
    paddle: require('Paddle'),
    brickLayout: require('BrickLayout'),
    overPanel: require('OverPanel')
  },
  // use this for initialization
  onLoad: function onLoad() {
    //安卓返回键退出
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function (event) {
      if (event.keyCode === cc.KEY.back) {
        cc.director.end();
      }
    });
    this.physicsManager = cc.director.getPhysicsManager();
    this.gameModel = new GameModel();
    this.startGame();
  },
  //this.physicsManager.debugDrawFlags =0;
  // cc.PhysicsManager.DrawBits.e_aabbBit |
  // cc.PhysicsManager.DrawBits.e_pairBit |
  // cc.PhysicsManager.DrawBits.e_centerOfMassBit |
  // cc.PhysicsManager.DrawBits.e_jointBit |
  // cc.PhysicsManager.DrawBits.e_shapeBit
  // ; 
  init: function init() {
    this.physicsManager.enabled = true;
    this.gameModel.init();
    this.gameView.init(this);
    this.ball.init(this);
    this.paddle.init();
    this.brickLayout.init(this.gameModel.bricksNumber);
    this.overPanel.init(this);
  },
  startGame: function startGame() {
    this.init();
  },
  pauseGame: function pauseGame() {
    this.physicsManager.enabled = false;
  },
  resumeGame: function resumeGame() {
    this.physicsManager.enabled = true;
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
  onBallContactPaddle: function onBallContactPaddle(ballNode, paddleNode) {},
  onBallContactWall: function onBallContactWall(ballNode, brickNode) {},
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29udHJvbGxlclxcR2FtZUN0bC5qcyJdLCJuYW1lcyI6WyJHYW1lTW9kZWwiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJnYW1lVmlldyIsImJhbGwiLCJwYWRkbGUiLCJicmlja0xheW91dCIsIm92ZXJQYW5lbCIsIm9uTG9hZCIsInN5c3RlbUV2ZW50Iiwib24iLCJTeXN0ZW1FdmVudCIsIkV2ZW50VHlwZSIsIktFWV9ET1dOIiwiZXZlbnQiLCJrZXlDb2RlIiwiS0VZIiwiYmFjayIsImRpcmVjdG9yIiwiZW5kIiwicGh5c2ljc01hbmFnZXIiLCJnZXRQaHlzaWNzTWFuYWdlciIsImdhbWVNb2RlbCIsInN0YXJ0R2FtZSIsImluaXQiLCJlbmFibGVkIiwiYnJpY2tzTnVtYmVyIiwicGF1c2VHYW1lIiwicmVzdW1lR2FtZSIsInN0b3BHYW1lIiwic2hvdyIsInNjb3JlIiwib25CYWxsQ29udGFjdEJyaWNrIiwiYmFsbE5vZGUiLCJicmlja05vZGUiLCJwYXJlbnQiLCJhZGRTY29yZSIsIm1pbnVzQnJpY2siLCJ1cGRhdGVTY29yZSIsIm9uQmFsbENvbnRhY3RHcm91bmQiLCJncm91bmROb2RlIiwib25CYWxsQ29udGFjdFBhZGRsZSIsInBhZGRsZU5vZGUiLCJvbkJhbGxDb250YWN0V2FsbCIsIm9uRGVzdHJveSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxXQUFELENBQXpCOztBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsUUFBUSxFQUFFTCxPQUFPLENBQUMsVUFBRCxDQURUO0FBRVJNLElBQUFBLElBQUksRUFBRU4sT0FBTyxDQUFDLE1BQUQsQ0FGTDtBQUdSTyxJQUFBQSxNQUFNLEVBQUVQLE9B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RkssdUJBb0ZPO0FBQ1IsU0FBS3hCLGNBQUwsQ0FBb0JLLE9BQXBCLEdBQThCLEtBQTlCO0FBQ0g7QUF0RkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgR2FtZU1vZGVsID0gcmVxdWlyZSgnR2FtZU1vZGVsJyk7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBnYW1lVmlldzogcmVxdWlyZSgnR2FtZVZpZXcnKSxcbiAgICAgICAgYmFsbDogcmVxdWlyZSgnQmFsbCcpLFxuICAgICAgICBwYWRkbGU6IHJlcXVpcmUoJ1BhZGRsZScpLFxuICAgICAgICBicmlja0xheW91dDogcmVxdWlyZSgnQnJpY2tMYXlvdXQnKSxcbiAgICAgICAgb3ZlclBhbmVsOiByZXF1aXJlKCdPdmVyUGFuZWwnKSxcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8v5a6J5Y2T6L+U5Zue6ZSu6YCA5Ye6XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gY2MuS0VZLmJhY2spIHtcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5lbmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucGh5c2ljc01hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpO1xuICAgICAgICB0aGlzLmdhbWVNb2RlbCA9IG5ldyBHYW1lTW9kZWwoKTtcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcblxuICAgIH0sXG5cbiAgICAvL3RoaXMucGh5c2ljc01hbmFnZXIuZGVidWdEcmF3RmxhZ3MgPTA7XG4gICAgLy8gY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHMuZV9hYWJiQml0IHxcbiAgICAvLyBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX3BhaXJCaXQgfFxuICAgIC8vIGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzLmVfY2VudGVyT2ZNYXNzQml0IHxcbiAgICAvLyBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX2pvaW50Qml0IHxcbiAgICAvLyBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cy5lX3NoYXBlQml0XG4gICAgLy8gOyBcblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMucGh5c2ljc01hbmFnZXIuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2FtZU1vZGVsLmluaXQoKTtcblxuICAgICAgICB0aGlzLmdhbWVWaWV3LmluaXQodGhpcyk7XG4gICAgICAgIHRoaXMuYmFsbC5pbml0KHRoaXMpO1xuICAgICAgICB0aGlzLnBhZGRsZS5pbml0KCk7XG4gICAgICAgIHRoaXMuYnJpY2tMYXlvdXQuaW5pdCh0aGlzLmdhbWVNb2RlbC5icmlja3NOdW1iZXIpO1xuICAgICAgICB0aGlzLm92ZXJQYW5lbC5pbml0KHRoaXMpO1xuXG4gICAgfSxcblxuICAgIHN0YXJ0R2FtZSgpIHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfSxcblxuICAgIHBhdXNlR2FtZSgpIHtcbiAgICAgICAgdGhpcy5waHlzaWNzTWFuYWdlci5lbmFibGVkID0gZmFsc2U7XG4gICAgfSxcblxuICAgIHJlc3VtZUdhbWUoKSB7XG4gICAgICAgIHRoaXMucGh5c2ljc01hbmFnZXIuZW5hYmxlZCA9IHRydWU7XG4gICAgfSxcblxuICAgIHN0b3BHYW1lKCkge1xuICAgICAgICB0aGlzLnBoeXNpY3NNYW5hZ2VyLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vdmVyUGFuZWwuc2hvdyh0aGlzLmdhbWVNb2RlbC5zY29yZSwgdGhpcy5nYW1lTW9kZWwuYnJpY2tzTnVtYmVyID09PSAwKTtcbiAgICB9LFxuXG4gICAgb25CYWxsQ29udGFjdEJyaWNrKGJhbGxOb2RlLCBicmlja05vZGUpIHtcbiAgICAgICAgYnJpY2tOb2RlLnBhcmVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuZ2FtZU1vZGVsLmFkZFNjb3JlKDEpO1xuICAgICAgICB0aGlzLmdhbWVNb2RlbC5taW51c0JyaWNrKDEpO1xuICAgICAgICB0aGlzLmdhbWVWaWV3LnVwZGF0ZVNjb3JlKHRoaXMuZ2FtZU1vZGVsLnNjb3JlKTtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZU1vZGVsLmJyaWNrc051bWJlciA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BHYW1lKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25CYWxsQ29udGFjdEdyb3VuZChiYWxsTm9kZSwgZ3JvdW5kTm9kZSkge1xuICAgICAgICB0aGlzLnN0b3BHYW1lKCk7XG4gICAgfSxcblxuICAgIG9uQmFsbENvbnRhY3RQYWRkbGUoYmFsbE5vZGUsIHBhZGRsZU5vZGUpIHtcblxuICAgIH0sXG5cbiAgICBvbkJhbGxDb250YWN0V2FsbChiYWxsTm9kZSwgYnJpY2tOb2RlKSB7XG5cbiAgICB9LFxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnBoeXNpY3NNYW5hZ2VyLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG5cbn0pOyJdfQ==