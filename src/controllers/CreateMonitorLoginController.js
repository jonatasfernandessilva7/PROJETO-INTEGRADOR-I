const { getEventListeners } = require('events');
var express = require('express');
const Sequelize = require("sequelize");
const monitor = require("../models/MonitorModel");

const LoginMonitor = async (req, res) => {

    let verificando = (req, res, next) => {
        if (req.session.emailMonitor && req.session.senhaMonitor) {
            next();
        }else{
            res.redirect("/");
        }
    }

    let searchUser = await monitor.findOne({
            email: req.body.emailMonitor,
            senha: req.body.senhaMonitor
    }).then(async () => {

        if (searchUser === null) {
            return res.status(400).send('user not found')
        } else if(!req.body.emailMonitor.includes("@alu.ufc.br")){
            return res.status(400).send('email errado')
        }else {
            res.render('Monitor/Monitor_home')
        }

    });


}

module.exports = LoginMonitor;