const express = require('express');
const router = express.Router()

const {mostrar, editar} = require('../controller/metodos.controller')

router.get('/agregar',mostrar);
router.get('/editar', editar);

module.exports = router