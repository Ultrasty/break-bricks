const GameModel = require('GameModel');
cc.Class({
    extends: cc.Component,

    properties: {
        gameView: require('GameView'),
        ball1: require('Ball1'),
        ball2: require('Ball2'),
        paddle: require('Paddle'),
        brickLayout: require('BrickLayout'),
        overPanel: require('OverPanel'),
    },

    // use this for initialization
    onLoad: function () {
        this.physicsManager = cc.director.getPhysicsManager();
        this.gameModel = new GameModel();
        this.startGame();
    },


    startGame() {
        this.physicsManager.enabled = true;
        this.gameModel.init();
        this.gameView.init(this);
        this.ball1.init(this);
        this.ball2.init(this);
        this.paddle.init();
        this.brickLayout.init(this.gameModel.bricksNumber);
        this.overPanel.init(this);
    },

    stopGame() {
        this.physicsManager.enabled = false;
        this.overPanel.show(this.gameModel.score, this.gameModel.bricksNumber === 0);
    },

    onBallContactBrick(ballNode, brickNode) {
        brickNode.parent = null;
        this.gameModel.addScore(1);
        this.gameModel.minusBrick(1);
        this.gameView.updateScore(this.gameModel.score);
        if (this.gameModel.bricksNumber <= 0) {
            this.stopGame();
        }
    },

    onBallContactGround(ballNode, groundNode) {
        this.stopGame();
    },

    onDestroy() {
        this.physicsManager.enabled = false;
    }

});