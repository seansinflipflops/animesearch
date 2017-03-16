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
				var info = JSON.parse(data.data);
        var prsed = info.data[0].attributes
				$scope.anime.title = prsed.canonicalTitle;
				$scope.anime.image = prsed.posterImage.medium;
				$scope.anime.synopsis = prsed.synopsis;
			})
			.catch(function(error) {
				console.log(error);
			})
	};
});
