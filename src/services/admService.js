const monitor = require("../models/MonitorModel");

async function createMonitor (nome, email, curso, senha) {
    const novoMonitor = await monitor.create({
        nome: nome,
        email: email,
        curso: curso,
        senha: senha
    });

    return novoMonitor;
}

async function deleteUsuario(email) {
    const del = await monitor.destroy({
        email:email, 
        force: true, 
        truncate: true
    });

    return del;
}


async function buscaUsuario(email) {
    let userFind = await monitor.findOne({
        where: {
            email
        }
    });

    return email;
}

module.exports = {
    createMonitor,
    deleteUsuario,
    buscaUsuario
}