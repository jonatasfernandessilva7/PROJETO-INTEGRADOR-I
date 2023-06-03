const { getEventListeners } = require('events');
var express = require('express');
const Sequelize = require("sequelize");
const Monitor = require("../models/MonitorModel");

const createMonitor = async (req, res) => {
    const monitorFind = await Monitor.findOne({
        email: req.body.emailMonitorCadastro
    });


    if (monitorFind) {
        res.send('ja existe um usuario com esse email')
    } else {
        Monitor.create({
            nome: req.body.nomeMonitorCadastro,
            email: req.body.emailmonitorCadastro,
            curso: req.body.cursoMonitorCadastro,
            senha: req.body.senhaMonitorCadastro
        }).then(function () {
            res.redirect('/views/admgeral/AdicionarMonitor');
        }).catch(function (erro) {
            res.send("error")
        });
    }
}

module.exports = createMonitor;