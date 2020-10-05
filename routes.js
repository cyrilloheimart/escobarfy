const express = require('express');

const login = require('./routes/login.route');
const users = require('./routes/users.route');
const fornecedores = require('./routes/fornecedores.route');
const materiais = require('./routes/materiais.route');
const solicitacoes = require('./routes/solicitacoes.route');
const cotacoes = require('./routes/cotacoes.route');

const routes = express.Router();

routes.use('/login', login);
routes.use('/users', users);
routes.use('/materiais', materiais);
routes.use('/fornecedores', fornecedores);
routes.use('/solicitacoes', solicitacoes);
routes.use('/cotacoes', cotacoes);

module.exports = routes;
