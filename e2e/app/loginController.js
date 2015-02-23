app.controller('loginController', function ($scope, loginService) {

    loginService.init();

    $scope.model = {
        username: 'thomasd',
        password: 'password',
        login: function (isValid) {
            console.log(isValid);
            if (isValid) {
                loginService.login($scope.model.username, $scope.model.password, function (ret) {
                    if (ret.success) {
                        console.log('suceess');
                    } else {
                        $scope.model.errorMessage = ret.errorMessage;
                    }
                });

            }
        }
    };
});