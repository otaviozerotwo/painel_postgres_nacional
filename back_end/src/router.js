const express = require('express');
const pdvController = require('./controllers/pdvController');

const router = express.Router();

router.get('/', pdvController.getAll);

module.exports = router;