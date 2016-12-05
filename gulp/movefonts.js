var gulp = require('gulp');
gulp.task('moveFonts',function(){
    gulp.src('bower_components/amazeui/fonts/*')
        .pipe(gulp.dest('static/dist/fonts'));
});
