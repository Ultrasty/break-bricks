cc.Class({
    extends: cc.Component,

 

    init(gameCtl){
        this.gameCtl = gameCtl;
        this.node.active = false;
    },

    onBtnRestart(){
        this.gameCtl.startGame();
    }
});