//classe aluno, onde é criado o aluno e instituído suas funções
require("dotenv").config();

class Aluno {

    /*
    * Atributos do aluno
    * atrbutor que iniciam em "_", são attr privados, os que não tem nada no início, são públicos*/
    _nome
    _email
    _curso
    _senha
    _senhaDeConfirmacao

    //construtor do aluno
    constructor() {
        this._nome = document.getElementById("nome");
        this._email = document.getElementById("email");
        this._curso = document.getElementById("curso");
        this._senha = document.getElementById("senha");
        this._senhaDeConfirmacao = document.getElementById("senhaConfirm");
    }

    //método de cadastro
    cadastrarAluno () {
        //operador ternário, comparando as senhas
        this._senha === this._senhaDeConfirmacao ? window.location.href = 'Aluno/login.html': alertaDeErro();
    }

    //Login do Aluno
    logarAluno () {
        let localEmail = process.env.HOST_EMAIL_INSTITUCIONAL; // domínio da UFC

        //verifica se os dados informados não são nulos e se o email está com o domínio da UFC
        if (this._email === "" || this._senha === "") {
            alertaDeErro();
        } else if (!this._email.includes(localEmail)){
            alertaDeErro();
        }
        //se as condições forem falsas o Aluno será direcionado a página de login
        window.location.href = "Aluno/login.html";
    }

    //gets para pegar o valor dos atributos
    get nome () {
        return this._nome;
    }

    get email () {
        return this._email;
    }

    get curso () {
        return this._curso;
    }

    get senha () {
        return this._senha;
    }

    //sets para poder alterar os valores
    set nome (novoNome) {
        this._nome = novoNome;
    }

    set email (novoEmail) {
        this._email = novoEmail;
    }

    set curso (novoCurso) {
        this._curso = novoCurso;
    }

    set senha (novaSenha) {
        this._senha = novaSenha;
    }
}

//nessa função é mostrado um alerta que os dados estão inseridos de forma incorreta
function alertaDeErro() {

    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Dados incorretos ou não cadastrados, insira-os novamente',
        footer: '<a href="Aluno/login.html">Esqueceu seu usuário ou senha?</a>'
    });
}



//ações dos botões ao serem clicados
window.onload = () => {
    let botaoCadastro = document.getElementById("cad");
    let botaoLogar = document.getElementById("butEnter");
    let botaoPaginaDeCadastro = document.getElementById("butCad"); //direciona para a página de cadastro

    botaoCadastro.onclick = () => {
        cadastrarAluno();
    }

    botaoLogar.onclick = () => {
        logarAluno();
    }

    botaoPaginaDeCadastro.onclick = () => {
        window.location.href = "Aluno/cadastro.html";
    }
}