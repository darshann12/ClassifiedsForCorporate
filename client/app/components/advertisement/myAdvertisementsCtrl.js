var app=angular.module('cfc');
app.controller('myAdvertisementsCtrl',['$scope','advertisementService',function($scope,advertisementService){
      advertisementService.getMyAdvertisements().then(function(response){
          $scope.myAdvertisements=response.data;
    });

}])