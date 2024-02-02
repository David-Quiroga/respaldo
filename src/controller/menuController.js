const menu = {}

const orm = require('../Database/dataBase.orm')
const sql = require('../Database/dataBase.sql')

menu.mostrar = (req, res) => {
    res.render('menu/menuListar');
}

// menu.mandar = async (req, res) => {
//     const id = req.user.idGerente
//     const { idMenu, menuName } = req.body
//     const sendCategory = {
//         menuName
//     }
//     await orm.menu.create(sendCategory)
//     res.redirect('/menu/lista/' + id);
// }

// menu.lista = async (req, res) => {
//     const lista = await sql.query('select * from menus')
//     res.render('menu/lista', { lista })
// }

// menu.traer = async (req, res) => {
//     const ids = req.params.id
//     const lista = await sql.query('select * from menus where idMenus = ?', [ids])
//     res.render('menu/editar', {lista})
// }

// menu.actualizar = async (req, res) => {
//     const id = req.user.idGerente
//     const ids = req.params.id
//     const { idMenu, menuName } = req.body
//     const sendCategory = {
//         menuName
//     }
//     await orm.tienda.findOne({ where: {idTienda: ids } })
//         .then(actualizar => {
//             actualizar.update(sendCategory)
//             req.flash('success', 'Actualizado con extio')
//         })
//         res.redirect('/menu/lista/' + ids);
// }

module.exports = menu