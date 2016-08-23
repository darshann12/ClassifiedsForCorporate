var app = angular.module('cfc');
app.controller('myMessagesCtrl',['$scope','chatSocket','$rootScope','$stateParams',function($scope,chatSocket,$rootScope,$stateParams){

    $scope.messageThread=[];   

    $scope.toUser=$stateParams.toUser;
    chatSocket.on('newMessage',function(data){
        $scope.toUser=data.from;
        data.css="pull-left text-muted"
        $scope.messageThread.push(data); 
        $scope.message=null;
    })   

    chatSocket.on('userOffline',function(data){

        alert("the reciever of this message is offline,your message is will not be delivered");
    })    
    $scope.sendMessage=function(){

        $scope.messageThread.push({from:"You",to:$scope.toUser,message:$scope.message,css:"pull-right text-muted"})
        chatSocket.emit('sendMessage',{from:$rootScope.username,to:$scope.toUser,message:$scope.message});

    }


}])