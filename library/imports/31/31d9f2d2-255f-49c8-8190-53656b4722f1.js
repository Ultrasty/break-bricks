"use strict";
cc._RF.push(module, '31d9fLSJV9JyIGQU2VrRyLx', 'firststart');
// scripts/firststart.js

"use strict";

cc.Class({
  "extends": cc.Component,
  init: function init(gameCtl) {
    this.gameCtl = gameCtl;
    this.node.active = false;
  },
  onBtnRestart: function onBtnRestart() {
    this.gameCtl.startGame();
  }
});

cc._RF.pop();