// gulp.js configuration
var gulp = require('gulp');

//replaces <script> and <link> tags with the corresponding inlined files
var inline = require('gulp-inline')
  , uglify = require('gulp-uglify')
  , minifyCss = require('gulp-minify-css')
  , autoprefixer = require('gulp-autoprefixer')
  , rename = require('gulp-rename');

gulp.src('views/pizza.development.html')
  .pipe(inline({
    base: './',
    js: uglify,
    css: minifyCss,
    disabledTypes: ['svg', 'img']
  }))
  .pipe(rename("pizza.html"))
  .pipe(gulp.dest('views/'));


gulp.src('index.development.html')
  .pipe(inline({
    base: './',
    js: uglify,
    css: minifyCss,
    disabledTypes: ['svg', 'img'],
    ignore: ['css/print.css']
  }))
  .pipe(rename("index.html"))
  .pipe(gulp.dest('./'));
