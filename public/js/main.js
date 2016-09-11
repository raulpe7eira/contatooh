// contatooh/public/js/main.js

angular.module('contatooh', ['ngRoute', 'ngResource']).config(function($httpProvider, $routeProvider){

	$httpProvider.interceptors.push('authInterceptor');

	$routeProvider.when('/auth', {
		templateUrl: 'partials/auth.html'
	});

	$routeProvider.when('/contatos', {
		templateUrl: 'partials/contatos.html',
		controller: 'ContatosController'
	});

	$routeProvider.when('/contato', {
		templateUrl: 'partials/contato.html',
		controller: 'ContatoController'
	});

	$routeProvider.when('/contato/:id', {
		templateUrl: 'partials/contato.html',
		controller: 'ContatoController'
	});

	$routeProvider.otherwise({redirectTo: '/contatos'});

});