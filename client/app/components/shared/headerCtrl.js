var app=angular.module('cfc');
app.controller('headerCtrl',['$scope','$rootScope','userService','$window','$state','chatSocket',function($scope,$rootScope,userService,$window,$state,chatSocket){

    $scope.notification;
    chatSocket.on('notification',function(data){



        $scope.notification=data.message;
         //$timeout(function(){$scope.notification=null}, 3000);

    });
    
    
    
    
    $scope.showNotification=function(){
    
        $state.go("myTransactions");
    }
    if($rootScope.username){
        $scope.isLoggedIn=true;
    }
    else{

        $scope.isLoggedIn=false;
    }
    $scope.logout=function(){
        userService.logoutUser().then(function(response){

            $window.sessionStorage.removeItem("username");
            $rootScope.username=undefined;
            $scope.isLoggedIn=false;
            $state.go("home");

        })

    }

}]);
