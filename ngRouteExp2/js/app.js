'use strict';

/* App Module */

var mainApp = angular.module('mainApp', [
    'ngRoute',
    'phonecatControllers'
]);

mainApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider

        .when('/home', {
            templateUrl: 'view/home.html',
            controller: 'StudentController'
        })
        .when('/viewStudents', {
            templateUrl: 'view/viewStudents.html',
            controller: 'ViewStudentsCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        })
}])


mainApp.controller('StudentController', ['$scope', function($scope) {

   

    $scope.message = 'Click on the hyper link to view the students list.';



}])

mainApp.controller('ViewStudentsCtrl', ['$scope', function ($scope) {

 $scope.students = [{
        name: 'Mark Waugh',
        city: 'New York'
    }, {
        name: 'Steve Jonathan',
        city: 'London'
    }, {
        name: 'John Marcus',
        city: 'Paris'
    }];
  $scope.message = 'View Students detail'
  
}])
