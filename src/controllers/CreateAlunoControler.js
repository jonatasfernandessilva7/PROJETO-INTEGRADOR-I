const { getEventListeners } = require('events');
var express = require('express');
const Sequelize = require("sequelize");
const insertUser = require("../models/InsertUser");

const createAluno = (req,res) => {
    const userFind = insertUser.findOne({where:{
        email : req.body
    }})
    if (userFind){
        res.send('ja existe um usuario com esse email')
    }else{
        insertUser.create({
            nome: req.body.nome,
            email: req.body.email,
            curso: req.body.curso,
            senha: req.body.senha
        }).then(function () {
            res.render('Aluno/login.html');
        }).catch(function (erro) {
            res.render('Aluno/cadastro.html');
        })
    }
}

module.exports = createAluno;