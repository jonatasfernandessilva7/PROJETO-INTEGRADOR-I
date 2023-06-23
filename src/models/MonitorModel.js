const { sequelize } = require("../config/db");
const db = require("../config/db");

//criando modelo do banco

const Monitor = sequelize.define('monitores', {
    id: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    nome:{
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: db.Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    curso: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Monitor;