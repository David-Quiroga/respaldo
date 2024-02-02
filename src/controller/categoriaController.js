const categoria = {}

const { Path } = require('path');

const orm = require('../Database/dataBase.orm')
const sql = require('../Database/dataBase.sql')

categoria.mostrar = (req, res) => {
    res.render('categoria/agregar');
}

categoria.mandar = async (req, res) => {
    const id = req.user.idGerente
    const { idCategoria, categoryName } = req.body
    const sendCategory = {
        categoryName
    }
    await orm.categoria.create(sendCategory)
    res.redirect('/categoria/lista/' + id);
}

categoria.lista = async (req, res) => {
    const lista = await sql.query('select * from categorias')
    res.render('categoria/lista', { lista })
}

categoria.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from categorias where idCategoria = ?', [ids])
    res.render('categoria/editar', {lista})
}

categoria.actualizar = async (req, res) => {
    const id = req.user.idGerente
    const ids = req.params.id
    const { idCategoria, categoryName } = req.body
    const sendCategory = {
        categoryName
    }
    await orm.tienda.findOne({ where: {idTienda: ids } })
        .then(actualizar => {
            actualizar.update(sendCategory)
            req.flash('success', 'Actualizado con extio')
        })
        res.redirect('/categoria/lista/' + ids);
}

module.exports = categoria