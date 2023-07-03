const express = require('express');
const router = express.Router();
const monitorControllers = require('../controllers/monitorControllers');
const recuperandoSenha = require ("../controllers/recuperarSenhaController")
const sugestao = require("../controllers/emailSugestaoController");


router.post('/esqueceuASenha', recuperandoSenha);

router.post('/views/Monitor/Contato', sugestao);

//rotas post Monitor

//rota para login
router.post('/Monitor/login/home', monitorControllers.LoginMonitor);

module.exports = router;