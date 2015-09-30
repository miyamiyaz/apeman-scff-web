var apemanScaffold = require('apeman-scaffold'),
    scaffold = require('apeman-scaffold-web');

apemanScaffold(scaffold, 'project/my-awesome-project', {
    silent: false,
    force: false
}, function (err) {
    /*...*/
});
