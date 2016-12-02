var gulp = require('gulp');
var runSequence = require('run-sequence');
var colors = require('colors');
gulp.task('default',function(){
    runSequence('less','replaceCss','check');
});
