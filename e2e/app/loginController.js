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