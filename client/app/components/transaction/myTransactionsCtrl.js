var app = angular.module('cfc');
app.controller('myTransactionsCtrl',['$scope','transactionService','$rootScope','advertisementService',function($scope,transactionService,$rootScope,advertisementService){



    
    $scope.username=$rootScope.username;
      transactionService.searchTransaction({seller:$scope.username,buyer:$scope.username}).then(function(response){
    $scope.myTransactions=response.data;
        
    });
    
    
    
    
    $scope.update=function(updatedStatus,index){
    $scope.myTransactions[index].status=updatedStatus;
 
        transactionService.updateTransaction($scope.myTransactions[index]).then(function(response){
        
        if(response.data.status==updatedStatus){
            
         alert("updated status");   
        }
            else{
                alert("failed to accept");
            
            }
            if(updatedStatus=="APPROVED"){
                
                
                
                advertisementService.getAdvertisement($scope.myTransactions[index].advertisement).then(function(response){
                
                response.data[0].status="CLOSED";
                advertisementService.updateAdvertisement(response.data[0]).then(function(response1){
                
                if(response1.data.status=="CLOSED"){
                
                    console.log("closed ad");
                }
                })
                
                
                
                })                
            }
                
        });
        
    }
   

}]);