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
module.exports = dashboard