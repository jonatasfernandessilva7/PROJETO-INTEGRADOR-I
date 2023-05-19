const { getEventListeners } = require('events');
var express = require('express');
const Sequelize = require("sequelize");
const insertUser = require("../models/InsertUser");

const LoginMonitor = async (req, res) => {

    const verificando = (req, res, next) => {
        if (req.session.email && req.session.senha) {
            next();
        }else{
            res.redirect("/");
        }
    }

    var searchUser = await insertUser.findOne({
        attributes: ['email', 'senha'],
        where: {
            email: req.body.email1,
            senha: req.body.senha1
        }
    }).then(async (resp) => {
        var status = resp.text();
        if (status == 'concetado') {

            if (searchUser === null) {
                return res.status(400).send('user not found')
            } else {
                res.render('Monitor/Monitor_home.html')
            }
        }else{
            alert('dados incorretos')
        }
    })


}

module.exports = LoginMonitor;