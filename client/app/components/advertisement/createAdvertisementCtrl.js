 var app=angular.module('cfc');
app.controller('createAdvertisementCtrl',['$scope','advertisementService','$state',function($scope,advertisementService,$state){
$scope.advertisement={};   
    
$scope.saleTypeOptions=["RENT","SELL"];
$scope.categoryOptions=['BOOKS','ELECTRONIC APPLIANCES','FURNITURE','HOUSE','MOBILES TABLETS','VEHICLES'];
$scope.createAdvertisement=function(){
    advertisementService.createAdvertisement($scope.advertisement).then(function(response){
          if(response.data.name===$scope.advertisement.name){
                                alert("advertisement posted successfully");
                            $state.go("myAdvertisements");
                            }
    });
   
   

    
}
}]);