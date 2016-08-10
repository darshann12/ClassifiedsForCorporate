var app=angular.module('cfc');
app.controller('showAdvertisementCtrl',['$scope','advertisementService',function($scope,advertisementService){
    alert("in show ad controler");
$scope.advertisement={
    "name" : "onida tv for sale",
    "saleType" : "sell",
    "category" : "ELECTRONIC APPLIANCES",
    "dateExp": "12/12/2016",
    "price" : 8000,
    "description" : "old shitty tv" ,
    "isNegotiable" : true ,
    "creator": "Abc User",
    "comments":[{"body":"i am a comment",
                "date":"08/10/2016",
                "user":"ravi"}
               ]
}; 
}]);  