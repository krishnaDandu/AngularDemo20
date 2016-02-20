'use strict';

/* App Module */

var mainApp = angular.module('mainApp', ['ui.router']);


mainApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'view/home.html'
     //   controller : 'CountryListController2'
           
    })
    .state('home.list', {
            url: '/list',
            templateUrl: 'view/homeList.html',
            controller: function($scope) {
                $scope.dogs = ['Sarine Yashika', 'Sarine Sraves', 'Kittu'];
            }

    })
    .state('home.paragraph', {
        url:'para',
        templateUrl:'view/paragraphTemp.html',

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


///Factories
mainApp.factory('countries2', function($http) {
    return {
        list: function(callback) {
            $http.get('comments.json').success(callback);
        }
    };
});

mainApp.controller('CountryListController', function($scope, countries2) {
   
    countries2.list( function(countries){
        $scope.countries2 = countries;
       // console.log( $scope.countries2);
    })   
});


mainApp.factory('demoFac', function($http) {
    var obj ={};

    obj.fetchUserDetails = function(){
        return $http.get('comments.json')
    }  
    return obj;
});

mainApp.controller('CountryListController2', ['$scope', 'demoFac', function ($scope, demoFac) 
    {
        demoFac.fetchUserDetails().success(function(response){
            $scope.countryList = response;
            console.log( 'as'+$scope.countryList);
        })
    
}]);

// Check Singleton Object
mainApp.controller('Singleton1', ['$scope', '$log', function ($scope, $log) {
    $log.name = I am First;

    console.log($log.name);
}]);

mainApp.controller('Singleton2', ['$scope', '$log', function ($scope, $log) {
    $log.name = I am second;
}]);

//Services
/*mainApp.services('SerCountries', function($http) {
    return {
        list: function(callback) {
            $http.get('comments.json').success(callback)
            ;
        }
    };
});*/

