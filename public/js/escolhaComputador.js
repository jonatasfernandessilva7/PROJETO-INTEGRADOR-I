function escolherComputador() {
        var x; 
        swal({ title: "Escolher este Computador?", icon: "info", buttons: true, dangerMode: true, }).then((willDelete) => {
                 if (willDelete) { 
                        swal("Concluido!", { icon: "success", }); 
                        x = 'Em uso ...'; 
                        document.querySelector("#compEscolhe").innerHTML = x; 
                        document.querySelector("#compEscolhe").disabled = true;
                } else {
                        document.querySelector("#compEscolhe").disabled = false;
                }
        });
}

function cancelarUso() {

        var y; 
        swal({ title: "cancelar o uso deste Computador?", icon: "info", buttons: true, dangerMode: true, }).then((willDelete) => {
                 if (willDelete) { 
                        swal("Concluido!", { icon: "success", }); 
                        x = 'Escolher'; 
                        document.querySelector("#compEscolhe").innerHTML = x; 
                        document.querySelector("#compEscolhe").disabled = false;
                } else {
                        document.querySelector("#compEscolhe").disable = true;
                }
        });

}


window.onload = () => {
        var botaoEScolha = document.querySelector("#compEscolhe");

        botaoEScolha.onclick = () => {
                escolherComputador();
        }

        var botaoCancelar = document.querySelector("#compcancela");

        botaoCancelar.onclick = () => {
                cancelarUso();
        }
}