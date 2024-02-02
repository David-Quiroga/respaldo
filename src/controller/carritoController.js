const carrito = {}

carrito.mostrar = async (req, res) => {
    res.render('carrito/carrito')
}

module.exports = carrito