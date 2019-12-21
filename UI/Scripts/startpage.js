var canvas;
var ctx;
function gameLoop() {
    requestAnimationFrame(gameLoop);
    ctx.fillStyle = "green";
    ctx.fillRect(0, 100, 300, 50);
}
window.onload = function () {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext("2d");
    gameLoop();
};
