const express = require('express');
const Router = express.Router()

const { mostrar} = require('../controller/menuController')
// const {isLoggedIn} = require('../lib/auth')

Router.get('/menuListar', mostrar)
// rutas.post('/agregar/:id',isLoggedIn,  mandar)
// rutas.get('/lista/:id',isLoggedIn, lista)
// rutas.get('/editar/:id',isLoggedIn, traer)
// rutas.post('/editar/:id',isLoggedIn, actualizar)

module.exports = Router