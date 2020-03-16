(function () {
    'use strict';

    class Invader {
        constructor(x, y, mediator) {
            this.x = x;
            this.y = y;
            this.mediator = mediator;
        }

        update(ctx) {
            ctx.fillStyle = 'purple';
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

    class Defender {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.delta = {
                "ArrowRight": 1,
                "ArrowLeft": -1
            };

            // TODO(MGP): Learn better way to handle keys.  Per object seems bad.
            document.addEventListener("keydown", e => this.keyDownHandler(e));
            // Maybe, I should have inlined here ^^ but I keep this as a reminder
            // about class methods, and the whole => thing.... which I want to learn more about.
        }

        keyDownHandler(e) {
            if (e.key in this.delta) {
                this.x += this.delta[e.key];
            }
        }

        update(ctx) {
            this.x %= ctx.canvas.width;
            ctx.fillStyle = 'blue';
            ctx.fillRect(this.x, this.y, 10, 10);
        }

    }

    class Game {
        constructor(canvas) {
            this.canvas = canvas;
            this.ctx = canvas.getContext('2d');
            this.width = canvas.width;
            this.height = canvas.height;
            this.invaderDirection = 1; // TODO(MGP): Smells like a global!  fix!?
            this.things = [
                new Defender(0, this.height - 20)
            ];
            const numCols = 15;
            const invaderWidth = this.width / numCols - 3;
            const rowGap = 15;
            for (let row = 0; row < 3; row++) {
                for (let col = 0; col < numCols; col++) {
                    this.things.push(new Invader(col * invaderWidth, row * 10 + row * rowGap, this));
                }
            }

        }

        updateGame(ctx, width, height) {
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, width, height);
            this.things.forEach(t => t.update(ctx));
        }

        tick() {
            setInterval(() => {
                this.updateGame(this.ctx, this.width, this.height);
            }, 200);
        }
    }

    // even though Rollup is bundling all your files together, errors and
    // logs will still point to your original source modules
    console.log('if you have sourcemaps enabled in your devtools, click on main.js:5 -->');

    const canvas = document.querySelector(`#canvas`);
    const game = new Game(canvas);
    game.tick();

}());
//# sourceMappingURL=bundle.js.map
