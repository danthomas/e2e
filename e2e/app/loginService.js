
app.service('loginService', function ($http, $location) {

    this.login = function (username, password, callback) {

        if (username === '' || password === '') {
            callback({ success: false, errorMessage: 'Please enter a Username & Password.' });
        } else {

            $http({
                method: "GET",
                url: 'api/login',
                params: { username: username, password: password }
            }).success(function (responseData) {
                if (responseData.success) {
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