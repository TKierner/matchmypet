angular.module('starter.controllers')

.service('user', function() {
	var scope = this;
	var login = null;
	var mdp = null;

	/*scope.login = function(loginInit, mdpInit){
		login = loginInit;
		mdp = mdpInit;
		console.log(login, mdp);
        $http.get('apimatchmypet.mmi-lepuy.fr/api_project/web/app_dev.php/utilisateurs/check').then(function(reponse){
            console.log(reponse.data);
        });
	}*/

    scope.signIn = function(user){
        nom = user.nomU;
        prenom = user.prenomU;
        mdp = user.mdpU;
        mail = user.mailU;
        telephone = user.telephoneU;
        rue = user.rueU;
        ville = user.villeU;
        codepostal = user.codepostalU;
        var user = {
            nom : nom,
            prenom : prenom,
            mdp : mdp,
            mail : mail,
            telephone : telephone,
            rue : rue,
            ville : ville,
            codepostal
        }
        $http.post('apimatchmypet.mmi-lepuy.fr/api_project/web/app_dev.php/utilisateurs/new/' + $scope.user).then(function(rep){
            console.log(rep.data);
        });
    }

	/*scope.getCurrentUser = function() {
		var user = {
			username : login,
			password : mdp
		};
		console.log(user);
		return user;
	}*/
})