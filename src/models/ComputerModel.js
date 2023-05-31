const { sequelize } = require("./db");
const db = require("./db");

//criando modelo dos computadores

const Computer = sequelize.define('computadores', {
    nome:{
        type: db.Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    numero: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Computer;