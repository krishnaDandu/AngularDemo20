var app = angular.module("myApp", []);

app.controller('controller', function($scope){
    $scope.comments =[{"_id":"52fb84fac6b93c152d8b4569",
       "post_id":"52fb84fac6b93c152d8b4567",
       "user_id":"52df9ab5c6b93c8e2a8b4567",
       "type":"hoot",},  
      {"_id":"52fb798cc6b93c74298b4568",
       "post_id":"52fb798cc6b93c74298b4567",
       "user_id":"52df9ab5c6b93c8e2a8b4567",
       "type":"story",},        
      {"_id":"52fb7977c6b93c5c2c8b456b",
       "post_id":"52fb7977c6b93c5c2c8b456a",
       "user_id":"52df9ab5c6b93c8e2a8b4567",
       "type":"article",}]
});