var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass= require('gulp-ruby-sass'),
	livereload = require('gulp-livereload');
;



gulp.task('js', function () {
    gulp.src('js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('minjs'));
});

gulp.task('sass', function () {
  return sass('scss/*.scss')
    .on('error', sass.logError)
    .pipe(gulp.dest('css/'))
    .pipe(livereload());
});




gulp.task('watch', function(){
	var server = livereload();
	gulp.watch('js/*.js', ['js']);
	gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('default', ['js', 'sass', 'watch']);