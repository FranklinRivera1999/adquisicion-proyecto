const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const auth = require('../controllers/auth.controller');

router.post('/', auth.crearSession);

module.exports = router;