import update from './update.js';
import TextClock from './matt1';


// even though Rollup is bundling all your files together, errors and
// logs will still point to your original source modules
console.log('if you have sourcemaps enabled in your devtools, click on main.js:5 -->');

[1,2].forEach(spanNumber => {
    const span = document.querySelector(`#time-now-matt${spanNumber}`);
    const tc = new TextClock(span,60*spanNumber*10*1000);
    tc.start();
});

update();

