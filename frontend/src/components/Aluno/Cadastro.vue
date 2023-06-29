<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="/figmaSchoolLab/icone.jpg">
    <title>School Lab UFC</title>
    <link rel="stylesheet" href="/css/sty.css">
    <script defer src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
</head>
<body>
    <form action="/Aluno/cadastro/login" method="POST" class="caixote">
        <h1 id="text">Página de cadastro</h1>
            <input required name="nome" id="nome" type="text" placeholder="Nome completo" maxlength="50" size="50" value="">
            <input required name ="curso" id="curso" type="text" placeholder="Curso" maxlength="50" size="50" value="">
            <input required name ="email" id="email" type="email" placeholder="Email institucional" maxlength="50" maxlength="50" size="50" value="">
            <input required name ="senha" id="senha" type="password" placeholder="Senha" minlength="8" size="50" value="">
            <input required name ="senhaConfirm" id="senhaConfirm" type="password" placeholder="Confirme sua senha" minlength="8" size="50" value="">
            <button id="cad">Cadastrar</button>
        <p id="footer">&copy;School Lab</p>
    </form>
</body>
</html>