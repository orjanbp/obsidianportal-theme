const gulp = require('gulp')
const sass = require('gulp-sass')
const cleancss = require('gulp-clean-css')
const rename = require('gulp-rename')

// Define our own beautify format, since the default
// one doesn't work as we want it to.
const cssBeautify = {
  breaks: {
    afterAtRule: true,
    afterBlockBegins: true,
    afterBlockEnds: true,
    afterComment: true,
    afterProperty: true,
    afterRuleBegins: true,
    afterRuleEnds: true,
    beforeBlockEnds: true,
    betweenSelectors: true,
  },
  breakWith: '\n',
  indentBy: 2,
  indentWith: 'space',
  spaces: {
    aroundSelectorRelation: true,
    beforeBlockBegins: true,
    beforeValue: true,
  },
  wrapAt: false,
  semicolonAfterLastProperty: true,
}

// Taks to compile SASS to CSS
const compile = () => {
  return gulp
    .src('./src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleancss({ format: cssBeautify }))
    .pipe(rename({ extname: '.css' }))
    .pipe(gulp.dest('./themes'))
}

// Task to auto-compile when editing
const watch = () => {
  gulp.watch(['./src/**/*'], compile)
}

exports.compile = compile
exports.watch = watch

exports.default = gulp.parallel(compile)
