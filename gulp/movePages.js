var gulp = require('gulp');
gulp.task('movePages',function(){
    gulp.src(['static/app/**/**/*.html','!static/app/index.html'])
        .pipe(gulp.dest('static/dist'));
});
