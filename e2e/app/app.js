var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'loginController'
    }).when('/home', {
        templateUrl: 'templates/home.html',
        controller: 'homeController'
    });
});

app.controller('appController', function ($scope) {
    $scope.userName = 'Dan Thomas';
});

app.controller('loginController', function ($scope, loginService) {

    $scope.model = {
        username: '',
        password: '',
        login: function () {

            loginService.login($scope.model.username, $scope.model.password, function (ret) {
                if (ret.success) {
                    console.log('suceess');
                } else {
                    $scope.model.errorMessage = ret.errorMessage;
                }
            });
        }
    };
});

app.controller('homeController', function ($scope, loginService) {
});

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