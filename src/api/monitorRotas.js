const express = require('express');
const router = express.Router();
const monitorControllers = require('../controllers/monitorControllers');
const recuperandoSenha = require ("../controllers/recuperarSenhaController")
const sugestao = require("../controllers/emailSugestaoController");

router.get('/esqueceuASenha', (req, res) => {
    res.render('esqueceuASenha');
});

router.post('/esqueceuASenha', recuperandoSenha);

router.post('/views/Monitor/Contato', sugestao);

//rotas get Monitor

//rota para pagina de login
router.get('/Monitor/loginMonitor', (req, res) => {
    res.render('Monitor/loginMonitor');
});


//rota para lab1
router.get('/views/Monitor_Lab1', (req, res) => {
    res.render('Monitor/Monitor_Lab1');
});

//rota para lab2
router.get('/views/Monitor_Lab2', (req, res) => {
    res.render('Monitor/Monitor_Lab2');
});

//rota para lab3
router.get('/views/Monitor_Lab3', (req, res) => {
    res.render('Monitor/Monitor_Lab3');
});

//rota para lab4
router.get('/views/Monitor_Lab4', (req, res) => {
    res.render('Monitor/Monitor_Lab4');
});

//rota para home
router.get('/views/Monitor/Monitor_home', (req, res) => {
    res.render('Monitor/Monitor_home');
});

//rota para ajuda
router.get('/views/Monitor/AjudaMonitor', (req, res) => {
    res.render('Monitor/AjudaMonitor');
});

//rota para contato
router.get('/views/Monitor/Contato', (req, res) => {
    res.render('Monitor/contatoMonitor');
});

//rota para perfil
router.get('/views/Monitor/Monitor_perfil', (req, res) => {
    res.render('Monitor/Monitor_Perfil');
});

//rotas post Monitor

//rota para login
router.post('/Monitor/login/home', monitorControllers.LoginMonitor);

module.exports = router;