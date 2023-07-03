const express = require('express');
const router = express.Router();
const admControllers = require('../controllers/admControllers');
const sugestao = require("../controllers/emailSugestaoController");

router.post('/views/admgeral/Adm_Contato', sugestao);

router.get('/alunos', admControllers.buscaTodosOsAlunos);

//rotas post para adm
router.post('/admgeral/Adm/home', admControllers.AdmLogin);

router.post('/admgeral/CadastroMonitor', admControllers.cadastroMonitor);

router.post('/admgeral/adicionarLaboratorios', admControllers.addLab);

//rotas del adm
router.delete('/admgeral/DeletarMonitor', admControllers.delMonitor);

router.delete('/admgeral/DeletarAluno', admControllers.delAluno);

module.exports = router;