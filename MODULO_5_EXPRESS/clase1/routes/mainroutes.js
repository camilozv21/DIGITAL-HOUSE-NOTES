const express = require('express')

const maincontroller = require('../controllers/mainControllers')

const router = express.Router();

router.get('/', maincontroller.getIndex) // Se evita poner products

router.get('/contact', maincontroller.getContact)

module.exports = router