const express = require('express');
const router = express.Router()

const {mostrar,} = require('../controller/visualizar.controller')

//*FUNCIONAL

router.get('/visualizar',mostrar);


module.exports = router