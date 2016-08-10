var app=angular.module('cfc');
app.controller('showAdvertisementCtrl',['$scope','advertisementService','$stateParams','$rootScope',function($scope,advertisementService,$stateParams,$rootScope){

$scope.advertisement=$stateParams.advertisement;
$scope.addComment=function(){
    alert($scope.commentBody);
    $scope.comment={body:$scope.commentBody,date:Date.now,user:$rootScope.username} ;  
$scope.advertisement.comments.push($scope.comment);
    advertisementService.updateAdvertisement($scope.advertisement).then(function(response){
        console.log("updated add "+response.data);
    
    })

}    
}]);  