/**
 * Scaffold for web projects.
 * @module apeman-scff-web
 * @version 1.0.7
 */

"use strict";

var extend = require('extend'),
    scff = require('./scff');

var lib = extend({}, scff);
lib.scff = scff;

module.exports = lib;