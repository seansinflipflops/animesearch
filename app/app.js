var app = angular.module('animeSearch', []);

app.controller('searchCtrl', function($scope, $http) {
	$scope.anime = {};

	$scope.animeCatcher = function(searchTitle) {
		console.log('animeCatcher');
		$http({
			method: 'POST',
		  url: '/anime',
		  data: { anime: searchTitle }
		 })
			.then(function(data) {
				var prsed = JSON.parse(data.data);
				console.log(prsed.title);
			}).catch(function(error) {
				console.log(error);
			})
	};
});