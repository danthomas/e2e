(function () {

    "use strict";

    //var testHelper = require("../../Common/TestHelper.js");

    var loginPage = function () {

        this.username = element(by.id('username'));
        this.password = element(by.id('password'));
        this.login = element(by.id('login'));
        this.errorMessage = element(by.id('errorMessage'));
    };

    module.exports = loginPage;
}());