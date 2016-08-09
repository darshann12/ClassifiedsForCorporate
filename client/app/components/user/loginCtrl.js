 var app=angular.module('cfc');
app.controller('loginCtrl',['$scope','userService','$state',function($scope,userService,$state){
$scope.user={};   
$scope.login=function(){
    
    userService.loginUser($scope.user).then(function(response){
    console.log(response);
        if(response.data==$scope.user.username){
            alert("logged in successfully");
            $state.go("home");
        }
        else{
            alert("Wrong Username or Password");
        }
    
    })
   
}

$scope.logout=function(){
     $scope.status=userService.logoutUser($scope.user);
    alert(status);
    }


}]);
