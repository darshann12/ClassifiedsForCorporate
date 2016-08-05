var app=angular.module("cfc");
app.factory('advertisementService', function($http) {

        var factory = {}; 

	factory.getAdvertisements = function(options) {
		$http({
                        method : "GET",
                        url : "advertisements/search",
                        params:option
                    }).then(function mySucces(response) {
                        return response.data;
                    }, function myError(response) {
                        
                    });
		}

	
	return factory;
    });

