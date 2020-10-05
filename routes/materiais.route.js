const materiais = require('express').Router();
const { checkIsValid } = require('../utils/checkJWT');

const MateriaisController = require('../controllers/MateriaisController');

materiais.use(checkIsValid);

materiais.post('/add', MateriaisController.IncluirMaterial);
materiais.get('', MateriaisController.ListarMateriais);
materiais.get('/buscar/:nome', MateriaisController.buscarMaterial);
materiais.delete('/delete/:id', MateriaisController.ExcluirMaterial);

module.exports = materiais;
