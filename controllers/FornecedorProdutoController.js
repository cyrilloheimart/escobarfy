const { query } = require('../database/connections');
const {
	setProdutoFornecedor,
	getFornecedorProduto,
} = require('../queries/fornecedores');

function IncluirMaterialFornecedor(req, res) {
	const { idFornecedor, idMaterial } = req.body;
	query(setProdutoFornecedor(idFornecedor, idMaterial), (error) => {
		if (error) {
			res.status(500).json({ message: 'Ocorreu um erro inesperado.', error });
		}

		res.status(200).send('Material incluido para o fornecedor');
	});
}

function ListarFornecedoresProduto(req, res) {
	const { produto } = req.params;
	query(getFornecedorProduto(produto), (error, result) => {
		if (error) {
			res.status(500).json({ message: 'Ocorreu um erro inesperado.', error });
		}

		res.status(200).json(result);
	});
}

module.exports = {
	IncluirMaterialFornecedor,
	ListarFornecedoresProduto,
};
