const { getEventListeners } = require('events');
var express = require('express');
const Sequelize = require("sequelize");
const monitorDelete = require("../models/MonitorModel");

const delMonitor = async (req, res) => {


    const buscaADeletar = await monitorDelete.findOne({
        email : req.body.emailMonitorDelete
    }).then(() => {
        monitorDelete.destroy({email:req.body.emailMonitorDelete, force: true, truncate: true}).then(function () {
            res.redirect('/views/admgeral/DeletarMonitor');
        }).catch(function (erro) {
            res.send("error" + erro);
        });
    }).catch((erro) => {
        res.send("error" + erro)
    });

}

module.exports = delMonitor;