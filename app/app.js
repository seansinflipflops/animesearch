var app = angular.module('mangaSearch', [])

app.directive('myOnKeyDownCall', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {            
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });
                event.preventDefault();
        });
    };
});

app.controller('search', function($scope, $http) {
	$scope.callRestService= function() {
  $http({method: 'GET', url: '/someUrl'}).
    success(function(data, status, headers, config) {
         $scope.results.push(data);  //retrieve results and add to existing results
    })
}
});