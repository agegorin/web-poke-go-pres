var gulp = require('gulp');
var gls = require('gulp-live-server');

gulp.task('serve', function() {
  //1. serve with default settings
  var server = gls.static('/', 8080);
  server.start();

  //use gulp.watch to trigger server actions(notify, start or stop)
  gulp.watch(['index.html','shower/themes/shower-htc/styles/*.css'], function (file) {
    server.notify.apply(server, [file]);
  });
});