var express = require('express');
const insertUser = require("../models/InsertUser");
const update = require('../services/alunoService');


const updateAlunoSenha = async (req, res) => {

    const { email, senha } = req.body

    var userFind = await insertUser.findOne({
        email 
    }).then(async () => {

        if (userFind === null) {
            return res.status(400).send('user not found')
        } else {
            try {
                update = await update.updateAluno(email, senha);
                res.redirect("/Aluno/login");
            }catch(error){
                res.send(error)
            }
        }
    });

}

module.exports = updateAlunoSenha;