
export default class Invader {
    constructor(x,y) {
        this.x=x;
        this.y=y;
    }

    update(ctx) {
        ctx.fillStyle='purple';
        ctx.fillRect(this.x,this.y,10,10);
        this.x+=10;
        this.y+=10;
        this.x%=100;
        this.y%=100;
    }
}
