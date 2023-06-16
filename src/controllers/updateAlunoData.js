const { getEventListeners } = require('events');
var express = require('express');
const Sequelize = require("sequelize");
const insertUser = require("../models/InsertUser");

const updateAluno = async (req, res) => {

    let {email} = req.session.email;
    let {nome, curso, senha} = req.body;

    let userFind = await insertUser.findOne({
        email
    })

    if (!userFind){
        res.send("user não encontrado")
    }else{

    await insertUser.update({nome, curso, senha},{email}).then(() => {
        res.redirect('/views/Aluno/perfil');
    }).catch(() => {
        console.log('não att');
    });

    }


}

module.exports = updateAluno;