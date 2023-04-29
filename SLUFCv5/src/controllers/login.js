function paginaCadastro(){
    window.location.href = 'cadastro.html'
}
function paginaAluno(){
    window.location.href = 'home.html'
}

window.onload = () => {
	var BotaoEntrar = document.getElementById("butEnter");
    var BotaoCad = document.getElementById("butCad");

	BotaoEntrar.onclick = () => {
    	paginaAluno();
	}

    BotaoCad.onclick = () => {
    	paginaCadastro();
	}
}
