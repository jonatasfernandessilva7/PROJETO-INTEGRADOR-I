const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_SENHA,{
    host: process.env.DB_HOST,
    dialect: 'postgres'
});

console.log("concetado")

module.exports = {
    Sequelize : Sequelize,
    sequelize: sequelize
}