const { getEventListeners } = require('events');
var express = require('express');
var router = express.Router();
const Sequelize = require("sequelize");
const { default: Swal } = require('sweetalert2');
const insertUser = require("../models/InsertUser");

//rotas get

//rota para page principal
router.get('/', (req, res) => {
    res.render('index.html');
});


//rota para página de login
router.get('/Aluno/login.html', (req, res) => {
    res.render('Aluno/login.html');
});

router.get('/Monitor/loginMonitor.html', (req, res) => {
    res.render('Monitor/loginMonitor.html');
});


//rota para página de cadastro
router.get('/Aluno/cadastro.html', (req, res) => {
    res.render('Aluno/cadastro.html');
});

router.get('/Monitor/cadastroMonitor.html', (req, res) => {
    res.render('Monitor/cadastroMonitor.html');
});


//rotas para os laboratórios e a biblioteca
router.get('/views/Lab1.html', (req, res) => {
    res.render('Aluno/Lab1.html');
});

router.get('/Monitor/views/Monitor_Lab1.html', (req, res) => {
    res.render('Monitor/Monitor_Lab1.html');
});

router.get('/views/Lab2.html', (req, res) => {
    res.render('Aluno/Lab2.html');
});

router.get('/Monitor/views/Monitor_Lab2.html', (req, res) => {
    res.render('Monitor/Monitor_Lab2.html');
});

router.get('/views/Lab3.html', (req, res) => {
    res.render('Aluno/Lab3.html');
});

router.get('/Monitor/views/Monitor_Lab3.html', (req, res) => {
    res.render('Monitor/Monitor_Lab3.html');
});

router.get('/views/Lab4.html', (req, res) => {
    res.render('Aluno/Lab4.html');
});

router.get('/Monitor/views/Monitor_Lab4.html', (req, res) => {
    res.render('Monitor/Monitor_Lab4.html');
});

router.get('/views/Biblioteca.html', (req, res) => {
    res.render('Aluno/Biblioteca.html');
});

router.get('/Monitor/views/Monitor_Biblioteca.html', (req, res) => {
    res.render('Monitor/Monitor_Biblioteca.html');
});

router.get('/views/home.html', (req, res) => {
    res.render('home.html');
});

router.get('/views/Aluno/Ajuda.html', (req, res) => {
    res.render('Aluno/Ajuda.html');
});

router.get('/views/Monitor/Ajuda.html', (req, res) => {
    res.render('Aluno/AjudaMonitor.html');
});

router.get('/views/Aluno/Contato.html', (req, res) => {
    res.render('Contato.html');
});

router.get('/views/Monitor/Contato.html', (req, res) => {
    res.render('Contato.html');
});

router.get('/views/Aluno/Historico.html', (req, res) => {
    res.render('Aluno/Historico.html');
});

router.get('/views/Monitor/Historico.html', (req, res) => {
    res.render('Aluno/Historico.html');
});


//rota para pagina de perfil
router.get('/views/Aluno/perfil.html/:id', async (req, res) => {
    res.render('Aluno/perfil.html')
});

router.get('/views/Monitor/Monitor_perfil.html/:id', async (req, res) => {
    res.render('Monitor/Monitor_perfil.html')
});

//rota para logout
router.get('/logout.html', (req, res) => {
    res.render('Aluno/index.htm');
})

//rotas post

//rota após o cadastro estar feito
router.post('/Aluno/cadastro/login.html', (req, res) => {

    insertUser.create({
        nome: req.body.nome,
        email: req.body.email,
        curso: req.body.curso,
        senha: req.body.senha
    }).then(function(){
        res.render('Aluno/login.html');
    }).catch(function(erro){
        res.render('Aluno/cadastro.html');
    })
});

router.post('/Monitor/cadastro/loginMonitor.html', (req, res) => {

    insertUser.create({
        nome: req.body.nome,
        email: req.body.email,
        curso: req.body.curso,
        senha: req.body.senha
    }).then(function(){
        res.render('Monitor/loginMonitor.html');
    }).catch(function(erro){
        res.render('Monitor/cadastroMonitor.html');
    })
});


//rota para pagina home após fazer login
router.post('/Aluno/login/home.html', async (req, res) => {

    var searchUser = await insertUser.findOne({
        attributes : ['email','senha'],
        where: {
            email : req.body.email1,
            senha : req.body.senha1
        }
    })

    if (searchUser === null){
        return res.status(400).send('user not found')
    } else {
        res.render('home.html')
    }

});

router.post('/Monitor/login/home.html', async (req, res) => {

    var searchUser = await insertUser.findOne({
        attributes : ['email','senha'],
        where: {
            email : req.body.email1,
            senha : req.body.senha1
        }
    })

    if (searchUser === null){
        return res.status(400).send('user not found')
    } else {
        res.render('Monitor/Monitor_home.html')
    }

});

//rotas put


//rota para fazer update dos dados do perfil
router.put('/views/Aluno/perfil.html/:id', (req, res) => {
    res.render('Aluno/perfil.html')
});


module.exports = router;