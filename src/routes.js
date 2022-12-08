const express = require('express');
const router = express.Router();

const AccountController = require('./controllers/AccountController');

const MonetaryController = require('./controllers/MonetaryController');

const TransferController = require('./controllers/TransferController');

//Criando a rota 
router.get('/account', AccountController.search);

router.post('/monetary', MonetaryController.deposit);

router.post('/transfer', TransferController.transfer);





module.exports = router;