//classe aluno, onde é criado o aluno e instituído suas funções
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
    constructor(nomeAluno, emailAluno, cursoAluno, senhaAluno, senhaDeConfirmacao) {
        this._nome = nomeAluno;
        this._email = emailAluno;
        this._curso = cursoAluno;
        this._senha = senhaAluno;
        this._senhaDeConfirmacao = senhaDeConfirmacao;
    }

    //método de cadastro
    cadastrarAluno () {
        //operador ternário, comparando as senhas
        this._senha === this._senhaDeConfirmacao ? window.location.href = 'Aluno/login.html': alertaDeErro();
    }

    //Login do Aluno
    logarAluno () {
        let localEmail = '@alu.ufc.br'; // domínio da UFC

        //verifica se os dados informados não são nulos e se o email está com o domínio da UFC
        if (this._email === "" || this._senha === "") {
            alertaDeErro();
        } else if (!this._email.includes(localEmail)){
            alertaDeErro();
        }
        //se as condições forem falsas o Aluno será direcionado a página de login
        window.location.href = "Aluno/login.html"
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

//criando novo aluno
let nome = document.getElementById("nome");
let email = document.getElementById("email");
let curso = document.getElementById("curso");
let senha = document.getElementById("senha");
let senhaDeConfirmacao = document.getElementById("senhaConfirm");

for (let i = 0; i < 1; i++) {
    let aluno = new Aluno(nome, email, curso, senhaDeConfirmacao)
}

//ações dos botões ao serem clicados
window.onload = () => {
    let botaoCadastro = document.getElementById("cad");
    let botaoLogar = document.getElementById("butEnter");
    let botaoPaginaDeCadastro = document.getElementById("butCad"); //direciona para a página de cadastro

    botaoCadastro.onclick = () => {
        aluno.cadastrarAluno();
    }

    botaoLogar.onclick = () => {
        aluno.logarAluno();
    }

    botaoPaginaDeCadastro.onclick = () => {
        window.location.href = "Aluno/cadastro.html";
    }
}