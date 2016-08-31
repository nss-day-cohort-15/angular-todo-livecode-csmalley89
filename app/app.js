"use strict";

var app = angular.module("TodoApp", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider.
    when('/items/list', {
      templateUrl: 'partials/item-list.html',
      controller: 'TodoCtrl'
    }).
    when('/items/new', {
      templateUrl: 'partials/item-form.html',
      controller: 'TodoCtrl'
    }).
    otherwise('/items/list');
});
