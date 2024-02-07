const express = require('express');
const rutas = express.Router()

const {showDashboard, showForm, showMetodos, showCarrito} = require('../controller/dashboard.controller')

rutas.get('/dashboard', showDashboard)
rutas.get('/crearMenu', showForm)
rutas.get('/metodos', showMetodos)
rutas.get('/carrito', showCarrito)

module.exports = rutas