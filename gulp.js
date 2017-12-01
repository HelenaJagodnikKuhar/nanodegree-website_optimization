var gulp = require('gulp');
var inline = require('gulp-inline')
  , uglify = require('gulp-uglify')
  , minifyCss = require('gulp-minify-css')
  , autoprefixer = require('gulp-autoprefixer')
  , rename = require('gulp-rename');

gulp.src('views/pizza.developement.html')
  .pipe(inline({
    base: './',
    js: uglify,
    css: [minifyCss, autoprefixer({ browsers:['last 2 versions'] })],
    disabledTypes: ['svg', 'img'] // Only inline css files
  }))
  .pipe(rename("pizza.html"))
  .pipe(gulp.dest('views/'));


gulp.src('index.developement.html')
  .pipe(inline({
    base: './',
    js: uglify,
    css: [minifyCss, autoprefixer({ browsers:['last 2 versions'] })],
    disabledTypes: ['svg', 'img'] // Only inline css files
  }))
  .pipe(rename("index.html"))
  .pipe(gulp.dest('./'));
