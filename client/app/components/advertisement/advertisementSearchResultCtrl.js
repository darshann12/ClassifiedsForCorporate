var app = angular.module("cfc");
app.controller("advertisementSearchResultCtrl", ['$scope', '$stateParams', 'advertisementService', function($scope, $stateParams, advertisementService) {


    $scope.searchQuery = $stateParams.searchQuery;
    $scope.category = $stateParams.category;

    if ($scope.searchQuery) {

        advertisementService.searchAdvertisement({
            name: $scope.searchQuery
        }).then(function(response) {
            $scope.advertisements = response.data;


        })
    }

    if ($scope.category) {

        advertisementService.searchAdvertisement({
            category: $scope.category
        }).then(function(response) {
            $scope.advertisements = response.data;


        })

    }


}])