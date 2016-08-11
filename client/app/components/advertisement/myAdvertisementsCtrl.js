var app=angular.module('cfc');
app.controller('myAdvertisementsCtrl',['$scope','advertisementService','$state',function($scope,advertisementService,$state){
    
    
    $scope.delete=function(index){
        alert("in delete")
        advertisementService.deleteAdvertisement($scope.myAdvertisements[index]).then(function(response){
            alert("advertisement deleted");
             advertisementService.getMyAdvertisements().then(function(response){
          $scope.myAdvertisements=response.data;
    });
        
        })
    
    }
     
    $scope.edit=function(index){
        $state.go("editAdvertisement",{advertisement:$scope.myAdvertisements[index]});
        
    
    }
      advertisementService.getMyAdvertisements().then(function(response){
          $scope.myAdvertisements=response.data;
    });

}])