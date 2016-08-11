 var app=angular.module('cfc');
app.controller('loginCtrl',['$scope','userService','$state','$rootScope','$window',function($scope,userService,$state,$rootScope,$window){
$scope.user={};   
$scope.login=function(){
    
    userService.loginUser($scope.user).then(function(response){
    console.log(response);
        if(response.data==$scope.user.username){
           
            $rootScope.username=response.data;
            $window.sessionStorage.setItem("username", $rootScope.username=response.data);
            alert("logged in successfully");
            $state.go("home");
        }
        else{
            alert("Wrong Username or Password");
        }
    
    })
   
}



}]);
