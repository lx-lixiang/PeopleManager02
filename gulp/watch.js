var gulp = require('gulp');
var runSequence = require('run-sequence');
gulp.task('wacth-less',function(){
    gulp.watch(['static/app/**'],function(){
        runSequence('less','replaceCss','check','movePages');
    });
});
