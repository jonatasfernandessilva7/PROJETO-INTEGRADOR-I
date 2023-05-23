const { getEventListeners } = require('events');
var express = require('express');
var router = express.Router();
const createAluno = require("../controllers/CreateAlunoControler");
const perfilAluno = require("../controllers/CreateAlunoPerfilController");
const LoginAluno = require("../controllers/CreateAlunoLoginController");
const updateAluno = require("../controllers/updateAlunoData");
const createMonitor = require("../controllers/CreateMonitorController");
const LoginMonitor = require("../controllers/CreateMonitorLoginController");
const recuperandoSenha = require ("../controllers/recuperarSenhaController")


//rota para page principal

router.get('/', (req, res) => {
    res.render('index.html');
});

router.get('/esqueceuASenha.html', (req, res) => {
    res.render('esqueceuASenha.html');
});

router.put('/esqueceuASenha.html', recuperandoSenha);


//rotas get para aluno

//rota para página de login
router.get('/Aluno/login.html', (req, res) => {
    res.render('Aluno/login.html');
});

//rota para página de cadastro
router.get('/Aluno/cadastro.html', (req, res) => {
    res.render('Aluno/cadastro.html');
});

//rota lab1
router.get('/views/Lab1.html', (req, res) => {
    res.render('Aluno/Lab1.html');
});

//rota para lab2
router.get('/views/Lab2.html', (req, res) => {
    res.render('Aluno/Lab2.html');
});

//rota lab3
router.get('/views/Lab3.html', (req, res) => {
    res.render('Aluno/Lab3.html');
});

//rota lab4
router.get('/views/Lab4.html', (req, res) => {
    res.render('Aluno/Lab4.html');
});

//rota biblioteca
router.get('/views/Biblioteca.html', (req, res) => {
    res.render('Aluno/Biblioteca.html');
});

//rota home
router.get('/views/home.html', (req, res) => {
    res.render('home.html');
});

//rota ajuda
router.get('/views/Aluno/Ajuda.html', (req, res) => {
    res.render('Aluno/Ajuda.html');
});

//rota contato
router.get('/views/Aluno/Contato.html', (req, res) => {
    res.render('Contato.html');
});

//rota historico do aluno
router.get('/views/Aluno/Historico.html', (req, res) => {
    res.render('Aluno/Historico.html');
});

//rota para pagina de perfil
router.get('/views/Aluno/perfil.html', perfilAluno);

//rota para logout
router.get('/logout.html', (req, res) => {
    res.redirect('/');
});

//rotas post Aluno

//rota após o cadastro estar feito
router.post('/Aluno/cadastro/login.html', createAluno);

//rota para pagina home após fazer login
router.post('/Aluno/login/home.html', LoginAluno);

//rotas put Aluno

//rota para fazer update dos dados do perfil
router.put('/views/Aluno/perfil.html', updateAluno);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//rotas get Monitor

//rota para pagina de login
router.get('/Monitor/loginMonitor.html', (req, res) => {
    res.render('Monitor/loginMonitor.html');
});

//rota para pagina de cadastro
router.get('/Monitor/cadastroMonitor.html', (req, res) => {
    res.render('Monitor/cadastroMonitor.html');
});

//rota para lab1
router.get('/views/Monitor_Lab1.html', (req, res) => {
    res.render('Monitor/Monitor_Lab1.html');
});

//rota para lab2
router.get('/views/Monitor_Lab2.html', (req, res) => {
    res.render('Monitor/Monitor_Lab2.html');
});

//rota para lab3
router.get('/views/Monitor_Lab3.html', (req, res) => {
    res.render('Monitor/Monitor_Lab3.html');
});

//rota para lab4
router.get('/views/Monitor_Lab4.html', (req, res) => {
    res.render('Monitor/Monitor_Lab4.html');
});

//rota para biblioteca
router.get('/views/Monitor_Biblioteca.html', (req, res) => {
    res.render('Monitor/Monitor_Biblioteca.html');
});

//rota para home
router.get('/views/Monitor/Monitor_home.html', (req, res) => {
    res.render('Monitor/Monitor_home.html');
});

//rota para ajuda
router.get('/views/Monitor/AjudaMonitor.html', (req, res) => {
    res.render('Monitor/AjudaMonitor.html');
});

//rota para contato
router.get('/views/Monitor/Contato.html', (req, res) => {
    res.render('Contato.html');
});

//rota para perfil
router.get('/views/Monitor/Monitor_perfil.html', async (req, res) => {
    res.render('Monitor/Monitor_Perfil.html')
});

//rotas post Monitor

//rota para cadastro
router.post('/Monitor/cadastro/loginMonitor.html', createMonitor);

//rota para login
router.post('/Monitor/login/home.html', LoginMonitor);

///////////////////////////////////////////////////////////////////////////

//rotas get adm geral
router.get('/admgeral/Adm.html', (req, res) => {
    res.render("admgeral/Adm.html")
});

router.get('/views/admgeral/Adm.html', async (req, res) => {
    res.render('admgeral/Adm.html')
});

router.get('/views/admgeral/Adm_perfil.html', async (req, res) => {
    res.render('admgeral/Adm_Perfil.html')
});

router.get('/views/admgeral/Adm_Ajuda.html', async (req, res) => {
    res.render('admgeral/Adm_Ajuda.html')
});

router.get('/views/admgeral/Adm_Contato.html', async (req, res) => {
    res.render('admgeral/Adm_Contato.html')
});

module.exports = router;