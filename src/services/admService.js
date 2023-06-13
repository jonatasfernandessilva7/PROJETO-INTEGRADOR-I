const monitor = require("../models/MonitorModel");

async function createMonitor (nome, email, curso, senha) {
    const novoMonitor = monitor.create({
        nome: nome,
        email: email,
        curso: curso,
        senha: senha
    });

    return novoMonitor;
}

async function deleteMonitor(emailDelete) {
    const del = monitor.destroy({
        email:emailDelete, 
        force: true, 
        truncate: true
    });

    return del;
}

module.exports = {
    createMonitor,
    deleteMonitor
}