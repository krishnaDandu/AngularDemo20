'use strict';

/* App Module */

var mainApp = angular.module('mainApp', ['ui.router']);

mainApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	
    
    $stateProvider
    .state('home', {
        url:'/home',
        templateUrl: 'view/home.html',
        controller: 'homePriCtrl'
    })
    .state('about', {
    	url:'/abouta',
    	//templateUrl:'view/about.html',
    	views:{
            '':{templateUrl:'view/about.html'},
            'aboutUserList@about':{ templateUrl:'view/aboutUserList.html'},
            'aboutUserProfile@about':{templateUrl:'view/aboutUserProfile.html'}
        }
    })
    //product start
    .state('product',{
        url:'/product',
        templateUrl: 'view/product.html'
    })
    .state('product.productList',{
        url:'/productList',
        templateUrl: 'view/productList.html'
       

    })
    
    
    
  /*    .state('home.list', {
            url: '/list',
            templateUrl: 'view/homeList.html',
            controller: function($scope) {
                $scope.dogs = ['Sarine Yashika', 'Sarine Sraves', 'Kittu'];
            }

        })
    
    */
    
    
    $urlRouterProvider.otherwise('/home');
}]);


mainApp.controller('homePriCtrl', ['$scope', function ($scope) {
	$scope.message='this is home page...'
	
}]);

mainApp.controller('aboutCtrl', ['$scope', function ($scope) {
	$scope.message='this is About page with below links...'
	
}]);

