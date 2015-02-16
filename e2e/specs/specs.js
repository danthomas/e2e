describe("Player", function () {

    describe('app', function () {
        var scope,
            controller;

        beforeEach(function () {
            module('app');
        });

        describe('homeController', function () {
            beforeEach(inject(function ($rootScope, $controller) {
                scope = $rootScope.$new();
                controller = $controller('homeController', {
                    '$scope': scope
                });
            }));

            it('sets the name', function () {
                expect(scope.name).toBe('Superhero');
            });

            it('watches the name and updates the counter', function () {
                expect(scope.counter).toBe(0);
                scope.name = 'Batman';
                scope.$digest();
                expect(scope.counter).toBe(1);
            });
        });
    });
});