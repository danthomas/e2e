app.controller('homeController', function ($scope, $http) {

    $scope.required = true;
    $scope.startDate = new Date();
    $scope.duration = new Date();

    $scope.startDate.setMinutes(0);
    $scope.startDate.setSeconds(0);

    $scope.duration.setHours(1);
    $scope.duration.setMinutes(0);
    $scope.duration.setSeconds(0);

    $scope.open = function ($event) {

        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
    };

    $scope.submit = function(isValid) {

    };

    $scope.loadTags = function (query) {
        return $http.get('tags.json');
    };
});

app.directive('durationRange', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {
            ngModel.$validators.durationRangeValidator = function (value, other) {
                console.log(value);
                console.log(other);
                return value.getHours() < 6;
            }
        }
    }
});

app.directive('datepickerPopup', function (dateFilter, datepickerPopupConfig) {
    return {
        restrict: 'A',
        priority: 1,
        require: 'ngModel',
        link: function (scope, element, attr, ngModel) {
            var dateFormat = attr.datepickerPopup || datepickerPopupConfig.datepickerPopup;
            ngModel.$formatters.push(function (value) {
                return dateFilter(value, dateFormat);
            });
        }
    };
});