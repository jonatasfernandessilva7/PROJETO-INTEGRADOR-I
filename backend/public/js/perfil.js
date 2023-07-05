function alert() {

    var inputNome = document.getElementById("NomePerfil");
    var inputCurso = document.getElementById("curso");
    var inputSenha = document.getElementById("senha");


    swal({ title: "Confirmar alterações?", icon: "info", buttons: true, dagerMode: true }).then((willDelete) => {
        if (willDelete) {
            swal("Concluído!", { icon: "success", });
            inputNome.disabled = true;
            inputCurso.disabled = true;
            inputSenha.disabled = true;
        }
        else {
            inputNome.disabled = false;
            inputCurso.disabled = false;
            inputSenha.disabled = false;
        }
    })

}
function habilitar() {

    var inputNome = document.getElementById("NomePerfil");
    var inputCurso = document.getElementById("curso");
    var inputSenha = document.getElementById("senha");

    inputNome.disabled = false;
    inputCurso.disabled = false;
    inputSenha.disabled = false;
}