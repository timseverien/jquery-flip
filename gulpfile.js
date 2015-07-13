var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),

    lib = {
        src: 'lib/**/*.js',
        dest: 'build'
    };

gulp.task('default', ['build']);

gulp.task('build', function() {
    return gulp.src(lib.src)
        .pipe(sourcemaps.init())
        .pipe(concat('jquery-flip.js'))
        .pipe(gulp.dest(lib.dest))
        .pipe(uglify({
            preserveComments: 'some'
        }))
        .pipe(rename('jquery-flip.min.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(lib.dest));
});

gulp.task('watch', ['default'], function() {
    gulp.watch(lib.src, ['build']);
});
