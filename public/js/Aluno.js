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

    //informações do usuário no perfil
    Perfil() {

        document.getElementById("nomeAlunoPerfil").value.innerHTML = this.nomeAluno;
        document.getElementById("cursoAlunoPerfil").value.innerHTML = this.cursoAluno;
        document.getElementById("emailAlunoPerfil").value.innerHTML = this.emailAluno;
        document.getElementById("senhaAlunoPerfil").value.innerHTML = this.senhaAluno;

    }

    //logout
    sair(){
        window.location.href = 'index.html'
    }


}

//função que leva a página de padastro quando o botão cadastrar é acionado
function paginaCadastro() {
    window.location.href = 'cadastro.html'
}

//função que emite alerta de erro no login
function alerts() {
    window.alert("campos incompletos ou não encontrados, por favor preencha-os corretamente");
    wwindow.location.href = 'login.html'
}

//função para chamar a página home
function paginaAluno() {
    window.location.href = 'login.html'
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
    var BotaoPerfilAtualizar = document.getElementById("att");
    var botaoSair = document.getElementById("exit");

    //quando o botao for acionado atualiza os dados do usuário
    BotaoPerfilAtualizar.onclick = () => {
        userPerfilAtt();
    }

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
