const { getEventListeners } = require('events');
var express = require('express');
const Sequelize = require("sequelize");
const insertUser = require("../models/InsertUser");


const PerfilAluno = async (req, res) => {

    const viewUser = await insertUser.findOne({
        email: req.body.email1
    })

    res.render('Aluno/perfil.html')

}

module.exports = PerfilAluno;