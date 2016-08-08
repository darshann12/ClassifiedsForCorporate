var app=angular.module("cfc");

app.controller("registerUserCtrl",['$scope','userService',function($scope,userService){
    $scope.user={};
    $scope.createUser=function(){
    userService.createUser($scope.user).then(function(response){
        

        if(response.data.username===$scope.user.username){
            alert("your account has been created successfully");
        }
    })
    
    }
}])

