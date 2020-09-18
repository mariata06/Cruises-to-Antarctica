//"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var csso = require("gulp-csso");
var rename = require("gulp-rename");
var webp = require("gulp-webp");
var imagemin = require("gulp-imagemin");
var svgstore = require("gulp-svgstore");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
//var del = require("del");
//var htmlmin = require("gulp-htmlmin");
//var uglify = require("gulp-uglify");
//var pump = require("pump");

gulp.task("css", function () {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    //.pipe(gulp.dest("build/css"))
    .pipe(gulp.dest("source/css"))
    .pipe(server.stream());
});

gulp.task("copy_css", function () {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    //.pipe(gulp.dest("build/css"))
    .pipe(gulp.dest("source/css"))
    .pipe(server.stream());
});

gulp.task("images", function () {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({
        optimizationLevel: 3
      }),
      imagemin.mozjpeg({
        progressive: true
      }),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("source/img"));
});

gulp.task("webp", function () {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp({
      quality: 90
    }))
    .pipe(gulp.dest("source/img"));
});

gulp.task("sprite", function () {
  return gulp.src(["source/img/icon-*.svg"])
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    //.pipe(gulp.dest("build/img"));
    .pipe(gulp.dest("source/img"));
});

gulp.task("html", function () {
  return gulp.src("source/*.html")
    .pipe(posthtml([
      include()
    ]))
    //.pipe(gulp.dest("build"));
    .pipe(gulp.dest("source"));
});

/*
с минификацией html
gulp.task("html", function () {
  return gulp.src("source/*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest("build"));
});
*/

/*
gulp.task("min-js", function (done) {
  pump([
      gulp.src("source/js/*.js"),
      uglify(),
      rename(function (path) {
        path.basename += ".min";
      }),
      gulp.dest("build/js")
    ],
    done
  );
});
*/

// вставить здесь потом task copy

/*
gulp.task("clean", function () {
  return del("build");
});
*/

gulp.task("server", function () {
  server.init({
    //server: "source/"  /*сначала source, потом будет build*/
    server: "source/",
    //server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/sass/**/*.{sass,scss}", gulp.series("css"));
  gulp.watch("source/*.html").on("change", server.reload); /*добавила эту строку*/
  //gulp.watch("source/js/**/*.js", gulp.series("min-js"));
  //gulp.watch("source/js/*.js", gulp.series("js", "refresh"));
  //gulp.watch("source/js/*.js").on("change", server.reload);

  //потом добавить эти строки на этапе основной сборки
  //gulp.watch("source/img/icon-*.svg", gulp.series("sprite", "html", "refresh"));
  //gulp.watch("source/*.html", gulp.series("html", "refresh"));

});

/*потом добавить эти строки на этап сборки*/

/*
gulp.task("refresh", function (done) {
  server.reload();
  done();
});
*/

/*до основной сборки*/
gulp.task("build", gulp.series("css", "sprite", "html"));
gulp.task("start", gulp.series("css", "server"));
/*потом добавить эти строки на этап сборки*/
/*не включая sparite, не включая webp*/
//gulp.task("build", gulp.series("clean", "copy", "css", "html", "sprite", "copy_css"));
//gulp.task("start", gulp.series("build", "server"));