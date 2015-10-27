var apemanScff = require('apeman-scff'),
    scff = require('apeman-scff-web');

apemanScff(scff, 'project/my-awesome-project', {
    silent: false,
    force: false
}, function (err) {
    /*...*/
});
