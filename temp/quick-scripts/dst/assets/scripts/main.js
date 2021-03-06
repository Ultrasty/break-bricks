
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a337308uxxJva7vh8G06q7Z', 'main');
// scripts/main.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    pause: cc.Label,
    gameView: require('view'),
    ball1: require('Ball1'),
    ball2: require('Ball2'),
    ball3: require('Ball3'),
    firststart: require('firststart'),
    paddle: require('board'),
    brickLayout: require('bricks'),
    overPanel: require('gameover'),
    score: 0,
    bricksNumber: 0
  },
  onLoad: function onLoad() {
    this.score = 0;
    this.bricksNumber = 50;
    this.physicsManager = cc.director.getPhysicsManager();
    this.physicsManager.enabled = true;
    this.gameView.init(this);
    this.paddle.init();
    this.overPanel.init(this);
    this.firststart.init(this);
  },
  startGame: function startGame() {
    this.bricksNumber = 50;
    this.score = 0;
    this.physicsManager.enabled = true;
    this.gameView.init(this);
    this.ball1.init(this);
    this.ball2.init(this);
    this.ball3.init(this);
    this.paddle.init();
    this.brickLayout.init(this.bricksNumber);
    this.overPanel.init(this);
  },
  stopGame: function stopGame() {
    this.physicsManager.enabled = false;
    this.overPanel.show(this.score, this.bricksNumber === 0);
  },
  onBallContactBrick: function onBallContactBrick(ballNode, brickNode) {
    brickNode.parent = null;
    this.addScore(1);
    this.minusBrick(1);
    this.gameView.updateScore(this.score);

    if (this.bricksNumber <= 0) {
      this.stopGame();
    }
  },
  onBallContactGround: function onBallContactGround(ballNode, groundNode) {
    this.stopGame();
  },
  onDestroy: function onDestroy() {
    this.physicsManager.enabled = false;
  },
  addScore: function addScore(score) {
    this.score += score;
  },
  minusBrick: function minusBrick(n) {
    this.bricksNumber -= n;
  },
  pause_: function pause_() {
    this.physicsManager.enabled = !this.physicsManager.enabled;
    if (this.physicsManager.enabled) this.pause.string = 'Pause';else this.pause.string = 'Continue';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWFpbi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBhdXNlIiwiTGFiZWwiLCJnYW1lVmlldyIsInJlcXVpcmUiLCJiYWxsMSIsImJhbGwyIiwiYmFsbDMiLCJmaXJzdHN0YXJ0IiwicGFkZGxlIiwiYnJpY2tMYXlvdXQiLCJvdmVyUGFuZWwiLCJzY29yZSIsImJyaWNrc051bWJlciIsIm9uTG9hZCIsInBoeXNpY3NNYW5hZ2VyIiwiZGlyZWN0b3IiLCJnZXRQaHlzaWNzTWFuYWdlciIsImVuYWJsZWQiLCJpbml0Iiwic3RhcnRHYW1lIiwic3RvcEdhbWUiLCJzaG93Iiwib25CYWxsQ29udGFjdEJyaWNrIiwiYmFsbE5vZGUiLCJicmlja05vZGUiLCJwYXJlbnQiLCJhZGRTY29yZSIsIm1pbnVzQnJpY2siLCJ1cGRhdGVTY29yZSIsIm9uQmFsbENvbnRhY3RHcm91bmQiLCJncm91bmROb2RlIiwib25EZXN0cm95IiwibiIsInBhdXNlXyIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEtBQUssRUFBRUosRUFBRSxDQUFDSyxLQURGO0FBRVJDLElBQUFBLFFBQVEsRUFBRUMsT0FBTyxDQUFDLE1BQUQsQ0FGVDtBQUdSQyxJQUFBQSxLQUFLLEVBQUVELE9BQU8sQ0FBQyxPQUFELENBSE47QUFJUkUsSUFBQUEsS0FBSyxFQUFFRixPQUFPLENBQUMsT0FBRCxDQUpOO0FBS1JHLElBQUFBLEtBQUssRUFBRUgsT0FBTyxDQUFDLE9BQUQsQ0FMTjtBQU1SSSxJQUFBQSxVQUFVLEVBQUVKLE9BQU8sQ0FBQyxZQUFELENBTlg7QUFPUkssSUFBQUEsTUFBTSxFQUFFTCxPQUFPLENBQUMsT0FBRCxDQVBQO0FB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Q0FBL0IsS0FDSyxLQUFLbEMsS0FBTCxDQUFXa0MsTUFBWCxHQUFrQixVQUFsQjtBQUNSO0FBaEZJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHBhdXNlOiBjYy5MYWJlbCxcclxuICAgICAgICBnYW1lVmlldzogcmVxdWlyZSgndmlldycpLFxyXG4gICAgICAgIGJhbGwxOiByZXF1aXJlKCdCYWxsMScpLFxyXG4gICAgICAgIGJhbGwyOiByZXF1aXJlKCdCYWxsMicpLFxyXG4gICAgICAgIGJhbGwzOiByZXF1aXJlKCdCYWxsMycpLFxyXG4gICAgICAgIGZpcnN0c3RhcnQ6IHJlcXVpcmUoJ2ZpcnN0c3RhcnQnKSxcclxuICAgICAgICBwYWRkbGU6IHJlcXVpcmUoJ2JvYXJkJyksXHJcbiAgICAgICAgYnJpY2tMYXlvdXQ6IHJlcXVpcmUoJ2JyaWNrcycpLFxyXG4gICAgICAgIG92ZXJQYW5lbDogcmVxdWlyZSgnZ2FtZW92ZXInKSxcclxuICAgICAgICBzY29yZTowLFxyXG4gICAgICAgIGJyaWNrc051bWJlcjowLFxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgICAgICB0aGlzLmJyaWNrc051bWJlciA9IDUwO1xyXG4gICAgICAgIHRoaXMucGh5c2ljc01hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpO1xyXG4gICAgICAgIHRoaXMucGh5c2ljc01hbmFnZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5nYW1lVmlldy5pbml0KHRoaXMpO1xyXG4gICAgICAgIHRoaXMucGFkZGxlLmluaXQoKTtcclxuICAgICAgICB0aGlzLm92ZXJQYW5lbC5pbml0KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZmlyc3RzdGFydC5pbml0KHRoaXMpO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuYnJpY2tzTnVtYmVyID0gNTA7XHJcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzTWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmdhbWVWaWV3LmluaXQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5iYWxsMS5pbml0KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYmFsbDIuaW5pdCh0aGlzKTtcclxuICAgICAgICB0aGlzLmJhbGwzLmluaXQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5wYWRkbGUuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMuYnJpY2tMYXlvdXQuaW5pdCh0aGlzLmJyaWNrc051bWJlcik7XHJcbiAgICAgICAgdGhpcy5vdmVyUGFuZWwuaW5pdCh0aGlzKTtcclxuICAgIH0sXHJcblxyXG4gICAgc3RvcEdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzTWFuYWdlci5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vdmVyUGFuZWwuc2hvdyh0aGlzLnNjb3JlLCB0aGlzLmJyaWNrc051bWJlciA9PT0gMCk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQmFsbENvbnRhY3RCcmljayhiYWxsTm9kZSwgYnJpY2tOb2RlKSB7XHJcbiAgICAgICAgYnJpY2tOb2RlLnBhcmVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hZGRTY29yZSgxKTtcclxuICAgICAgICB0aGlzLm1pbnVzQnJpY2soMSk7XHJcbiAgICAgICAgdGhpcy5nYW1lVmlldy51cGRhdGVTY29yZSh0aGlzLnNjb3JlKTtcclxuICAgICAgICBpZiAodGhpcy5icmlja3NOdW1iZXIgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3BHYW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkJhbGxDb250YWN0R3JvdW5kKGJhbGxOb2RlLCBncm91bmROb2RlKSB7XHJcbiAgICAgICAgdGhpcy5zdG9wR2FtZSgpO1xyXG4gICAgfSxcclxuXHJcblxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnBoeXNpY3NNYW5hZ2VyLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgYWRkU2NvcmUoc2NvcmUpe1xyXG4gICAgICAgIHRoaXMuc2NvcmUgKz0gc2NvcmU7XHJcbiAgICB9LFxyXG5cclxuICAgIG1pbnVzQnJpY2sobil7XHJcbiAgICAgICAgdGhpcy5icmlja3NOdW1iZXIgLT0gbjtcclxuICAgIH0sXHJcblxyXG4gICAgcGF1c2VfKCl7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzTWFuYWdlci5lbmFibGVkID0gISh0aGlzLnBoeXNpY3NNYW5hZ2VyLmVuYWJsZWQpO1xyXG4gICAgICAgIGlmKHRoaXMucGh5c2ljc01hbmFnZXIuZW5hYmxlZCl0aGlzLnBhdXNlLnN0cmluZz0nUGF1c2UnO1xyXG4gICAgICAgIGVsc2UgdGhpcy5wYXVzZS5zdHJpbmc9J0NvbnRpbnVlJ1xyXG4gICAgfVxyXG5cclxufSk7Il19