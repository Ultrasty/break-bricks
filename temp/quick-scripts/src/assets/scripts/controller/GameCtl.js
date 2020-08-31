"use strict";
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