var gulp = require('gulp')
    logutil = require('gulp-tracer'),
    coffee = require('gulp-coffee'),
    concat = require('gulp-concat'),
    browserify = require('gulp-browserify'),
    connect = require('gulp-connect');
    
var  coffeeSrcs
	,jsSrcs
	,htmlSrcs
	,styleSrcs;

coffeeSrcs = ['components/coffee/*.coffee'];
jsSrcs = [
	'components/scripts/*.js'
];
htmlSrcs = ['builds/development/*.html'];
styleSrcs = ['builds/development/*.css'];

gulp.task('log',function(){
	logutil.log('Test of the gulp log message');
});    

gulp.task('coffee',function(){
	gulp.src(coffeeSrcs)
		.pipe(coffee({bare: true})
			.on('error',logutil.log))
		.pipe(gulp.dest('components/scripts'))
});

gulp.task('js',function(){
	gulp.src(jsSrcs)
		.pipe(concat('script.js')
			.on('error',logutil.log))
		.pipe(browserify())
		.pipe(gulp.dest('builds/development/js'))
		.pipe(connect.reload())
});

gulp.task('html', function(){
	gulp.src(htmlSrcs)
		.pipe(connect.reload())
});

gulp.task('style', function(){
	gulp.src(styleSrcs)
		.pipe(connect.reload())
});

gulp.task('watch',function(){
	gulp.watch(coffeeSrcs,['coffee']);
	gulp.watch(jsSrcs,['js']);
	gulp.watch(htmlSrcs,['html']);
	gulp.watch(styleSrcs,['style']);
});

gulp.task('connect',function(){
	connect.server({
		root: "builds/development/",
        port: 8080,
        livereload: true
	})
});

gulp.task('default',['html','style','coffee','js','connect','watch']);

