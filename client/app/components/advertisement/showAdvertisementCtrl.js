var app=angular.module('cfc');
app.controller('showAdvertisementCtrl',['$scope','transactionService','advertisementService','$stateParams','$rootScope',function($scope,transactionService,advertisementService,$stateParams,$rootScope){

    $scope.username=$rootScope.username;
$scope.advertisement=$stateParams.advertisement;
$scope.addComment=function(){
    alert($scope.commentBody);
    $scope.comment={body:$scope.commentBody,date:Date.now,user:$rootScope.username} ;  
$scope.advertisement.comments.push($scope.comment);
    advertisementService.updateAdvertisement($scope.advertisement).then(function(response){
        console.log("updated add "+response.data);
    
    })

} 

$scope.createTransaction=function(){
    $scope.transaction={seller:$scope.advertisement.creator, 
                        buyer:$rootScope.username,                                                       price:$scope.advertisement.price,
                        product:$scope.advertisement.name,
                       };
 transactionService.createTransaction($scope.transaction).then(function(response){
        console.log("transation happened "+response.data); 
 })
}

}]);  