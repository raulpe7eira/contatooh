// contatooh/public/js/controllers/ContatoController.js

angular.module('contatooh').controller('ContatoController', function($scope, $routeParams, Contato) {

	if ($routeParams.id) {
		Contato.get({
				id: $routeParams.id
			},
			function(contato) {
				$scope.contato = contato;
			}, function(erro) {
				console.log(erro);
				$scope.mensagem = {
					texto: 'Não foi possível obter o contato'
				};
			}
		);
	} else {
		$scope.contato = new Contato();
	}

	$scope.salva = function() {
		$scope.contato.$save()
			.then(function() {
				$scope.mensagem = {
					texto: 'Salvo com sucesso'
				};
				$scope.contato = new Contato();
			}).catch(function(erro) {
				$scope.mensagem = {
					texto: 'Não foi possível salvar'
				};
			});
	};

	// contatos disponíveis p/ emergência
	Contato.query(function(contatos) {
		$scope.contatos = contatos;
	});

});