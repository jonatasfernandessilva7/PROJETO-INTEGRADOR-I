const { getEventListeners } = require('events');
var express = require('express');
var router = express.Router();
const Sequelize = require("sequelize");
const insertUser = require("../models/InsertUser");

//rotas get

//rota para page principal
router.get('/', (req, res) => {
    res.render('index.html');
});


//rota para página de login
router.get('/login.html', (req, res) => {
    res.render('login.html');
});


//rota para página de cadastro
router.get('/cadastro.html', (req, res) => {
    res.render('cadastro.html');
});


//rotas para os laboratórios e a biblioteca
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

//rota para pagina de perfil
router.get('/home/perfil.html', (req, res) => {
    res.render('perfil.html');
});

//rota para logout
router.get('/logout.html', (req, res) => {
    res.render('/');
})

//rotas post

//rota após o cadastro estar feito
router.post('/cadastro/login.html', (req, res) => {

    insertUser.create({
        nome: req.body.nome,
        email: req.body.email,
        curso: req.body.curso,
        senha: req.body.senha
    }).then(function(){
        res.render('login.html');
    }).catch(function(erro){
        res.render('cadastro.html');
    })
});


//rota para pagina home após fazer login
router.post('/login/home.html', (req, res) => {

    res.render('home.html');

});

//rotas put


//rota para fazer update dos dados do perfil
router.put('/home/perfil.html', (req, res) => {
    insertUser.update({
        nome : req.body.nomeAlunoPerfil,
        curso : req.body.cursoAlunoPerfil,
        email : req.body.emailAlunoPerfil,
        senha : req.body.senhaAlunoPerfil
    })
    res.render('perfil.html')
});


module.exports = router;