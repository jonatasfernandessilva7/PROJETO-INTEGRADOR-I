<template>
    <body>
    <form action="/Aluno/login" method="UPDATE" class="caixa">
        <h2>recuperar Senha </h2>
        <input required name="email" id="email" type="email" placeholder="insira seu email novamente" maxlength="50" size="40" value="" autocomplete=""><br>
        <input required name="senha" id="senha" type="password" placeholder="nova senha" value="" maxlength="50" size="40" autocomplete=""><br>
        <button id="enviarNovaSenha">Enviar Nova Senha</button>
        <p id="logo">&copy;School Lab</p>
    </form>
</body>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'InserirNovaSenha'
}</script>

<style scoped></style>