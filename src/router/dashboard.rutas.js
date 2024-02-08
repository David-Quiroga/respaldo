const express = require('express');
const rutas = express.Router()

const {showDashboard, showForm, showMetodos, showCarrito, showMenu,} = require('../controller/dashboard.controller')

rutas.get('/dashboard', showDashboard)
rutas.get('/crearMenu', showForm)
rutas.get('/metodos', showMetodos)
rutas.get('/visualizar', showMenu)
//rutas.get('/metodos', listar)
rutas.get('/carrito', showCarrito)

module.exports = rutas