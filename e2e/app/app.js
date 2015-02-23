var app = angular.module('app', ['ngRoute', 'ui.bootstrap']);

app.config(function ($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'loginController'
    }).when('/home', {
        templateUrl: 'templates/home.html',
        controller: 'homeController'
    }).otherwise({
        redirectTo: '/home'
    });
}).run(function ($rootScope, $location) {
    $rootScope.$on("$routeChangeStart", function () {
        if ($rootScope.loggedInUser == null) {
            $location.path("/login");
        }
    });
});;