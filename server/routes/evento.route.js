const express = require('express');
const router = express.Router();

const evento = require('../controllers/evento.controller');

router.get('/', evento.getEventos);


module.exports = router;