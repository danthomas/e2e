var express = require('express');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var AccountController = require('./server/controllers/accountController.js');
var Repository = require('./server/repository.js');


var app = express()
    .use(serveStatic(__dirname + '/app'))
    .use(serveStatic(__dirname + '/e2eSpecs')) //only required for testing
    .use(serveStatic(__dirname + '/node_modules'))
    .use(serveStatic(__dirname + '/scripts'))
    .use(bodyParser.json())

    .use(function (req, res) {

        if (req.path === '/api/login') {

            var accountController = new AccountController(new Repository());

            accountController.login(req.body.accountName, req.body.password, function(success) {

                console.log('login callback');

                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: success }));
            });

        } else {
            res.end('error ' + req.path);
        }

    })
    .use(function (err, req, res, next) {
        res.end('Invalid body!');
    })
    .listen(3000);