(function() {
    'use strict';
    angular.module('MenuApp', [])
        .controller('MenuAppController', MenuAppController);

    MenuApp.$inject = ['$scope'];

    function MenuApp($scope) {
        $scope.dishes = '';
        $scope.message = '';
        $scope.checked = false;

        $scope.dropDown = function() {
            if ($scope.dishes.trim().length === 0) {
                $scope.empty = true;
            } else {
                $scope.checked = true;
                $scope.empty = false;
                var arrayDishes = $scope.dishes.split(',');
                var arrayDishesWithoutEmptys = arrayDishes.filter(function(v) {
                    return v.trim() !== '';
                });

        };
    }
})();
