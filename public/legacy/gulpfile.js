
// gulpfile.js

const gulp = require('gulp');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

// Paths for CSS and JS files
const paths = {
    css: 'css/**/*.css', // Source CSS files
    js: 'js/**/*.js'     // Source JS files
};

// Task to minify and overwrite CSS
function minifyCSS() {
    return gulp.src(paths.css) // Get source CSS files
        .pipe(cleanCSS())      // Minify CSS
        .pipe(rename({ suffix: '.min' })) // Add .min suffix
        .pipe(gulp.dest('css')); // Save to the same directory
}

// Task to minify and overwrite JS
function minifyJS() {
    return gulp.src(paths.js) // Get source JS files
        .pipe(uglify())       // Minify JS
        .pipe(rename({ suffix: '.min' })) // Add .min suffix
        .pipe(gulp.dest('js')); // Save to the same directory
}

// Define tasks to export
exports.minifyCSS = minifyCSS;
exports.minifyJS = minifyJS;

// Default task to run both CSS and JS tasks
exports.default = gulp.series(minifyCSS, minifyJS);
