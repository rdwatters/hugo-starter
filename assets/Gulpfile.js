var gulp = require('gulp');

// Include Plugins
var babel = require('gulp-babel');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var gutil = require('gulp-util');

//Markdown to json task
// var markdown = require('gulp-markdown-to-json');


// Compile Sass; note sass options to prevent server from breaking when you fudge a css rule
gulp.task('sass', function() {
  return gulp.src('scss/style.scss')
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'compressed',
      errToConsole: true
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('../static/assets/css/'))
    .pipe(rename('style-embed-for-crp-only.html'))
    .pipe(gulp.dest('../layouts/partials/site_header/'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
  return gulp.src('js/modules/*.js')
    .pipe(concat('main.js'))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest('../static/assets/js'));
});

//Markdown to json task
// gulp.task('markdown', function() {
//   gulp.src('../content/**/*.md')
//     .pipe(gutil.buffer())
//     .pipe(markdown('search-index.json'))
//     .pipe(gulp.dest('../static/'))
// });

//the default "compile" task for sass and js
gulp.task('compile', ['sass', 'scripts'], function() {
  gulp.watch(['scss/*.scss', 'scss/modules/*scss'], ['sass']);
  gulp.watch("scss/partials/*.scss", ['sass']);
  gulp.watch("js/modules/*.js", ['scripts']);
  // gulp.watch("../content/**/*.md", ['markdown']);
});

// Default Task
gulp.task('default', ['compile']);
