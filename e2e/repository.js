(function () {
    "use strict";

    var repository = function () {

        this.MongoClient = require('mongodb').MongoClient;

        this.addAccount = function (accountname, password) {

            var account = { accountname: accountname, password: password };

            this.MongoClient.connect('mongodb://127.0.0.1:27017/e2e', function (err, db) {
                if (err) throw err;

                var collection = db.collection('account');

                collection.insert(account, function (err, docs) {

                });

                db.close();
            });
        };

        this.getAccount = function (accountName) {
            this.MongoClient.connect('mongodb://127.0.0.1:27017/e2e', function (err, db) {
                if (err) throw err;

                var collection = db.collection('account');

                collection.find({ accountName: accountName }).toArray(function (err, results) {
                    if (err) throw err;


                    if (results.length === 0) {
                        return null;
                    } else {
                        return results[0];
                    }
                });
                db.close();
            });
        }
    };

    module.exports = repository;
}());