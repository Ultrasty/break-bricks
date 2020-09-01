cc.Class({
    extends: cc.Component,

    properties: {
        resultLabel:cc.Label,
        scoreLabel:cc.Label,
        firststartbtn:cc.Node,
    },

    init(gameCtl){
        this.gameCtl = gameCtl;
        this.node.active = false;
    },

    show(score,isWin){
        this.node.active = true;
        if(isWin){
            this.resultLabel.string = 'YOU WIN!';
        }else{
            this.resultLabel.string = 'GAME OVER';
        }
        
        this.scoreLabel.string ='Final Score: '+ score;
    },

    onBtnRestart(){
        this.gameCtl.startGame();
        this.firststartbtn.active=false;
    }
});
