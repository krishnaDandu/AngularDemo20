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
        .state('home.list', {
            url: '/list',
            templateUrl: 'view/homeList.html',
            controller: function($scope) {
                $scope.dogs = ['Sarine Yashika', 'Sarine Sraves', 'Kittu'];
            }

        })
        .state('home.paragraph', {
            url:'/paragraphasas', // path name in brower url you can custom
             template: 'I could sure use a drink right now.'

        })
        .state('about', {
            url: '/about',
            //templateUrl: 'view/about.html'
            views:{
                '':{templateUrl: 'view/about.html'},
                'columnOne@about':{template: 'Look I am a column!'},
                'columnTwo@about':{
                    templateUrl:'view/aboutTableList.html',
                    controller:'aboutTableListCtrl'
                }
            }
        })
        .state('params', {
            url:'/params',
            templateUrl :'view/params.html'
            //template: '<h1>This Is A State</h1>',

        })

        .state('partyDetail', {
        url: '/party/:partyID/:partyLocation',
        controller: function($scope, $stateParams) {
            // get the id
            $scope.id = $stateParams.partyID;

            // get the location
            $scope.location = $stateParams.partyLocation;   
            }
        });
}])

mainApp.controller('aboutTableListCtrl', ['$scope', function($scope){
    $scope.message = 'new Text'
}])