// contatooh/test/spec/UiSpec.js

describe('uiPainel', function() {

	var $scope, element;

	beforeEach(function() {
		module('ui');
		module('uiTemplates');
		inject(function($rootScope, $compile) {
			$scope = $rootScope.$new();
			element = angular.element('<ui-painel titulo="Principal"><p>Oi</p></ui-painel>');
			$compile(element)($scope);
			$scope.$digest();
		});
	});

	it('deve criar o painel', function() {
		expect(element.find('h3').text()).toContain('Principal');
		expect(element.find('p').text()).toContain('Oi');
	});

});

describe('uiBotaoAviso', function() {

	var $scope, element;

	beforeEach(function() {
		module('ui');
		inject(function($rootScope, $compile) {
			$scope = $rootScope.$new();
			element = angular.element('<ui-botao-aviso acao="remove()" nome="Remover">');
			$compile(element)($scope);
			$scope.$digest();
		});
	});

	it('deve criar um botão de aviso com texto e função', function() {
		expect(element.text()).toContain('Remover');
		expect(element.attr('acao')).toContain('remove()');
	});

});

describe('uiFocus', function() {

	var $scope, element, evento = 'evtContatoSalvo';

	beforeEach(function() {
		module('ui');
		inject(function($rootScope, $compile) {
			$scope = $rootScope.$new();
			element = angular.element('<button ui-focus evento="' + evento + '">Voltar</button>');
			$compile(element)($scope);
			$scope.$digest();
		});
	});

	it('deve focar o botão', function() {
		angular.element(document.body).append(element);
		$scope.$broadcast(evento);
		expect(angular.element(document.activeElement).text()).toBe('Voltar');
	});

});