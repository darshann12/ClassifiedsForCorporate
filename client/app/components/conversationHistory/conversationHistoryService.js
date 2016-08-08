var app.angular.module('cfc');
app.factory('conversationHistoryService', ['$http', function($http) {
                var factory = {};


                factory.createConversationHistory = function(conversationHistory) {
                    $http.post("/conversationHistory",conversationHistory)
                        .success(function(data, status, headers, config) {
                            return data;
                        })
                        .error(function(data, status, header, config) {
                            return "cannot fetch advertisement";
                        });

                }

                factory.getConversationHistory = function(conversationHistoryId) {
                    $http.get("/advertisements", {
                            params: {
                                advertisement: conversationHistoryId
                            }
                        })
                        .then(function(response) {
                            return response.data;
                        });

                }


                factory.updateConversationHistory = function(conversationHistory) {
                    $http.put("/conversationHistory", conversationHistory)
                        .success(function(data, status, headers, config) {
                            return data;
                        })
                        .error(function(data, status, header, config) {
                            return "cannot update conversationHistory";
                        });
                }
                    factory.deleteConversationHistory = function(conversationHistory) {
                        $http.delete("/conversationHistory", advertisement)
                            .success(function(data, status, headers, config) {
                                return data;
                            })
                            .error(function(data, status, header, config) {
                                return "cannot delete conversationHistory";
                            });

                    }
                        return factory;
                    
}]);