app.controller('homeController', function ($scope, loginService) {
    $scope.name = 'Superhero';
    $scope.counter = 0;
    $scope.$watch('name', function (newValue, oldValue) {
        $scope.counter = $scope.counter + 1;
    });
});