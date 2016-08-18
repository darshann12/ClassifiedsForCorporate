var app = angular.module("cfc");
app.controller("advertisementSearchResultCtrl", ['$scope', '$stateParams', 'advertisementService','$state', function($scope, $stateParams, advertisementService,$state) {

   
    $scope.searchQuery = $stateParams.searchQuery;
    $scope.category = $stateParams.category;
     $scope.options={name:$scope.searchQuery};
    $scope.categoryOptions=['BOOKS','ELECTRONIC APPLIANCES','FURNITURE','HOUSE','MOBILES TABLETS','VEHICLES'];
    $scope.saleTypeOptions=["RENT","SELL"];
    $scope.showAdvertisement=function(index){
        $state.go("showAdvertisement",{advertisement:{advertisement:$scope.advertisements[index]}});
                
    }
    
    $scope.applyFilter=function(){
               advertisementService.searchAdvertisement($scope.options).then(function(response) {
            $scope.advertisements = response.data;


        })
    
    
    }
    $scope.clearFilter=function(){
        $scope.options={};
        $scope.options.name= $scope.searchQuery;
    
    }
    
    if ($scope.searchQuery) {

        advertisementService.searchAdvertisement({
            name: $scope.searchQuery
        }).then(function(response) {
            $scope.advertisements = response.data;


        })
    }

    if ($scope.category) {

        advertisementService.searchAdvertisement({
            category: $scope.category
        }).then(function(response) {
            $scope.advertisements = response.data;


        })

    }


}])