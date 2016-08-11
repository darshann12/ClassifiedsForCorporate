 var app=angular.module('cfc');
app.controller('editAdvertisementCtrl',['$scope','advertisementService','$stateParams',function($scope,advertisementService,$stateParams){
    
$scope.saleTypeOptions=["RENT","SELL"];
$scope.categoryOptions=['BOOKS','ELECTRONIC APPLIANCES','FURNITURE','HOUSE','MOBILES TABLETS','VEHICLES'];
$scope.advertisement=$stateParams.advertisement;
$scope.updateAdvertisement=function(){
    advertisementService.updateAdvertisement($scope.advertisement).then(function(response){
          if(response.data.name===$scope.advertisement.name){
                                alert("advertisement updated successfully");
                            }
    });
   
   

    
}
}]);