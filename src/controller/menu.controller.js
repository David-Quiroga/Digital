const menu = {}

const orm = require('../Database/dataBase.orm')
const sql = require('../Database/dataBase.sql')

menu.mostrar = (req, res) => {
    res.render('menu/menuListar');
}
menu.ingresar = (req, res) => {
    res.render('menu/formulariomenu');
}

menu.mandar = async (req, res) => {
    const id = req.user.idGerente
    const {idMenu, nombreMenu, precioMenu, imageMenu, categoria } = req.body
    const newSend = {
        nombreMenu,
        precioMenu,
        categoria,
        imageMenu,
        gerenteIdGerente: id
    }
    await orm.menu.create(newSend)

    res.redirect('/menu/menuListar/' + id)
}

menu.lista = async(req, res) => {
    const lista = await sql.query('select * from menus')
    res.render('menu/menuLista', {lista})
}

module.exports = menu