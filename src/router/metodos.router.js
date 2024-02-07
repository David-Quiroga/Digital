const express = require('express');
const router = express.Router()

const {mostrar} = require('../controller/metodos.controller')

router.get('/agregar',mostrar);

module.exports = router