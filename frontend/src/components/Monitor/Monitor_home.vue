<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="/figmaSchoolLab/icone.jpg">
    <title>School Lab UFC</title>
    <link rel="stylesheet" href="/css/pages-styles.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet">
    <script defer src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js"></script>
</head>
<body>
  <header>
    <%- include('../partials/header'); -%>
  </header>
        <div class="text">
            <h5>Olá! Seja bem vindo ao SCHOOL LAB UFC, aqui você poderá verificar o uso dos computadores dos laboratóros da Universidade. O site tem uma usabilidade simples para que todos possam acessar as funções disponiveis sem nenhum problema. Para ver os computadores que estão sendo utilizados primeiro escolha o laboratório que deseja verificar, dentro dos laboratórios estaram os computadores com as informações sobre o usuário que está usando.
            </h5>
        </div>
        <div class="titulo">
            <h3>Selecione uma sala</h3>
        </div>
        <div class="option">
            <div class="card" style="width: 18rem; display: inline-block; margin:30px;">
                <img src="/figmaSchoolLab/SCHOLLLABUFC.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Laboratório 1</h5><br>
                  <a href="/views/Monitor_Lab1" class="btn btn-primary" style="width: 150px;">Monitorar</a>
                </div>
            </div>
            <div class="card" style="width: 18rem; display: inline-block;margin:30px;">
                <img src="/figmaSchoolLab/SCHOLLLABUFC.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Laboratório 2</h5><br>
                  <a href="/views/Monitor_Lab2" class="btn btn-primary" style="width: 150px;">Monitorar</a>
                </div>
            </div>
            <div class="card" style="width: 18rem;display: inline-block;margin:30px;">
                <img src="/figmaSchoolLab/SCHOLLLABUFC.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Laboratório 3</h5><br>
                  <a href="/views/Monitor_Lab3" class="btn btn-primary" style="width: 150px;">Monitorar</a>
                </div>
            </div>
            <div class="card" style="width: 18rem;display: inline-block;margin:30px;">
                <img src="/figmaSchoolLab/SCHOLLLABUFC.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Laboratório 4</h5><br>
                  <a href="/views/Monitor_Lab4" class="btn btn-primary" style="width: 150px;">Monitorar</a>
                </div>
            </div>
            </div><br><br>
        <footer class="footer">

            <%- include('../partials/footer'); -%>

        </footer>
</body>
</html>
