function paginaAluno() {
    window.location.href = 'home.html'
}

function alerts() {
    window.alert("campos incompletos ou não encontrados, por favor preencha-os corretamente");
    wwindow.location.href = 'cadastro.html'
}

//cadastrar novo aluno
function cadastrar() {
    var nomeAluno = document.getElementById("nome"). value;
    var cursoAluno = document.getElementById("curso").value;
    var emailAluno = document.getElementById("email").value;
    var senhaAluno = document.getElementById("senha").value;
    var senhaAlunoConfirm = document.getElementById("senhaConfirm").value;
    var hostEmail = "@alu.ufc.br";

    if (!emailAluno.includes(hostEmail)) {
        alerts();
    } else if (senhaAluno != senhaAlunoConfirm) {
        alerts();
    }


    paginaAluno();

}


var BotaoCadastrar = document.getElementById("cad");
BotaoCadastrar.addEventListener('click', (event) => {

    cadastrar();

})