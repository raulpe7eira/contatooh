// contatooh/public/js/services/AuthInterceptorService.js

angular.module('contatooh').factory('authInterceptor', function($location, $q) {

	var authInterceptor = {
		responseError: function(resposta) {
			if (resposta.status === 401) {
				$location.path('/auth');
			}
			return $q.reject(resposta);
		}
	};
	return authInterceptor;

});