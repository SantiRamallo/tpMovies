var express = require('express');
var router = express.Router();

const moviesController = require('../controllers/moviesController.js')


router.get('/', moviesController.lista);
router.get('/:id', moviesController.detalle)


module.exports = router;