var AccountController = require('../../../server/controllers/accountController.js');

var _fakeRepository = function(getAccountByAccountNameAccount) {
    var repository = jasmine.createSpyObj('repository', ['getAccountByAccountName']);
    repository.getAccountByAccountName.andCallFake(function (accountName, cb) {
        cb(getAccountByAccountNameAccount);
    });
    return repository;
}

describe("AccountController", function () {

    it('returns true when username and password match', function () {

        var repository = _fakeRepository({ accountName: 'thomasd', password: 'P@ssw0rd!' });
        var accountController = new AccountController(repository);

        accountController.login('thomasd', 'P@ssw0rd!', function (success) {
            expect(success).toBe(true);
        });
    });

    it('returns false when username and password do not match', function () {

        var repository = _fakeRepository({ accountName: 'thomasd', password: 'P@ssw0rd!' });
        var accountController = new AccountController(repository);

        accountController.login('thomasd', 'password', function (success) {
            expect(success).toBe(false);
        });
    });

    it('returns false when account is not found', function () {

        var repository = _fakeRepository(null);
        var accountController = new AccountController(repository);

        accountController.login('thomasd', 'password', function (success) {
            expect(success).toBe(false);
        });
    });
});