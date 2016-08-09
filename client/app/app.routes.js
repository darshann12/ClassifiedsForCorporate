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
         .state('editAdvertisement',{
            url:"/createAdvertisement/",
        params: {
     advertisement: null
        },
            views:  {
                    "contentView":{
                    templateUrl:"app/components/advertisement/editAdvertisementView.html"
                    }
            }
        }) 
        .state('advertisementSearchResult',{
            url:"/advertisementSearchResult/:category?book",
        params: {
     searchQuery: null
   },
            views:  {
                    "contentView":{
                    templateUrl:"app/components/advertisement/advertisementSearchResultView.html"
                    }
            }
        })
    .state('login',{
            url:"/login/",
            views:  {
                    "contentView":{
                    templateUrl:"app/components/user/loginView.html"
                    }
            }
        }) 
       .state('registerUser',{
            url:"/signup/",
            views:  {
                    "contentView":{
                    templateUrl:"app/components/user/registerUserView.html"
                    }
            }
        })   
        
}]);