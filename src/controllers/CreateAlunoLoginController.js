const { getEventListeners } = require('events');
var express = require('express');
const Sequelize = require("sequelize");
const insertUser = require("../models/InsertUser");

const LoginAluno = async (req, res) => {

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
    })

    if (searchUser === null) {
        return res.status(400).send('user not found')
    } else {
        res.render('home.html')
    }

}

module.exports = LoginAluno;