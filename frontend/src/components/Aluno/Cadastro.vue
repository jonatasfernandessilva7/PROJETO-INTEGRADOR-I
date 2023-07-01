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

</style>