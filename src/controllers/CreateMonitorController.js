var express = require('express');;
const Monitor = require("../models/MonitorModel");
const admService = require('../services/admService')

const cadastroMonitor = async (req, res) => {

    const { nome, email, curso, senha } = req.body;

    let userFind = await Monitor.findOne({
        email
    });

    if (userFind){
        res.send('ja existe um usuario com esse email')
    }else{
        try {
            novomonitor = await admService.createMonitor(nome, email, curso, senha);
            res.redirect('/views/admgeral/AdicionarMonitor');
        } catch (erro) {
            res.send(erro)
        };
    }


}

module.exports = cadastroMonitor;