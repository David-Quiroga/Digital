const express = require('express');
const rutas = express.Router()

const { mostrar, mandar, lista, traer, actualizar, showDashboard } = require('../controller/tienda.controller')
const { isLoggedIn } = require('../lib/auth')

rutas.get('/agregar/:id', isLoggedIn, mostrar)
rutas.post('/agregar/:id',isLoggedIn,  mandar)
rutas.get('/lista/:id',isLoggedIn, lista)
rutas.get('/editar/:id',isLoggedIn, traer)
rutas.post('/editar/:id',isLoggedIn, actualizar)
rutas.get('/dashboard', isLoggedIn, showDashboard)

module.exports = rutas

