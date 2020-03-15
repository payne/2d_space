(function () {
    'use strict';

    class Game {
        constructor(canvas) {
            this.canvas=canvas;
            this.colors=['red','green','blue'];
            this.colorNumber=0;
        }

        updateGame(canvas) {
            const ctx = canvas.getContext('2d');
            const color = this.colors[this.colorNumber];
            this.colorNumber++;
            this.colorNumber %= this.colors.length;

            ctx.fillStyle = color;
            ctx.fillRect(10, 10, 150, 100);
        }

        start() {
           this.tick();
        }

        tick() {
            setTimeout(() => {
                this.updateGame(this.canvas);
                this.tick();
            }, 1000);
        }
    }

    // even though Rollup is bundling all your files together, errors and
    // logs will still point to your original source modules
    console.log('if you have sourcemaps enabled in your devtools, click on main.js:5 -->');

    const canvas = document.querySelector(`#canvas`);
    const game = new Game(canvas);
    game.start();

}());
//# sourceMappingURL=bundle.js.map
