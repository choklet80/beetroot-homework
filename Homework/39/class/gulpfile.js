const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const autoPrefixer = require('gulp-autoprefixer');

function cleanStyles() {

    console.log('Clean task')

    return del(['css'])
}

function buildStyles() {
    return gulp.src('./sass/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false,
            grid: autoPrefixer
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./css'));
};

exports.watch = function () {
    gulp.watch('./sass/**/*', buildStyles)
}

exports.default = gulp.series(cleanStyles, buildStyles);