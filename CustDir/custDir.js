var app = angular.module('masteringAngularJsDirectives', []);

app.directive('book', function() {
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        templateUrl: 'widget.html'
    }
});

/*app.directive("restricted", function(){
    return{
        restrict :'A',
        link: function(scope, element, attrs){
             // Some auth check function
            var isAuthorized = checkAuthorization();
            if (!isAuthorized){
                element.css('display', 'none');
                
            }
            
            function checkAuthorization(){
                alert(checkAuthorization);
            }
        }
    }
});*/

app.directive("myDirTag", function(){
   return{
       restrict :'A',
    link: function(scope, element, attrbute){
        element.addClass('myClass')
    }
   }
    
});