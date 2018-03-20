var gulp = require("gulp"),
watch = require("gulp-watch"),
browserSync = require("browser-sync").create();

gulp.task("watch", function(){

  browserSync.init({
    open: false, // prevents new browser window from opening on gulp watch
    server: {
      baseDir: "app"
}
});

  watch("./app/index.html", function(){
    browserSync.reload();
  });
  watch("./app/assets/styles/**/*.css", function(){
    gulp.start("cssInject");
  });

});

gulp.task("cssInject", ["styles"], function() {
  return gulp.src("./app/dist/styles/main.css")
    .pipe(browserSync.stream());
});