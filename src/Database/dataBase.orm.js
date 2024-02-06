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
	//const menuModel = require('../models/menu')
	const postresModel = require('../models/postres')
	const sopasModel = require('../models/sopas')
	const bebidasModel	= require('../models/bebidas')
	const entradaModel = require('../models/entradas')

	
	//sincronia
	
	const restaurantes =  tiendaModel(sequelize, Sequelize)
	const dueño = dueñoModel(sequelize, Sequelize)
	const cliente = clienteModel(sequelize, Sequelize)
	//const menu = menuModel(sequelize, Sequelize)
	const postres = postresModel(sequelize, Sequelize)
	const sopas = sopasModel(sequelize, Sequelize)
	const entrada = entradaModel(sequelize, Sequelize)
	const bebida = bebidasModel(sequelize, Sequelize)
	

	dueño.hasMany(restaurantes)
	restaurantes.belongsTo(dueño)

	restaurantes.hasMany(postres)
	postres.belongsTo(restaurantes)
	
	restaurantes.hasMany(sopas)
	sopas.belongsTo(restaurantes)
	
	restaurantes.hasMany(entrada)
	entrada.belongsTo(restaurantes)
	
	restaurantes.hasMany(bebida)
	bebida.belongsTo(restaurantes)
	


	
	module.exports = {
		dueño,
		restaurantes,
		cliente,
		postres,
		bebida,
		sopas,
		entrada
	};
