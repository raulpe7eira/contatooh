// contatooh/config/express.js

var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var helmet = require('helmet');
var expressLoad = require('express-load');

module.exports = function() {

	var app = express();

	// ambiente
	app.set('port', 3000);

	// public folder
	app.use(express.static('./public'));

	// ejs engine
	app.set('view engine', 'ejs');
	app.set('views', './app/views');

	// override delete and put http-header
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	app.use(require('method-override')());

	// oauth
	app.use(require('cookie-parser')());
	app.use(require('express-session')({
		secret: 'r3m',
		resave: true,
		saveUninitialized: true
	}));
	app.use(passport.initialize());
	app.use(passport.session());

	// helmet
	app.use(helmet.frameguard());
	app.use(helmet.xssFilter());
	app.use(helmet.noSniff());
	app.use(helmet.hidePoweredBy({ setTo: 'PHP 5.5.1.4' }));
	app.disable('x-powered-by');

	// load mWc
	expressLoad('models', { cwd: 'app' })
		.then('controllers')
		.then('routes')
		.into(app);

	// 404
	app.get('*', function(req, res) {
		res.status(404).render('404');
	});

	return app;

};