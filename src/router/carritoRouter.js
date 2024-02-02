const express = require('express');
const router = express.Router()

const {mostrar} = require('../controller/carritoController')

router.get('/carrito', mostrar)

module.exports = router