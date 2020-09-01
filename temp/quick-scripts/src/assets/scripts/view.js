"use strict";
cc._RF.push(module, 'e4735UW3lFPMoW0rK22obsG', 'view');
// scripts/view.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    scoreLabel: cc.Label
  },
  init: function init(gameCtl) {
    this.gameCtl = gameCtl;
    this.scoreLabel.string = '0';
  },
  updateScore: function updateScore(score) {
    this.scoreLabel.string = score;
  }
});

cc._RF.pop();