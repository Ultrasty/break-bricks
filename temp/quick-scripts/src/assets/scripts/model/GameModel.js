"use strict";
cc._RF.push(module, 'ac11fh/SXFFzZAzJ57bmcvY', 'GameModel');
// scripts/model/GameModel.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    score: 0,
    bricksNumber: 0
  },
  init: function init() {
    this.score = 0;
    this.bricksNumber = 50;
  },
  addScore: function addScore(score) {
    this.score += score;
  },
  minusBrick: function minusBrick(n) {
    this.bricksNumber -= n;
  }
});

cc._RF.pop();