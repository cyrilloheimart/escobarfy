const fornecedores = require('express').Router();
const { checkIsValid } = require('../utils/checkJWT');

const FornecedorProdutoController = require('../controllers/FornecedorProdutoController');
const FornecedoresController = require('../controllers/FornecedoresController');

fornecedores.use(checkIsValid);

fornecedores.post('/add', FornecedoresController.IncluirFornecedor);
fornecedores.get('/', FornecedoresController.ListarFornecedores);
fornecedores.get('/buscar/:nome', FornecedoresController.buscarFornecedor);

fornecedores.post(
	'/produto',
	FornecedorProdutoController.IncluirMaterialFornecedor
);

fornecedores.get(
	'/produto/:produto',
	FornecedorProdutoController.ListarFornecedoresProduto
);

module.exports = fornecedores;
