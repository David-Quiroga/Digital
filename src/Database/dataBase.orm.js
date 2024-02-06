const { Sequelize } = require("sequelize");

const { MYSQLHOST, MYSQLUSER, MYSQLPASSWORD, MYSQLDATABASE, MYSQLPORT, MYSQL_URI, } = require("../keys");

const sequelize = new Sequelize(MYSQLDATABASE, MYSQLUSER, MYSQLPASSWORD, {
	host: MYSQLHOST,
	port: MYSQLPORT,
	dialect: 'mysql'
});

sequelize.authenticate()
	.then(() => {
		console.log("conectado");
	})
	.catch((err) => {
		console.log("no se conecto");
	});

sequelize.sync({ force: false })
	.then(() => {
		console.log("tablas sincronizadas");
	});

	const tiendaModel = require('../models/tienda') 
	const dueñoModel = require('../models/dueño') 
	const clienteModel = require('../models/gerente'); 
	const menuModel = require('../models/menu')

	
	//sincronia
	
	const restaurantes =  tiendaModel(sequelize, Sequelize)
	const dueño = dueñoModel(sequelize, Sequelize)
	const cliente = clienteModel(sequelize, Sequelize)
	const menu = menuModel(sequelize, Sequelize)
	
	//relacion tienda-dueño
	dueño.hasMany(restaurantes)
	restaurantes.belongsTo(dueño)

	//relacion factura-cliente
	restaurantes.hasMany(menu)
	menu.belongsTo(restaurantes)
	
	dueño.hasMany(menu)
	menu.belongsTo(dueño)
	
	module.exports = {
		dueño,
		restaurantes,
		cliente,
		menu
	};
