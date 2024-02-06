const express = require('express');
const rutas = express.Router()

const {showDashboard, showForm} = require('../controller/dashboard.controller')

rutas.get('/dashboard', showDashboard)
rutas.get('/crearMenu', showForm)

module.exports = rutas