const express = require('express');
const rutas = express.Router()

const {mostrar, show,ingresar, mandar, lista } = require('../controller/menu.controller');
const { isLoggedIn } = require('../lib/auth');

rutas.get('/menuListar/:id', mostrar)
rutas.get('/formulariomenu',isLoggedIn, ingresar)
rutas.post('/formulariomenu', isLoggedIn, mandar)
rutas.get('/menuLista/:id', isLoggedIn, lista)

module.exports = rutas
