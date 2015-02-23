
app.service('loginService', function ($http, $location, $rootScope) {

    this.init = function() {
        $rootScope.loggedInUser = null;
    };

    this.login = function (accountName, password, callback) {

        if (accountName === '' || password === '') {
            callback({ success: false, errorMessage: 'Please enter a Username & Password.' });
        } else {

            $http({
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                url: 'http://localhost:3000/api/login',
                data: JSON.stringify({ accountName: accountName, password: password })
            }).success(function (responseData) {
                if (responseData.success) {
                    $rootScope.loggedInUser = accountName;
                    $location.url('/home');
                } else {
                    callback({ success: false, errorMessage: 'Username & Password not recognised.' });
                }
            }).error(function () {
                callback({ success: false, errorMessage: 'System unavailable.' });
            });
        }
    };

    return this;
});