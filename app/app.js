var app = angular.module('animeSearch', []);

app.controller('searchCtrl', function($scope, $http) {
	$scope.anime = {};
	$scope.animeCatcher = function(searchTitle) {
		$http({
			method: 'POST',
		  url: '/anime',
		  data: { anime: searchTitle }
		 })
			.then(function(data) {
				var prsed = JSON.parse(data.data);
				$scope.anime.title = prsed.title;
				$scope.anime.image = prsed.cover_image;
				$scope.anime.url = prsed.url;
				$scope.anime.synopsis = prsed.synopsis;
			})
			.catch(function(error) {
				console.log(error);
			})
	};
});