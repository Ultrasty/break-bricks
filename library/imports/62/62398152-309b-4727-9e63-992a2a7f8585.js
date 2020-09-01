"use strict";
cc._RF.push(module, '62398FSMJtHJ55jmSoqf4WF', 'bricks');
// scripts/bricks.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    padding: 0,
    spacing: 0,
    cols: 0,
    brickPrefab: cc.Prefab,
    bricksNumber: 0
  },
  init: function init(bricksNumber) {
    this.node.removeAllChildren();

    for (var i = 0; i < bricksNumber; i++) {
      //生成bricksNumber个小球
      var brickNode = cc.instantiate(this.brickPrefab); //生成新的节点

      brickNode.parent = this.node;
      brickNode.x = this.padding + i % this.cols * (brickNode.width + this.spacing) + brickNode.width / 2;
      brickNode.y = -this.padding - Math.floor(i / this.cols) * (brickNode.height + this.spacing) - brickNode.height / 2;
    }
  }
});

cc._RF.pop();