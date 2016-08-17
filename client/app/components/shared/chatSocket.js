var app=angular.module('cfc');
app.factory('chatSocket',function(socketFactory){
    return socketFactory();
    

})