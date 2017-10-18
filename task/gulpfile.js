
const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.task('hello', function(){
    console.log('hello');
});

gulp.task('styles', function(){
    gulp.src('sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'})).on('error', sass.logError)
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass-watcher', function(){
    gulp.watch('sass/**/*.scss', ['styles']);
})

gulp.task('js', function(){
    gulp.src('src/**/*.js')
    .pipe(concat('min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('js-watcher', function(){
    gulp.watch('js/**/*.js', ['js']);
})

gulp.task('dev', ['sass-watcher', 'js-watcher']);
gulp.task('default', ['styles', 'js']); // definit le gulp par default: gulp tout seul