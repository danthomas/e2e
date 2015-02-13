(function () {

    "use strict";

    var loginPage = function () {

        this.username = element(by.id('username'));
        this.password = element(by.id('password'));
        this.login = element(by.id('login'));
        this.errorMessage = element(by.id('errorMessage'));
    };

    module.exports = loginPage;
}());