// contatooh/app/controllers/contato.js

var sanitize = require('mongo-sanitize');

module.exports = function(app) {

	var Contato = app.models.contato;

	var controller = {};

	controller.listaContatos = function(req, res) {

		var promise = Contato.find().populate('emergencia').exec()
			.then(function(contatos) {
				res.json(contatos);
			}, function(erro) {
				console.error(erro);
				res.status(500).json(erro);
			});

	};

	controller.obtemContato = function(req, res) {

		var _id = sanitize(req.params.id);
		Contato.findById(_id).exec()
			.then(function(contato) {
				if (!contato) {
					throw new Error('Contato não encontrado');
				}
				res.json(contato);
			}, function(erro) {
				console.log(erro);
				res.status(404).json(erro);
			});

	};

	controller.removeContato = function(req, res) {

		var _id = sanitize(req.params.id);
		Contato.remove({ '_id': _id }).exec()
			.then(function() {
				res.status(204).end();
			}, function(erro) {
				return console.error(erro);
			});

	};

	controller.salvaContato = function(req, res) {

		var dados = {
			"nome": req.body.nome,
			"email": req.body.email,
			"emergencia": req.body.emergencia || null
		};

		var _id = req.body._id;
		if (_id) {
			Contato.findByIdAndUpdate(_id, dados).exec()
				.then(function(contato) {
					res.json(contato);
				}, function(erro) {
					console.error(erro);
					res.status(500).json(erro);
				});
		} else {
			Contato.create(dados)
				.then(function(contato) {
					res.status(201).json(contato);
				}, function(erro) {
					console.log(erro);
					res.status(500).json(erro);
				});
		}

	};

	return controller;

};