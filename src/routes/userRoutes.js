const { getEventListeners } = require('events');
var express = require('express');
var router = express.Router();
const createAluno = require("../controllers/CreateAlunoControler");
const perfilAluno = require("../controllers/CreateAlunoPerfilController");
const LoginAluno = require("../controllers/CreateAlunoLoginController");
const updateAluno = require("../controllers/updateAlunoData");
const createMonitor = require("../controllers/CreateMonitorController");
const LoginMonitor = require("../controllers/CreateMonitorLoginController");
const loginAdm = require("../controllers/admLoginController");
const recuperandoSenha = require ("../controllers/recuperarSenhaController")
const updateAlunoSenha = require("../controllers/updateAlunoSenha");
const deleteMonitor = require("../controllers/deleteMonitorController");
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
router.get('/views/Aluno/perfil', perfilAluno);

//rota para logout
router.get('/logout', (req, res) => {
    res.redirect('/');
});

router.get("/Aluno/recuperacao/inserirNovaSenha", (req, res)=>{
    res.render("Aluno/inserirNovaSenha")
});

//rotas post Aluno

//rota após o cadastro estar feito
router.post('/Aluno/cadastro/login', createAluno);

//rota para pagina home após fazer login
router.post('/Aluno/login/home', LoginAluno);

router.post('/views/Aluno/Contato', sugestao);

//rotas put Aluno

//rota para fazer update dos dados do perfil
router.put('/views/Aluno/perfil', updateAluno);

router.put('/Aluno/recuperacao/inserirNovaSenha', updateAlunoSenha);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
router.post('/Monitor/login/home', LoginMonitor);

///////////////////////////////////////////////////////////////////////////

//rotas get adm geral
router.get('/admgeral/Adm/Login', (req, res) => {
    res.render("admgeral/Adm_login")
});

router.get('/views/admgeral/Adm', async (req, res) => {
    res.render('admgeral/Adm')
});

router.get('/views/admgeral/Adm_perfil', async (req, res) => {
    res.render('admgeral/Adm_Perfil')
});

router.get('/views/admgeral/Adm_Ajuda', async (req, res) => {
    res.render('admgeral/Adm_Ajuda')
});

router.get('/views/admgeral/Adm_Contato', async (req, res) => {
    res.render('admgeral/Adm_Contato')
});

router.get('/views/admgeral/AdicionarMonitor', async (req, res) => {
    res.render('admgeral/Adm_cadastroDeMonitor');
});

router.get('/views/admgeral/DeletarMonitor', async (req, res) => {
    res.render('admgeral/AdmDeletarMonitor')
});

//rotas post para adm
router.post('/admgeral/Adm/home', loginAdm);

router.post('/admgeral/CadastroMonitor', createMonitor);

//rotas del adm
router.get('/admgeral/DeletarMonitor', deleteMonitor);

module.exports = router;