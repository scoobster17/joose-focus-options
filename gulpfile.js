
/* ************************************************************************** */

/**
 * Gulpfile for Joose Focus Options Component
 */

'use strict';

/* ************************************************************************** */

/* GULP CONFIG */

/* Dependencies */

// gulp itself
var gulp = require('gulp');

// css
var sass = require('gulp-sass');

// helpers
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

/* ************************************************************************** */

/* Variables */
var allFilesInAllFolders = '/**/*';
var directories = {
    cssSrc: './src/css',
    cssDist: './dist/css',
    jsSrc: './src/css',
    jsDist: './dist/js'
}
var files = {
    cssDist: 'style.css',
    jsDist: 'joose-focus-options.min.js'
}
var fileExtensions = {
    sass: '.scss',
    js: '.js'
}
var supportedBrowsersList = [
    'last 2 versions', // the last 2 versions for each major browser
    'IE >= 9'
];

/* ************************************************************************** */

/* CSS */

/**
 * Task to compile Sass
 */
gulp.task('sass', function() {
    return gulp.src( directories.cssSrc + allFilesInAllFolders + fileExtensions.sass )
        .pipe( sourcemaps.init() )
        .pipe(
            sass({
                includePaths: [
                    './node_modules/reset-css'
                ],
                outputStyle: 'compressed'
            })
            .on('error', sass.logError)
        )
        .pipe(postcss(
            [
                autoprefixer({
                    browsers: supportedBrowsersList
                })
            ]
        ))
        .pipe( sourcemaps.write() )
        .pipe( gulp.dest( directories.cssDist ) );
});

/* ************************************************************************** */

/* PROCESSING */

/**
 * Task to watch for changes in files and trigger events
 */
gulp.task('watch', function() {

    // watch for css changes
    gulp.watch(
        [
            directories.cssSrc + allFilesInAllFolders + fileExtensions.sass
        ],
        [
            'sass'
        ]
    );

});

/* ************************************************************************** */