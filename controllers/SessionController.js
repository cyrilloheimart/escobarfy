const { query } = require('../database/connections');
var jwt = require('jsonwebtoken');
const { getUser } = require('../queries/user');

function AuthJWT(req, res) {
	const { login, senha } = req.body;
	if (!login || !senha) {
		res.status(400).send('Insira login e senha pra continuar');
	}

	try {
		query(getUser(login, senha), (error, result) => {
			if (error) {
				res.status(500).send('Ocorreu um erro inesperado.');
			}
			if (!result.length) {
				res.status(404).send('Usuário não existe.');
			}

			const token = jwt.sign({ id: result[0].id }, process.env.SECRET, {
				expiresIn: 30000,
			});

			return res.status(200).json({ token: token });
		});
	} catch (err) {
		res.status(500).send('Ocorreu um erro inesperado.');
	}
}

module.exports = { AuthJWT };
