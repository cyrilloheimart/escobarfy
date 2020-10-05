const { query } = require('../database/connections');
const { someUser, setUser, deleteUser } = require('../queries/user');

function IncluirUsuario(req, res) {
	const { login, senha } = req.body;
	const checkIfUserExist = (error, result) => {
		if (error) {
			res.status(500).send('Ocorreu um erro inesperado.');
		}
		if (result[0]['COUNT(*)']) {
			res.status(400).send('Usuário já existe.');
		}
		addUser();
	};

	const addUser = () => {
		query(setUser(login, senha), (error) => {
			if (error) {
				res.status(500).send('Ocorreu um erro inesperado.');
			}

			res.status(200).send('Usuário incluido com sucesso');
		});
	};

	query(someUser(login), checkIfUserExist);
}

function ExcluirUsuario(req, res) {
	const { login, senha } = req.body;

	const excluirUsuario = () => {
		query(deleteUser(login, senha), (error) => {
			if (error) {
				res.status(500).send('Ocorreu um erro inesperado.');
			}

			res.status(200).send('Usuário excluido com sucesso');
		});
	};

	excluirUsuario();
}

module.exports = { IncluirUsuario, ExcluirUsuario };
