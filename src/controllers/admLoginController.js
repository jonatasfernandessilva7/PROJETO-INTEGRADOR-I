const { getEventListeners } = require('events');
var express = require('express');
const Sequelize = require("sequelize");
const administrador = require("../models/InsertUser");

const AdmLogin = async (req, res) => {

    var buscaAdm = await administrador.findOne({
        attributes: ['email', 'senha'],
        where: {
            email: req.body.emailAdm,
            senha: req.body.senhaAdm
        }
    });

    const verificando = (req, res, next) => {
        if (req.session.emailAdm && req.session.senhaAdm) {
            next();
        }else{
            res.redirect("/");
        }
    }

    if (buscaAdm === null) {
        return res.status(400).send('user not found')
    } else {
        res.render('admgeral/Adm');
    }

}


module.exports = AdmLogin;