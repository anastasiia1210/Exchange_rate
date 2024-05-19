const express = require('express');
const router = express.Router();
const exchangeRateController = require('../controllers/exchangeRate');
const userController = require('../controllers/user');

router.get('/', (req, res) => {
    res.send('Welcome to the Exchange Rate API');
});

router.get('/rate', exchangeRateController.getExchangeRate);
router.get('/subscribe', userController.getAllUsers);
router.post('/subscribe', userController.addUser);


module.exports = router;
