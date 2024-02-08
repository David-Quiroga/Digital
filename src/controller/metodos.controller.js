const metodos ={}

const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

metodos.mostrar = (req, res) => {
    res.render('metodos/agregar');
}
metodos.editar = (req, res) => {
    res.render('metodos/editar');
}

module.exports = metodos