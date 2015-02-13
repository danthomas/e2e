var express = require('express');
var serveStatic = require('serve-static');
var app = express()
.use(serveStatic(__dirname + '/app'))
.use(serveStatic(__dirname + '/e2eSpecs')) //only required for testing
.use(serveStatic(__dirname + '/node_modules'))
.listen(3000);