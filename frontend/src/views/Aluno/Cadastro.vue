<template>
<body>
    <form class="caixote">
        <h1 id="text">Página de cadastro</h1>
            <input required name="nome" id="nome" type="text" placeholder="Nome completo" maxlength="50" size="50" value="">
            <input required name ="curso" id="curso" type="text" placeholder="Curso" maxlength="50" size="50" value="">
            <input required name ="email" id="email" type="email" placeholder="Email institucional" maxlength="50" size="50" value="">
            <input required name ="senha" id="senha" type="password" placeholder="Senha" minlength="8" size="50" value="">
            <input required name ="senhaConfirm" id="senhaConfirm" type="password" placeholder="Confirme sua senha" minlength="8" size="50" value="">
            <button id="cad">Cadastrar</button>
        <p id="footer">&copy;School Lab</p>
    </form>
</body>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Cadastro'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
body {
    font-family: 'Roboto Condensed', sans-serif;
    margin: 0px;
    background-image: url("../../../public/img/Tela_fundo.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
}
.caixa{
    position: absolute;
    top: 25%;
    background-color: #00000081;
    text-align: center;
    width: 400px;
    height: 390px;
    border-radius: 10px;
    color: #fff;
}
h1{
    margin: 40px 0px 30px 0px;
}
input{
    margin: 0px 0px 15px 0px;
    padding: 10px;
    border-radius: 5px;
    font-size: 0.8em;
}
button{
    margin: 10px 10px 15px 10px;
    padding: 10px 20px 10px 20px;
    border-radius: 5px;
    font-weight: 700;
    font-size: 0.9em;
}
button:hover{
    background-color: #8344ff;
    color: #fff;
    transition: 0.5s;
}
a{
    color: #ffffff;
    text-decoration: none;
    font-size: 12pt;
}
a:hover{
    color: #8344ff;
    transition: 0.4s;
}
/*Cadastro*/
.caixote{
    position: absolute;
    top: 10%;
    background-color: #00000081;
    text-align: center;
    width: 450px;
    height: 600px;
    border-radius: 10px;
    color: #fff;
}
.caixote-2{
    position: absolute;
    top: 25%;
    background-color: #00000081;
    text-align: center;
    width: 450px;
    height: 440px;
    border-radius: 10px;
    color: #fff;
}
</style>