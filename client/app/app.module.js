 var app=angular.module("cfc",['ui.router','btford.socket-io']);
app.config([
  '$httpProvider',
  function($httpProvider) {

      $httpProvider.defaults.headers.delete = { "Content-Type": "application/json;charset=utf-8" };
  }
])