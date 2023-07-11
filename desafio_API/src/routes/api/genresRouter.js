const apiController = require('../../controllers/api/genresController');

const express = require('express')

const router = express.Router();

router.get('/genresjson', apiController.getMostrar);

module.exports = router;