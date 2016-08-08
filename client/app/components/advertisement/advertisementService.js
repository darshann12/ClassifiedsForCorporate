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
                                advertisement: advertisementId
                            }
                        })
                        .then(function(response) {
                            return response.data;
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
                        $http.delete("/advertisements", {advertisement:advertisement})
                            .success(function(data, status, headers, config) {
                                return response.data;
                            })
                            .error(function(data, status, header, config) {
                                return "cannot fetch user";
                            });

                    }
                    
                        factory.searchAdvertisement = function(options) {
                 return    $http.get("/advertisements/search", {
                            params: {
                                options: options
                            }
                        })
                        .then(function(response) {
                            return response.data;
                        });

                }

                        return factory;
                    
}]);