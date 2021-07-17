const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function clean(cb) {

    console.log('Clean task')

    cb();
}

function buildStyles() {
    return gulp.src('./sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
};

exports.watch = function(){
    gulp.watch('./sass/**/*',buildStyles)
}

exports.clean = clean;
exports.default = buildStyles;