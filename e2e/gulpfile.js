var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');
var watch = require('gulp-watch');


var config = {
    //Include all js files but exclude any min.js files
    src: ['app/**/*.js', '!app/**/*.min.js']
}

// Synchronously delete the output file(s)
gulp.task('clean', function () {
    del.sync(['app/all.min.js']);
});

// Combine and minify all files from the app folder
gulp.task('scripts', ['clean'], function () {

    gulp.src(config.src)
    // .pipe(uglify())
     .pipe(concat('all.min.js'))
     .pipe(gulp.dest('app/'));
});

gulp.task('watch', function () {
    gulp.watch(config.src, ['scripts']);
});

//Set a default tasks
gulp.task('default', ['scripts'], function () { });
