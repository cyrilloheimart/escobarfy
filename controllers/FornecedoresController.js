const { query } = require('../database/connections');
const {
	setFornecedor,
	getAllFornecedores,
	getFornecedor,
} = require('../queries/fornecedores');

function IncluirFornecedor(req, res) {
	const { nome, cnpj, fantasia } = req.body;
	query(setFornecedor(nome, cnpj, fantasia), (error) => {
		if (error) {
			res.status(500).json({ message: 'Ocorreu um erro inesperado.', error });
		}

		res.status(200).send('Fornecedor incluido com sucesso');
	});
}

function ListarFornecedores(req, res) {
	query(getAllFornecedores(), (error, result) => {
		if (error) {
			res.status(500).json({ message: 'Ocorreu um erro inesperado.', error });
		}

		res.status(200).json(result);
	});
}

function buscarFornecedor(req, res) {
	query(getFornecedor(req.params.nome), (error, result) => {
		if (error) {
			res.status(500).json({ message: 'Ocorreu um erro inesperado.', error });
		}

		res.status(200).json(result);
	});
}

module.exports = {
	IncluirFornecedor,
	ListarFornecedores,
	buscarFornecedor,
};
