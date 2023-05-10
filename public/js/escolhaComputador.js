// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

// CommonJS
const Swal = require('sweetalert2')

function escolherComputador() {
        var x; 
        swal({ title: "Escolher este Computador?", icon: "info", buttons: true, dangerMode: true, }).then((willDelete) => {
                 if (willDelete) { 
                        swal("Concluido!", { icon: "success", }); x = 'Em uso ...'; document.getElementById("tel1").innerHTML = x; 
                } else {
                         swal("Escolha outro computador!"); 
                }
        });
}


window.onload = () => {
        var botaoEScolha = document.getElementById("tel1");

        botaoEScolha.onclick = () => {
                escolherComputador();
        }
}

//descobrir um jeito de utilizar apenas uma função pra todos os pcs
/*
function funcao2() { 
        var x; 
        swal({ title: "Escolher este Computador?", icon: "info", buttons: true, dangerMode: true, }).then((willDelete) => {
                 if (willDelete) { 
                        swal("Concluido!", { icon: "success", }); x = 'Em uso ...'; document.getElementById("tel2").innerHTML = x; 
                } else {
                         swal("Escolha outro computador!"); 
                }
        });
}
*/