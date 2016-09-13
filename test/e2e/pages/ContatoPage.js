// contatooh/test/e2e/pages/ContatoPage.js

module.exports = function() {

	this.visitar = function() {
		browser.get('http://localhost:3000/#/contato');
	};

	this.digitarNome = function(nome) {
		element(by.model('contato.nome')).sendKeys(nome);
	};

	this.digitarEmail = function(email) {
		element(by.model('contato.email')).sendKeys(email);
	};

	this.selecionarPrimeiraEmergenciaDaLista = function() {
		var firstOption = element.all(by.options('contato._id as contato.nome for contato in contatos')).first();
		if (firstOption) {
			firstOption.click();
		}
	};

	this.salvar = function() {
		element(by.css('.btn-primary')).click();
	};

	this.obtemMensagem = function() {
		return element(by.binding('mensagem.texto')).getText();
	};

};