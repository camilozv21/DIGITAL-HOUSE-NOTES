const express = require('express')
const path = require('path');
const productControllers = require('../controllers/productControllers');

const router = express.Router();

router.get('/cart', productControllers.getCart)

module.exports = router