 var app=angular.module('cfc');
app.controller('loginCtrl',['$scope','userService',function($scope,userService){
$scope.user={};   
$scope.login=function(){
    $scope.status=userService.login($scope.user);
    alert(status);
}
}]);