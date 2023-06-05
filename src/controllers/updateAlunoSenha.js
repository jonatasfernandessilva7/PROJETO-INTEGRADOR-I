const { getEventListeners } = require('events');
var express = require('express');
const Sequelize = require("sequelize");
const insertUser = require("../models/InsertUser");


const updateAlunoSenha = async (req, res) => {

    const userFind = await insertUser.findOne({
        email : req.body.emailRecuperacaoSenha
    }).then(async () => {

        if (userFind === null) {
            return res.status(400).send('user not found')
        } else {
            await insertUser.update({
                senha: req.body.novaSenha
            },{
                where: {
                    email : req.body.emailRecuperacaoSenha
                }
            })
            res.redirect("/Aluno/login");
        }
    });

}

module.exports = updateAlunoSenha;