var app = angular.module('cfc');
app.controller('myTransactionsCtrl',['$scope','transactionService','$rootScope',function($scope,transactionService,$rootScope){

    $scope.waitingForApprovalTransactions;
    $scope.waitingToBeApprovedTransactions;
    
    transactionService.searchTransaction({seller:$rootScope.username,status:"PROCESSING"}).then(function(response){
   $scope.waitingForApprovalTransactions=response.data;
        
    });
    
     transactionService.searchTransaction({buyer:$rootScope.username,status:"PROCESSING"}).then(function(response){
    $scope.waitingToBeApprovedTransactions=response.data;
        
    });
    
    
    
      transactionService.searchTransaction({buyer:$rootScope.username,status:"APPROVED"}).then(function(response){
    $scope.approvedTransactions=response.data;
        
    });
    
    
      transactionService.searchTransaction({buyer:$rootScope.username,status:"REJECTED"}).then(function(response){
    $scope.rejectedTransactions=response.data;
        
    });
    
    
    
    
    $scope.update=function(updatedStatus,index){
    $scope.waitingForApprovalTransactions[index].status=updatedStatus;
 
        transactionService.updateTransaction($scope.waitingForApprovalTransactions[index]).then(function(response){
        
        if(response.data.status==updatedStatus){
            
         alert("accepted");   
        }
            else{
                alert("failed to accept");
            
            }
                
        });
        
    }
   

}]);