// contatooh/config/env/prd.js

module.exports = {

	env: 'prd',

	domain: process.env.OPENSHIFT_APP_DNS,
	address: process.env.OPENSHIFT_NODEJS_IP,
	port: process.env.OPENSHIFT_NODEJS_PORT,
	db: process.env.OPENSHIFT_MONGODB_DB_URL + 'contatooh',

	clientID: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET

};