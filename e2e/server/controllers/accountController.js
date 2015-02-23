(function () {
    "use strict";
    
    var accountController = function (repository) {

        this.repository = repository;

        this.login = function (accountName, password, cb) {

            this.repository.getAccountByAccountName(accountName, function (account) {
                cb(account != null && account.password === password);
            });
        };
    };

    module.exports = accountController;
}());