document.getElementById("E1").addEventListener("click", (esconderMostrarComputadore));
document.getElementById("E2").addEventListener("click", (esconderMostrarComputadore));
document.getElementById("E3").addEventListener("click", (esconderMostrarComputadore));
document.getElementById("E4").addEventListener("click", (esconderMostrarComputadore));
document.getElementById("E5").addEventListener("click", (esconderMostrarComputadore));
document.getElementById("E6").addEventListener("click", (esconderMostrarComputadore));
document.getElementById("E7").addEventListener("click", (esconderMostrarComputadore));
document.getElementById("E8").addEventListener("click", (esconderMostrarComputadore));
document.getElementById("E9").addEventListener("click", (esconderMostrarComputadore));
document.getElementById("E10").addEventListener("click", (esconderMostrarComputadore));
document.getElementById("E11").addEventListener("click", (esconderMostrarComputadore));
document.getElementById("E12").addEventListener("click", (esconderMostrarComputadore));
document.getElementById("E13").addEventListener("click", (esconderMostrarComputadore));
document.getElementById("E14").addEventListener("click", (esconderMostrarComputadore));
document.getElementById("E15").addEventListener("click", (esconderMostrarComputadore));
document.getElementById("E16").addEventListener("click", (esconderMostrarComputadore));
document.getElementById("E17").addEventListener("click", (esconderMostrarComputadore));
document.getElementById("E18").addEventListener("click", (esconderMostrarComputadore));

document.getElementById("c1").addEventListener("click", (mostrarBotoes));

function esconderMostrarComputadore() {
        swal({ title: "Escolher este Computador?", icon: "info", buttons: true, dangerMode: true, }).then((willDelete) => {
                if (willDelete) { 
                       swal("Concluido!", { icon: "success", }); 
                        for (let i = 1; i <= 18; i++){
                                document.getElementById("E"+i).hidden=true;
                        }
                        for (let i = 1; i <= 18; i++){
                                document.getElementById("c"+(i+1)).hidden=true;
                        }
               } 

        });
}

//pegar o id do botão; colocar uma condicional para se for igual ao botão escolhido não sumir, senão some; 2 for desnecessário

function mostrarBotoes() {
        swal({ title: "Cancelar este Computador?", icon: "info", buttons: true, dangerMode: true, }).then((willDelete) => {
                if (willDelete) { 
                       swal("Concluido!", { icon: "success", }); 
                        for (let i = 1; i <= 18; i++){
                                document.getElementById("E"+i).hidden=false;
                                document.getElementById("c"+i).hidden=false;
                        }
               } 

        });
}

  /*
function escolherComputador() {
        var x; 
        swal({ title: "Escolher este Computador?", icon: "info", buttons: true, dangerMode: true, }).then((willDelete) => {
                 if (willDelete) { 
                        swal("Concluido!", { icon: "success", }); 
                        x = 'Em uso ...'; 
                                document.querySelector("#comp1").disable = true;
                } else {
                        for(var i = 1; i < 5; i++){
                        document.querySelector("#comp" + i).disable = true;
                        }
                }
        });
}

function cancelarUso (idCancela) {
        computadorcancelamento = document.getElementById("compcancelar");
        computadorcancelamento.id = idCancela;
        var x;
        swal({ title: "cancelar o uso deste Computador?", icon: "info", buttons: true, dangerMode: true, }).then((willDelete) => {
                 if (willDelete) { 
                        swal("Concluido!", { icon: "success", }); 
                        x = 'Escolher'; 
                        computador.innerHTML = x; 
                        computador.hidden = false;
                } else {
                        computador.hidden = true;
                }
        });

}
window.onload = () => {
        var botaoEscolher = document.getElementById('compescolha');
        botaoEscolher.id = idEscolha;

        botaoEscolher.onclick = () => {
                escolherComputador(idEscolha);
        }

        var botaocancelar = document.getElementById('compcancelar');
        botaocancelar.id = idCancela;

        botaocancelar.onclick = () => {
                cancelarUso(idCancela);
        }
}*/