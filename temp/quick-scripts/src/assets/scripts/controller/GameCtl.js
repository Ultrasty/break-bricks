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
    this.physicsManager = cc.director.getPhysicsManager();
    this.gameModel = new GameModel();
    this.startGame();
  },
  startGame: function startGame() {
    this.physicsManager.enabled = true;
    this.gameModel.init();
    this.gameView.init(this);
    this.ball.init(this);
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