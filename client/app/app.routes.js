var app=angular.module("cfc");

app.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){
    
  $urlRouterProvider.otherwise('/home');
    $stateProvider
  
        .state('home',{
          url:"/home",
            views : {
                    "contentView":{
                        templateUrl:"app/components/home/home.html"
                    },
                "header":{
                        templateUrl:"app/components/shared/header.html"
                    }
            }
         })
        .state('advertisement',{
            url:"/advertisement/:category?book",
            views:  {
                    "contentView":{
                    templateUrl:"app/components/advertisement/advertisement.html"
                    },
                "header":{
                        templateUrl:"app/components/shared/header.html"
                    }
            }
        })
             .state('createAdvertisement',{
            url:"/createAdvertisement/",
       data:{requireLogin:true},
            views:  {
                    "contentView":{
                    templateUrl:"app/components/advertisement/createAdvertisement.html"
                    },
                "header":{
                        templateUrl:"app/components/shared/header.html"
                    }
            }
        })  
         .state('editAdvertisement',{
            url:"/editAdvertisement/",
        data:{requireLogin:true},
        params: {
     advertisement: null
        },
            views:  {
                    "contentView":{
                    templateUrl:"app/components/advertisement/editAdvertisementView.html"
                    },
                "header":{
                        templateUrl:"app/components/shared/header.html"
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
                    },
                "header":{
                        templateUrl:"app/components/shared/header.html"
                    }
            }
        })
            .state('myAdvertisements',{
            url:"/myadvertisements/",
       data:{requireLogin:true},
            views:  {
                    "contentView":{
                    templateUrl:"app/components/advertisement/myAdvertisementsView.html"
                    },
                "header":{
                        templateUrl:"app/components/shared/header.html"
                    }
            }
        })
    .state('login',{
            url:"/login/",
            views:  {
                    "contentView":{
                    templateUrl:"app/components/user/loginView.html"
                    },
                "header":{
                        templateUrl:"app/components/shared/header.html"
                    }
            }
            
        })
        .state('logout',{
            url:"/logout/",
            views:  {
                    "contentView":{
                    
                    },
                "header":{
                        templateUrl:"app/components/shared/header.html"
                    }
            }
            
        })
       .state('registerUser',{
            url:"/signup/",
            views:  {
                    "contentView":{
                    templateUrl:"app/components/user/registerUserView.html"
                    },
                "header":{
                        templateUrl:"app/components/shared/header.html"
                    }
            }
        })   
        
}]);

app.run(function ($rootScope,$state) {
   
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
      var requireLogin;
     if(toState.data){
          requireLogin = toState.data.requireLogin;
     }
     
    
      
    if (requireLogin && typeof $rootScope.username === 'undefined') {
      event.preventDefault();
      $state.go("login");
    }
     
  });

});

