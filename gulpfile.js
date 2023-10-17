const gulp = require('gulp');
const {exec} = require('child_process');

gulp.task('watch', () => {
    gulp.watch('src/**/*', { ignoreInitial: false })
        .on('change', () => {
            exec('sh build.sh', (err, stdout, stderr) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log(stdout);
                console.log(stderr);
            });
        })
});

gulp.task('default', gulp.series('watch'));