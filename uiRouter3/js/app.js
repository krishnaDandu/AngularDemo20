'use strict';

/* App Module */

var mainApp = angular.module('mainApp', ['ui.router']);

mainApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'view/home.html'
           
    })
    .state('home.homeList', {
        url: '/homeList',
        templateUrl: 'view/homeList.html'
           
    }) 

    .state('about', {
         url: '/about',    

            views:{
            	'': { templateUrl: 'view/about.html'},
            	'aboutUserList@about': {templateUrl: 'view/aboutUserList.html'},
            	'aboutUserProfile@about':{templateUrl: 'view/aboutUserProfile.html'}
            }
        })
       
}]);
