var app=angular.module("cfc");
app.controller("advertisementSearchResultCtrl",['$scope','$stateParams','advertisementService',function($scope,$stateParams,advertisementService){


$scope.searchQuery=$stateParams.searchQuery;
advertisementService.searchAdvertisement({name:$scope.searchQuery}).then(function(response){
$scope.advertisements=response.data;
  
    
})
   
    
}])