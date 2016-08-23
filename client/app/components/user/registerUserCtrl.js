var app=angular.module("cfc");

app.controller("registerUserCtrl",['$scope','userService','$state',function($scope,userService,$state){
    $scope.user={};
    $scope.createUser=function(){
        userService.createUser($scope.user).then(function(response){


            if(response.data.username===$scope.user.username){
                alert("your account has been created successfully");
                $state.go("login");
            }
            else{

                alert("failed to create account");   
            } 

        })

    }
    $scope.signUpUser=function(){
        $state.go("registerUser");
    }
}])

