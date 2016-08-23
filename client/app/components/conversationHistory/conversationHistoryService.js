var app.angular.module('cfc');
app.factory('conversationHistoryService', ['$http', function($http) {
    var factory = {};


    factory.createConversationHistory = function(conversationHistory) {
        return  $http.post("/conversationHistory",{conversationHistory:conversationHistory})
            .success(function(data, status, headers, config) {
            return data;
        })
            .error(function(data, status, header, config) {
            return "cannot fetch advertisement";
        });

    }

    factory.getConversationHistory = function(conversationHistoryId) {
        return   $http.get("/advertisements", {
            params: {
                advertisement: conversationHistoryId
            }
        })
            .then(function(response) {
            return response.data;
        });

    }


    factory.updateConversationHistory = function(conversationHistory) {
        return    $http.put("/conversationHistory", {conversationHistory:conversationHistory})
            .success(function(data, status, headers, config) {
            return data;
        })
            .error(function(data, status, header, config) {
            return "cannot update conversationHistory";
        });
    }
    factory.deleteConversationHistory = function(conversationHistory) {
        return       $http.delete("/conversationHistory",{conversationHistory:conversationHistory})
            .success(function(data, status, headers, config) {
            return data;
        })
            .error(function(data, status, header, config) {
            return "cannot delete conversationHistory";
        });

    }
    return factory;

}]);