// contatooh/config/config.js

module.exports = function() {

	console.log('./env/' + process.env.NODE_ENV + ":" + ('./env/' + process.env.NODE_ENV).length);

	return require('./env/' + process.env.NODE_ENV);

};