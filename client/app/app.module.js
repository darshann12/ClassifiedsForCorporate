 var app=angular.module("cfc",['ui.router']);
app.config([
  '$httpProvider',
  function($httpProvider) {

      $httpProvider.defaults.headers.delete = { "Content-Type": "application/json;charset=utf-8" };
  }
])