
export default class Defender {
    constructor(x,y) {
        this.x=x;
        this.y=y;
        this.delta=0;

        document.addEventListener("keydown", event => {
            if (event.isComposing || event.keyCode === 229) {
                return;
            }
            // do something
            this.x+=10;
        });
    }

    keyDownHandler(e) {
       this.x-=10;
    }

    update(ctx) {
        ctx.fillStyle='pink';
        this.x%=100;
        ctx.fillRect(this.x,this.y,10,10);
    }
}
