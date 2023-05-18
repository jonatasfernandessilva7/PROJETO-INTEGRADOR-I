const { getEventListeners } = require('events');
var express = require('express');
const Sequelize = require("sequelize");
const insertUser = require("../models/InsertUser");

const PerfilAluno = async (req, res) => {

    res.render('Aluno/perfil.html');   


}

module.exports = PerfilAluno;