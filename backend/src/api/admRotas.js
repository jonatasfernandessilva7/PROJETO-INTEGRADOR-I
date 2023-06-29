const express = require('express');
const router = express.Router();
const admControllers = require('../controllers/admControllers');
const sugestao = require("../controllers/emailSugestaoController");

router.post('/views/admgeral/Adm_Contato', sugestao);

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
    res.render('admgeral/AdmDeletarMonitor');
});

router.get('/views/admgeral/DeletarAluno', async (req, res) => {
    res.render('admgeral/AdmDeletarAluno');
});

//rotas post para adm
router.post('/admgeral/Adm/home', admControllers.AdmLogin);

router.post('/admgeral/CadastroMonitor', admControllers.cadastroMonitor);

//rotas del adm
router.delete('/admgeral/DeletarMonitor', admControllers.delMonitor);

router.delete('/admgeral/DeletarAluno', admControllers.delAluno);

module.exports = router;