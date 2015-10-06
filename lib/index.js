/**
 * Scaffold for web projects.
 * @module apeman-scaffold-web
 * @version 1.0.4
 */

"use strict";

var extend = require('extend'),
    scaffold = require('./scaffold');

var lib = extend({}, scaffold);
lib.scaffold = scaffold;

module.exports = lib;