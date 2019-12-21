"use strict";
exports.__esModule = true;
var CanvasAnimation = /** @class */ (function () {
    function CanvasAnimation(canvas) {
        var _this = this;
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        window.requestAnimationFrame(function () { return _this.draw(); });
    }
    CanvasAnimation.prototype.draw = function () {
        // do stuff
        var _this = this;
        window.requestAnimationFrame(function () { return _this.draw(); });
    };
    return CanvasAnimation;
}());
exports.CanvasAnimation = CanvasAnimation;
// Below is the way to call animation
var canvas = document.getElementById('canvas');
new CanvasAnimation(canvas);
