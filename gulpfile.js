var gulp = require('gulp'),
    util = require('gulp-util'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    log = util.log;

var scssSrc = 'scss/styles.scss';
var cssDist = 'css';

gulp.task('sass', function(){
    log('Generate CSS files ' + (new Date()).toString());

    gulp.src(scssSrc)
        .pipe(sass({ style: 'expanded' }))
        .pipe(autoprefixer('last 3 version'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest(cssDist));
});

gulp.task('watch', function(){
    log('Watching scss files for modifications');
    gulp.watch(scssSrc, ['sass']);
});

gulp.task("default", ['sass']);
