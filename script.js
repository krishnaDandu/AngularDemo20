angular.module('myApp', [])
.controller('Controller', function($scope){
    $scope.customer = {
        name: 'Naomi',
    address: '1600 Amphitheatre'
    }
}).directive('myDirective', function(){
    return {
        templateUrl:'PageDir.html'
    }
})