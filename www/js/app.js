// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'test.controllers'])//rajouter ici les nouveaux controllers

.run(function($ionicPlatform, user) {
  user.login("", ""); //c'est ici qu'on passe les infos du user pour la connexion
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
          controller: 'TestCtrl'
        }
      }
    })
  
  //page detail ajout_commentaire
	.state('app.ajout_commentaire', {
    url: '/ajout_commentaire',
    views: {
      'menuContent': {
        templateUrl: 'views/ajout_commentaire.html'
      }
    }
  })
  
  //page formulaire recherche
	.state('app.formulaire_recherche', {
    url: '/formulaire_recherche',
    views: {
      'menuContent': {
        templateUrl: 'views/formulaire_recherche.html'
      }
    }
  })
  
  //page paiement
	.state('app.paiement', {
    url: '/paiement',
    views: {
      'menuContent': {
        templateUrl: 'views/paiement.html'
      }
    }
  })
  
  //page annonces
	.state('app.annonces', {
    url: '/annonces',
    views: {
      'menuContent': {
        templateUrl: 'views/annonces.html'
      }
    }
  })
  
  //page detail annonces
	.state('app.detail_annonces', {
    url: '/detail_annonces',
    views: {
      'menuContent': {
        templateUrl: 'views/detail_annonces.html'
      }
    }
  })
  
  //page ajout annonces
	.state('app.ajout_annonce', {
    url: '/ajout_annonce',
    views: {
      'menuContent': {
        templateUrl: 'views/ajout_annonce.html'
      }
    }
  })
  
  //page ajout recherche
	.state('app.recherche', {
    url: '/recherche',
    views: {
      'menuContent': {
        templateUrl: 'views/recherche.html'
      }
    }
  })
	
  .state('app.mes_annonces', {
    url: '/mes_annonces',
    views: {
      'menuContent': {
        templateUrl: 'views/mes_annonces.html'
      }
    }
  })
  
  .state('app.historique', {
    url: '/historique',
    views: {
      'menuContent': {
        templateUrl: 'views/historique.html'
      }
    }
  })
  
  .state('app.aide', {
    url: '/aide',
    views: {
      'menuContent': {
        templateUrl: 'views/aide.html'
      }
    }
  })

  .state('app.mes_animaux', {
      url: '/mes_animaux',
      views: {
        'menuContent': {
          templateUrl: 'views/mes_animaux.html'
        }
      }
    })


  .state('app.detail_animal', {
    url: '/detail_animal',
    views: {
      'menuContent': {
        templateUrl: 'views/detail_animal.html'
      }
    }
  })

  .state('app.accueil_animaux', {
    url: '/accueil_animaux',
    views: {
      'menuContent': {
        templateUrl: 'views/accueil_animaux.html'
      }
    }
  })

  .state('app.ajout_animal', {
    url: '/ajout_animal',
    views: {
      'menuContent': {
        templateUrl: 'views/ajout_animal.html'
      }
    }
  })

  .state('app.inscription', {
      url: '/inscription',
      views: {
        'menuContent': {
          templateUrl: 'views/inscription.html'
        }
      }
    })

  .state('app.mon_profil', {
      url: '/mon_profil',
      views: {
        'menuContent': {
          templateUrl: 'views/mon_profil.html'
        }
      }
    })

  .state('app.choix', {
      url: '/choix',
      views: {
        'menuContent': {
          templateUrl: 'views/choix.html'
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

