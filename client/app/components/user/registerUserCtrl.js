var app=angular.module("cfc");

app.controller("registerUserCtrl",['$scope','userService',function($scope,userService){
    $scope.user={};
    $scope.createUser=function(){
    $scope.status=userService.createUser($scope.user);
    alert(status);
    }
}])

