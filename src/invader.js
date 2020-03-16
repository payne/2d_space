
export default class Invader {
    constructor(x,y,mediator) {
        this.x=x;
        this.y=y;
        this.mediator=mediator;
    }

    update(ctx) {
        ctx.fillStyle='purple';
        ctx.fillRect(this.x,this.y,10,10);
        this.x+=5*this.mediator.invaderDirection;
        this.y+=5;
        if (this.x >= ctx.canvas.width || this.x < 0) {
            this.x+=5*this.mediator.invaderDirection*-1;
            this.mediator.invaderDirection*=-1;
        }

        this.x%=ctx.canvas.width;
        this.y%=ctx.canvas.height;
    }
}
