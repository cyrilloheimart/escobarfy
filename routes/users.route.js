const users = require('express').Router();
const { checkIsValid } = require('../utils/checkJWT');

const UsuariosController = require('../controllers/UsuariosController');

users.use(checkIsValid);

users.post('/add', UsuariosController.IncluirUsuario);
users.delete('/delete', UsuariosController.ExcluirUsuario);

module.exports = users;
