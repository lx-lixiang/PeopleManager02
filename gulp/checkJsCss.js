var gulp = require('gulp');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-clean-css');
var less = require('gulp-less');
var replace = require('gulp-replace');
var mainIndex = "static/app/index.html";


gulp.task('check',function(){
    return gulp.src(mainIndex)
        .pipe(useref({
            searchPath:'{.,bower_components,static/app}'
        }))
        // .pipe(gulpif('*.js', uglify()))
        // .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('static/dist'));
});
