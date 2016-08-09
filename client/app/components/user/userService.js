var app=angular.module('cfc');
app.factory('userService', ['$http', function($http) {
                var factory = {};


                factory.createUser = function(user) {
                 return    $http.post("/users", {user:user})
                        .success(function(data, status, headers, config) {
                            return data;
                        })
                        .error(function(data, status, header, config) {
                            return "cannot fetch user";
                        });

                }

                factory.getUser = function(userId) {
                   return  $http.get("/users", {
                            params: {
                                username: userId
                            }
                        })
                        .then(function(response) {
                            return response.data;
                        });

                }


                factory.updateUser = function(user) {
                  return   $http.put("/users", {user:user})
                        .success(function(data, status, headers, config) {
                            return data;
                        })
                        .error(function(data, status, header, config) {
                            return "cannot update user";
                        });
                }
                    factory.deleteUser = function(user) {
                   return      $http.delete("/users", {user:user})
                            .success(function(data, status, headers, config) {
                                return data;
                            })
                            .error(function(data, status, header, config) {
                                return "cannot fetch user";
                            });

                    }
                    
                    factory.loginUser = function(user) {
                       return $http.post("/users/login", {loginObject:user})
                            .success(function(data, status, headers, config) {
                                
                            })
                            .error(function(data, status, header, config) {
                                console.log("Wrong username or password") ;
                            });

                    }
                    
                       factory.logoutUser = function(user) {
                       return  $http.post("/users/logout", {user:user})
                            .success(function(data, status, headers, config) {
                                return data;
                            })
                            .error(function(data, status, header, config) {
                                return "unable to logout";
                            });

                    }
                    
                        return factory;
                    
                    
}]);