// contatooh/public/js/controllers/ContatosController.js

angular.module('contatooh').controller('ContatosController', function($scope, Contato) {

	$scope.mensagem = { texto: '' };

	$scope.contatos = [];

	$scope.filtro = '';

	$scope.init = function() {
		buscaContatos();
	};

	function buscaContatos() {
		Contato.query(function(contatos) {
			$scope.contatos = contatos;
			$scope.mensagem = {};
		}, function(erro) {
			console.log(erro);
			$scope.mensagem = {
				texto: 'Não foi possível obter a lista de contatos'
			};
		});
	}

	$scope.remove = function(contato) {
		Contato.delete(
			{ id: contato._id },
			buscaContatos,
			function(erro) {
				console.log(erro);
				$scope.mensagem = {
					texto: 'Não foi possível remover o contato'
				};
			}
		);
	};

	$scope.init();

});