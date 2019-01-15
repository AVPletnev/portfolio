var syntax        = 'scss', // Syntax: sass or scss;
		gulpversion   = '4'; // Gulp version: 3 or 4


var gulp          = require('gulp'),
		gutil         = require('gulp-util' ),
		sass          = require('gulp-sass'),
		browserSync   = require('browser-sync'),
		concat        = require('gulp-concat'),
		uglify        = require('gulp-uglify'),
		cleancss      = require('gulp-clean-css'),
		rename        = require('gulp-rename'),
		autoprefixer  = require('gulp-autoprefixer'),
		notify        = require('gulp-notify'),
		svgSprite 	  = require('gulp-svg-sprite'),
		svgmin		  = require('gulp-svgmin'),
		rsp 		  = require('remove-svg-properties').stream,
		replace = require('gulp-replace'),
		cheerio 	  = require('gulp-cheerio'),
		rsync         = require('gulp-rsync');

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false,
		// open: false,
		// online: false, // Work Offline Without Internet Connection
		// tunnel: true, tunnel: "projectname", // Demonstration page: http://projectname.localtunnel.me
	})
});

gulp.task('styles', function() {
	return gulp.src(['app/'+syntax+'/**/*.'+syntax+'', 'app/libs/uikit/uikit.min.css'])
	.pipe(concat('main.css'))
	.pipe(sass({ outputStyle: 'expanded' }).on("error", notify.onError()))
	.pipe(rename({ suffix: '.min', prefix : '' }))
	.pipe(autoprefixer(['last 15 versions']))
	.pipe(cleancss( {level: { 1: { specialComments: 0 } } })) // Opt., comment out when debugging

	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.stream())
});


//svg icon
gulp.task('sprite:build', function() {
    return gulp.src('icons/*.svg')
        // minify svg
        .pipe(svgmin({
            js2svg: {
                pretty: true
            },
            plugins: [{
                removeTitle: true
            }]
        })).pipe(rsp.remove({
            options: {
                stylesheets: true
            }
        }))
        // remove all fill, style and stroke declarations in out shapes
        .pipe(cheerio({
            run: function($) {
                $('[fill]').removeAttr('fill');
                $('[stroke]').removeAttr('stroke');
                $('[style]').removeAttr('style');
            },
            parserOptions: {
                xmlMode: true
            }
        }))
        // build svg sprite
        .pipe(svgSprite({
            mode: {
                symbol: {
                    sprite: '../app-sprite-icons.svg'
                }
            }
        })).pipe(cheerio({
            run: function($) {
                $('svg').css('display', 'none');
            }
        })).pipe(gulp.dest('sprite'));
});


gulp.task('scripts', function() {
	return gulp.src([
		'app/libs/jquery/dist/jquery.min.js',
		'app/libs/uikit/dist/uikit.min.js',
		'app/libs/particles/dist/particles.min.js',
		'app/js/common.js', // Always at the end
		])
	.pipe(concat('scripts.min.js'))
	// .pipe(uglify()) // Mifify js (opt.)
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.reload({ stream: true }))
});

gulp.task('code', function() {
	return gulp.src('app/*.html')
	.pipe(browserSync.reload({ stream: true }))
});

gulp.task('rsync', function() {
	return gulp.src('app/**')
	.pipe(rsync({
		root: 'app/',
		hostname: 'username@yousite.com',
		destination: 'yousite/public_html/',
		// include: ['*.htaccess'], // Includes files to deploy
		exclude: ['**/Thumbs.db', '**/*.DS_Store'], // Excludes files from deploy
		recursive: true,
		archive: true,
		silent: false,
		compress: true
	}))
});

if (gulpversion == 3) {
	gulp.task('watch', ['browser-sync'], function() {
		gulp.watch('app/'+syntax+'/**/*.'+syntax+'', ['styles']);
		gulp.watch(['libs/**/*.js', 'app/js/common.js'], ['scripts']);
		gulp.watch('app/*.html', ['code'])
	
	});
	gulp.task('default', ['watch']);
}

if (gulpversion == 4) {
	gulp.task('watch', function() {
		gulp.watch('app/'+syntax+'/**/*.'+syntax+'', gulp.parallel('styles'));
		gulp.watch(['libs/**/*.js', 'app/js/common.js'], gulp.parallel('scripts'));
		gulp.watch('app/*.html', gulp.parallel('code'));
		gulp.watch('icons/**/*.*', gulp.parallel('sprite:build'));

	});
	gulp.task('default', gulp.parallel('watch', 'browser-sync'));
}
