const dashboard = {}

dashboard.showDashboard = (req, res) => {
    res.render('dashboard/dashboard')
}

dashboard.showForm = (req, res) => {
    res.render('dashboard/crearMenu')
}
module.exports = dashboard