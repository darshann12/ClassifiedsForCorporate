var app = angular.module('cfc');
app.controller('myTransactionsCtrl',['$scope','transactionService','$rootScope',function($scope,transactionService,$rootScope){



    
    $scope.username=$rootScope.username;
      transactionService.searchTransaction({seller:$rootScope.username,buyer:$rootScope.username}).then(function(response){
    $scope.myTransactions=response.data;
        
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