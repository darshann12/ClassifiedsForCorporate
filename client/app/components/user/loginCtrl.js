 var app=angular.module('cfc');
app.controller('loginCtrl',['$scope','userService',function($scope,userService){
$scope.user={};   
$scope.login=function(){
    $scope.status=userService.loginUser($scope.user);
    alert(status);
}

$scope.logout=function(){
     $scope.status=userService.logoutUser($scope.user);
    alert(status);
}]);