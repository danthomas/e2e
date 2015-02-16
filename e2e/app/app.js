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