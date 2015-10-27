/**
 * Test case for scff.
 * Runs with nodeunit.
 */

var scff = require('../lib/scff.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Scff'] = function (test) {
    test.ok(scff);
    test.done();
};

