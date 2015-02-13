var LoginPage = require("./loginPage.js");
var common = require("./common.js");

var loginPage;

var navigateToLoginPage = function (testId) {
    browser.ignoreSynchronization = true;
    browser.driver.get('http://localhost:3000/' + (testId ? "?e2etest=" + testId : "") + '#/login');
    browser.waitForAngular();
    
    loginPage = new LoginPage();
}

describe('login page', function () {
    
    it('should display empty username and password', function () {
        navigateToLoginPage();

        common.textIsEmpty(loginPage.username);
        common.textIsEmpty(loginPage.password);
    });

    it('should display an error message if username and password are empty', function () {
        navigateToLoginPage();

        loginPage.login.click();

        common.textIs(loginPage.errorMessage, 'Please enter a Username & Password.');
    });

    it('should display an error message if username and password are not recognised', function () {
        navigateToLoginPage(2);
        
        common.setText(loginPage.username, 'xxxxx');
        common.setText(loginPage.password, 'xxxxx');

        loginPage.login.click();

        common.textIs(loginPage.errorMessage, 'Username & Password not recognised.');
    });

    it('should navigate to homePage if username and password are recognised', function () {
        navigateToLoginPage(1);
        common.setText(loginPage.username, 'thomasd');
        common.setText(loginPage.password, 'password');
        loginPage.login.click();
        
        common.urlContains('/home');
    });
});

