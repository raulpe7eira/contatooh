// contatooh/config/env/test.js

module.exports = {

	env: 'tst',
	db: 'mongodb://localhost/contatooh_tst',

	sauceTestName: 'Contatooh E2E Testing',
	sauceUsername: process.env.SAUCE_USERNAME,
	sauceAccessKey: process.env.SAUCE_ACCESS_KEY,

	travisJobNumber: process.env.TRAVIS_JOB_NUMBER,
	travisBuildNumber: process.env.TRAVIS_BUILD_NUMBER,

	clientID: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET,

	seleniumUsername: process.env.SELENIUM_USERNAME,
 	seleniumPassword: process.env.SELENIUM_PASSWORD

};