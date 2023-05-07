const { getEventListeners } = require('events');
var express = require('express');
var router = express.Router();
const Sequelize = require("sequelize");
const insertUser = require("../models/InsertUser");

//rotas get
router.get('/', (req, res) => {
    res.render('index.html');
});

router.get('/login.html', (req, res) => {
    res.render('login.html');
});

router.get('/cadastro.html', (req, res) => {
    res.render('cadastro.html');
});

router.get('/views/Lab1.html', (req, res) => {
    res.render('Lab1.html');
});

router.get('/views/Lab2.html', (req, res) => {
    res.render('Lab2.html');
});

router.get('/views/Lab3.html', (req, res) => {
    res.render('Lab3.html');
});

router.get('/views/Lab4.html', (req, res) => {
    res.render('Lab4.html');
});

router.get('/views/Biblioteca.html', (req, res) => {
    res.render('Biblioteca.html');
});

//rotas post
router.post('/home.html', (req, res) => {
    insertUser.create({
        nome: req.body.nome,
        email: req.body.email,
        curso: req.body.curso,
        senha: req.body.senha
    }).then(function(){
        res.render('home.html');
    }).catch(function(erro){
        res.render('cadastro.html');
    })
});   



module.exports = router;