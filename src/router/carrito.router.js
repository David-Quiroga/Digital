const express = require('express');
const router = express.Router()

const {editar} = require('../controller/carrito.controller')

router.get('/editar', editar);

module.exports = router