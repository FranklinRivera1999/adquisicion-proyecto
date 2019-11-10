const express = require('express');
const router = express.Router();

const ticket= require('../controllers/ticket.controller');

router.get('/', ticket.getTickets);

module.exports = router;