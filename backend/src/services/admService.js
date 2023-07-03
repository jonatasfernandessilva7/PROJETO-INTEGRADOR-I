const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function createMonitor(nome, email, curso, senha, laboratorio) {
    const novoMonitor = await prisma.monitores.create({
        data: {
            nome,
            email,
            curso,
            senha,
            laboratorio
        }
    });

    return novoMonitor;
}

async function deleteMonitor(email) {
    const del = await prisma.monitores.delete({
        where: {
            email
        },
    });

    return del;
}

async function deleteUsuario(email) {
    const del = await prisma.alunos.delete({
        where: {
            email
        },
    });

    return del;
}


async function buscaMonitor(email) {
    let userFind = await prisma.monitores.findUnique({
        where: { email }
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


async function buscaUsuarioADeletar(email) {
    let userFind = await prisma.alunos.findUnique({
        where: {
            email
        }
    });

    return userFind;
}

async function buscaAlunos () {

    let users = await prisma.alunos.findMany();
    return users
}

async function adicionarLaboratorios(numero, status){

    let newLab = await prisma.laboratorios.create({
        data: {
            status,
            numero
        }
    })

    return newLab;

}

module.exports = {
    createMonitor,
    deleteUsuario,
    buscaAluno,
    buscaAdm,
    buscaMonitor,
    deleteMonitor,
    buscaUsuarioADeletar,
    buscaAlunos,
    adicionarLaboratorios,
}