const { getEventListeners } = require('events');
var express = require('express');
const Sequelize = require("sequelize");
const insertUser = require("../models/InsertUser");

const updateAluno = async (req, res) => {

    const updateUser = await insertUser.update({
        nome: req.body.nome,
        email: req.body.email,
        curso: req.body.curso,
        senha: req.body.senha
    }).then(() => {
        res.render('Aluno/perfil.html');
    }).catch(() => {
        console.log('não att');
    })

}

module.exports = updateAluno;