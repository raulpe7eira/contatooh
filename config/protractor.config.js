// contatooh/config/protractor.config.js

var config = require('./config')();

exports.config = {

	// sauce labs integration
	sauceUser: config.sauceUsername,
	sauceKey: config.sauceAccessKey,
	capabilities: {
		'name': config.sauceTestName,
		'browserName': 'chrome',
		'tunnel-identifier': config.travisJobNumber,
		'build': config.travisBuildNumber
	},

	// appveyor integration
	localSeleniumStandaloneOpts: {
		args: ['-Djna.nosys=true']
	},

	specs: ['../test/e2e/**/*.js'],

	onPrepare: function() {
		browser.driver.get('http://' + config.domain + '/#/auth')
			.then(function() {

				// sign-in page
				browser.driver.findElement(by.id('entrar')).click();

				// login page + authorize application (optional)
				browser.driver.findElement(by.id('login_field')).sendKeys(config.seleniumUsername);
				browser.driver.findElement(by.id('password')).sendKeys(config.seleniumPassword);
				browser.driver.findElement(by.name('commit')).click();

			});
	}

};