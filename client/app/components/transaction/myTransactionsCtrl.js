var app = angular.module('cfc');
app.controller('myTransactionsCtrl',['$scope','transactionService','$rootScope',function($scope,transactionService,$rootScope){

    $scope.waitingForApprovalTransactions;
    $scope.waitingToBeApprovedTransactions;
    
    transactionService.searchTransaction({seller:$rootScope.username}).then(function(response){
   $scope.waitingForApprovalTransactions=response.data;
        
    });
    
     transactionService.searchTransaction({buyer:$rootScope.username}).then(function(response){
    $scope.waitingToBeApprovedTransactions=response.data;
        
    });
    

}]);