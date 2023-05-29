const { getEventListeners } = require('events');
var express = require('express');
const Sequelize = require("sequelize");
const insertUser = require("../models/InsertUser");
const cod = 1234;


const updateAlunoSenha = async (req, res) => {

    const { email } = req.body.emailRecuperacaoSenha
    const { senha } = req.body.novaSenha

    const userFind = await insertUser.findOne({
        attributes : ['email'],
        where :{
            email,
        }
    }).then(async () => {

        if (userFind === null) {
            return res.status(400).send('user not found')
        } else {
            await insertUser.update({senha}, {
                where: {
                    email,
                }
            });
            res.render("Aluno/login");
        }
    });

}

module.exports = updateAlunoSenha;