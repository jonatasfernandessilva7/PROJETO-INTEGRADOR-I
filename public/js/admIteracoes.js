$('.nav a[href^="#"]').on('click', function (e) {
  e.preventDefault();
  var id = $(this).attr('href'),
    targetOffset = $(id).offset().top;

  $('html, body').animate({
    scrollTop: targetOffset - 100
  }, 200);
});
let cont = 1;
$('#btn-add').on('click', function () {
  $('.checks').append('<input type="text" id="' + cont + '">')
  cont++;
});

function clicar() {
  swal({ title: "Escolher este Computador?", icon: "info", buttons: true, dangerMode: true, }).then((willDelete) => {
    if (willDelete) {
      swal("Concluiso!", { icon: "success", });
      x = 'Em uso ...';
      computador.innerHTML = x;
      computador.disabled = true;
    } else {
      computador.disabled = false;
    }
  });
}

function habilitar() {
  var entrada1 = document.getElementsByClassName("but");
  entrada1.disabled = false;
}
