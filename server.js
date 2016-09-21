// contatooh/server.js

var http = require('http');
var app = require('./config/express')();
var config = require('./config/config')();

require('./config/passport')();
require('./config/database')(config.db);

http.createServer(app).listen(config.port, config.address, function() {

	console.log('[%s \\ %s] Node Server! Inicializado em %s:%d ...',
		config.env.toUpperCase(), new Date(Date.now()).toLocaleString('pt-BR'),
		config.address, config.port);

});