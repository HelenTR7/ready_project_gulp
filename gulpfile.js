const gulp =  require('gulp'),
	options = require('./options.js'),
	plugins = require('gulp-load-plugins')();

plugins.browserSync = require('browser-sync');
plugins.path = require('path');
plugins.fs = require('fs');

gulp.task('pug', require('./gulp-tasks/pug')(gulp, options, plugins));
gulp.task('scss:dev', require('./gulp-tasks/scss_dev')(gulp, options, plugins));
gulp.task('scss:build', require('./gulp-tasks/scss_build')(gulp, options, plugins));
gulp.task('scripts:dev', require('./gulp-tasks/scripts_dev')(gulp, options, plugins));
gulp.task('scripts:build', require('./gulp-tasks/scripts_build')(gulp, options, plugins));
gulp.task('vendors:js', require('./gulp-tasks/vendors_js')(gulp, options, plugins));
gulp.task('vendors:js_build', require('./gulp-tasks/vendors_js_build')(gulp, options, plugins));
gulp.task('images:dev', require('./gulp-tasks/images_dev')(gulp, options, plugins));
gulp.task('svg', require('./gulp-tasks/svg')(gulp, options, plugins));

gulp.task('watch', require('./gulp-tasks/watch')(gulp, options, plugins));
gulp.task('serve', require('./gulp-tasks/serve')(gulp, options, plugins));


//сборка dev
gulp.task('default',
	gulp.series(
		gulp.parallel(
			'pug',
			'scss:dev',
			'scripts:dev',
			'images:dev',
			'svg',
			'vendors:js',
		),
		gulp.parallel(
			'watch',
			'serve'
		),
));

//сборка build
gulp.task('build',
	gulp.series(
		gulp.parallel(
			'pug',
			'scss:build',
			'scripts:build',
			'images:dev',
			'svg',
			'vendors:js_build',
		),
	));

//styles
/*

$.gulp.task('css:build', function(){
	return $.gulp.src('src/assets/scss/!**!/!*.scss')
		.pipe($.plugins.sass().on('error', $.plugins.sass.logError))//преобразование scss к css
		.pipe($.plugins.autoprefixer({//добавление префиксов
			browsers: ['last 2 versions']
		}))
		.pipe($.plugins.csso())//минимизация
		.pipe($.plugins.rename({ suffix: '.min' }))
		.pipe($.gulp.dest('dist/css'));
});


//scripts

$.gulp.task('scripts:build', function(){
	return $.gulp.src('src/assets/js/app.js')
		.pipe($.plugins.babel({
			presets: ['@babel/env']
		}))
		.pipe($.plugins.jsmin())//минификация
		.pipe($.plugins.rename({ suffix: '.min' }))
		.pipe($.gulp.dest('dist/js/'));
});

//images

$.gulp.task('images:build', function () {
	return $.gulp.src('src/assets/img/!**!/!*.{png,jpg,gif}')
		.pipe($.plugins.imagemin({
			progressive: true
		}))
		.pipe($.gulp.dest('dist/img'));
});


//fonts
$.gulp.task('fonts', function () {
	return $.gulp.src('src/assets/fonts/!**!/!*')
		.pipe($.gulp.dest('dist/fonts'));
});


//plugins css
$.gulp.task('css:plugins', function(){
	return $.gulp.src([
		'node_modules/reset-css/reset.css',
		'node_modules/owl.carousel/dist/assets/owl.carousel.min.css',
		'node_modules/owl.carousel/dist/assets/owl.theme.default.min.css'
	])//подключение мин стилей
		.pipe($.plugins.concatCss('plugins.css'))//объединение в один файл
		.pipe($.plugins.csso())//минимизация
		.pipe($.plugins.rename({ suffix: '.min' }))
		.pipe($.gulp.dest('dist/css'))
		.pipe($.browserSync.reload({
			stream: true
		}));
});


$.gulp.task('clean', function () {
	return $.gulp.src('dist', {read: false})
		.pipe($.plugins.clean());
});
*/

/*

$.gulp.task('dev',
	$.gulp.series(
		$.gulp.parallel('pug','css:dev', 'scripts:dev',
			'images:dev','fonts','css:plugins','scripts:plugins'),//сборка
		$.gulp.parallel('watch','serve')//отслеживание изменений

	));


$.gulp.task('build',
	$.gulp.series('clean',
		$.gulp.parallel('pug','css:build', 'scripts:build',
			'images:build','fonts','css:plugins','scripts:plugins')
	));*/
