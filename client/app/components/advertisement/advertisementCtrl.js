var app=angular.module("cfc");

app.controller("advertisementCtrl",['$scope','$state', '$stateParams','advertisementService',function($scope,$state,$stateParams,advertisementService){
    alert("inadvertisementCtrl:");

    var category= $stateParams.category;
    alert("value of category:"+category);

    var option={"limit":6,
                "category":category
               }

    $scope.advertisements= advertisementService.searchAdvertisement(option);
}]);