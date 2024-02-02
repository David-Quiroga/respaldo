const restaurante = {}

restaurante.mostrar = async (req, res) => {
    res.render('restaurante/listar')
}
restaurante.añadir = async (req, res) => {
    res.render('restaurante/añadir')
}
module.exports = restaurante