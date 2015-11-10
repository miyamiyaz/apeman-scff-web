#!/usr/bin/env node

/**
 * Tmplify prototype.
 */

"use strict";

process.chdir(__dirname + '/..');

var path = require('path'),
    fs = require('fs'),
    apeTasking = require('ape-tasking'),
    tmplconv = require('tmplconv');

var scaffold = require('../lib');

var demo = path.dirname(require.resolve('apeman-demo-web/package.json'));

apeTasking.runTasks('tmplify', [
    function (callback) {
        tmplconv.tmplify(demo, 'asset/tmpl', {
            clean: true,
            mode: '444',
            pattern: [
                '**/Apemanfile.js',
                'package.json'
            ],
            ignore: [
                'node_modules/**/Apemanfile.js',
                '.DS_Store',
                '.svg'
            ],
            data: {
                'github_repository': "apeman-demo-labo/apeman-demo-web",
                'package_name': 'apeman-demo-web',
                'package_description': 'Demo of web project.',
                'author_name': 'okunishinishi',
                'author_email': 'okunishinishi@gmail.com',
                'author_url': 'http://okunishitaka.com'
            },
            prefix: scaffold.prefix,
            suffix: scaffold.suffix
        }, callback);
    },
    function (callback) {
        tmplconv.tmplify(__dirname + '/..', 'asset/tmpl', {
            pattern: [
                '.gitignore'
            ],
            prefix: scaffold.prefix,
            suffix: scaffold.suffix
        }, callback);
    },
    function (callback) {
        var filename = require.resolve('../asset/tmpl/package.json.tmpl');
        var str = fs.readFileSync(filename).toString();
        var pkg = JSON.parse(str);
        fs.chmodSync(filename, '644');
        fs.writeFileSync(filename, JSON.stringify({
            name: pkg.name,
            version: '1.0.0',
            description: pkg.description,
            main: pkg.main,
            scripts: pkg.scripts,
            repository: pkg.repository.url.split(/\//g).slice(-1).join('/').replace(/\.git$/, ''),
            keywords: pkg.keywords,
            author: pkg.author,
            license: pkg.license,
            bugs: pkg.bugs,
            homepage: pkg.homepage,
            dependencies: pkg.dependencies,
            devDependencies: pkg.devDependencies
        }, null, 2));
        fs.chmodSync(filename, '444');
        callback(null);
    }
], true);
