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
                templateUrl:"app/components/shared/header1.html"
            }
        }
    })
        .state('myTransactions',{
        url:"/mytransactions",
        data:{requireLogin:true},
        views : {
            "contentView":{
                templateUrl:"app/components/transaction/myTransactionsView.html"
            },
            "header":{
                templateUrl:"app/components/shared/header1.html"
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
                templateUrl:"app/components/shared/header1.html"
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
                templateUrl:"app/components/shared/header1.html"
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
                templateUrl:"app/components/shared/header1.html"
            }
        }
    }) 
        .state('showAdvertisement',{
        url:"/showAdvertisement/",
        params: {
            advertisement: null
        },
        data:{requireLogin:true},

        views:  {
            "contentView":{
                templateUrl:"app/components/advertisement/showAdvertisement.html"
            },
            "header":{
                templateUrl:"app/components/shared/header1.html"
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
                templateUrl:"app/components/shared/header1.html"
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
                templateUrl:"app/components/shared/header1.html"
            }
        }
    })
        .state('myMessages',{
        url:"/mymessages/",
        params: {
            toUser: null
        },
        data:{requireLogin:true},
        views:  {
            "contentView":{
                templateUrl:"app/components/conversationHistory/myMessagesView.html"
            },
            "header":{
                templateUrl:"app/components/shared/header1.html"
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
                templateUrl:"app/components/shared/header1.html"
            }
        }

    })


        .state('logout',{
        url:"/logout/"



    })
        .state('registerUser',{
        url:"/signup/",
        views:  {
            "contentView":{
                templateUrl:"app/components/user/registerUserView.html"
            },
            "header":{
                templateUrl:"app/components/shared/header1.html"
            }
        }
    })   

}]);

app.run(function ($rootScope,$state,$http,$window,userService,chatSocket) {

    userService.isLoggedIn().then(function(response){

        if(response.data){

            if($window.sessionStorage.getItem("username")){
                $rootScope.username=$window.sessionStorage.getItem("username");
                chatSocket.emit('userLogin',{username:$rootScope.username});
                $state.go("home");
            }

        }
        else{

            $window.sessionStorage.removeItem("username");
            $state.go("login");
        }

        if($window.sessionStorage.getItem("username")){
            $rootScope.username=$window.sessionStorage.getItem("username");
        }

    })



    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
        if(toState.name=="logout"){
            $http.post("users/logout")
                .then(function(response) {

                if(response.data=="loggedOut"){

                    $rootScope.username=undefined;
                    $state.go("home");
                }
            });

        }
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

