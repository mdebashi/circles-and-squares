import gulp from "gulp";
import browserify from "browserify";
import source from "vinyl-source-stream";
import sass from "gulp-sass";
import browserSync from "browser-sync";
import plumber from "gulp-plumber";
let reload = browserSync.reload;
import del from "del";

gulp.task("transpile", () => {
  return browserify("app/src/app.js")
    .transform("babelify")
    .bundle()
    .pipe(plumber())
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("app/dist"))
    .pipe(reload({stream:true}));
})

gulp.task("sass", () => {
  return gulp.src("app/sass/**/*.scss")
    .pipe(plumber())
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("app/style"))
    .pipe(reload({stream:true}));
})

gulp.task('browser-sync', () => {
	browserSync({
		server:{
			baseDir: "./app"
		}
	});
});

/********************************************/
// Watching tasks
/********************************************/
gulp.task("html:watch", ["transpile"], () => {
   gulp.watch("app/**/*.html", ["transpile"]);
 });
gulp.task("js:watch", ["transpile"], () => {
   gulp.watch("app/src/**/*.js", ["transpile"]);
 });
 gulp.task("sass:watch", ["sass"], () => {
    gulp.watch("app/sass/**/*.scss", ["sass"]);
  });
gulp.task("watch", ["browser-sync", "sass:watch", "js:watch", "html:watch"] );

gulp.task("default", ["watch"]);
