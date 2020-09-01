cc.Class({
    extends: cc.Component,

    init(gameCtl) {
        this.gameCtl = gameCtl;
        this.node.position = cc.v2(-380,580);//初始化位置
        this.getComponent(cc.RigidBody).linearVelocity = cc.v2(0,0);//初始化速度
    },

    onBeginContact(contact, self, other) {
        switch (other.tag) {
            //碰到砖块
            case 1:
                this.gameCtl.onBallContactBrick(self.node, other.node);
                break;
            //碰到地面
            case 2:
                this.gameCtl.onBallContactGround(self.node, other.node);
                break;
            //碰到托盘
            case 3:
                this.gameCtl.onBallContactPaddle(self.node, other.node);
                break;
            //碰到墙
            case 4:
                this.gameCtl.onBallContactWall(self.node, other.node);
                break;
        }
    },
});