const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');

gulp.task('compress', function () {
	gulp.src(['lib/*.js', 'lib/*.mjs']).pipe(minify()).pipe(gulp.dest('dist'));
});

gulp.task('minify-css', () => {
	return gulp
		.src('./src/styles/*.css')
		.pipe(cleanCSS({ compatibility: 'ie8' }))
		.pipe(gulp.dest('dist/css'));
});
