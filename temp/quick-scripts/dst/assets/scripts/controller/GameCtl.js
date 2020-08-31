
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
    ball: require('Ball'),
    paddle: require('Paddle'),
    brickLayout: require('BrickLayout'),
    overPanel: require('OverPanel')
  },
  // use this for initialization
  onLoad: function onLoad() {
    this.physicsManager = cc.director.getPhysicsManager();
    this.gameModel = new GameModel();
    this.startGame();
  },
  startGame: function startGame() {
    this.physicsManager.enabled = true;
    this.gameModel.init();
    this.gameView.init(this);
    this.ball.init(this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29udHJvbGxlclxcR2FtZUN0bC5qcyJdLCJuYW1lcyI6WyJHYW1lTW9kZWwiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJnYW1lVmlldyIsImJhbGwiLCJwYWRkbGUiLCJicmlja0xheW91dCIsIm92ZXJQYW5lbCIsIm9uTG9hZCIsInBoeXNpY3NNYW5hZ2VyIiwiZGlyZWN0b3IiLCJnZXRQaHlzaWNzTWFuYWdlciIsImdhbWVNb2RlbCIsInN0YXJ0R2FtZSIsImVuYWJsZWQiLCJpbml0IiwiYnJpY2tzTnVtYmVyIiwic3RvcEdhbWUiLCJzaG93Iiwic2NvcmUiLCJvbkJhbGxDb250YWN0QnJpY2siLCJiYWxsTm9kZSIsImJyaWNrTm9kZSIsInBhcmVudCIsImFkZFNjb3JlIiwibWludXNCcmljayIsInVwZGF0ZVNjb3JlIiwib25CYWxsQ29udGFjdEdyb3VuZCIsImdyb3VuZE5vZGUiLCJvbkRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsU0FBUyxHQUFHQyxPQUFPLENBQUMsV0FBRCxDQUF6Qjs7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFFBQVEsRUFBRUwsT0FBTyxDQUFDLFVBQUQsQ0FEVDtBQUVSTSxJQUFBQSxJQUFJLEVBQUVOLE9BQU8sQ0FBQyxNQUFELENBRkw7QUFHUk8sSUFBQUEsTUFBTSxFQUFFUCxPQUFPLENBQUMsUUFBRCxDQUhQO0FBSVJRLElBQUFBLFdBQVcsRUFBRVIsT0FBTyxDQUFDLGFBQUQsQ0FKWjtBQUtSUyxJQUFBQSxTQUFTLEVBQUVULE9BQU8sQ0FBQyxXQUFEO0FBTFYsR0FIUDtBQVdMO0FBQ0FVLEVBQUFBLE1BQU0sRUFBRSxrQkFBWTtBQUNoQixTQUFLQyxjQUFMLEdBQXNCVixFQUFFLENBQUNXLFFBQUgsQ0FBWUMsaUJBQVosRUFBdEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLElBQUlmLFNBQUosRUFBakI7QUFDQSxTQUFLZ0IsU0FBTDtBQUNILEdBaEJJO0FBbUJMQSxFQUFBQSxTQW5CSyx1QkFtQk87QUFDUixTQUFLSixjQUFMLENBQW9CSyxPQUFwQixHQUE4QixJQUE5QjtBQUNBLFNBQUtGLFNBQUwsQ0FBZUcsSUFBZjtBQUNBLFNBQUtaLFFBQUwsQ0FBY1ksSUFBZCxDQUFtQixJQUFuQjtBQUNBLFNBQUtYLElBQUwsQ0FBVVcsSUFBVixDQUFlLElBQWY7QUFDQSxTQUFLVixNQUFMLENBQVlVLElBQVo7QUFDQSxTQUFLVCxXQUFMLENBQWlCUyxJQUFqQixDQUFzQixLQUFLSCxTQUFMLENBQWVJLFlBQXJDO0FBQ0EsU0FBS1QsU0FBTCxDQUFlUSxJQUFmLENBQW9CLElBQXBCO0FBQ0gsR0EzQkk7QUE2QkxFLEVBQUFBLFFBN0JLLHNCQTZCTTtBQUNQLFNBQUtSLGNBQUwsQ0FBb0JLLE9BQXBCLEdBQThCLEtBQTlCO0FBQ0EsU0FBS1AsU0FBTCxDQUFlVyxJQUFmLENBQW9CLEtBQUtOLFNBQUwsQ0FBZU8sS0FBbkMsRUFBMEMsS0FBS1AsU0FBTCxDQUFlSSxZQUFmLEtBQWdDLENBQTFFO0FBQ0gsR0FoQ0k7QUFrQ0xJLEVBQUFBLGtCQWxDSyw4QkFrQ2NDLFFBbENkLEVBa0N3QkMsU0FsQ3hCLEVBa0NtQztBQUNwQ0EsSUFBQUEsU0FBUyxDQUFDQyxNQUFWLEdBQW1CLElBQW5CO0FBQ0EsU0FBS1gsU0FBTCxDQUFlWSxRQUFmLENBQXdCLENBQXhCO0FBQ0EsU0FBS1osU0FBTCxDQUFlYSxVQUFmLENBQTBCLENBQTFCO0FBQ0EsU0FBS3RCLFFBQUwsQ0FBY3VCLFdBQWQsQ0FBMEIsS0FBS2QsU0FBTCxDQUFlTyxLQUF6Qzs7QUFDQSxRQUFJLEtBQUtQLFNBQUwsQ0FBZUksWUFBZixJQUErQixDQUFuQyxFQUFzQztBQUNsQyxXQUFLQyxRQUFMO0FBQ0g7QUFDSixHQTFDSTtBQTRDTFUsRUFBQUEsbUJBNUNLLCtCQTRDZU4sUUE1Q2YsRUE0Q3lCTyxVQTVDekIsRUE0Q3FDO0FBQ3RDLFNBQUtYLFFBQUw7QUFDSCxHQTlDSTtBQWdETFksRUFBQUEsU0FoREssdUJBZ0RPO0FBQ1IsU0FBS3BCLGNBQUwsQ0FBb0JLLE9BQXBCLEdBQThCLEtBQTlCO0FBQ0g7QUFsREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgR2FtZU1vZGVsID0gcmVxdWlyZSgnR2FtZU1vZGVsJyk7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBnYW1lVmlldzogcmVxdWlyZSgnR2FtZVZpZXcnKSxcbiAgICAgICAgYmFsbDogcmVxdWlyZSgnQmFsbCcpLFxuICAgICAgICBwYWRkbGU6IHJlcXVpcmUoJ1BhZGRsZScpLFxuICAgICAgICBicmlja0xheW91dDogcmVxdWlyZSgnQnJpY2tMYXlvdXQnKSxcbiAgICAgICAgb3ZlclBhbmVsOiByZXF1aXJlKCdPdmVyUGFuZWwnKSxcbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucGh5c2ljc01hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpO1xuICAgICAgICB0aGlzLmdhbWVNb2RlbCA9IG5ldyBHYW1lTW9kZWwoKTtcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcbiAgICB9LFxuXG5cbiAgICBzdGFydEdhbWUoKSB7XG4gICAgICAgIHRoaXMucGh5c2ljc01hbmFnZXIuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2FtZU1vZGVsLmluaXQoKTtcbiAgICAgICAgdGhpcy5nYW1lVmlldy5pbml0KHRoaXMpO1xuICAgICAgICB0aGlzLmJhbGwuaW5pdCh0aGlzKTtcbiAgICAgICAgdGhpcy5wYWRkbGUuaW5pdCgpO1xuICAgICAgICB0aGlzLmJyaWNrTGF5b3V0LmluaXQodGhpcy5nYW1lTW9kZWwuYnJpY2tzTnVtYmVyKTtcbiAgICAgICAgdGhpcy5vdmVyUGFuZWwuaW5pdCh0aGlzKTtcbiAgICB9LFxuXG4gICAgc3RvcEdhbWUoKSB7XG4gICAgICAgIHRoaXMucGh5c2ljc01hbmFnZXIuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm92ZXJQYW5lbC5zaG93KHRoaXMuZ2FtZU1vZGVsLnNjb3JlLCB0aGlzLmdhbWVNb2RlbC5icmlja3NOdW1iZXIgPT09IDApO1xuICAgIH0sXG5cbiAgICBvbkJhbGxDb250YWN0QnJpY2soYmFsbE5vZGUsIGJyaWNrTm9kZSkge1xuICAgICAgICBicmlja05vZGUucGFyZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5nYW1lTW9kZWwuYWRkU2NvcmUoMSk7XG4gICAgICAgIHRoaXMuZ2FtZU1vZGVsLm1pbnVzQnJpY2soMSk7XG4gICAgICAgIHRoaXMuZ2FtZVZpZXcudXBkYXRlU2NvcmUodGhpcy5nYW1lTW9kZWwuc2NvcmUpO1xuICAgICAgICBpZiAodGhpcy5nYW1lTW9kZWwuYnJpY2tzTnVtYmVyIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcEdhbWUoKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvbkJhbGxDb250YWN0R3JvdW5kKGJhbGxOb2RlLCBncm91bmROb2RlKSB7XG4gICAgICAgIHRoaXMuc3RvcEdhbWUoKTtcbiAgICB9LFxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnBoeXNpY3NNYW5hZ2VyLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG5cbn0pOyJdfQ==