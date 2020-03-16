
export default class Defender {
    constructor(x,y) {
        this.x=x;
        this.y=y;
        this.delta={
            "ArrowRight": 1,
            "ArrowLeft": -1
        };

        // TODO(MGP): Learn better way to handle keys.  Per object seems bad.
        document.addEventListener("keydown", e=>this.keyDownHandler(e));
        // Maybe, I should have inlined here ^^ but I keep this as a reminder
        // about class methods, and the whole => thing.... which I want to learn more about.
    }

    keyDownHandler(e) {
       this.x+=this.delta[e.key];
    }

    update(ctx) {
        this.x%=ctx.canvas.width;
        ctx.fillStyle='blue';
        ctx.fillRect(this.x,this.y,10,10);
    }

}
