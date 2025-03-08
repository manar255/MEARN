const{src:src,dest:dest,series:series,parallel:parallel,watch:watch}=require("gulp"),chokidar=require("chokidar"),globs={html:"./*.html",js:"./*.js",img:"./images/**/*"},htmlmin=require("gulp-html-minifier-terser");function htmlTask(){return src(globs.html).pipe(htmlmin({collapseWhitespace:!0,removeComments:!0})).pipe(dest("dist"))}exports.h=htmlTask;const terser=require("gulp-terser");function jsTask(){return src(globs.js).pipe(terser()).pipe(dest("dist/assets/js",{sourcemaps:"."}))}exports.js=jsTask;const optimizeImages=require("gulp-optimize-images");function imgTask(){return src(globs.img,{encoding:!1}).pipe(optimizeImages({compressOptions:{jpeg:{quality:60}}})).pipe(dest("dist/assets/images"))}exports.img=imgTask,exports.default=parallel(htmlTask,jsTask,imgTask);