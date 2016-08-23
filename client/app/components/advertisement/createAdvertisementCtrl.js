var app=angular.module('cfc');
app.controller('createAdvertisementCtrl',['$scope','advertisementService','$state','fileUpload',function($scope,advertisementService,$state,fileUpload){
    $scope.advertisement={};   
    $scope.advertisement.isNegotiable=false;    
    $scope.saleTypeOptions=["RENT","SELL"];
    $scope.categoryOptions=['BOOKS','ELECTRONIC APPLIANCES','FURNITURE','HOUSE','MOBILES TABLETS','VEHICLES'];
    $scope.createAdvertisement=function(){

        fileUpload.post("/advertisements",$scope.advertisement);

        /*    advertisementService.createAdvertisement($scope.advertisement).then(function(response){
          if(response.data.name===$scope.advertisement.name){
                                alert("advertisement posted successfully");
                            $state.go("myAdvertisements");
                            }
    }); */
    }
}]);