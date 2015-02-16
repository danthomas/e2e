var express = require('express');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var Repository = require('./repository.js');


var app = express()
    .use(bodyParser.json())
    .use(serveStatic(__dirname + '/app'))
    .use(serveStatic(__dirname + '/e2eSpecs')) //only required for testing
    .use(serveStatic(__dirname + '/node_modules'))

    .use(function (req, res) {


        var repository = new Repository();

        if (req.path === '/login') {

            var account = repository.getAccount(req.body.accountName);

            res.end('{success: ' + (account == null ? 'false' : 'true') + '}');
            return;
        }

        if (req.body.foo) {


            repository.addAccount('asdfdf', 'asdfasdf');

            //res.end(testing());
        }
        else {
            res.end('Body does not have foo!');
        }
    })
    .use(function (err, req, res, next) {
        res.end('Invalid body!');
    })
    .listen(3000);
/*

var testing = function () {

    var account = { username: 'thomasd', password: 'password' };
    //var findKey = { name: 'John' };
    MongoClient.connect('mongodb://127.0.0.1:27017/e2e', function(err, db) {
        if (err) throw err;
        console.log('Successfully connected');
        var collection = db.collection('account');
        collection.insert(account, function(err, docs) {
            console.log('Inserted', docs[0]);
            console.log('ID:', account._id);
//            collection.find(findKey).toArray(function(err, results) {
//                console.log('Found results:', results);
//                collection.remove(findKey, function(err, results) {
//                    console.log('Deleted person');
//                    db.close();
//                });
//            });
        });
    });
};
*/