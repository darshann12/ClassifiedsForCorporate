var app=angular.module('cfc');
app.factory('advertisementService', ['$http', function($http) {
    var factory = {};


    factory.createAdvertisement = function(advertisement) {
        return  $http.post("/advertisements",{advertisement:advertisement}).
        success(function(data, status, headers, config) {


        })
            .error(function(data, status, header, config) {
            alert("failed to post advertisement ");
        });

    }

    factory.getAdvertisement = function(advertisementId) {
        return  $http.get("/advertisements", {
            params: {
                _id: advertisementId
            }
        })
            .then(function(response) {
            return response;
        });

    }


    factory.updateAdvertisement = function(advertisement) {
        return  $http.put("/advertisements", {advertisement:advertisement})
            .success(function(data, status, headers, config) {
            return data;
        })
            .error(function(data, status, header, config) {
            return "cannot update advertisement";
        });
    }
    factory.deleteAdvertisement = function(advertisement) {
        return  $http.post("/advertisements/delete", {id:advertisement._id})
            .success(function(data, status, headers, config) {

        })
            .error(function(data, status, header, config) {
            return "cannot fetch user";
        });

    }

    factory.searchAdvertisement = function(options) {
        return    $http.get("/advertisements/search", {
            params: options
        })
            .then(function(response) {

            return response;
        });

    }


    factory.getMyAdvertisements = function() {
        return  $http.get("/advertisements/myadvertisements").
        success(function(data, status, headers, config) {


        })
            .error(function(data, status, header, config) {
            alert("failed to get my advertisement ");
        });

    }

    return factory;

}]);