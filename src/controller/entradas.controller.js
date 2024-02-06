const entradas = {}

const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

entradas.mostrar = (req, res) => {
    res.render('entradas/agregar');
}

entradas.mandar = async (req, res) => {
    const id = req.idEntrada
    const {nombre, descripcion,  precio} = req.body
    const nuevaEntrada = {
        nombre,
        descripcion,
        precio
    }
    await orm.entrada.create(nuevaEntrada)
    req.flash('success', 'Creaco con exito')
    res.redirect('/entradas/listar/');
}

entradas.listar = async(req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from entradas')
    res.render('entradas/listar', { lista })
}

module.exports = entradas