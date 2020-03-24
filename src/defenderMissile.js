
export default class DefenderMissile {
    constructor(x, y) {
        this.x = x;
        this.y = y;

    }
    update(ctx) {
        this.x %= ctx.canvas.width;
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, 10, 10);
        // TODO(MGP): Move x
        this.y -= 10;
    }

}
