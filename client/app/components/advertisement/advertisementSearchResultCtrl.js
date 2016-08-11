var app = angular.module("cfc");
app.controller("advertisementSearchResultCtrl", ['$scope', '$stateParams', 'advertisementService','$state', function($scope, $stateParams, advertisementService,$state) {


    $scope.searchQuery = $stateParams.searchQuery;
    $scope.category = $stateParams.category;
    
    $scope.showAdvertisement=function(index){
        $state.go("showAdvertisement",{advertisement:{advertisement:$scope.advertisements[index]}});
                
    }

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