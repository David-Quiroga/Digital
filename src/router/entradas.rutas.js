const express = require('express');
const router = express.Router()

const {mostrar, mandar, listar} = require('../controller/entradas.controller')

router.get('/agregar',mostrar);
router.post('/agregar',mandar)
router.get('/listar',listar)


module.exports = router