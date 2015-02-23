(function () {
    "use strict";

    var connectionString = 'mongodb://127.0.0.1:27017/e2e';

    var repository = function () {

        this.MongoClient = require('mongodb').MongoClient;

        this.addAccount = function (accountname, password) {

            var account = { accountname: accountname, password: password };

            this.MongoClient.connect('connectionString', function (err, db) {
                if (err) throw err;

                var collection = db.collection('account');

                collection.insert(account, function (err, docs) {

                });
            });
        };

        this.getAccountByAccountName = function(accountName, cb) {

            this.MongoClient.connect(connectionString, function (err, db) {
                if (err) throw err;

                var collection = db.collection('account');

                collection.find({ accountName: accountName }).toArray(function(err, results) {
                    if (err) throw err;

                    if (results.length === 0) {
                        cb(null);
                    } else {
                        cb(results[0]);
                    }
                });
            });
        };

        this.getAccounts = function(cb) {

        };
    };

    module.exports = repository;
}());