
export default class Game {
    constructor(canvas) {
        this.canvas=canvas;
        this.colors=['red','green','blue'];
        this.colorNumber=0;
    }

    updateGame(canvas) {
        const ctx = canvas.getContext('2d');
        const color = this.colors[this.colorNumber];
        this.colorNumber++;
        this.colorNumber %= this.colors.length;

        ctx.fillStyle = color;
        ctx.fillRect(10, 10, 150, 100);
    }

    start() {
       this.tick()
    }

    tick() {
        setTimeout(() => {
            this.updateGame(this.canvas);
            this.tick();
        }, 1000);
    }
}

