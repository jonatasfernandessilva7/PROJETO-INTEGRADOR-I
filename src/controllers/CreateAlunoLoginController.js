var express = require('express');
const insertUser = require("../models/InsertUser");

const LoginAluno = async (req, res) => {

    let searchUser = await insertUser.findOne({
        attributes: ['email', 'senha'],
        where: {
            email: req.body.email1,
            senha: req.body.senha1
        }
    });

    req.body.email1 = req.session.email;
    req.body.senha1 = req.session.senha;

    const verificando = (req, res, next) => {
        if (req.session.email && req.session.senha) {
            next();
        }else{
            res.redirect("/");
        }
    }

    if (searchUser === null) {
        return res.status(400).send('user not found')
    } else {
        res.redirect('/views/Aluno/home');
    }

}



module.exports = LoginAluno;