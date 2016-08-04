var app=angular.module("myApp");

app.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){
    $stateProvider
        .state('home',{
            url:'/home',
            views : {"viewA":{
                    templateUrl:'home.html',
                    controller:
            },
                "viewB":{
                    templateUrl:"room.html"
                }
            }
           
        })
        .state('about',{
            url:"/about",
            templateUrl:"about.html"
        })
        .state('room',{
            url:"/room",
            views:{ "viewA":{
                   templateUrl:"room.html"
                }
            }
        })
}]);