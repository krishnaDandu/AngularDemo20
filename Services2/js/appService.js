
var app = angular.module('app',[]);

app.service('helloWorldService', function(){
    this.hello = function() {
        return "Hello World";
    };
});

app.factory('helloWorldFactory', function(){
    return {
        hello: function() {
            return "Hello World";
        }
    }
});

