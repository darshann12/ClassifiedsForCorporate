var app=angular.module('cfc');
app.controller('myAdvertisementsCtrl',['$scope','advertisementService',function($scope,advertisementService){
    
    
    $scope.delete=function(index){
        alert("in delete")
        advertisementService.deleteAdvertisement($scope.myAdvertisements[index]).then(function(response){
            alert("advertisement deleted");
             advertisementService.getMyAdvertisements().then(function(response){
          $scope.myAdvertisements=response.data;
    });
        
        })
    
    }
      advertisementService.getMyAdvertisements().then(function(response){
          $scope.myAdvertisements=response.data;
    });

}])