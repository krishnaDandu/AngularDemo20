'use strict';

/* App Module */

var mainApp = angular.module('mainApp', ['ngRoute']);

mainApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'view/home.html',
            controller: 'HomeCtrl'
        })
        .when('/about', {
            templateUrl: 'view/about.html',
            controller: 'AboutCtrl'
        })

    .when('/contact', {
        templateUrl: 'view/contact.html',
        controller: 'contactCtrl'
    })
    .when('/product', {
        templateUrl: 'view/product.html',
        controller: 'ProductCtrl'
    })
    .when('/viewOrder', {
        templateUrl: 'view/viewOrder.html',
        controller: 'viewOrder'
    })
    .when('/showOrder', {
        templateUrl: 'view/showOrder.html',
        controller: 'ShowOrderCtrl'
    })
}]);


mainApp.controller('HomeCtrl', ['$scope', function($scope) {
    $scope.message = "Everyone come and see how good I look!"
}]);


mainApp.controller('AboutCtrl', ['$scope', function($scope) {
    $scope.message = 'Look! I am an about page.';
}]);


mainApp.controller('contactCtrl', ['$scope', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
}]);

mainApp.controller('ProductCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
   
   });
  $scope.orderProp = 'age';   
}]);

mainApp.controller('ShowOrderCtrl', ['$scope', function($scope){
      $scope.message = 'Contact us! JK. This is just a demo.';
}]);


mainApp.controller('viewOrder', [function($scope, $routeParams){
    $scope.order_id = $routeParams.orderId;  
}]);

