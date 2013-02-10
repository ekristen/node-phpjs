# Overview
This is merely a port of the PHP.js project (https://github.com/kvz/phpjs) for node.js, it makes all functions available from the PHP.js project as modules and functions within those modules.

The only authoring I have done is on packaging it into a node.js module format. Please see the included README-PHPJS.md for more information on the PHP.js project.


# Building
```bash build.sh``` -- This will clear out the lib/ folder, clone the phpjs project and import the libraries into the proper format for a Node.JS module.


# Future
If warranted I may build a script to automatically create unit testing for each function that comes from php.js, but at this time there is no need.


# License
This module is licensed under the MIT license, but most of this code is from https://github.com/kvz/phpjs and are licenses either under MIT or GPL.

