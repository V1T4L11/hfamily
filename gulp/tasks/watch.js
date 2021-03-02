var gulp   = require('gulp');
var config = require('../config');

gulp.task('watch',
    ['imagemin:watch',
    'nunjucks:watch',
    'sprite:watch',
    'svgo:watch',
    // 'list-pages:watch',
    'js:watch',
    'sass:watch'
]);
