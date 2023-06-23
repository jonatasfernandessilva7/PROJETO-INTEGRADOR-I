const { sequelize } = require("../config/db");
const db = require("../config/db");

//criando modelo dos computadores

const Computer = sequelize.define('computadores', {
    nome:{
        type: db.Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    numero: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    status: {
        type: db.Sequelize.STRING,
        allowNull: false,
        defaultValue: 'livre'
    }
});

module.exports = Computer;