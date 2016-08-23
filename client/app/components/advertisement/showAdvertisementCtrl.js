var app=angular.module('cfc');
app.controller('showAdvertisementCtrl',['$scope','$state','transactionService','advertisementService','$stateParams','$rootScope',function($scope,$state,transactionService,advertisementService,$stateParams,$rootScope){

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

    $scope.messageSeller=function(){

        $state.go('myMessages',{toUser:$scope.advertisement.creator});
    }
    $scope.createTransaction=function(){
        $scope.transaction={seller:$scope.advertisement.creator, 
                            buyer:$rootScope.username,                                                                                              price:$scope.advertisement.price,
                            product:$scope.advertisement.name,
                            advertisement:$scope.advertisement._id
                           };


        transactionService.createTransaction($scope.transaction).then(function(response){
            console.log("transation happened "+response.data);
            alert("Your request is sent to seller");
            $state.go("myTransactions");
        })
    }

}]);  