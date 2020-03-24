export default class Invader {
    constructor(x, y, mediator) {
        this.x = x;
        this.y = y;
        this.mediator = mediator;
        this.alive = true;
    }

    hit() {
        return true;
    }

    update(ctx) {
        if (this.hit()) {

        } else {
            ctx.fillStyle = 'red';
            ctx.fillRect(this.x, this.y, 10, 10);
            this.x += 5 * this.mediator.invaderDirection;
            this.y += 5;
            if (this.x >= ctx.canvas.width || this.x < 0) {
                this.x += 5 * this.mediator.invaderDirection * -1;
                this.mediator.invaderDirection *= -1;
            }

            this.x %= ctx.canvas.width;
            this.y %= (ctx.canvas.height - 100); // Can only get so close to bottom
        }
    }
}
