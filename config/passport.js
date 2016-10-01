// contatooh/config/passport.js

var mongoose = require('mongoose');
var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var config = require('./config')();

module.exports = function() {

	var Usuario = mongoose.model('Usuario');

	console.log(config.clientID);

	// configura a estratégia de autenticação
	passport.use(new GitHubStrategy({
		clientID: config.clientID,
		clientSecret: config.clientSecret,
		callbackURL: 'http://' + config.domain + '/auth/github/callback'
	}, function(accessToken, refreshToken, profile, done) {
		Usuario.findOrCreate(
			{ 'login': profile.username },
			{ 'nome': profile.username },
			function(erro, usuario) {
				if (erro) {
					console.log(erro);
					return done(erro);
				}
				return done(null, usuario);
			}
		);
	}));

	// serializa o objectId do usuario da sessão
	passport.serializeUser(function(usuario, done) {
		done(null, usuario._id);
	});

	// deserializa o objectid do usuario da sessão
	passport.deserializeUser(function(id, done) {
		Usuario.findById(id).exec()
			.then(function(usuario) {
				done(null, usuario);
			});
	});

};