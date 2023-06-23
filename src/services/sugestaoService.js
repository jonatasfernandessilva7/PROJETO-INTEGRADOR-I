const insertUser = require("../models/alunoModel");
require("dotenv").config();

async function buscaEmail(email) {
    let busca = await insertUser.findOne({
        email
    });
    return busca;
}


module.exports = {
    buscaEmail
}