function paginaAluno() {
    window.location.href = 'home.html'
}

//cadastrar novo aluno
function cadastrar() {
    var nomeAluno = document.getElementById("nome"). value;
    var cursoAluno = document.getElementById("curso").value;
    var emailAluno = document.getElementById("email").value;
    var senhaAluno = document.getElementById("senha").value;
    var senhaAlunoConfirm = document.getElementById("senhaConfirm").value;

    if (nomeAluno !=NULL){
        window.alert("nome inválido")
        window.location.reload()
    }

    if (emailAluno !=NULL || emailAluno != (emailAluno+'@alu.ufc.br')){
        window.alert("email inválido")
        window.location.reload()
    }

    if (cursoAluno !=NULL){
        window.alert("curso inválido")
        window.location.reload()
    }

    if (senhaAluno !=NULL ||  senhaAluno.length < 8 || senhaAluno != senhaAlunoConfirm){
        window.alert("senhas inválida")
        window.location.reload()
    }


    paginaAluno();

}


var BotaoCadastrar = document.getElementById("cad");
BotaoCadastrar.addEventListener('click', (event) => {

    cadastrar();

})