function add(){

  var option = document.querySelector(".option");

  var novoLaboratorio = document.createElement("p");

  var conteudoLaboratorio = document.createTextNode('oi teste');

  novoLaboratorio.appendChild(conteudoLaboratorio);

  option.appendChild(novoLaboratorio);

  console.log(option)
}

var botaoAdicionar = document.getElementById('btn-add');

botaoAdicionar.addEventListener('click', function(){
  add();
})