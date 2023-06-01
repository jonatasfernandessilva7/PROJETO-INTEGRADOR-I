function esconder(){
        for (let i = 1; i <=18; i++){
                document.getElementById("E"+i).hidden=true;
                document.getElementById("c"+i).hidden=true;
        }
        var id = event.target.dataset.nome;
        document.getElementById(id).hidden=false;
}

function mostrar(){
        for (let i = 1; i <=18; i++){
                document.getElementById("E"+i).hidden=false;
                document.getElementById("E"+i).hidden=false;
        }
}


function iniciar() {
        for (let i = 1; i <= 18; i++) {
                document.getElementById("E" + i).hidden = false;
        }

        //botões de escolher

        document.getElementById("E1").addEventListener("click", (esconder));
        document.getElementById("E2").addEventListener("click", (esconder));
        document.getElementById("E3").addEventListener("click", (esconder));
        document.getElementById("E4").addEventListener("click", (esconder));
        document.getElementById("E5").addEventListener("click", (esconder));
        document.getElementById("E6").addEventListener("click", (esconder));
        document.getElementById("E7").addEventListener("click", (esconder));
        document.getElementById("E8").addEventListener("click", (esconder));
        document.getElementById("E9").addEventListener("click", (esconder));
        document.getElementById("E10").addEventListener("click", (esconder));
        document.getElementById("E11").addEventListener("click", (esconder));
        document.getElementById("E12").addEventListener("click", (esconder));
        document.getElementById("E13").addEventListener("click", (esconder));
        document.getElementById("E14").addEventListener("click", (esconder));
        document.getElementById("E15").addEventListener("click", (esconder));
        document.getElementById("E16").addEventListener("click", (esconder));
        document.getElementById("E17").addEventListener("click", (esconder));
        document.getElementById("E18").addEventListener("click", (esconder));
/////////////////////////////////////////////////////////////////////////////////////////////

//botões de cancelar
        document.getElementById("c1").addEventListener("click", (mostrar));
        document.getElementById("c2").addEventListener("click", (mostrar));
        document.getElementById("c3").addEventListener("click", (mostrar));
        document.getElementById("c4").addEventListener("click", (mostrar));
        document.getElementById("c5").addEventListener("click", (mostrar));
        document.getElementById("c6").addEventListener("click", (mostrar));
        document.getElementById("c7").addEventListener("click", (mostrar));
        document.getElementById("c8").addEventListener("click", (mostrar));
        document.getElementById("c9").addEventListener("click", (mostrar));
        document.getElementById("c10").addEventListener("click", (mostrar));
        document.getElementById("c11").addEventListener("click", (mostrar));
        document.getElementById("c12").addEventListener("click", (mostrar));
        document.getElementById("c13").addEventListener("click", (mostrar));
        document.getElementById("c14").addEventListener("click", (mostrar));
        document.getElementById("c15").addEventListener("click", (mostrar));
        document.getElementById("c16").addEventListener("click", (mostrar));
        document.getElementById("c17").addEventListener("click", (mostrar));
        document.getElementById("c18").addEventListener("click", (mostrar));
}
window.addEventListener("load", iniciar)