const { getEventListeners } = require('events');
var express = require('express');
const Sequelize = require("sequelize");
const monitorDelete = require("../models/MonitorModel");

const delMonitor = async (req, res) => {
    const monitorFind = await monitorDelete.findOne({
        email: req.body.emailMonitorDelete
    });


    if (monitorFind) {
        delMonitor.destroy({
            where :{
                nome: req.body.emailMonitorDelete,
            }
        }).then(function () {
            res.redirect('/views/admgeral/DeletarMonitor');
        }).catch(function (erro) {
            res.send("error")
        });
    }
}

module.exports = delMonitor;