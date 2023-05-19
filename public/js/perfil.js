function alert() {
    var entrada1 = document.getElementById("nome");
    var entrada3 = document.getElementById("curso");
    var entrada4 = document.getElementById("senha");


    swal({ title: "Confirmar alterações?", icon: "info", buttons: true, dagerMode: true }).then((willDelete) => {
        if (willDelete) {
            swal("Concluído!", { icon: "success", });
            entrada1.disabled = true;
            entrada3.disabled = true;
            entrada4.disabled = true;
        }
        else {
            entrada1.disabled = false;
            entrada3.disabled = false;
            entrada4.disabled = false;
        }
    })
}
function habilitar() {
    var entrada1 = document.getElementById("nome");
    var entrada3 = document.getElementById("curso");
    var entrada4 = document.getElementById("senha");
    entrada1.disabled = false;
    entrada3.disabled = false;
    entrada4.disabled = false;
}