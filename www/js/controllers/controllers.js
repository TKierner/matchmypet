angular.module('starter.controllers', ['ionic','ngCordova','ngStorage'])

.controller('AppCtrl', function($rootScope, $scope , $http, $state, $window, $filter, $ionicHistory, $localStorage, $sessionStorage) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.user = JSON.parse($window.localStorage.getItem('user'));

  var typechien;

  $(document).ready(function(){
    clicRecherche();
  });
  /*  $(document).ready(function(){
    clicResultrecherche();
  });
*/
   function clicRecherche(){
       $(".recherche").click(function(){
          //alert($(this).attr("name"));
          typechien = $(this).attr("name");
          listRecherche();
        })
    }

  //Recherche precise :
  $scope.recherchePrecise = function (rechercheA){

      if($scope.rechercheA){
          var recherche = {
              taille : $scope.rechercheA.taillerecherche,
              couleur : $scope.rechercheA.couleurrecherche,
              taches : $scope.rechercheA.couleurtache,
              couleurtaches : $scope.rechercheA.couleurtrecherche,
              couleuryeux : $scope.rechercheA.couleuryrecherche,
              race : $scope.rechercheA.racerecherche,
              caractere : $scope.rechercheA.caractererecherche
          };
      }
      console.log(recherche);

      $http({
          method: 'GET',
          url: 'http://apimatchmypet.mmi-lepuy.fr/api_project/web/app_dev.php/ficheschien/rechercher?taille=' + recherche.taille + '&couleur=' + recherche.couleur + '&tache=' + recherche.taches + '&couleurtache=' + recherche.couleurtaches + '&couleuryeux=' + recherche.couleuryeux + '&caractere=' + recherche.caractere + '&race=' + recherche.race,
          data: recherche
      }).then(function successCallback(response) {
          console.log(response.data);
          console.log("ça marche");
          $window.alert("Vous êtes connectés.");
          $state.go("app.resultat_recherche");

      }, function errorCallback(response) {
          console.log("ça marche pas");
          console.log(response.data);
          $window.alert("Veuillez remplir les champs ou corriger vos identifiants.");
      });

  };


   function listRecherche(){
                  $scope.listRecherche = new Array();
                  $http({
                      method: 'GET',
                      url: 'http://apimatchmypet.mmi-lepuy.fr/api_project/web/app_dev.php/ficheschien'
                  }).then(function successCallback(rep) {
                      console.log(rep.data);
                      console.log("la recherche marche");
                      $scope.maRecherche = rep.data;
                      console.log($scope.maRecherche[0].id);
                      $scope.split_recherche = [];
                      $scope.listRecherche = [];
                      for (var i = 0; i < $scope.maRecherche.length; i++) {
                          //alert(typechien);
                         // alert(rep.data[i].race.idCategorie.id == typechien);
                          if (rep.data[i].race.idCategorie.id == typechien) {
                              $scope.listRecherche.push($scope.maRecherche[i]);
                          }
                      }
                      for (var j = 0; j < $scope.listRecherche.length ; j=j+2){
                        if(($scope.listRecherche.length%2 != 0) && (j == $scope.listRecherche.length -1)){
                            $scope.split_recherche.push([$scope.listRecherche[j]]);
                        }
                        else{
                          $scope.split_recherche.push([$scope.listRecherche[j], $scope.listRecherche[j+1]]);
                        }
                      }
                      console.log($scope.split_recherche);
                      //return listRecherche;
                      //console.log(rep.data);
                      //console.log("ça marche");
                      //$window.alert("Vous êtes connectés.");
                      //$state.go("app.resultat_recherche_categorie");

                      
                      
                      

                  }, function errorCallback(rep) {
                      // console.log("ça marche pas");
                      // console.log(rep.data);
                      $window.alert("Veuillez remplir les champs ou corriger vos identifiants.");
                  });
    }

    var idchien;

    /*$scope.annonceChien = function clicResultRecherche(){
        $(".chien").click(function(){
            alert($(this).attr("name"));
            idchien = $(this).attr("name");
            detailChien();
            detailannonceChien();
            commentChien();
        })
    }*/

    $scope.clicResultRecherche = function(event){
      console.log($(event.currentTarget).attr('data-id'));
      var id_chien = $(event.currentTarget).attr('data-id');
      $http.get("http://apimatchmypet.mmi-lepuy.fr/api_project/web/app_dev.php/annoncechiens/" + id_chien)
      .then(function (rep) {
          console.log(rep.data);
          $scope.annonceChien = rep.data;
          console.log($scope.annonceChien.idAnimal.nom);
          return $scope.annonceChien;
      },function(rep) {
        console.log("MArche pas !!");
      });
    }

    /*function detailChien() {
        $scope.detailsChien =
            $http.get("http://apimatchmypet.mmi-lepuy.fr/api_project/web/app_dev.php/ficheschien/" + idchien)
                .then(function (rep) {
                    //console.log(rep.data);
                    $scope.detailsChien = rep.data;
                });
    }
        function detailannonceChien() {
            $scope.detailsannonceChien =
                $http.get("http://apimatchmypet.mmi-lepuy.fr/api_project/web/app_dev.php/annoncechiens/" + idchien)
                    .then(function (rep) {
                        //console.log(rep.data);
                        $scope.detailsannonceChien = rep.data;
                    })
        }

    function commentChien() {
        $scope.commentsChien =
            $http.get("http://apimatchmypet.mmi-lepuy.fr/api_project/web/app_dev.php/commentaireschien?idchien=" + idchien)
                .then(function (rep) {
                    //console.log(rep.data);
                    $scope.commentsChien = rep.data;
                })
    }*/

  $scope.listChien =
      $http.get("http://apimatchmypet.mmi-lepuy.fr/api_project/web/app_dev.php/ficheschien")
          .then(function(rep) {
              //console.log(rep.data);
              $scope.listChien = rep.data;
          });

  $scope.listServices =
      $http.get("http://apimatchmypet.mmi-lepuy.fr/api_project/web/app_dev.php/services")
          .then(function(rep) {
              //console.log(rep.data);
              $scope.listServices = rep.data;
          });

    /*$scope.mesAnimaux = 
      $http.get("http://apimatchmypet.mmi-lepuy.fr/api_project/web/app_dev.php/annoncechiens/id?idUser=" + $scope.user.id)
            .then(function successCallback(rep) {
                //console.log(rep.data);
                //console.log("mes animaux marchent");
                $scope.mesAnimaux = rep.data.mesanimaux;
                //console.log($scope.mesAnimaux[0].idAnimal);
                $scope.split_items = [];
                for (var i = 0; i < $scope.mesAnimaux.length ; i=i+2){
                  if(($scope.mesAnimaux.length%2 != 0) && (i == $scope.mesAnimaux.length -1)){
                      $scope.split_items.push([$scope.mesAnimaux[i].idAnimal]);
                  }
                  else{
                    $scope.split_items.push([$scope.mesAnimaux[i].idAnimal, $scope.mesAnimaux[i+1].idAnimal]);
                  }
                }
                //console.log($scope.split_items);
            },function errorCallback(rep) {
              //console.log("mes animaux marchent pas.")
            });
          };*/

  var now = $filter('date')(new Date(),'dd/MM/yyyy');

  $scope.addAnnonce = function(annonceA) {
      if ($scope.annonceA) {
          var annonce = {
              prix: parseInt($scope.annonceA.prixChien),
              description: $scope.annonceA.descriptionChien,
              datecreation: now,
              service: $scope.annonceA.serviceChien,
              idAnimal: $scope.annonceA.nomChien,
              idUser: parseInt($scope.user.id)
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
              $state.go('app.choix');
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

//méthode inscription
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
  //fin méthode inscription  

  //Methode de login  
  $scope.logIn = function (loginData) {
          if($scope.loginData){
            var mail = $scope.loginData.usermail;
            var mdp = $scope.loginData.userpwd;
            //console.log(mail + " " + mdp);
            $http({
              method: 'GET',
              url: 'http://apimatchmypet.mmi-lepuy.fr/api_project/web/app_dev.php/utilisateurs/login?mail=' + mail + '&mdp=' + mdp
            }).then(function successCallback(response) {
                //console.log(response.data);
                console.log(response.data);
                console.log("ça marche");
                var user = JSON.stringify(response.data.user);
                $window.localStorage.setItem('user', user);
                $window.alert("Vous êtes connectés.");
                $rootScope.navHider = false;
                $state.go("app.accueil_animaux");
              }, function errorCallback(response) {
                console.log("ça marche pas");
                console.log(response.data);
                $window.alert("Veuillez remplir les champs ou corriger vos identifiants.");
              });
          }
  };
//fin méthode de login

//Récupération des caractères en base
$scope.listCaracteres = 
    $http.get("http://apimatchmypet.mmi-lepuy.fr/api_project/web/app_dev.php/caracteres")
      .then(function(rep) {
        //console.log(rep.data);
        $scope.listCaracteres = rep.data; 
    });
//Fin récupération caractères

//Récupération races en base
  $scope.listRaces = 
    $http.get("http://apimatchmypet.mmi-lepuy.fr/api_project/web/app_dev.php/raceschien")
      .then(function(rep) {
        //console.log(rep.data);
        $scope.listRaces = rep.data; 
    });
//Fin récuprération races en base

//Méthode ajout de chien
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
            $state.go('app.choix');
          }, function errorCallback(response) {
            console.log("ça marche pas");
            console.log(response.data);
            $window.alert("Veuillez remplir les champs ou les corriger.");
          });

      }
  }
  //Fin méthode ajout chien
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

