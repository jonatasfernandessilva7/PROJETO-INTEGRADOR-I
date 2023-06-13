var express = require('express');
const monitorDelete = require("../models/MonitorModel");
const admService = require('../services/admService');

const delMonitor = async (req, res) => {

    const { email } =  req.body

    var buscaADeletar = await monitorDelete.findOne({
        email
    });

    if (buscaADeletar){
        try {
            delMonitor = await admService.deleteMonitor(email);
            res.redirect('/views/admgeral/DeletarMonitor')
        }catch(erro) {
            res.send("error" + erro)
        };
    }

}

module.exports = delMonitor;