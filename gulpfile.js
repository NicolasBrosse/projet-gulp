var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    rename = require("gulp-rename"),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch');

gulp.task('watch', function () {
   gulp.watch('app/*', ['minify']);
});

// Minifie les fichiers HTML
gulp.task('minify', function() {
  return gulp.src('app/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(rename(function (path) {
        path.basename += "-mini";
    }))
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
});

// Tache par défaut de Gulp
gulp.task('default', function () {

});
