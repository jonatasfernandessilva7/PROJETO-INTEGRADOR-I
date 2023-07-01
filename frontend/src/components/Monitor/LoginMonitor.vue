<template>
    <body>
        <form class="caixa">
            <h1>Seja bem vindo!</h1>
                <input required name="email" id="email" type="email" placeholder="Email" maxlength="50" size="40" value="" autocomplete=""><br>
                <input required name="senha" id="senha" type="password" placeholder="Senha" minlength="8" size="40" value=""><br>
                <p><a href="">Esqueceu a senha?</a></p>
                <button id="butEnterMonitor">Entrar</button>
                <p id="logo">&copy;School Lab</p>
        </form>
    </body>
    </template>
    
    <script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'LoginMonitor'
    }
    </script>
    
    <style scoped></style>