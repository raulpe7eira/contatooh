// contatooh/config/database.js

var mongoose = require('mongoose');
var config = require('./config')();

module.exports = function(uri) {

	mongoose.Promise = require('bluebird');
	mongoose.connect(uri);

	mongoose.connection.on('connected', function() {
		console.log('[%s \\ %s] Mongoose! Conectado em %s ...',
			config.env.toUpperCase(), new Date(Date.now()).toLocaleString('pt-BR'),
			uri);
	});

	mongoose.connection.on('disconnected', function() {
		console.log('[%s \\ %s] Mongoose! Desconectado de %s ...',
			config.env.toUpperCase(), new Date(Date.now()).toLocaleString('pt-BR'),
			uri);
	});

	mongoose.connection.on('error', function(erro) {
		console.log('[%s \\ %s] Mongoose! Erro na conexão: %s',
			config.env.toUpperCase(), new Date(Date.now()).toLocaleString('pt-BR'),
			erro);
	});

	process.on('SIGINT', function() {
		mongoose.connection.close(function() {
			console.log('[%s \\ %s] Mongoose! Desconectado pelo término da aplicação',
				config.env.toUpperCase(), new Date(Date.now()).toLocaleString('pt-BR'));
			process.exit(0);
		});
	});

};