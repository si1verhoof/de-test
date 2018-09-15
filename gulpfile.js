var gulp = require('gulp');
var clean = require('gulp-clean');
var less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');


gulp.task('clean', function (cb) {
  return gulp.src('build/', { allowEmpty: true, read: false })
      .pipe(clean())
});
 
gulp.task('less', function () {
    return gulp.src('./less/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./public/css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(csso())
            .pipe(gulp.dest('build/css/minStyle.css'))
        .pipe(gulp.dest('build/css'));
});

gulp.task('transJs', function(){
  return gulp.src('js/*.js')
    .pipe(gulp.dest('build/js'))
});

gulp.task('transImg', function(){
  return gulp.src('images/*.png')
    .pipe(gulp.dest('build/images'))
});

gulp.task('build', gulp.series('clean', gulp.parallel('less', 'transJs', 'transImg')));