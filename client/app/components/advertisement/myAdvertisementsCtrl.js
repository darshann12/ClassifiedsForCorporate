var app=angular.module('cfc');
app.controller('myAdvertisementsCtrl',['$scope','advertisementsService',function($scope,advertisementsService){
      advertisementService.getMyAdvertisements().then(function(response){
          $scope.myAdvertisements=response.data;
    });

}])