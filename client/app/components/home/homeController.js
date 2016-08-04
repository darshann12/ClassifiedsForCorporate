var app=angular.module("myApp");

app.controller("homeController",['$scope',function($scope){
                        $scope.names=[
                        {
                            name:"shalvi",
                            address:"abc"
                        },
                        {
                            name:"hello",
                            address:"xyz"
                        }
                    ];
                }]);