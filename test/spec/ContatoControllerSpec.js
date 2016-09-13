// contatooh/test/spec/ContatoControllerSpec.js

describe('ContatoController', function() {

	var $scope, $httpBackend;

	beforeEach(function() {
		module('contatooh');
		inject(function($injector, _$httpBackend_) {
			$scope = $injector.get('$rootScope').$new();

			$httpBackend = _$httpBackend_;
			$httpBackend.expectGET('/contatos/1').respond({ id: '1' });
			$httpBackend.expectGET('/contatos').respond([{}]);
		});
	});

	it('Deve criar um Contato vazio quando nenhum parâmetro de rota for passado', function() {
		inject(function($controller) {
			$controller('ContatoController', {
				'$scope': $scope
			});
			expect($scope.contato._id).toBeUndefined();
		});
	});

	it('Deve preencher o Contato quando parâmetro da rota for passado', inject(function($controller) {
		$controller('ContatoController', {
			'$routeParams': { id: 1 },
			'$scope': $scope
		});
		$httpBackend.flush();
		expect($scope.contato._id).toBeDefined();
	}));

});