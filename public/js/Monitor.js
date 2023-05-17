//login de monitor
function userLoginMonitor() {
    var userInputEmail = document.getElementById("email1").value;
    var userInputPassword = document.getElementById("senha1").value;
    var hostEmail = "@alu.ufc.br";

    if (userInputEmail == '' || userInputPassword == '') {
        alerts();
    } else if (!userInputEmail.includes(hostEmail)) {
        alerts();
    }

    paginaMonitor();
}

function paginaCadastroMonitor() {
    window.location.href = 'Monitor/cadastroMonitor.html'
}

function paginaMonitor() {
    window.location.href = 'Monitor/loginMonitor.html'
}

//ação de click dos botões
window.onload = () => {
    var BotaoEntrarMonitor = document.getElementById("butEnterMonitor");
    var BotaoCaMdonitor = document.getElementById("butCadMonitor");


    //quando o botão entrar é acionado, a função de login é chamada
    BotaoEntrarMonitor.onclick = () => {
        userLoginMonitor();
    }

    BotaoCaMdonitor.onclick = () => {
        paginaCadastroMonitor();
    }
}