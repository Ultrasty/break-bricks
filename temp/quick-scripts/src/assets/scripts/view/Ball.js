"use strict";
cc._RF.push(module, '9b280YbFuZJv4QPGPL8e8iv', 'Ball');
// scripts/view/Ball.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  init: function init(gameCtl) {
    this.gameCtl = gameCtl;
    this.node.position = cc.v2(480, 60); //初始化位置

    this.getComponent(cc.RigidBody).linearVelocity = cc.v2(500, 500); //初始化速度
  },
  onBeginContact: function onBeginContact(contact, self, other) {
    switch (other.tag) {
      case 1:
        //球碰到砖块
        this.gameCtl.onBallContactBrick(self.node, other.node);
        break;

      case 2:
        //球碰到地面
        this.gameCtl.onBallContactGround(self.node, other.node);
        break;

      case 3:
        //球碰到托盘
        this.gameCtl.onBallContactPaddle(self.node, other.node);
        break;

      case 4:
        //球碰到墙
        this.gameCtl.onBallContactWall(self.node, other.node);
        break;
    }
  }
});

cc._RF.pop();