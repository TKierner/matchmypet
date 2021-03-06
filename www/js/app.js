// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])//rajouter ici les nouveaux controllers

.run(function($ionicPlatform, $rootScope) {

  $rootScope.navHider = true;
  $rootScope.show_carte = false;
  $rootScope.show_paypal = false;
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'views/menu.html',
    controller: 'AppCtrl'
  })
	
  //Page de connexion
  .state('app.login', {
      url: '/login',
      views:  {
        'menuContent': {
          templateUrl: 'views/login.html',
          controller: 'AppCtrl' 
        }
      }
  })

	//création de la nouvelle page test
  .state('app.annonces_enregistrees', {
      url: '/annonces_enregistrees',
      views: {
        'menuContent': {
          templateUrl: 'views/annonces_enregistrees.html',
          controller: 'AppCtrl'
        }
      }
    })
  
  //page detail ajout_commentaire
	.state('app.ajout_commentaire', {
    url: '/ajout_commentaire',
    views: {
      'menuContent': {
        templateUrl: 'views/ajout_commentaire.html',
        controller: 'AppCtrl'
      }
    }
  })

    //page profil chien
      .state('app.profil_chien', {
          url: '/profil_chien',
          views: {
              'menuContent': {
                  templateUrl: 'views/profil_chien.html',
                  controller: 'AppCtrl'
              }
          }
      })

      //page resultat recherche precise
      .state('app.resultat_recherche', {
          url: '/resultat_recherche',
          views: {
              'menuContent': {
                  templateUrl: 'views/resultat_recherche.html',
                  controller: 'AppCtrl'
              }
          }
      })

      //page resultat recherche catégorie
      .state('app.resultat_recherche_categorie', {
          url: '/resultat_recherche_categorie',
          views: {
              'menuContent': {
                  templateUrl: 'views/resultat_recherche_categorie.html',
                  controller: 'AppCtrl'
              }
          }
      })
  
  //page formulaire recherche
	.state('app.formulaire_recherche', {
    url: '/formulaire_recherche',
    views: {
      'menuContent': {
        templateUrl: 'views/formulaire_recherche.html',
        controller: 'AppCtrl'
      }
    }
  })
  
  //page paiement
	.state('app.paiement', {
    url: '/paiement',
    views: {
      'menuContent': {
        templateUrl: 'views/paiement.html',
        controller: 'AppCtrl'
      }
    }
  })
  
  //page detail annonces
	.state('app.detail_annonces', {
    url: '/detail_annonces',
    views: {
      'menuContent': {
        templateUrl: 'views/detail_annonces.html',
        controller: 'AppCtrl'       
      }
    }
  })
  
  //page ajout annonces
	.state('app.ajout_annonce', {
    url: '/ajout_annonce',
    views: {
      'menuContent': {
        templateUrl: 'views/ajout_annonce.html',
        controller: 'AppCtrl'
      }
    }
  })
  
  //page ajout recherche
	.state('app.recherche', {
    url: '/recherche',
    views: {
      'menuContent': {
        templateUrl: 'views/recherche.html',
        controller: 'AppCtrl'
      }
    }
  })
	
  .state('app.mes_annonces', {
    url: '/mes_annonces',
    views: {
      'menuContent': {
        templateUrl: 'views/mes_annonces.html',
        controller: 'AppCtrl'
      }
    }
  })
  
  .state('app.historique', {
    url: '/historique',
    views: {
      'menuContent': {
        templateUrl: 'views/historique.html',
        controller: 'AppCtrl'
      }
    }
  })
  
  .state('app.aide', {
    url: '/aide',
    views: {
      'menuContent': {
        templateUrl: 'views/aide.html',
        controller: 'AppCtrl'
      }
    }
  })

  .state('app.mes_animaux', {
      url: '/mes_animaux',
      views: {
        'menuContent': {
          templateUrl: 'views/mes_animaux.html',
          controller: 'AppCtrl'
        }
      }
    })


  .state('app.detail_animal', {
    url: '/detail_animal',
    views: {
      'menuContent': {
        templateUrl: 'views/detail_animal.html',
        controller: 'AppCtrl'
      }
    }
  })

  .state('app.accueil_animaux', {
    url: '/accueil_animaux',
    views: {
      'menuContent': {
        templateUrl: 'views/accueil_animaux.html',
        controller: 'AppCtrl'
      }
    }
  })

  .state('app.ajout_animal', {
    url: '/ajout_animal',
    views: {
      'menuContent': {
        templateUrl: 'views/ajout_animal.html',
        controller: 'AppCtrl'
      }
    }
  })

  .state('app.inscription', {
      url: '/inscription',
      views: {
        'menuContent': {
          templateUrl: 'views/inscription.html',
          controller: 'AppCtrl'
        }
      }
    })

  .state('app.mon_profil', {
      url: '/mon_profil',
      views: {
        'menuContent': {
          templateUrl: 'views/mon_profil.html',
          controller: 'AppCtrl'
        }
      }
    })

  .state('app.choix', {
      url: '/choix',
      views: {
        'menuContent': {
          templateUrl: 'views/choix.html',
          controller: 'AppCtrl'
        }
      }
    })

    /*.state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'views/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'views/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })*/;
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login'); //page sur lauelle on tombe au départ
});

