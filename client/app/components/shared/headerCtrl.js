 var app=angular.module('cfc');
app.controller('headerCtrl',['$scope','$rootScope','userService','$window','$state',function($scope,$rootScope,userService,$window,$state){

    if($rootScope.username){
        $scope.isLoggedIn=true;
    }
    else{
        
        $scope.isLoggedIn=false;
    }
    $scope.logout=function(){
     userService.logoutUser().then(function(response){
     
        $window.sessionStorage.removeItem("username");
         $state.go("home");
     
     })
    
    }

}]);
