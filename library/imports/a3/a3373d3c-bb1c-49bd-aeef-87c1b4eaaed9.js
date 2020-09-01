"use strict";
cc._RF.push(module, 'a337308uxxJva7vh8G06q7Z', 'GameCtl');
// scripts/controller/GameCtl.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    pause: cc.Label,
    gameView: require('GameView'),
    ball1: require('Ball1'),
    ball2: require('Ball2'),
    ball3: require('Ball3'),
    firststart: require('firststart'),
    paddle: require('Paddle'),
    brickLayout: require('BrickLayout'),
    overPanel: require('OverPanel'),
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