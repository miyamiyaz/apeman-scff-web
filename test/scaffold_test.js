/**
 * Test case for scaffold.
 * Runs with nodeunit.
 */

var scaffold = require('../lib/scaffold.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Scaffold'] = function (test) {
    test.ok(scaffold);
    test.done();
};

