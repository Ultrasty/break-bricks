
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
    //安卓返回键退出
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function (event) {
      if (event.keyCode === cc.KEY.back) {
        cc.director.end();
      }
    });
    this.physicsManager = cc.director.getPhysicsManager();
    this.gameModel = new GameModel();
    this.startGame();
  },
  init: function init() {
    this.physicsManager.enabled = true;
    this.gameModel.init();
    this.gameView.init(this);
    this.ball.init(this);
    this.paddle.init();
    this.brickLayout.init(this.gameModel.bricksNumber);
    this.overPanel.init(this);
  },
  startGame: function startGame() {
    this.init();
  },
  pauseGame: function pauseGame() {
    this.physicsManager.enabled = false;
  },
  resumeGame: function resumeGame() {
    this.physicsManager.enabled = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29udHJvbGxlclxcR2FtZUN0bC5qcyJdLCJuYW1lcyI6WyJHYW1lTW9kZWwiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJnYW1lVmlldyIsImJhbGwiLCJwYWRkbGUiLCJicmlja0xheW91dCIsIm92ZXJQYW5lbCIsIm9uTG9hZCIsInN5c3RlbUV2ZW50Iiwib24iLCJTeXN0ZW1FdmVudCIsIkV2ZW50VHlwZSIsIktFWV9ET1dOIiwiZXZlbnQiLCJrZXlDb2RlIiwiS0VZIiwiYmFjayIsImRpcmVjdG9yIiwiZW5kIiwicGh5c2ljc01hbmFnZXIiLCJnZXRQaHlzaWNzTWFuYWdlciIsImdhbWVNb2RlbCIsInN0YXJ0R2FtZSIsImluaXQiLCJlbmFibGVkIiwiYnJpY2tzTnVtYmVyIiwicGF1c2VHYW1lIiwicmVzdW1lR2FtZSIsInN0b3BHYW1lIiwic2hvdyIsInNjb3JlIiwib25CYWxsQ29udGFjdEJyaWNrIiwiYmFsbE5vZGUiLCJicmlja05vZGUiLCJwYXJlbnQiLCJhZGRTY29yZSIsIm1pbnVzQnJpY2siLCJ1cGRhdGVTY29yZSIsIm9uQmFsbENvbnRhY3RHcm91bmQiLCJncm91bmROb2RlIiwib25EZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFNBQVMsR0FBR0MsT0FBTyxDQUFDLFdBQUQsQ0FBekI7O0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxRQUFRLEVBQUVMLE9BQU8sQ0FBQyxVQUFELENBRFQ7QUFFUk0sSUFBQUEsSUFBSSxFQUFFTixPQUFPLENBQUMsTUFBRCxDQUZMO0FBR1JPLElBQUFBLE1BQU0sRUFBRVAsT0FBTyxDQUFDLFFBQUQsQ0FIUDtBQUlSUSxJQUFBQSxXQUFXLEVBQUVSLE9BQU8sQ0FBQyxhQUFELENBSlo7QUFLUlMsSUFBQUEsU0FBUyxFQUFFVCxPQUFPLENBQUMsV0FBRDtBQUxWLEdBSFA7QUFXTDtBQUNBVSxFQUFBQSxNQUFNLEVBQUUsa0JBQVk7QUFDaEI7QUFDQVQsSUFBQUEsRUFBRSxDQUFDVSxXQUFILENBQWVDLEVBQWYsQ0FBa0JYLEVBQUUsQ0FBQ1ksV0FBSCxDQUFlQyxTQUFmLENBQXlCQyxRQUEzQyxFQUFxRCxVQUFDQyxLQUFELEVBQVc7QUFDNUQsVUFBSUEsS0FBSyxDQUFDQyxPQUFOLEtBQWtCaEIsRUFBRSxDQUFDaUIsR0FBSCxDQUFPQyxJQUE3QixFQUFtQztBQUMvQmxCLFFBQUFBLEVBQUUsQ0FBQ21CLFFBQUgsQ0FBWUMsR0FBWjtBQUNIO0FBQ0osS0FKRDtBQUtBLFNBQUtDLGNBQUwsR0FBc0JyQixFQUFFLENBQUNtQixRQUFILENBQVlHLGlCQUFaLEVBQXRCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixJQUFJekIsU0FBSixFQUFqQjtBQUNBLFNBQUswQixTQUFMO0FBRUgsR0F2Qkk7QUF5QkxDLEVBQUFBLElBekJLLGtCQXlCRTtBQUNILFNBQUtKLGNBQUwsQ0FBb0JLLE9BQXBCLEdBQThCLElBQTlCO0FBQ0EsU0FBS0gsU0FBTCxDQUFlRSxJQUFmO0FBRUEsU0FBS3JCLFFBQUwsQ0FBY3FCLElBQWQsQ0FBbUIsSUFBbkI7QUFDQSxTQUFLcEIsSUFBTCxDQUFVb0IsSUFBVixDQUFlLElBQWY7QUFDQSxTQUFLbkIsTUFBTCxDQUFZbUIsSUFBWjtBQUNBLFNBQUtsQixXQUFMLENBQWlCa0IsSUFBakIsQ0FBc0IsS0FBS0YsU0FBTCxDQUFlSSxZQUFyQztBQUNBLFNBQUtuQixTQUFMLENBQWVpQixJQUFmLENBQW9CLElBQXBCO0FBRUgsR0FuQ0k7QUFxQ0xELEVBQUFBLFNBckNLLHVCQXFDTztBQUNSLFNBQUtDLElBQUw7QUFDSCxHQXZDSTtBQXlDTEcsRUFBQUEsU0F6Q0ssdUJBeUNPO0FBQ1IsU0FBS1AsY0FBTCxDQUFvQkssT0FBcEIsR0FBOEIsS0FBOUI7QUFDSCxHQTNDSTtBQTZDTEcsRUFBQUEsVUE3Q0ssd0JBNkNRO0FBQ1QsU0FBS1IsY0FBTCxDQUFvQkssT0FBcEIsR0FBOEIsSUFBOUI7QUFDSCxHQS9DSTtBQWlETEksRUFBQUEsUUFqREssc0JBaURNO0FBQ1AsU0FBS1QsY0FBTCxDQUFvQkssT0FBcEIsR0FBOEIsS0FBOUI7QUFDQSxTQUFLbEIsU0FBTCxDQUFldUIsSUFBZixDQUFvQixLQUFLUixTQUFMLENBQWVTLEtBQW5DLEVBQTBDLEtBQUtULFNBQUwsQ0FBZUksWUFBZixLQUFnQyxDQUExRTtBQUNILEdBcERJO0FBc0RMTSxFQUFBQSxrQkF0REssOEJBc0RjQyxRQXREZCxFQXNEd0JDLFNBdER4QixFQXNEbUM7QUFDcENBLElBQUFBLFNBQVMsQ0FBQ0MsTUFBVixHQUFtQixJQUFuQjtBQUNBLFNBQUtiLFNBQUwsQ0FBZWMsUUFBZixDQUF3QixDQUF4QjtBQUNBLFNBQUtkLFNBQUwsQ0FBZWUsVUFBZixDQUEwQixDQUExQjtBQUNBLFNBQUtsQyxRQUFMLENBQWNtQyxXQUFkLENBQTBCLEtBQUtoQixTQUFMLENBQWVTLEtBQXpDOztBQUNBLFFBQUksS0FBS1QsU0FBTCxDQUFlSSxZQUFmLElBQStCLENBQW5DLEVBQXNDO0FBQ2xDLFdBQUtHLFFBQUw7QUFDSDtBQUNKLEdBOURJO0FBZ0VMVSxFQUFBQSxtQkFoRUssK0JBZ0VlTixRQWhFZixFQWdFeUJPLFVBaEV6QixFQWdFcUM7QUFDdEMsU0FBS1gsUUFBTDtBQUNILEdBbEVJO0FBcUVMWSxFQUFBQSxTQXJFSyx1QkFxRU87QUFDUixTQUFLckIsY0FBTCxDQUFvQkssT0FBcEIsR0FBOEIsS0FBOUI7QUFDSDtBQXZFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBHYW1lTW9kZWwgPSByZXF1aXJlKCdHYW1lTW9kZWwnKTtcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGdhbWVWaWV3OiByZXF1aXJlKCdHYW1lVmlldycpLFxuICAgICAgICBiYWxsOiByZXF1aXJlKCdCYWxsJyksXG4gICAgICAgIHBhZGRsZTogcmVxdWlyZSgnUGFkZGxlJyksXG4gICAgICAgIGJyaWNrTGF5b3V0OiByZXF1aXJlKCdCcmlja0xheW91dCcpLFxuICAgICAgICBvdmVyUGFuZWw6IHJlcXVpcmUoJ092ZXJQYW5lbCcpLFxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy/lronljZPov5Tlm57plK7pgIDlh7pcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBjYy5LRVkuYmFjaykge1xuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmVuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5waHlzaWNzTWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCk7XG4gICAgICAgIHRoaXMuZ2FtZU1vZGVsID0gbmV3IEdhbWVNb2RlbCgpO1xuICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xuXG4gICAgfSxcblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMucGh5c2ljc01hbmFnZXIuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2FtZU1vZGVsLmluaXQoKTtcblxuICAgICAgICB0aGlzLmdhbWVWaWV3LmluaXQodGhpcyk7XG4gICAgICAgIHRoaXMuYmFsbC5pbml0KHRoaXMpO1xuICAgICAgICB0aGlzLnBhZGRsZS5pbml0KCk7XG4gICAgICAgIHRoaXMuYnJpY2tMYXlvdXQuaW5pdCh0aGlzLmdhbWVNb2RlbC5icmlja3NOdW1iZXIpO1xuICAgICAgICB0aGlzLm92ZXJQYW5lbC5pbml0KHRoaXMpO1xuXG4gICAgfSxcblxuICAgIHN0YXJ0R2FtZSgpIHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfSxcblxuICAgIHBhdXNlR2FtZSgpIHtcbiAgICAgICAgdGhpcy5waHlzaWNzTWFuYWdlci5lbmFibGVkID0gZmFsc2U7XG4gICAgfSxcblxuICAgIHJlc3VtZUdhbWUoKSB7XG4gICAgICAgIHRoaXMucGh5c2ljc01hbmFnZXIuZW5hYmxlZCA9IHRydWU7XG4gICAgfSxcblxuICAgIHN0b3BHYW1lKCkge1xuICAgICAgICB0aGlzLnBoeXNpY3NNYW5hZ2VyLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vdmVyUGFuZWwuc2hvdyh0aGlzLmdhbWVNb2RlbC5zY29yZSwgdGhpcy5nYW1lTW9kZWwuYnJpY2tzTnVtYmVyID09PSAwKTtcbiAgICB9LFxuXG4gICAgb25CYWxsQ29udGFjdEJyaWNrKGJhbGxOb2RlLCBicmlja05vZGUpIHtcbiAgICAgICAgYnJpY2tOb2RlLnBhcmVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuZ2FtZU1vZGVsLmFkZFNjb3JlKDEpO1xuICAgICAgICB0aGlzLmdhbWVNb2RlbC5taW51c0JyaWNrKDEpO1xuICAgICAgICB0aGlzLmdhbWVWaWV3LnVwZGF0ZVNjb3JlKHRoaXMuZ2FtZU1vZGVsLnNjb3JlKTtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZU1vZGVsLmJyaWNrc051bWJlciA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BHYW1lKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25CYWxsQ29udGFjdEdyb3VuZChiYWxsTm9kZSwgZ3JvdW5kTm9kZSkge1xuICAgICAgICB0aGlzLnN0b3BHYW1lKCk7XG4gICAgfSxcblxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnBoeXNpY3NNYW5hZ2VyLmVuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG5cbn0pOyJdfQ==