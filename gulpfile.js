var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var map = require('gulp-sourcemaps');
var prefixer = require('gulp-autoprefixer');

gulp.task('css', function() {
   return gulp.src('src/css/style.scss')
   				.pipe(map.init())
   			  	.pipe(sass())
   			  	.pipe(prefixer())
   		      	.pipe(cleanCSS({compatibility: 'ie8'}))
   		      	.pipe(map.write())
              	.pipe(gulp.dest('docs/css'));
});