var appE2E = angular.module('appE2e', ['app', 'ngMockE2E']);

appE2E.run(function ($httpBackend) {

    $httpBackend.whenGET('api/login?password=password&username=thomasd')
      .respond({ success: true });
    
    $httpBackend.whenGET('api/login?password=xxxxx&username=xxxxx')
      .respond({ success: false });

    $httpBackend.whenGET('templates/login.html').passThrough();
    $httpBackend.whenGET('templates/home.html').passThrough();

});