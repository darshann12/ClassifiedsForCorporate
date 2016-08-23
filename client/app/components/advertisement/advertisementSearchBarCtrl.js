var app=angular.module("cfc");
app.controller("advertisementSearchBarCtrl",
               ['$scope','$state',function($scope,$state){


                   $scope.searchAdvertisement=function(){

                       $state.go('advertisementSearchResult',{searchQuery:$scope.searchQuery});

                   }

               }])