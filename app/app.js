var app = angular.module('animeSearch', []);

app.controller('searchCtrl', function($scope, $http) {
	$scope.anime = {};

	$scope.animeCatcher = function(searchTitle) {
		console.log('animeCatcher')
		$http({
			
			method: 'GET',
		  url: 'https://hummingbird.me/api/v1/anime/' + searchTitle,
		  headers: { 
		  	'postman-token': '0668c5db-21a7-64ac-702e-72b4f40f8871',
		     'cache-control': 'no-cache',
		     'Accept': '*/*'
			// 'Accept-Encoding': gzip, de,
			//"Connection": 'keep-alive',
			//"Host": 'hummingbird.me',
			//'User-Agent': 'HTTPie/0.9.6'} 
		   }
		 })
			.then(function(data) {
				console.log(data);
			}).catch(function(error) {
				console.log(error);
			})
		// var options = { method: 'GET',
	 //  url: 'https://hummingbird.me/api/v1/anime/naruto',
	 //  headers: 
	 //   { 'postman-token': '0668c5db-21a7-64ac-702e-72b4f40f8871',
	 //     'cache-control': 'no-cache' } };

		// request(options, function (error, response, body) {
		//   if (error) throw new Error(error);

 	// 	 console.log(body);
		// });

	};
});



// jsonp('https://hummingbird.me/api/v1/anime/' + searchTitle + '?callback=JSON_CALLBACK')
// 			.success(function(data) {
// 				console.log(data);
// 			}).error(function(data, status, headers, config) {
// 				$scope.statusval = status;
// 				console.log(data,)
// 			})