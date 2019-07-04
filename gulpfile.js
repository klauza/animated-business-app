const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

// compile scss -> css

function style(){
  //dir of scss file
  return gulp.src('./src/css/style.scss')
  .pipe(sass()) //compiler
  .pipe(autoprefixer()) //vendor prefixes
  .pipe(gulp.dest('./src')) //output folder
}

function watch(){
  gulp.watch('./src/css/**/*.scss', style) 
}

exports.style = style;
exports.watch = watch;