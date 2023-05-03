function Clicar(){
    window.location.href = "Lab1.html";
}
function Clicar2(){
    window.location.href = "Lab2.html";
}
function Clicar3(){
    window.location.href = "Lab3.html";
}
function Clicar4(){
    window.location.href = "Lab4.html";
}
function Clicar5(){
    window.location.href = "Biblioteca.html";
}

window.onload = () => {

    var botaoLab1 = document.getElementById("telaLab1");
    var botaoLab2 = document.getElementById("telaLab2");
    var botaoLab3 = document.getElementById("telaLab3");
    var botaoLab4 = document.getElementById("telaLab4");
    var botaoBiblioteca = document.getElementById("telaBiblioteca");

    botaoLab1.onclick = () => {
        Clicar();
    }

    botaoLab2.onclick = () => {
        Clicar2();
    }

    botaoLab3.onclick = () => {
        Clicar3();
    }

    botaoLab4.onclick = () => {
        Clicar4();
    }

    botaoBiblioteca.onclick = () => {
        Clicar5();
    }


}