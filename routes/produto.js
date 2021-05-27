const express = require('express');
const router = express.Router();
const ProdutoController = require('../controllers/ProdutoController');
const { route } = require('./users');

router.get('/', ProdutoController.index)


module.exports = router;