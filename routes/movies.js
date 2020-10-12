var express = require('express');
var router = express.Router();

const moviesController = require('../controllers/moviesController.js')


router.get('/', moviesController.lista);


module.exports = router;