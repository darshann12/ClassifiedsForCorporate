 var app=angular.module('cfc');
app.controller('headerCtrl',['$scope','$rootScope',function($scope,$rootScope){

    if($rootScope.username){
        $scope.isLoggedIn=true;
    }
    else{
        
        $scope.isLoggedIn=false;
    }
    

}]);
