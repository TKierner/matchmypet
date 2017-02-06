angular.module('test.controllers', [])

//on crée un nouveau controller test
.controller('TestCtrl', function($scope, $http) {
 // $scope.name = "Hello";
 // $scope.urlimg = "https://www.google.fr//images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";
  
  /*$http.get('config.json').then(function(rep){
		console.log(rep.data);
		$scope.title = rep.data.title;
		$scope.url = rep.data.url;
	});*/

	//requete 1
	$http.get("http://applimobiletg.mmi-lepuy.fr/html.php").then(function(rep){
		console.log(rep.data);
		$scope.html = rep.data;
	});
	//requete 2
	$http.get("http://applimobiletg.mmi-lepuy.fr/json.php").then(function(rep){
		$scope.json = rep.data;
	})
})