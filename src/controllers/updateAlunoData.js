const { getEventListeners } = require('events');
var express = require('express');
const Sequelize = require("sequelize");
const insertUser = require("../models/InsertUser");
const alert = require("../../public/js/perfil");

const updateAluno = async (req, res) => {

    const {email} = req.body;
    const {nome, curso, senha} = req.body;

    const userFind = await insertUser.findOne({
        id
    })

    if (!userFind){
        res.send("user não encontrado")
    }else{

    const updateUser = await insertUser.update({nome, curso, senha},{email}).then(() => {
        res.redirect('/views/Aluno/perfil.html');
    }).catch(() => {
        console.log('não att');
    });

    }


}

module.exports = updateAluno;