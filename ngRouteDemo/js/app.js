'use strict';

/* App Module */

var mainApp = angular.module('mainApp', ['ngRoute']);

mainApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'view/home.html',
        controller: 'homeCtrl'
    })
    .when('/about', {
        templateUrl: 'view/about.html',
        controller: 'AboutCtrl'
    })
    .when('/product', {
        templateUrl: 'view/product.html',
        controller: 'ProductCtrl'
    })
    .when('/contact', {
        templateUrl: 'view/contact.html',
        controller: 'contactCtrl'
    })
    
}]);

mainApp.controller('homeCtrl', ['$scope', function($scope){
    $scope.message = "This is home Page";
}]);


mainApp.controller('AboutCtrl', ['$scope', function($scope){
    $scope.message = "This is About us Page";
}]);

mainApp.controller('contactCtrl', ['$scope', function($scope){
    $scope.message = "This is Contact Page";
}]);

mainApp.controller('ProductCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.message = "This is Product Page";
        
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
   
   });
}])

