function escolherComputador(id) {
        var x; 
        swal({ title: "Escolher este Computador?", icon: "info", buttons: true, dangerMode: true, }).then((willDelete) => {
                 if (willDelete) { 
                        swal("Concluido!", { icon: "success", }); 
                        x = 'Em uso ...'; 
                        document.getElementById(id).innerHTML = x; 
                        document.getElementById(id).disabled = true;
                } else {
                        document.getElementById(id).disabled = false;
                }
        });
}

function cancelarUso (id) { 
        swal({ title: "cancelar o uso deste Computador?", icon: "info", buttons: true, dangerMode: true, }).then((willDelete) => {
                 if (willDelete) { 
                        swal("Concluido!", { icon: "success", }); 
                        x = 'Escolher'; 
                        document.getElementById(id).innerHTML = x; 
                        document.getElementById(id).disabled = false;
                } else {
                        document.getElementById(id);disabled = true;
                }
        });

}
window.onload = (id) => {
        var botaoEscolher = document.getElementById(id);

        botaoEscolher.onclick = () => {
                escolherComputador(id);
        }
}