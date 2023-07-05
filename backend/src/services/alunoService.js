import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createUser (nome, email, curso, senha) {
    const user = await prisma.alunos.create({
        data: {
            nome,
            email,
            curso,
            senha
        }
    });

    return user;    
}

async function updateAluno(email, senha) {
    const updateSenha = await prisma.alunos.update({
       where:{
            email,
       },
       data:{
            senha,
       }, 
    });

    return updateSenha;
}

async function buscaAluno(email) {
    let userFind = await prisma.alunos.findUnique({
        where:{
            email
        }
    });

    return userFind;
}

async function buscaTodosOsDados(nome, email, curso, senha){
    let buscaTudo = await prisma.alunos.findUnique({
        where: {
            email,
        },
        data: {
            nome,
            curso,
            senha
        }
    });

    return buscaTudo;
}

async function updateDataAluno(nome, email,curso,senha){
    const updateData = await prisma.alunos.update({
        where:{
            email
        },
        data:{
            nome, curso, senha
        }
    });

    return updateData;
}

async function buscaAlunos(){
    const users = await prisma.alunos.findMany();
    return users
}


module.exports = {
    createUser,
    updateAluno,
    buscaAluno,
    buscaTodosOsDados,
    updateDataAluno,
    buscaAlunos
};