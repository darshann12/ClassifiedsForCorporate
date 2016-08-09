var app=angular.module('cfc');
app.controller('mainCtrl',['$scope','userService',function($scope,userService){
    userService.isLoggedIn().then(function(response){
    
    $scope.isLoggedIn=response.data;
        if($scope.isLoggedIn){
        
        
        }
        
    })

}])