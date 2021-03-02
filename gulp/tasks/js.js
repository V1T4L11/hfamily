var gulp = require('gulp');
// var include = require("gulp-include");
// var uglify = require('gulp-uglify');
var config = require('../config');
var babel = require('gulp-babel');
var browserSync = require('browser-sync');
// reload = browserSync.reload;

gulp.task('js', function () {
    return gulp
        .src(config.src.js+'/**/*.js')
        // .pipe(include())
        // .on('error', function(){notify("Javascript include error");})
        //.pipe(uglify())
        // .pipe(babel({ presets: ['env'] }))
        .pipe(gulp.dest(config.dest.js+'/'))
        .pipe(reload({stream: true}));
});

gulp.task('js:watch', function() {
    gulp.watch(config.src.js+'/**/*.js', ['js']);
});