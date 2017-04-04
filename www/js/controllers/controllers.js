angular.module('starter.controllers', ['ionic','ngCordova'])

.controller('AppCtrl', function($rootScope, $scope , $http, $state, $window, $filter) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});


  var typechien;

  $(document).ready(function(){
      $(".recherche").click(function(){
          alert($(this).attr("name"));
          typechien = $(this).attr("name");
          listRecherche();
      })
  });

   function listRecherche(){
                  $http({
                      method: 'GET',
                      url: 'http://apimatchmypet.mmi-lepuy.fr/api_project/web/app_dev.php/ficheschien'
                  }).then(function successCallback(rep) {
                      for (var i = 0; i < rep.data.length; i++) {
                          //alert(typechien);
                         // alert(rep.data[i].race.idCategorie.id == typechien);
                          if (rep.data[i].race.idCategorie.id == typechien) {
                              $scope.listRecherche = rep.data[i];
                              console.log($scope.listRecherche);
                          }
                      }
                      return $scope.listRecherche;
                      console.log(rep.data);
                      console.log("ça marche");
                      $window.alert("Vous êtes connectés.");
                      $state.go("app.resultat_recherche");

                  }, function errorCallback(rep) {
                      // console.log("ça marche pas");
                      // console.log(rep.data);
                      $window.alert("Veuillez remplir les champs ou corriger vos identifiants.");
                  });
  }


  //debut ajout annonce
  // faire en fonction de l'id de l'utilisateur qui est connecté !!
  $scope.listChien =
      $http.get("http://apimatchmypet.mmi-lepuy.fr/api_project/web/app_dev.php/ficheschien")
          .then(function(rep) {
              console.log(rep.data);
              $scope.listChien = rep.data;
          });

  $scope.listServices =
      $http.get("http://apimatchmypet.mmi-lepuy.fr/api_project/web/app_dev.php/services")
          .then(function(rep) {
              console.log(rep.data);
              $scope.listServices = rep.data;
          });

  var now = $filter('date')(new Date(),'dd/MM/yyyy');

  $scope.addAnnonce = function(annonceA) {
      if ($scope.annonceA) {
          var annonce = {
              prix: parseInt($scope.annonceA.prixChien),
              description: $scope.annonceA.descriptionChien,
              datecreation: now,
              service: $scope.annonceA.serviceChien,
              idAnimal: $scope.annonceA.nomChien,
              idUser: 1,
          };
          console.log(annonce);

          $http({
              method: 'POST',
              url: 'http://apimatchmypet.mmi-lepuy.fr/api_project/web/app_dev.php/annoncechiens/new',
              data: annonce
          }).then(function successCallback(response) {
              console.log(response.data);
              console.log("ça marche");
              $window.alert("Votre annonce a bien été ajouté.");
              $state.go('app.mes_annonces');
          }, function errorCallback(response) {
              console.log("ça ne marche pas");
              console.log(response.data);
              $window.alert("Veuillez remplir tous les champs ou les corriger.");
          });

      }
  }
      //fin ajout annonce



  $scope.options = {
      loop: false,
      speed: 700,
  }

  $scope.$on("$ionicSlides.sliderInitialized", function(event, data){
      // data.slider is the instance of Swiper
      $scope.slider = data.slider;
  });

  $scope.$on("$ionicSlides.slideChangeStart", function(event, data){
      console.log('Slide change is beginning');
  });

  $scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
      // note: the indexes are 0-based
      $scope.activeIndex = data.slider.activeIndex;
      $scope.previousIndex = data.slider.previousIndex;
  });

  $scope.signIn = function (userA){

    if($scope.userA){
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
    }
    console.log(user);

    $http({
      method: 'POST',
      url: 'http://apimatchmypet.mmi-lepuy.fr/api_project/web/app_dev.php/utilisateurs/new',
      data: user
    }).then(function successCallback(response) {
        console.log(response.data);
        console.log("ça marche");
        $window.alert("Votre inscription à bien été prise en compte.");
        $state.go('app.login');
      }, function errorCallback(response) {
        console.log("ça marche pas");
        console.log(response.data);
        $window.alert("Veuillez remplir les champs ou corriger les champs.");
      });

  };
    
  $scope.logIn = function (loginData) {
          if($scope.loginData){
            var mail = $scope.loginData.usermail;
            var mdp = $scope.loginData.userpwd;
            //console.log(mail + " " + mdp);
          }
          $http({
            method: 'GET',
            url: 'http://apimatchmypet.mmi-lepuy.fr/api_project/web/app_dev.php/utilisateurs/login?mail=' + mail + '&mdp=' + mdp
          }).then(function successCallback(response) {
              console.log(response.data);
              console.log("ça marche");
              $window.alert("Vous êtes connectés.");
              $rootScope.navHider = false;
              $state.go("app.accueil_animaux");

            }, function errorCallback(response) {
              console.log("ça marche pas");
              console.log(response.data);
              $window.alert("Veuillez remplir les champs ou corriger vos identifiants.");
            });
  };

$scope.listCaracteres = 
    $http.get("http://apimatchmypet.mmi-lepuy.fr/api_project/web/app_dev.php/caracteres")
      .then(function(rep) {
        console.log(rep.data);
        $scope.listCaracteres = rep.data; 
    });

  $scope.listRaces = 
    $http.get("http://apimatchmypet.mmi-lepuy.fr/api_project/web/app_dev.php/raceschien")
      .then(function(rep) {
        console.log(rep.data);
        $scope.listRaces = rep.data; 
    });

  $scope.addDog = function (dogA) {
      if($scope.dogA){
        console.log($scope.dogA.pedigreeeC);
        var dateFilter = $filter('date');
        var formattedDate = dateFilter($scope.dogA.dateNaissanceC, 'dd/MM/yyyy');
        var dog = {
          nom : $scope.dogA.nomC,
          datenaissance : formattedDate,
          taille : parseInt($scope.dogA.tailleC),
          couleur : $scope.dogA.couleurC,
          taches : parseInt($scope.dogA.tachesC),
          couleurtaches : $scope.dogA.couleurTachesC,
          couleuryeux : $scope.dogA.couleurYeuxC,
          pedigree : "web/uploads/pedigree/" + $scope.dogA.nomC + "_" + $scope.dogA.numPuceC,
          caractere : parseInt($scope.dogA.caractereC),
          race : parseInt($scope.dogA.raceC),
          numpuce : $scope.dogA.numPuceC,
          datecreation : now,
          typeanimal : 1,
          moyenneNotes : 0
        }
        console.log(dog);

        $http({
          method: 'POST',
          url: 'http://apimatchmypet.mmi-lepuy.fr/api_project/web/app_dev.php/ficheschien/new',
          data: dog
        }).then(function successCallback(response) {
            console.log(response.data);
            console.log("ça marche");
            $window.alert("Votre chien à bien été ajouté.");
            $state.go('app.mes_animaux');
          }, function errorCallback(response) {
            console.log("ça marche pas");
            console.log(response.data);
            $window.alert("Veuillez remplir les champs ou les corriger.");
          });

      }
  }
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

