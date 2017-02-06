angular.module('starter.controllers')

.service('user', function() {
	var scope = this;
	var login = null;
	var mdp = null;

	scope.login = function(loginInit, mdpInit){
		login = loginInit;
		mdp = mdpInit;
		console.log(login, mdp);
	}

	scope.getCurrentUser = function() {
		var user = {
			username : login,
			password : mdp
		};
		console.log(user);
		return user;
	}
})