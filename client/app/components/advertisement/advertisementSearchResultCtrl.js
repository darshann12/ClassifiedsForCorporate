var app=angular.module("cfc");
app.controller("advertisementSearchResultCtrl",['$scope','$stateParams','advertisementService',function($scope,$stateParams,advertisementService){


$scope.searchQuery=$stateParams.searchQuery;
$scope.advertisements=advertisementService.searchAdvertisement({name:$scope.searchQuery});
 alert($scope.advertisements);   
    
}])