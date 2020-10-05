const cotacoes = require('express').Router();
const { checkIsValid } = require('../utils/checkJWT');

const CotacoesController = require('../controllers/CotacoesController');

cotacoes.post('/add', CotacoesController.IncluirCotacao);

cotacoes.use(checkIsValid);

cotacoes.post('/aprovar', CotacoesController.AprovarCotacao);
cotacoes.get('/:solicitacao', CotacoesController.CotacaoPorSolicitacao);

module.exports = cotacoes;
