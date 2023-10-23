const express = require('express');
const pdvController = require('./controllers/pdvController');

const router = express.Router();

// router.get('/', pdvController.getDadosFilial);
router.get('/', pdvController.getQtdCuponsFilial);

module.exports = router;