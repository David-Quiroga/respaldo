const subCategoria = {}



const orm = require('../Database/dataBase.orm')
const sql = require('../Database/dataBase.sql')

subCategoria.mostrar = (req, res) => {
    res.render('subCategoria/agregar');
}

subCategoria.mandar = async (req, res) => {
    const id = req.user.idGerente
    const { idSubCategoria, nameSubCategory, price } = req.body
    const sendCategory = {
        nameSubCategory,
        price
    }
    await orm.subCategoria.create(sendCategory)
    res.redirect('/subCategoria/lista/' + id);
}

subCategoria.lista = async (req, res) => {
    const lista = await sql.query('select * from subCategorias')
    res.render('subCategoria/lista', { lista })
}

subCategoria.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from sunCategorias where idsubCategoria = ?', [ids])
    res.render('subCategoria/editar', {lista})
}

subCategoria.actualizar = async (req, res) => {
    const id = req.user.idGerente
    const ids = req.params.id
    const { idCategoria, categoryName } = req.body
    const sendCategory = {
        categoryName
    }
    await orm.subCategoria.findOne({ where: {idTienda: ids } })
        .then(actualizar => {
            actualizar.update(sendCategory)
            req.flash('success', 'Actualizado con extio')
        })
        res.redirect('/subCategoria/lista/' + ids);
}

module.exports = categoria