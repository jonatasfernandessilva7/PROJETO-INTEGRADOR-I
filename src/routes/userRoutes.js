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
router.get('/Aluno/login.html', (req, res) => {
    res.render('Aluno/login.html');
});


//rota para página de cadastro
router.get('/Aluno/cadastro.html', (req, res) => {
    res.render('Aluno/cadastro.html');
});


//rotas para os laboratórios e a biblioteca
router.get('/views/Lab1.html', (req, res) => {
    res.render('Aluno/Lab1.html');
});

router.get('/views/Lab2.html', (req, res) => {
    res.render('Aluno/Lab2.html');
});

router.get('/views/Lab3.html', (req, res) => {
    res.render('Aluno/Lab3.html');
});

router.get('/views/Lab4.html', (req, res) => {
    res.render('Aluno/Lab4.html');
});

router.get('/views/Biblioteca.html', (req, res) => {
    res.render('Aluno/Biblioteca.html');
});

router.get('/views/home.html', (req, res) => {
    res.render('home.html');
});

router.get('/views/Aluno/Ajuda.html', (req, res) => {
    res.render('Aluno/Ajuda.html');
});

router.get('/views/Aluno/Contato.html', (req, res) => {
    res.render('Contato.html');
});

router.get('/views/Aluno/Historico.html', (req, res) => {
    res.render('Aluno/Historico.html');
});

//rota para pagina de perfil
router.get('/views/Aluno/perfil.html', (req, res) => {
    res.render('Aluno/perfil.html');
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
        return res.status(400).send("erro, user not found")
    } else {
        res.render('home.html')
    }

});

//rotas put


//rota para fazer update dos dados do perfil
router.put('/views/Aluno/perfil.html', (req, res) => {
    insertUser.update({
        nome : req.body.nomeAlunoPerfil,
        curso : req.body.cursoAlunoPerfil,
        email : req.body.emailAlunoPerfil,
        senha : req.body.senhaAlunoPerfil
    })
    res.render('Aluno/perfil.html')
});


module.exports = router;