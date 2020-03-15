import Invader from './invader';
import Defender from './defender';

export default class Game {
    constructor(canvas) {
        this.canvas=canvas;
        this.colors=['red','green','blue'];
        this.colorNumber=0;
        this.ctx = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
        this.things=[
            new Invader(10,10),
            new Invader(30,30),
            new Defender(0,this.height-20)
        ];

    }

    updateGame(ctx,width,height) {
        const color = this.colors[this.colorNumber];
        this.colorNumber++;
        this.colorNumber %= this.colors.length;
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, width, height);
        console.log(`set filStyle=${color}`);
        console.log(`ctx.fillRect(0, 0, ${width}, ${height});`);
        this.things.forEach(t => t.update(ctx));
    }

    start() {
       this.tick()
    }

    tick() {
        setTimeout(() => {
            this.updateGame(this.ctx,this.width,this.height);
            this.tick();
        }, 1000);
    }
}

