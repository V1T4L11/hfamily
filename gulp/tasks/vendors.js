var gulp            = require('gulp');
var concat          = require('gulp-concat');
var cssmin          = require('gulp-clean-css');
var mainBowerFiles  = require('main-bower-files');
var order           = require('gulp-order');
var rename          = require('gulp-rename');
var babel           = require('gulp-babel');
var uglify          = require('gulp-uglify');
var config          = require('../config');

gulp.task('vendors:js', function() {
  gulp.src(mainBowerFiles('**/*.js'))
    .pipe(order([
      'jquery.js',
      '*'
    ]))
    // .pipe(babel({ presets: ['env'] }))
    .pipe(concat('vendors.js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(config.dest.js+'/'));
});
gulp.task('vendors:js:copy', function() {
  gulp.src(mainBowerFiles('**/*.js'))
    .pipe(gulp.dest(config.dest.js+'/'));
});
gulp.task('vendors:js:show', function() {
    vendorsShow('js');
});

gulp.task('vendors:css', function() {
  gulp.src(mainBowerFiles('**/*.css'))
    .pipe(order([
      'normalize.css',
      '*'
    ]))
    .pipe(concat('vendors.css'))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(config.dest.css));
});
gulp.task('vendors:css:show', function() {
    vendorsShow('css');
});

function vendorsShow(v) {
  var unfiltered = mainBowerFiles('**/*.' + v);
  for (var i = 0; i < unfiltered.length; i++) {
    console.log('vendor #' + i + ': ' + unfiltered[i]);
  }
}