const { sequelize } = require("../config/db");
const db = require("../config/db");

//criando modelo dos labs

const Lab = sequelize.define('laboratorios', {
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

module.exports = Lab;