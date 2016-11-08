'use strict';

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    rimraf = require('gulp-rimraf'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify');

// Modules for webserver and livereload
var express = require('express'),
    refresh = require('gulp-livereload'),
    livereload = require('connect-livereload'),
    livereloadport = 35728,
    serverport = 5001;

var server = express();
server.use(livereload({port: livereloadport}));
server.use(express.static('./dist'));

server.all('/*', function(req, res) {
  res.sendFile('index.html', { root: 'dist' });
});

// Dev task
gulp.task('exp', ['clean', 'statics', 'views', 'styles', 'lint', 'browserify'], function() { });

// Clean task
gulp.task('clean', function() {

  gulp.src('./dist/assets/*', { read: false })
  .pipe(rimraf({force: true}));

  gulp.src('./dist/css/*', { read: false })
  .pipe(rimraf({force: true}));

  gulp.src('./dist/js/*', { read: false })
  .pipe(rimraf({force: true}));

  gulp.src('./dist/views/*', { read: false })
  .pipe(rimraf({force: true}));

});

gulp.task('statics',function(){
  
  gulp.src('./assets/vendors/**/**/**/*')
  .pipe(gulp.dest('dist/vendors'));

  gulp.src('./assets/img/**/**/**/*')
  .pipe(gulp.dest('dist/img'));

});

// JSHint task
gulp.task('lint', function() {

  gulp.src('app/**/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'));

});

// Styles task
gulp.task('styles', function() {

  gulp.src('assets/scss/*.scss')
  .pipe(sass({onError: function(e) { console.log(e); } }))
  // .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
  .pipe(gulp.dest('dist/css/'));

});

// Browserify task
gulp.task('browserify', function() {

  gulp.src(['app/app.js'])
  .pipe(browserify({
    insertGlobals: true,
    debug: false
  }))
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest('dist/js'));

});

// Views task
gulp.task('views', function() {

  gulp.src('app/index.html')
  .pipe(gulp.dest('dist'));

  gulp.src('app/views/**/*')
  .pipe(gulp.dest('dist/views/'));

});

// Phonegap task
gulp.task('phonegapView', function() {

  gulp.src('app/index_phonegap.html')
  .pipe(gulp.dest('dist'));

});

gulp.task('watch', ['lint'], function() {

  server.listen(serverport);
  refresh.listen(livereloadport);

  gulp.watch(['app/**/*.js', 'app/*.js'],[
    'lint',
    'browserify'
  ]);

  gulp.watch(['assets/scss/**/*.scss','assets/scss/*.scss'], [
    'styles'
  ]);

  gulp.watch(['app/views/**/*.html','app/views/*.html','app/index.html'], [
    'views'
  ]);

  gulp.watch('./dist/**').on('change', refresh.changed);

});

gulp.task('default', ['exp', 'watch']);

gulp.task('export',['exp']);

gulp.task('phonegap',['exp','phonegapView']);

gulp.task('min',['exp']);