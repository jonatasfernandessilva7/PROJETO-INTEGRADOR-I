const insertUser = require("../models/InsertUser");

async function createUser (nome, email, curso, senha) {
    const novousuario = await insertUser.create({
        nome: nome,
        email : email,
        curso: curso,
        senha:senha
    });

    return novousuario;
}

async function updateAluno(email, senha) {
    const update = await insertUser.update({
        senha: senha
    },{
            email : email
    });

    return update;
}

async function buscaAluno(email) {
    let userFind = await insertUser.findOne({where:{
        email
    }});

    return email;
}

module.exports = {
    createUser,
    updateAluno,
    buscaAluno
};