const login = require('express').Router();

const SessionController = require('../controllers/SessionController');

login.post('/', SessionController.AuthJWT);

module.exports = login;
