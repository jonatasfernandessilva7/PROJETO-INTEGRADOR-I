const { getEventListeners } = require('events');
var express = require('express');
const Sequelize = require("sequelize");
const insertUser = require("../models/InsertUser");

const LoginAluno = async (req, res) => {

    var searchUser = await insertUser.findOne({
        attributes: ['email', 'senha'],
        where: {
            email: req.body.email1,
            senha: req.body.senha1
        }
    });

    const verificando = (req, res, next) => {
        if (req.session.email1 && req.session.senha1) {
            next();
        }else{
            res.redirect("/");
        }
    }

    if (searchUser === null) {
        return res.status(400).send('user not found')
    } else {
        res.redirect('/views/Aluno/home');
    }

}


module.exports = LoginAluno;