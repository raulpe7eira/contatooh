// contatooh/config/env/development.js

module.exports = {

	env: 'dev',
	db: 'mongodb://localhost/contatooh_dev',

	clientID: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET,

	seleniumUsername: process.env.SELENIUM_USERNAME,
 	seleniumPassword: process.env.SELENIUM_PASSWORD

};