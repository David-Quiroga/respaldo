const dashboard = {}

dashboard.showDashboard = (req, res) => {
    res.render('dashboard/dashboard')
}

dashboard.showForm = (req, res) => {
    res.render('dashboard/crearMenu')
}
dashboard.showMetodos = (req, res) => {
    res.render('dashboard/metodos')
}
dashboard.showCarrito = (req, res) => {
    res.render('dashboard/carrito')
}
dashboard.showMenu = (req, res) => {
    res.render('dashboard/visualizar')
}
dashboard.listar = async(req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from metodos')
    res.render('metodos', { lista })
}
module.exports = dashboard