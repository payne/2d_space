import Invader from './invader';
import Defender from './defender';

export default class Game {
    constructor(canvas) {
        this.canvas=canvas;
        this.ctx = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
        this.invaderDirection=1; // TODO(MGP): Smells like a global!  fix!?
        this.things=[
            new Defender(0,this.height-20)
        ];
        const numCols=15;
        const invaderWidth = this.width / numCols - 3;
        const rowGap=15;
        for (let row=0; row < 3; row ++) {
            for (let col=0; col < numCols; col++) {
               this.things.push(new Invader(col*invaderWidth, row*10+row*rowGap, this));
            }
        }

    }

    updateGame(ctx,width,height) {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, width, height);
        this.things.forEach(t => t.update(ctx));
    }

    tick() {
        setTimeout(() => {
            this.updateGame(this.ctx,this.width,this.height);
            this.tick();
        }, 1000);
    }
}

