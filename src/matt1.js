import format from 'date-fns/format';

export default class TextClock {
    constructor(span, delta) {
        this.span=span;
        this.delta = delta;
    }

    start() {
       this.doWork(this.tick);
    }

    tick(sp, delta) {
        console.log(sp);
        const date = new Date();
        const d = new Date(date.getTime() + delta);
        sp.textContent = format(d, 'h:mm:ssa');
    }

    // from
    // https://odetocode.com/blogs/scott/archive/2015/01/05/more-with-arrow-functions-in-es6.aspx
    doWork(callback) {
        setTimeout(() => {
            callback(this.span, this.delta);
            this.doWork(callback);
        }, 1000);
    }
}

