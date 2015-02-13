(function () {

    "use strict";
    var appE2E = angular.module('appE2e', ['app', 'ngMockE2E']);

    appE2E.run(function ($httpBackend, $window) {


        if ($window.location.search === "?e2etest=1") {
            $httpBackend.whenGET('api/login?password=password&username=thomasd').respond({ success: true });
        } else if ($window.location.search === "?e2etest=2") {
            $httpBackend.whenGET('api/login?password=xxxxx&username=xxxxx').respond({ success: false });
        }
        
        $httpBackend.whenGET('templates/login.html').passThrough();
        $httpBackend.whenGET('templates/home.html').passThrough();
    });
})();