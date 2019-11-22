const gulp = require('gulp')
const sass = require('gulp-sass')
const cleancss = require('gulp-clean-css')
const rename = require('gulp-rename')

const compile = () => {
  return gulp
    .src('./src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleancss({ format: 'beautify' }))
    .pipe(rename({ extname: '.css' }))
    .pipe(gulp.dest('./themes'))
}

const watch = () => {
  gulp.watch(['./src/**/*'], compile)
}

exports.compile = compile
exports.watch = watch

exports.default = gulp.parallel(compile)
