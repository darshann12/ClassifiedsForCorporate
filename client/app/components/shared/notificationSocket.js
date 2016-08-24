var app=angular.module('cfc');
app.factory('notificationSocket',function(socketFactory){
    return socketFactory();


})