angular.module('test.controllers', [])

//on crée un nouveau controller test
.controller('TestCtrl', function($scope) {
  $scope.name = "Hello";
  $scope.urlimg = "https://www.google.fr//images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";
})