var gulp = require ('gulp'),
    imagemin = require('gulp-imagemin');

gulp.task('minimizer', function(){
    gulp.src('src/img/products/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('src/img/products'))
});