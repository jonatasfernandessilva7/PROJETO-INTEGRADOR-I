const monitor = require("../models/MonitorModel");
const aluno = require("../models/InsertUser");
const adm = require("../models/AdmModel");

async function createMonitor(nome, email, curso, senha) {
    const novoMonitor = await monitor.create({
        nome: nome,
        email: email,
        curso: curso,
        senha: senha
    });

    return novoMonitor;
}

async function deleteMonitor(email) {
    const del = await monitor.destroy({
        where: {
            email
        },
        force: true,
        truncate: true
    });

    return del;
}

async function deleteUsuario(email) {
    const del = await aluno.destroy({
        where: {
            email: email,
        },
        force: true,
        truncate: true
    });

    return del;
}


async function buscaMonitor(email) {
    let userFind = await monitor.findOne({   
        where: {email}
    });

    return userFind;
}

async function buscaAluno(email) {
    let userFind = await aluno.findOne({
        where: {
            email
        }
    });

    return userFind;
}

async function buscaAdm(email) {
    let userFind = await adm.findOne({
        where: {
            email
        }
    });

    return userFind;
}


async function buscaMonitorADeletar(email){
    let userFind = await monitor.findOne({  
        email
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
    buscaMonitorADeletar
}