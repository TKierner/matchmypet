angular.module('starter.controllers', [])

.controller('AppCtrl', function($rootScope, $scope , $http, $state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});


  $scope.signIn = function (userA){

    //console.log($scope.userA);
    var user = {
      nom : $scope.userA.nomU,
      prenom : $scope.userA.prenomU,
      mdp : $scope.userA.mdpU,
      mail : $scope.userA.mailU,
      telephone : parseInt($scope.userA.telephoneU),
      rue : $scope.userA.rueU,
      ville : $scope.userA.villeU,
      codepostal : parseInt($scope.userA.codepostalU)
    };
    console.log(user);

    $http({
      method: 'POST',
      url: 'http://apimatchmypet.mmi-lepuy.fr/api_project/web/app_dev.php/utilisateurs/new',
      data: user
    }).then(function successCallback(response) {
        console.log(response.data);
        console.log("ça marche");
      }, function errorCallback(response) {
        console.log("ça marche pas");
        console.log(response.data);
      });

  };
    
  $scope.logIn = function (loginData) {
          var mail = $scope.loginData.usermail;
          var mdp = $scope.loginData.userpwd;
          //console.log(mail + " " + mdp);

          $http({
            method: 'GET',
            url: 'http://apimatchmypet.mmi-lepuy.fr/api_project/web/app_dev.php/utilisateurs/login?mail=' + mail + '&mdp=' + mdp
          }).then(function successCallback(response) {
              console.log(response.data);
              console.log("ça marche");
              $rootScope.navHider = false;
              $state.go("app.accueil_animaux");
            }, function errorCallback(response) {
              console.log("ça marche pas");
              console.log(response.data);
            });
  };


})


  //Service user
  /*var user = user.getCurrentUser();
  $scope.loginData = user;*/

  // Form data for the login modal
  //$scope.loginData = {};

  // Create the login modal that we will use later
  /*$ionicModal.fromTemplateUrl('views/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });*/

  // Triggered in the login modal to close it
  /*$scope.closeLogin = function() {
    $scope.modal.hide();
  };*/

  // Open the login modal
  /*$scope.login = function() {
    $scope.modal.show();
  };*/

  // Perform the login action when the user submits the login form
  /*$scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
    header("Location : #/app/accueil_animaux");
  };
})*/

/*.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});*/