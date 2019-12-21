var canvas: HTMLCanvasElement;
var ctx: CanvasRenderingContext2D;

function gameLoop(){
    requestAnimationFrame(gameLoop);
    ctx.fillStyle = "blue";
    ctx.fillRect(0,0,50,100);
}
window.onload = () => {
    canvas = <HTMLCanvasElement>document.getElementById('canvas');
    ctx = canvas.getContext("2d");
    gameLoop();
}