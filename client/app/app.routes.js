var app=angular.module("cfc");

app.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home',{
          url:"/home",
            views : {
                    "contentView":{
                        templateUrl:"app/components/home/home.html"
                    }
            }
         })
        .state('advertisement',{
            url:"/advertisement/:category?book",
            views:  {
                    "contentView":{
                    templateUrl:"app/components/advertisement/advertisement.html"
                    }
            }
        })
             .state('createAdvertisement',{
            url:"/createAdvertisement/",
            views:  {
                    "contentView":{
                    templateUrl:"app/components/advertisement/createAdvertisement.html"
                    }
            }
        })        
       
        
}]);