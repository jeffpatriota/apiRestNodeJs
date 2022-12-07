const express = require('express');
const router = express.Router();

const AccountController = require('./controllers/AccountController');

//Criando a rota 
router.get('/account', AccountController.search);

module.exports = router;