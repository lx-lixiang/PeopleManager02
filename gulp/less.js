var gulp = require('gulp');
var colors = require('colors');
var less = require('gulp-less');
var lessIn = 'static/app/**/**/*.less';
var lessOut = '.less_cache';
gulp.task('less',less2Css);
function less2Css(){
    return gulp.src(lessIn)
        .pipe(less())
        .pipe(gulp.dest(lessOut));
}
