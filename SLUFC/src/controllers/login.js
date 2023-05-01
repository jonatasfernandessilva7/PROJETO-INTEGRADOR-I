function paginaCadastro(){
    window.location.href = 'cadastro.html'
}

function paginaAluno(){
	window.location.href = 'home.html'
}

function alerts () {
	window.alert("campos incompletos, por favor preencha-os corretamente");
	wwindow.location.href = 'login.html'
}

function userLogin () {
	var userInputEmail = document.getElementById("email1").value;
	var userInputPassword = document.getElementById("senha1").value;
	var hostEmail = "@alu.ufc.br";

	if (userInputEmail == '' || userInputPassword == ''){
		alerts();
	} else if (!userInputEmail.includes(hostEmail)) {
		alerts();
	}

	paginaAluno();
}

window.onload = () => {
	var BotaoEntrar = document.getElementById("butEnter");
    var BotaoCad = document.getElementById("butCad");

	BotaoEntrar.onclick = () => {
		userLogin();
	}

    BotaoCad.onclick = () => {
    	paginaCadastro();
	}
}