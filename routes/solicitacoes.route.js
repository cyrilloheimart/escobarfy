const solicitacoes = require('express').Router();
const { checkIsValid } = require('../utils/checkJWT');

const SolicitacoesController = require('../controllers/SolicitacoesController');

solicitacoes.use(checkIsValid);

solicitacoes.post('/abrir', SolicitacoesController.AbrirSolicitacao);
solicitacoes.post('/finalizar', SolicitacoesController.FinalizarSolicitacao);
solicitacoes.get('/', SolicitacoesController.ListarSolicitacoes);

module.exports = solicitacoes;
