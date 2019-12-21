export class CanvasAnimation {
    private readonly context: CanvasRenderingContext2D;

    constructor(private readonly canvas: HTMLCanvasElement) {
        this.context = this.canvas.getContext('2d');
        window.requestAnimationFrame(() => this.draw());
    }

    draw() {
        // do stuff
        
        window.requestAnimationFrame(() => this.draw());
    }
}

// Below is the way to call animation
const canvas = <HTMLCanvasElement>document.getElementById('canvas');
new CanvasAnimation(canvas);
