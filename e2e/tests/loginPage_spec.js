var LoginPage = require("./loginPage.js");
var common = require("./common.js");

var loginPage;

var navigateToLoginPage = function() {
    browser.get('http://localhost:3000/#/login');

    loginPage = new LoginPage();
}

describe('login page', function () {



    it('should display empty username and password', function () {
        navigateToLoginPage();

        common.textIsEmpty(loginPage.username);
        common.textIsEmpty(loginPage.password);
    });

    it('should display an error message if username and password are empty', function() {
        navigateToLoginPage();

        loginPage.login.click();
        common.textIs(loginPage.errorMessage, 'Please enter a Username & Password.');
    });

    it('should display an error message if username and password are not recognised', function () {
        navigateToLoginPage();

        common.setText(loginPage.username, 'xxxxx');
        common.setText(loginPage.password, 'xxxxx');
        loginPage.login.click();

        common.textIs(loginPage.errorMessage, 'Username & Password not recognised.');
    });

    it('should navigate to homePage if username and password are recognised', function () {
        navigateToLoginPage();

        common.setText(loginPage.username, 'thomasd');
        common.setText(loginPage.password, 'password');
        loginPage.login.click();

        common.urlContains('/home');
    });
});

/*describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    browser.get('http://www.angularjs.org');

    element(by.model('yourName')).sendKeys('Julie');

    var greeting = element(by.binding('yourName'));

    expect(greeting.getText()).toEqual('Hello Julie!');
  });

  describe('todo list', function() {
    var todoList;

    beforeEach(function() {
      browser.get('http://www.angularjs.org');

      todoList = element.all(by.repeater('todo in todos'));
    });

    it('should list todos', function() {
      expect(todoList.count()).toEqual(2);
      expect(todoList.get(1).getText()).toEqual('build an angular app');
    });

    it('should add a todo', function() {
      var addTodo = element(by.model('todoText'));
      var addButton = element(by.css('[value="add"]'));

      addTodo.sendKeys('write a protractor test');
      addButton.click();

      expect(todoList.count()).toEqual(3);
      expect(todoList.get(2).getText()).toEqual('write a protractor test');
    });
  });
});
*/