class Aluno {

    //atributos de um aluno
    constructor(nomeAluno, cursoAluno, emailAluno, senhaAluno) {

        this.nomeAluno = nomeAluno;
        this.cursoAluno = cursoAluno;
        this.emailAluno = emailAluno;
        this.senhaAluno = senhaAluno;

    }

    //cadastrar novo aluno
    cadastrar() {

        this.nomeAluno = document.getElementById("nome");
        this.cursoAluno = document.getElementById("curso");
        this.emailAluno = document.getElementById("email");
        this.senhaAluno = document.getElementById("senha");

        var senhaAlunoConfirm = document.getElementById("senhaConfirm").value;

        if (senhaAluno === senhaAlunoConfirm){
            wwindow.location.href = 'Aluno/login.html';
        }else{
            alertsCadastro();
        }


    }

    //login do aluno
    userLogin() {
        var userInputEmail = document.getElementById("email1").value;
        var userInputPassword = document.getElementById("senha1").value;
        var hostEmail = "@alu.ufc.br";

        if (userInputEmail === '' || userInputPassword === '') {
            alerts();
        } else if (!userInputEmail.includes(hostEmail)) {
            alerts();
        }

        paginaAluno();
    }

    //logout
    sair() {
        window.location.href = 'index.html';
    }


}

//função que leva a página de padastro quando o botão cadastrar é acionado
function paginaCadastro() {
    window.location.href = 'Aluno/cadastro.html';
}

//função que emite alerta de erro no login
function alerts() {

    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Dados incorretos ou não cadastrados, insira-os novamente',
        footer: '<a href="Aluno/login.html">Esqueceu seu usuário ou senha?</a>'
      });
}

//função que emite alerta de erro no cadastro
function alertsCadastro() {

    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Dados de cadastro não correspondem, tente novamente',
        footer: '<a href="Aluno/login.html">Esqueceu seu usuário ou senha?</a>'
      });
}

//função para chamar a página home
function paginaAluno() {
    window.location.href = 'Aluno/login.html';
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
    var BotaoEntrarMonitor = document.getElementById("butEnterMonitor");


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
}

var nomeAluno = document.getElementById("nome");
var cursoAluno = document.getElementById("curso");
var emailAluno = document.getElementById("email");
var senhaAluno = document.getElementById("senha");


let aluno = new Aluno(nomeAluno, cursoAluno, emailAluno, senhaAluno)

module.exports = Aluno;