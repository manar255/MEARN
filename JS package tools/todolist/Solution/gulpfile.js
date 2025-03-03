const { src, dest, series, parallel, watch } = require("gulp");
const chokidar=require('chokidar')
const globs = {
    html: "./**/*.html",
    js: "./**/*.js",
    img: "./images/**/*",
  };

const htmlmin = require("gulp-html-minifier-terser");

function htmlTask() {
  return src(globs.html)
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(dest("dist"));
}

exports.h = htmlTask;

const terser = require("gulp-terser");
function jsTask() {
  return src(globs.js, { sourcemaps: true })
    .pipe(terser())
    .pipe(dest("dist/assets/js", { sourcemaps: "." }));
}

exports.js = jsTask;

const optimizeImages = require("gulp-optimize-images");
function imgTask() {
  return src(globs.img, { encoding: false })
    .pipe(
      optimizeImages({
        compressOptions: {
          jpeg: { quality: 60 },
        },
      })
    )
    .pipe(dest("dist/assets/images"));
}
exports.img = imgTask;

function watchTask() {
    chokidar.watch(globs.html).on('change', htmlTask);
    chokidar.watch(globs.js).on('change', jsTask);
    chokidar.watch(globs.img).on('change', imgTask);
}
exports.default = series(parallel(htmlTask, jsTask, imgTask), watchTask);
