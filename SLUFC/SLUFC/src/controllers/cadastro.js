function paginaAluno(){
    window.location.href = 'home.html'
}

window.onload = () => {
    var BotaoCadastrar = document.getElementById("cad");

    BotaoCadastrar.onclick = () => {
    	paginaAluno();
	}
}