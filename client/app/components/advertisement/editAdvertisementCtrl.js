 var app=angular.module('cfc');
app.controller('editAdvertisementCtrl',['$scope','advertisementService','$stateParams',function($scope,advertisementService,$stateParam){
    
$scope.advertisement=$stateParam.advertisement;
$scope.updateAdvertisement=function(){
    advertisementService.updateAdvertisement($scope.advertisement).then(function(response){
          if(response.data.name===$scope.advertisement.name){
                                alert("advertisement updated successfully");
                            }
    });
   
   

    
}
}]);