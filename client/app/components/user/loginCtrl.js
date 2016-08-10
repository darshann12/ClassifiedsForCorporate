 var app=angular.module('cfc');
app.controller('loginCtrl',['$scope','userService','$state','$rootScope',function($scope,userService,$state,$rootScope){
$scope.user={};   
$scope.login=function(){
    
    userService.loginUser($scope.user).then(function(response){
    console.log(response);
        if(response.data==$scope.user.username){
            $rootScope.username=response.data;
            alert("logged in successfully");
            $state.go("home");
        }
        else{
            alert("Wrong Username or Password");
        }
    
    })
   
}

$scope.logout=function(){
     userService.logoutUser($scope.user).then(function(response){
    $rootScope.username=undefined;
    
    })
    
    }


}]);
