
app.service('backendService', function ($http) {

    this.post = function (url, data, success, error) {

        $http({
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
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
    };

    return this;
});