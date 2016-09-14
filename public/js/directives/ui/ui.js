// contatooh/public/js/directives/ui/ui.js

angular.module('ui', [])
	.directive('uiPainel', function() {

		var directive = {};

		directive.restrict = 'EA';

		directive.scope = {
			titulo: '@'
		};

		directive.transclude = true;

		directive.templateUrl = 'js/directives/ui/ui-painel.html';

		return directive;

	})

	.directive('uiBotaoAviso', function() {

		var directive = {};

		directive.restrict = 'E';

		directive.scope = {
			nome: '@',
			acao: '&'
		};

		directive.template = '<button ng-click="acao()" class="btn btn-warning">{{nome}}</button>';

		return directive;

	})

	.directive('uiFocus', function() {

		var directive = {};

		directive.restrict = 'A';

		directive.scope = {
			evento: '@'
		};

		directive.link = function(scope, element) {
			scope.$on(scope.evento, function() {
				element[0].focus();
			});
		};

		return directive;

	});