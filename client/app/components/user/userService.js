var app.angular.module('cfc');
app.factory('userService', ['$http', function($http) {
                var factory = {};


                factory.createUser = function(user) {
                    $http.post("/users", user)
                        .success(function(data, status, headers, config) {
                            return data;
                        })
                        .error(function(data, status, header, config) {
                            return "cannot fetch user";
                        });

                }

                factory.getUser = function(userId) {
                    $http.get("/users", {
                            params: {
                                username: userId
                            }
                        })
                        .then(function(response) {
                            return response.data;
                        });

                }


                factory.updateUser = function(user) {
                    $http.put("/users", user)
                        .success(function(data, status, headers, config) {
                            return data;
                        })
                        .error(function(data, status, header, config) {
                            return "cannot update user";
                        });
                }
                    factory.deleteUser = function(user) {
                        $http.delete("/users", user)
                            .success(function(data, status, headers, config) {
                                return data;
                            })
                            .error(function(data, status, header, config) {
                                return "cannot fetch user";
                            });

                    }
                    
                    factory.loginUser = function(user) {
                        $http.post("/users/login", user)
                            .success(function(data, status, headers, config) {
                                return data;
                            })
                            .error(function(data, status, header, config) {
                                return "Wrong username or password";
                            });

                    }
                    
                       factory.logoutUser = function(user) {
                        $http.post("/users/logout", user)
                            .success(function(data, status, headers, config) {
                                return data;
                            })
                            .error(function(data, status, header, config) {
                                return "unable to logout";
                            });

                    }
                    
                        return factory;
                    
                    
}]);