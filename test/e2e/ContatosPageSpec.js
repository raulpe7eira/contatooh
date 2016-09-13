// contatooh/test/e2e/ContatosPageSpec.js

var ContatosPage = require('./pages/ContatosPage');

describe('Página principal', function() {

	var pagina = new ContatosPage();

	beforeEach(function() {
		pagina.visitar();
	});

	it('Deve estar logado', function() {
		pagina.obtemUsuarioLogado().then(function(texto) {
			expect(texto.trim().length).toBeGreaterThan(0);
		});
	});

	it('Deve remover um contato da lista', function() {
		var totalAntes = pagina.obterTotalDeItensDaLista();
		pagina.removerPrimeiroItemDaLista();
		expect(pagina.obterTotalDeItensDaLista()).toBeLessThan(totalAntes);
	});
});