function escolherComputador(idEscolha) {
        computador = document.getElementById('compescolha');
        computador.id = idEscolha;
        var x; 
        swal({ title: "Escolher este Computador?", icon: "info", buttons: true, dangerMode: true, }).then((willDelete) => {
                 if (willDelete) { 
                        swal("Concluiso!", { icon: "success", }); 
                        x = 'Em uso ...'; 
                        computador.innerHTML = x; 
                        computador.hidden = true;
                } else {
                        computador.hidden = false;
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
}