var canvas;
var ctx;
function gameLoop() {
    requestAnimationFrame(gameLoop);
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 50, 100);
}
window.onload = function () {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext("2d");
    gameLoop();
};
