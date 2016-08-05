var app.angular.module('cfc');
app.factory('advertisementService', ['$http', function($http) {
                var factory = {};


                factory.createAdvertisement = function(advertisement) {
                    $http.post("/advertisements",advertisement)
                        .success(function(data, status, headers, config) {
                            return response.data;
                        })
                        .error(function(data, status, header, config) {
                            return "cannot fetch advertisement";
                        });

                }

                factory.getAdvertisement = function(advertisementId) {
                    $http.get("/advertisements", {
                            params: {
                                advertisement: advertisementId
                            }
                        })
                        .then(function(response) {
                            return response.data;
                        });

                }


                factory.updateAdvertisement = function(advertisement) {
                    $http.put("/advertisements", advertisement)
                        .success(function(data, status, headers, config) {
                            return response.data;
                        })
                        .error(function(data, status, header, config) {
                            return "cannot update advertisement";
                        });
                }
                    factory.deleteAdvertisement = function(advertisement) {
                        $http.delete("/advertisements", advertisement)
                            .success(function(data, status, headers, config) {
                                return response.data;
                            })
                            .error(function(data, status, header, config) {
                                return "cannot fetch user";
                            });


                        return factory;
                    }
}]);