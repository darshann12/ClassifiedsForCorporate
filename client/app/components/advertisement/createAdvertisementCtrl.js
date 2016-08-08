 var app=angular.module('cfc');
app.controller('createAdvertisementCtrl',['$scope','advertisementService',function($scope,advertisementService){
$scope.advertisement={};   
    
$scope.advertisement.saleTypeOptions=["RENT","SELL"];
$scope.advertisement.categoryOptions=["RENT","SELL"];
$scope.createAdvertisement=function(){
    $scope.status=advertisementService.createAdvertisement($scope.advertisement);
}
}]);