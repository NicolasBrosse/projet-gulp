var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');

gulp.task('default', function () {

});

gulp.task('minify', function() {
  return gulp.src('app/html/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
});