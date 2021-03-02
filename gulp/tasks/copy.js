var gulp     = require('gulp');
var watch    = require('gulp-watch');
var batch    = require('gulp-batch');
var imagemin = require('gulp-imagemin');
var mozjpeg  = require('imagemin-mozjpeg');
var pngquant = require('imagemin-pngquant');
var config   = require('../config.js');

gulp.task('copy:fonts', function() {
    return gulp
        .src(config.src.fonts + '/*.{ttf,eot,woff,woff2}')
        .pipe(gulp.dest(config.dest.fonts));
});

gulp.task('copy:lib', function() {
    return gulp
        .src(config.src.lib + '/**/*.*')
        .pipe(gulp.dest(config.dest.lib));
});

gulp.task('copy:rootfiles', function() {
    return gulp
        .src(config.src.root + '/*.*')
        .pipe(gulp.dest(config.dest.root));
});

gulp.task('copy:img', function() {
    return gulp
        .src([
            config.src.img + '/**/*.{jpg,png,jpeg,svg,gif}',
            '!' + config.src.img + '/svgo/**/*.*'
        ])
        .pipe(gulp.dest(config.dest.img));
});

gulp.task('copy:svg', function() {
    gulp.src([
            config.src.img + '/**/*.svg',
            '!' + config.src.img + '/svgo/**/*.*'
        ])
        .pipe(gulp.dest(config.dest.img));
});

gulp.task('imagemin', function() {
    gulp.src([
            config.src.img + '/**/*.{jpg,png,jpeg,gif}'
        ])
        .pipe(imagemin({
            progressive: true,
            use: [pngquant(), mozjpeg({quality: 85})],
            interlaced: true
        }))
        .pipe(gulp.dest(config.dest.img));
});

gulp.task('copy', [
    'imagemin',
    'copy:svg',
    // 'copy:rootfiles',
    // 'copy:lib',
    'copy:fonts'
]);
gulp.task('imagemin:watch', function() {
    watch(config.src.img+'/**/*', batch(function (events, done) {
        gulp.start('imagemin', done);
    }));
});
