function alert() {
    var entrada1 = document.getElementById("exampleFormControlInput1");
    var entrada3 = document.getElementById("exampleFormControlInput3");
    var entrada4 = document.getElementById("exampleFormControlInput4");


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
    var entrada1 = document.getElementById("exampleFormControlInput1");
    var entrada3 = document.getElementById("exampleFormControlInput3");
    var entrada4 = document.getElementById("exampleFormControlInput4");
    entrada1.disabled = false;
    entrada3.disabled = false;
    entrada4.disabled = false;
}