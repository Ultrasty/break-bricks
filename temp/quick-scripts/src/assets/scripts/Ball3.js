"use strict";
cc._RF.push(module, 'a2983WNMIJKwrBsHTEXhdxh', 'Ball3');
// scripts/view/Ball3.js

"use strict";

cc.Class({
  "extends": cc.Component,
  init: function init(gameCtl) {
    this.gameCtl = gameCtl;
    this.node.position = cc.v2(50, -23); //初始化位置
    // let r1 = Math.random();
    // let r2=  Math.random();
    // let x=Math.sin(r1*Math.PI*2);
    // let y=Math.cos(r1*Math.PI*2);

    this.getComponent(cc.RigidBody).linearVelocity = cc.v2(85, 860); //初始化速度
  },
  onBeginContact: function onBeginContact(contact, self, other) {
    //根据碰到的物体不同，触发不同的事件处理函数
    switch (other.tag) {
      case 1:
        this.gameCtl.onBallContactBrick(self.node, other.node); //砖块

        break;

      case 2:
        this.gameCtl.onBallContactGround(self.node, other.node); //地面

        break;

      case 3:
        this.gameCtl.onBallContactPaddle(self.node, other.node); //板子

        break;

      case 4:
        this.gameCtl.onBallContactWall(self.node, other.node); //墙

        break;
    }
  }
});

cc._RF.pop();