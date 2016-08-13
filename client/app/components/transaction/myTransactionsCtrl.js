var app = angular.module('cfc');
app.controller('myTransactionsCtrl',['$scope','transactionService','$rootScope','advertisementService','userService',function($scope,transactionService,$rootScope,advertisementService,userService){
        
        $scope.ratings=[1,2,3,4,5];
//     $scope.ratings = [{rating:0 }];

    
    $scope.username=$rootScope.username;
      transactionService.searchTransaction({seller:$scope.username,buyer:$scope.username}).then(function(response){
    $scope.myTransactions=response.data;
          
        
    });
    
    $scope.rateSeller=function(index){
        userService.getUser($scope.myTransactions[index].seller).then(function(response){
        var user=response.data;
            user.ratings.push({rate:1,byUser:$scope.username});
            
            userService.updateUser(user).then(function(updatedUser){
            
            
            
            });
        
        
        });
    
    }
    
    
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