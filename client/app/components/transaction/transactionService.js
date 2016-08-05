var app.angular.module('cfc');
app.factory('transactionService', ['$http', function($http) {
                var factory = {};


                factory.createTransaction = function(transaction) {
                    $http.post("/transactions",transaction)
                        .success(function(data, status, headers, config) {
                            return response.data;
                        })
                        .error(function(data, status, header, config) {
                            return "cannot fetch transaction";
                        });

                }

                factory.getTransaction = function(transactionId) {
                    $http.get("/transactions", {
                            params: {
                                transaction: transactionId
                            }
                        })
                        .then(function(response) {
                            return response.data;
                        });

                }


                    
                    factory.deleteTransaction = function(transaction) {
                        $http.delete("/transactions", transaction)
                            .success(function(data, status, headers, config) {
                                return response.data;
                            })
                            .error(function(data, status, header, config) {
                                return "cannot delete transaction";
                            });


                        return factory;
                    }}]);