const { sequelize } = require("./db");
const db = require("./db");
require("pg");

//criando modelo do banco

const Monitor = sequelize.define('monitores', {
    id: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    nomeMonitor:{
        type: db.Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    emailMonitor: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    cursoMonitor: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    senhaMonitor: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Monitor;;