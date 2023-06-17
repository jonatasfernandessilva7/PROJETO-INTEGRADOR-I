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

    return userFind;
}

async function buscaTodosOsDados(nome, email, curso, senha){
    let buscaTudo = await insertUser.findOne({
        nome:nome,
        email: email,
        curso:curso,
        senha:senha
    });

    return buscaTudo;
}

async function updateDataAluno(nome, email,curso,senha){
    const updateData = await insertUser.update({nome, curso, senha},{email});

    return updateData;
}


module.exports = {
    createUser,
    updateAluno,
    buscaAluno,
    buscaTodosOsDados,
    updateDataAluno,
};