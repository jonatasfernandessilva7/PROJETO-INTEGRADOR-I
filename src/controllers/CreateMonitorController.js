const { getEventListeners } = require('events');
var express = require('express');
const Sequelize = require("sequelize");
const Monitor = require("../models/MonitorModel");

const createMonitor = (req, res) => {
    const userFind = Monitor.findOne({
        where: {
            email: req.body
        }
    })
    if (userFind) {
        res.send('ja existe um usuario com esse email')
    } else {
        Monitor.create({
            nome: req.body.nomeMonitor,
            email: req.body.emailMonitor,
            curso: req.body.cursoMonitor,
            senha: req.body.senhaMonitor
        }).then(function () {
            res.render('Monitor/loginMonitor');
        }).catch(function (erro) {
            res.render('Monitor/cadastroMonitor');
        })
    }
}

module.exports = createMonitor;