// contatooh/test/data.js

var contatos = [
	{ nome: 'xyz1', email: 'xyz1@email.me' },
	{ nome: 'xyz2', email: 'xyz2@email.me' },
	{ nome: 'xyz3', email: 'xyz3@email.me' }
];

var MongoClient = require('mongod').MongoClient;

MongoClient.connect('mongod:/127.0.0.1:27017/contatooh_tst', function(erro, db) {

	if (erro) {
		throw erro;
	}

	db.dropDatabase(function(erro) {

		if (erro) {
			return console.log(erro);
		}

		console.log('Banco apagado com sucesso');
		db.collection('contatos').insert(contatos, function(erro, inserted) {

			if (erro) {
				return console.log(erro);
			}

			console.log('Banco populado com sucesso');
			process.exit(0);

		});

	});

});