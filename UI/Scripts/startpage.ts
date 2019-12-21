var canvas: HTMLCanvasElement;
var ctx: CanvasRenderingContext2D;

function gameLoop(){
    requestAnimationFrame(gameLoop);
    ctx.fillStyle = "green";
    ctx.fillRect(0,100,300,50);
}
window.onload = () => {
    canvas = <HTMLCanvasElement>document.getElementById('canvas');
    ctx = canvas.getContext("2d");
    gameLoop();
}