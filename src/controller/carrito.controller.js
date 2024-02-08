const carrito ={}

const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

carrito.editar = (req, res) => {
    res.render('carrito/editar');
}

module.exports = carrito