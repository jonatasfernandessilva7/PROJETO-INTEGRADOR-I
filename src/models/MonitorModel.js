const { sequelize } = require("./db");
const db = require("./db");

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
        primaryKey: true
    },
    email: {
        type: db.Sequelize.STRING,
        allowNull: false
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