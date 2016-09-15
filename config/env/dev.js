// contatooh/config/env/dev.js

module.exports = {

	env: 'dev',

	domain: 'localhost:3000',
	address: 'localhost',
	port: 3000,
	db: 'mongodb://localhost/contatooh_dev',

	clientID: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET,

	seleniumUsername: process.env.SELENIUM_USERNAME,
 	seleniumPassword: process.env.SELENIUM_PASSWORD

};