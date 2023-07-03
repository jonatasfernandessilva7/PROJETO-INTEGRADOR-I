const express = require('express');
const router = express.Router();
const alunoControllers = require('../controllers/alunoControllers');
const recuperandoSenha = require ("../controllers/recuperarSenhaController")
const sugestao = require("../controllers/emailSugestaoController");

//rota para page principal

router.post('/esqueceuASenha', recuperandoSenha);



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