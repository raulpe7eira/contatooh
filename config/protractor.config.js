// contatooh/config/protractor.config.js

var configAuth = require('./auth');

exports.config = {

	specs: ['../test/e2e/**/*.js'],

	onPrepare: function(){
		browser.driver.get('http://localhost:3000')
			.then(function(){

				// sign-in page
				browser.driver.findElement(by.id('entrar')).click();

				// login page + authorize application (optional)
				browser.driver.findElement(by.id('login_field')).sendKeys(senha-usuario.gitHubAuthUserTest.username);
				browser.driver.findElement(by.id('password')).sendKeys(senha-usuario.gitHubAuthUserTest.password);
				browser.driver.findElement(by.name('commit')).click()
					.then(function() {
						browser.driver.getCurrentUrl(function(url) {
							console.log(url);
						});
					});

			});
	}

};