"use strict";

var path = require('path');

module.exports = {
    tmpl: path.resolve(__dirname, '../asset/tmpl'),
    pattern: [
        '**/.*.tmpl',
        '**/*.tmpl',
        '**/.*.bud.tmpl',
        '**/.*.hbs.tmpl'
    ],
    ask: {
        "package_name": "#{dirname}",
        "package_description": '',
        "github_repository": "#{gitUser.name}/#{dirname}",
        "author_name": "#{gitUser.name}",
        "author_email": "#{gitUser.email}",
        "author_url": "#{gitUser.url}"
    },
    mode: {
        "ci/*.*": "755"
    },
    prefix: '~~~~',
    suffix: '~~~~'
};