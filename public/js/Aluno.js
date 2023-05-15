const Sequelize = require("sequelize");
const insertUser = require("../../src/models/InsertUser");

class Aluno {

    //atributos de um aluno
    constructor() {

        this.nomeAluno = document.getElementById("nome").value;
        this.cursoAluno = document.getElementById("curso").value;
        this.emailAluno = document.getElementById("email").value;
        this.senhaAluno = document.getElementById("senha").value;

    }

    //cadastrar novo aluno
    cadastrar() {

        var senhaAlunoConfirm = document.getElementById("senhaConfirm").value;
        wwindow.location.href = 'Aluno/login.html'

    }

    //login do aluno
    userLogin() {
        var userInputEmail = document.getElementById("email1").value;
        var userInputPassword = document.getElementById("senha1").value;
        var hostEmail = "@alu.ufc.br";

        if (userInputEmail == '' || userInputPassword == '') {
            alerts();
        } else if (!userInputEmail.includes(hostEmail)) {
            alerts();
        }

        paginaAluno();
    }

    //logout
    sair() {
        window.location.href = 'index.html'
    }

    //logout
    sair() {
        window.location.href = 'index.html'
    }


}

function userLoginMonitor() {
    var userInputEmail = document.getElementById("email1").value;
    var userInputPassword = document.getElementById("senha1").value;
    var hostEmail = "@alu.ufc.br";

    if (userInputEmail == '' || userInputPassword == '') {
        alerts();
    } else if (!userInputEmail.includes(hostEmail)) {
        alerts();
    }

    paginaAlunoMonitor();
}

//função que leva a página de padastro quando o botão cadastrar é acionado
function paginaCadastro() {
    window.location.href = 'Aluno/cadastro.html'
}

function paginaCadastroMonitor() {
    window.location.href = 'Monitor/cadastroMonitor.html'
}

//função que emite alerta de erro no login
function alerts() {

    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Dados incorretos ou não cadastrados, insira-os novamente',
        footer: '<a href="Aluno/login.html">Esqueceu seu usuário ou senha?</a>'
      })
}

//função para chamar a página home
function paginaAluno() {
    window.location.href = 'Aluno/login.html'
}

function paginaAlunoMonitor() {
    window.location.href = 'Monitor/loginMonitor.html'
}


//ação realizada quando o botão de cadastrar é acionado
var BotaoCadastrar = document.getElementById("cad");
BotaoCadastrar.addEventListener('click', (event) => {

    cadastrar();

});

//ação de click dos botões
window.onload = () => {
    var BotaoEntrar = document.getElementById("butEnter");
    var BotaoCad = document.getElementById("butCad");
    var botaoSair = document.getElementById("exit");
    var botaoCadastroMonitor = document.getElementById("cadMonitor");
    var BotaoEntrarMonitor = document.getElementById("butEnterMonitor");
    var BotaoCMadonitor = document.getElementById("butCadMonitor");


    //quando o botão entrar é acionado, a função de login é chamada
    BotaoEntrar.onclick = () => {
        userLogin();
    }

    //quando o botão de cadastrar é acionado, a função de cadastro é chamada
    BotaoCad.onclick = () => {
        paginaCadastro();
    }

    //botaologout
    botaoSair.onclick = () => {
        sair();
    }

    BotaoEntrarMonitor.onclick = () => {
        userLoginMonitor();
    }

    BotaoCaMdonitor.onclick = () => {
        paginaCadastroMonitor();
    }
}
