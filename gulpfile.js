var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('run:bash', shell.task('docker exec -it $(docker ps -aq --filter name=projetomaria) bash'));

gulp.task('start:maria', shell.task('docker start $(docker ps -aq --filter name=projetomaria)'));

gulp.task('stop:maria', shell.task('docker stop $(docker ps -aq --filter name=projetomaria)'));

gulp.task('status:maria', shell.task('docker ps -a --filter name=projetomaria'));

var mongo = gulp.task('get:mongo', shell.task('cat config/workspace.json | jq ".mongoDB" -r'));

gulp.task('run:server', function() {
  gulp.src(mongo)
    .pipe(shell.task('cat config/workspace.json | jq ".mongoDB" -r'))
    .pipe(shell.task(''))
});