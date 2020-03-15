
export default class Defender {
    constructor(x,y) {
        this.x=x;
        this.y=y;
    }

    update(ctx) {
        ctx.fillStyle='pink';
        ctx.fillRect(this.x,this.y,10,10);
        this.x+=10;
        this.x%=100;
    }
}
