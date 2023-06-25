const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function createUser (nome, email, curso, senha) {
    const user = await prisma.alunos.creat({
        data: {
            nome,
            email,
            curso,
            senha
        },
    });

    return user;    
}

async function updateAluno(email, senha) {
    const update = await prisma.alunos.update({
        senha
    },{
            email 
    });

    return update;
}

async function buscaAluno(email) {
    let userFind = await prisma.alunos.findUnique({where:{
        email
    }});

    return userFind;
}

async function buscaTodosOsDados(nome, email, curso, senha){
    let buscaTudo = await prisma.alunos.findUnique({
        nome,
        email,
        curso,
        senha
    });

    return buscaTudo;
}

async function updateDataAluno(nome, email,curso,senha){
    const updateData = await prisma.alunos.update({nome, curso, senha},{email});

    return updateData;
}


module.exports = {
    createUser,
    updateAluno,
    buscaAluno,
    buscaTodosOsDados,
    updateDataAluno,
};