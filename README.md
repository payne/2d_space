# 2d_space - a simple space game


## Getting started

Clone this repository and install its dependencies:

```bash
git clone https://github.com/payne/2d_space
cd 2d_space
npm install
```

The `public/index.html` file contains a `<script src='bundle.js'>` tag, which means we need to create `public/bundle.js`. The `rollup.config.js` file tells Rollup how to create this bundle, starting with `src/main.js` and including all its dependencies, including [date-fns](https://date-fns.org).

`npm run build` builds the application to `public/bundle.js`, along with a sourcemap file for debugging.

`npm start` launches a server, using [serve](https://github.com/zeit/serve). Navigate to [localhost:3000](http://localhost:3000).

`npm run watch` will continually rebuild the application as your source files change.

`npm run dev` will run `npm start` and `npm run watch` in parallel.

## License

[MIT](LICENSE).

## History:
1. Started with the https://github.com/rollup/rollup-starter-lib
2. Forked it to my github account and google/learned about using an ES6 `=>` function

