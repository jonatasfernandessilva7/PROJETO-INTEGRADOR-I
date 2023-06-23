const express = require('express');
const router = express.Router();
const alunoControllers = require('../controllers/alunoControllers');
const recuperandoSenha = require ("../controllers/recuperarSenhaController")
const sugestao = require("../controllers/emailSugestaoController");

//rota para page principal

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/esqueceuASenha', (req, res) => {
    res.render('esqueceuASenha');
});

router.post('/esqueceuASenha', recuperandoSenha);


//rotas get para aluno

//rota para página de login
router.get('/Aluno/login', (req, res) => {
    res.render('Aluno/login');
});

//rota para página de cadastro
router.get('/Aluno/cadastro', (req, res) => {
    res.render('Aluno/cadastro');
});

//rota lab1
router.get('/views/Aluno/Lab1', (req, res) => {
    res.render('Aluno/Lab1');
});

//rota para lab2
router.get('/views/Aluno/Lab2', (req, res) => {
    res.render('Aluno/Lab2');
});

//rota lab3
router.get('/views/Aluno/Lab3', (req, res) => {
    res.render('Aluno/Lab3');
});

//rota lab4
router.get('/views/Aluno/Lab4', (req, res) => {
    res.render('Aluno/Lab4');
});


//rota home
router.get('/views/Aluno/home', (req, res) => {
    req.session.email = req.body.email1;
    res.render('Aluno/home');
});

//rota ajuda
router.get('/views/Aluno/Ajuda', (req, res) => {
    res.render('Aluno/Ajuda');
});

//rota contato
router.get('/views/Aluno/Contato', (req, res) => {
    res.render('Aluno/Contato'); 
});

//rota historico do aluno
router.get('/views/Aluno/Historico', (req, res) => {
    res.render('Aluno/Historico');
});

//rota para pagina de perfil
router.get('/views/Aluno/perfil', alunoControllers.PerfilAluno);

//rota para logout
router.get('/logout', (req, res) => {
    res.redirect('/');
});

router.get("/Aluno/recuperacao/inserirNovaSenha", (req, res)=>{
    res.render("Aluno/inserirNovaSenha")
});

//rotas post Aluno

//rota após o cadastro estar feito
router.post('/Aluno/cadastro/login', alunoControllers.createAluno);

//rota para pagina home após fazer login
router.post('/Aluno/login/home', alunoControllers.LoginAluno);

router.post('/views/Aluno/Contato', sugestao);

//rotas put Aluno

//rota para fazer update dos dados do perfil
router.put('/views/Aluno/perfil', alunoControllers.updateAluno);

router.put('/Aluno/recuperacao/inserirNovaSenha', alunoControllers.updateAlunoSenha);

module.exports = router;