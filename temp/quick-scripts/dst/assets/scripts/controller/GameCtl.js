
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/controller/GameCtl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a337308uxxJva7vh8G06q7Z', 'GameCtl');
// scripts/controller/GameCtl.js

"use strict";

var GameModel = require('GameModel');

cc.Class({
  "extends": cc.Component,
  properties: {
    gameView: require('GameView'),
    ball1: require('Ball1'),
    ball2: require('Ball2'),
    ball3: require('Ball3'),
    firststart: require('firststart'),
    paddle: require('Paddle'),
    brickLayout: require('BrickLayout'),
    overPanel: require('OverPanel')
  },
  onLoad: function onLoad() {
    this.physicsManager = cc.director.getPhysicsManager();
    this.gameModel = new GameModel();
    this.physicsManager.enabled = true;
    this.gameModel.init();
    this.gameView.init(this);
    this.paddle.init();
    this.overPanel.init(this);
    this.firststart.init(this);
  },
  startGame: function startGame() {
    this.physicsManager.enabled = true;
    this.gameModel.init();
    this.gameView.init(this);
    this.ball1.init(this);
    this.ball2.init(this);
    this.ball3.init(this);
    this.paddle.init();
    this.brickLayout.init(this.gameModel.bricksNumber);
    this.overPanel.init(this);
  },
  stopGame: function stopGame() {
    this.physicsManager.enabled = false;
    this.overPanel.show(this.gameModel.score, this.gameModel.bricksNumber === 0);
  },
  onBallContactBrick: function onBallContactBrick(ballNode, brickNode) {
    brickNode.parent = null;
    this.gameModel.addScore(1);
    this.gameModel.minusBrick(1);
    this.gameView.updateScore(this.gameModel.score);

    if (this.gameModel.bricksNumber <= 0) {
      this.stopGame();
    }
  },
  onBallContactGround: function onBallContactGround(ballNode, groundNode) {
    this.stopGame();
  },
  onDestroy: function onDestroy() {
    this.physicsManager.enabled = false;
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29udHJvbGxlclxcR2FtZUN0bC5qcyJdLCJuYW1lcyI6WyJHYW1lTW9kZWwiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJnYW1lVmlldyIsImJhbGwxIiwiYmFsbDIiLCJiYWxsMyIsImZpcnN0c3RhcnQiLCJwYWRkbGUiLCJicmlja0xheW91dCIsIm92ZXJQYW5lbCIsIm9uTG9hZCIsInBoeXNpY3NNYW5hZ2VyIiwiZGlyZWN0b3IiLCJnZXRQaHlzaWNzTWFuYWdlciIsImdhbWVNb2RlbCIsImVuYWJsZWQiLCJpbml0Iiwic3RhcnRHYW1lIiwiYnJpY2tzTnVtYmVyIiwic3RvcEdhbWUiLCJzaG93Iiwic2NvcmUiLCJvbkJhbGxDb250YWN0QnJpY2siLCJiYWxsTm9kZSIsImJyaWNrTm9kZSIsInBhcmVudCIsImFkZFNjb3JlIiwibWludXNCcmljayIsInVwZGF0ZVNjb3JlIiwib25CYWxsQ29udGFjdEdyb3VuZCIsImdyb3VuZE5vZGUiLCJvbkRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsU0FBUyxHQUFHQyxPQUFPLENBQUMsV0FBRCxDQUF6Qjs7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFFBQVEsRUFBRUwsT0FBTyxDQUFDLFVBQUQsQ0FEVDtBQUVSTSxJQUFBQSxLQUFLLEVBQUVOLE9BQU8sQ0FBQyxPQUFELENBRk47QUFHUk8sSUFBQUEsS0FBSyxFQUFFUCxPQUFPLENBQUMsT0FBRCxDQUhOO0FBSVJRLElBQUFBLEtBQUssRUFBRVIsT0FBTyxDQUFDLE9BQUQsQ0FKTjtBQUtSUyxJQUFBQSxVQUFVLEVBQUVULE9BQU8sQ0FBQyxZQUFELENBTFg7QUFNUlUsSUFBQUEsTUFBTSxFQUFFVixPQUFPLENBQUMsUUFBRCxDQU5QO0FBT1JXLElBQUFBLFdBQVcsRUFBRVgsT0FBTyxDQUFDLGFBQUQsQ0FQWjtBQVFSWSxJQUFBQSxTQUFTLEVBQUVaLE9BQU8sQ0FBQyxXQUFEO0FBUlYsR0FIUDtBQWNMYSxFQUFBQSxNQUFNLEVBQUUsa0JBQVk7QUFDaEIsU0FBS0MsY0FBTCxHQUFzQmIsRUFBRSxDQUFDYyxRQUFILENBQVlDLGlCQUFaLEVBQXRCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixJQUFJbEIsU0FBSixFQUFqQjtBQUNBLFNBQUtlLGNBQUwsQ0FBb0JJLE9BQXBCLEdBQThCLElBQTlCO0FBQ0EsU0FBS0QsU0FBTCxDQUFlRSxJQUFmO0FBQ0EsU0FBS2QsUUFBTCxDQUFjYyxJQUFkLENBQW1CLElBQW5CO0FBQ0EsU0FBS1QsTUFBTCxDQUFZUyxJQUFaO0FBQ0EsU0FBS1AsU0FBTCxDQUFlTyxJQUFmLENBQW9CLElBQXBCO0FBQ0EsU0FBS1YsVUFBTCxDQUFnQlUsSUFBaEIsQ0FBcUIsSUFBckI7QUFDSCxHQXZCSTtBQTBCTEMsRUFBQUEsU0ExQkssdUJBMEJPO0FBQ1IsU0FBS04sY0FBTCxDQUFvQkksT0FBcEIsR0FBOEIsSUFBOUI7QUFDQSxTQUFLRCxTQUFMLENBQWVFLElBQWY7QUFDQSxTQUFLZCxRQUFMLENBQWNjLElBQWQsQ0FBbUIsSUFBbkI7QUFDQSxTQUFLYixLQUFMLENBQVdhLElBQVgsQ0FBZ0IsSUFBaEI7QUFDQSxTQUFLWixLQUFMLENBQVdZLElBQVgsQ0FBZ0IsSUFBaEI7QUFDQSxTQUFLWCxLQUFMLENBQVdXLElBQVgsQ0FBZ0IsSUFBaEI7QUFDQSxTQUFLVCxNQUFMLENBQVlTLElBQVo7QUFDQSxTQUFLUixXQUFMLENBQWlCUSxJQUFqQixDQUFzQixLQUFLRixTQUFMLENBQWVJLFlBQXJDO0FBQ0EsU0FBS1QsU0FBTCxDQUFlTyxJQUFmLENBQW9CLElBQXBCO0FBQ0gsR0FwQ0k7QUFzQ0xHLEVBQUFBLFFBdENLLHNCQXNDTTtBQUNQLFNBQUtSLGNBQUwsQ0FBb0JJLE9BQXBCLEdBQThCLEtBQTlCO0FBQ0EsU0FBS04sU0FBTCxDQUFlVyxJQUFmLENBQW9CLEtBQUtOLFNBQUwsQ0FBZU8sS0FBbkMsRUFBMEMsS0FBS1AsU0FBTCxDQUFlSSxZQUFmLEtBQWdDLENBQTFFO0FBQ0gsR0F6Q0k7QUEyQ0xJLEVBQUFBLGtCQTNDSyw4QkEyQ2NDLFFBM0NkLEVBMkN3QkMsU0EzQ3hCLEVBMkNtQztBQUNwQ0EsSUFBQUEsU0FBUyxDQUFDQyxNQUFWLEdBQW1CLElBQW5CO0FBQ0EsU0FBS1gsU0FBTCxDQUFlWSxRQUFmLENBQXdCLENBQXhCO0FBQ0EsU0FBS1osU0FBTCxDQUFlYSxVQUFmLENBQTBCLENBQTFCO0FBQ0EsU0FBS3pCLFFBQUwsQ0FBYzBCLFdBQWQsQ0FBMEIsS0FBS2QsU0FBTCxDQUFlTyxLQUF6Qzs7QUFDQSxRQUFJLEtBQUtQLFNBQUwsQ0FBZUksWUFBZixJQUErQixDQUFuQyxFQUFzQztBQUNsQyxXQUFLQyxRQUFMO0FBQ0g7QUFDSixHQW5ESTtBQXFETFUsRUFBQUEsbUJBckRLLCtCQXFEZU4sUUFyRGYsRUFxRHlCTyxVQXJEekIsRUFxRHFDO0FBQ3RDLFNBQUtYLFFBQUw7QUFDSCxHQXZESTtBQXlETFksRUFBQUEsU0F6REssdUJBeURPO0FBQ1IsU0FBS3BCLGNBQUwsQ0FBb0JJLE9BQXBCLEdBQThCLEtBQTlCO0FBQ0g7QUEzREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgR2FtZU1vZGVsID0gcmVxdWlyZSgnR2FtZU1vZGVsJyk7XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgZ2FtZVZpZXc6IHJlcXVpcmUoJ0dhbWVWaWV3JyksXHJcbiAgICAgICAgYmFsbDE6IHJlcXVpcmUoJ0JhbGwxJyksXHJcbiAgICAgICAgYmFsbDI6IHJlcXVpcmUoJ0JhbGwyJyksXHJcbiAgICAgICAgYmFsbDM6IHJlcXVpcmUoJ0JhbGwzJyksXHJcbiAgICAgICAgZmlyc3RzdGFydDogcmVxdWlyZSgnZmlyc3RzdGFydCcpLFxyXG4gICAgICAgIHBhZGRsZTogcmVxdWlyZSgnUGFkZGxlJyksXHJcbiAgICAgICAgYnJpY2tMYXlvdXQ6IHJlcXVpcmUoJ0JyaWNrTGF5b3V0JyksXHJcbiAgICAgICAgb3ZlclBhbmVsOiByZXF1aXJlKCdPdmVyUGFuZWwnKSxcclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzTWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lTW9kZWwgPSBuZXcgR2FtZU1vZGVsKCk7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzTWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmdhbWVNb2RlbC5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5nYW1lVmlldy5pbml0KHRoaXMpO1xyXG4gICAgICAgIHRoaXMucGFkZGxlLmluaXQoKTtcclxuICAgICAgICB0aGlzLm92ZXJQYW5lbC5pbml0KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZmlyc3RzdGFydC5pbml0KHRoaXMpO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMucGh5c2ljc01hbmFnZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5nYW1lTW9kZWwuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZVZpZXcuaW5pdCh0aGlzKTtcclxuICAgICAgICB0aGlzLmJhbGwxLmluaXQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5iYWxsMi5pbml0KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYmFsbDMuaW5pdCh0aGlzKTtcclxuICAgICAgICB0aGlzLnBhZGRsZS5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5icmlja0xheW91dC5pbml0KHRoaXMuZ2FtZU1vZGVsLmJyaWNrc051bWJlcik7XHJcbiAgICAgICAgdGhpcy5vdmVyUGFuZWwuaW5pdCh0aGlzKTtcclxuICAgIH0sXHJcblxyXG4gICAgc3RvcEdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzTWFuYWdlci5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vdmVyUGFuZWwuc2hvdyh0aGlzLmdhbWVNb2RlbC5zY29yZSwgdGhpcy5nYW1lTW9kZWwuYnJpY2tzTnVtYmVyID09PSAwKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25CYWxsQ29udGFjdEJyaWNrKGJhbGxOb2RlLCBicmlja05vZGUpIHtcclxuICAgICAgICBicmlja05vZGUucGFyZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmdhbWVNb2RlbC5hZGRTY29yZSgxKTtcclxuICAgICAgICB0aGlzLmdhbWVNb2RlbC5taW51c0JyaWNrKDEpO1xyXG4gICAgICAgIHRoaXMuZ2FtZVZpZXcudXBkYXRlU2NvcmUodGhpcy5nYW1lTW9kZWwuc2NvcmUpO1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWVNb2RlbC5icmlja3NOdW1iZXIgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3BHYW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkJhbGxDb250YWN0R3JvdW5kKGJhbGxOb2RlLCBncm91bmROb2RlKSB7XHJcbiAgICAgICAgdGhpcy5zdG9wR2FtZSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5waHlzaWNzTWFuYWdlci5lbmFibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG59KTsiXX0=