const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function createMonitor(nome, email, curso, senha) {
    const novoMonitor = await prisma.monitores.create({
        nome: nome,
        email: email,
        curso: curso,
        senha: senha
    });

    return novoMonitor;
}

async function deleteMonitor(email) {
    const del = await prisma.monitores.delete({
        where: {
            email
        },
        force: true,
        truncate: true
    });

    return del;
}

async function deleteUsuario(email) {
    const del = await prisma.alunos.delete({
        where: {
            email
        },
        force: true,
        truncate: true
    });

    return del;
}


async function buscaMonitor(email) {
    let userFind = await prisma.monitores.findUnique({   
        where: {email}
    });

    return userFind;
}

async function buscaAluno(email) {
    let userFind = await prisma.alunos.findUnique({
        where: {
            email
        }
    });

    return userFind;
}

async function buscaAdm(email) {
    let userFind = await prisma.administradores.findUnique({
        where: {
            email
        }
    });

    return userFind;
}


async function buscaUsuarioADeletar(email){
    let userFind = await prisma.alunos.findUnique({  
        where:{
            email
        }
    });

    return userFind;
}

module.exports = {
    createMonitor,
    deleteUsuario,
    buscaAluno,
    buscaAdm,
    buscaMonitor,
    deleteMonitor,
    buscaUsuarioADeletar
}