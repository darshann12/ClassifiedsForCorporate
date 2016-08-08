var app.angular.module('cfc');
app.factory('transactionService', ['$http', function($http) {
                var factory = {};


                factory.createTransaction = function(transaction) {
                   return  $http.post("/transactions",{transaction:transaction})
                        .success(function(data, status, headers, config) {
                            return data;
                        })
                        .error(function(data, status, header, config) {
                            return "cannot fetch transaction";
                        });

                }

                factory.getTransaction = function(transactionId) {
                  return   $http.get("/transactions", {
                            params: {
                                transaction: transactionId
                            }
                        })
                        .then(function(response) {
                            return response.data;
                        });

                }


                    
                    factory.deleteTransaction = function(transaction) {
                     return    $http.delete("/transactions", {transaction:transaction})
                            .success(function(data, status, headers, config) {
                                return data;
                            })
                            .error(function(data, status, header, config) {
                                return "cannot delete transaction";
                            });
                    }

                        return factory;
                    }]);