const { getEventListeners } = require('events');
var express = require('express');
const Sequelize = require("sequelize");
const insertUser = require("../models/InsertUser");


const PerfilAluno = async (req, res) => {

    const nomeUser = await insertUser.findOne({
        nome: req.session.nome,
    });

    const emailUser = await insertUser.findOne({
        email: req.session.email,
    });

    const cursoUser = await insertUser.findOne({
        curso: req.session.curso,
    });

    const senhaUser = await insertUser.findOne({
        senha: req.session.senha,
    });

    if (emailUser) {
        res.render("Aluno/perfil", {nomeUser: nomeUser.nome, emailUser: emailUser.email, cursoUser:cursoUser.curso, senhaUser: senhaUser.senha});
    } else {
        res.send("erro inesperado, desculpe");
    }

}

module.exports = PerfilAluno;