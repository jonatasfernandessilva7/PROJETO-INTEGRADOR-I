import {insertTable} from "../../src/models/database/insert";

function paginaAluno(){
    window.location.href = 'home.html'
}

function alerts () {
    window.alert("campos incompletos ou não encontrados, por favor preencha-os corretamente");
    wwindow.location.href = 'cadastro.html'
}
//cadastrar novo aluno
async function cadastrar(){
    var nomeAluno = document.getElementById("nome").value;
    var cursoAluno = document.getElementById("curso").value;
    var emailAluno = document.getElementById("email").value;
    var senhaAluno = document.getElementById("senha").value;
    var senhaAlunoConfirm = document.getElementById("senhaConfirm").value;
    var hostEmail = "@alu.ufc.br";

    if (senhaAluno != senhaAlunoConfirm) {
        alerts();
    }else if (!emailAluno.includes(hostEmail)){
        alerts();
    }

    insertTable(nomeAluno,emailAluno,cursoAluno,senhaAluno);

    paginaAluno();

}


window.onload = () => {
    var BotaoCadastrar = document.getElementById("cad");

    BotaoCadastrar.onclick = () => {
    	cadastrar();
	}
}