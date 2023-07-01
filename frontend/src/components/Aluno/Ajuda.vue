<template>
<body>
<header>
  <HeaderAluno></HeaderAluno>
</header>
<div style="text-align: center;">
    <h4 style="color: #fff;">Bem vindo(a) ao tutorial de navegação do site School Lab UFC. Abaixo está o passo a passo numerado de como acessar todas as opções que o site tem a oferecer:</h4>
        <div class="list"><p>1. Na tela principal do site temos a barra de navegação onde estão todas as páginas de navegação do site, ao clicar nelas você será direcionado ao conteúdo específico de cada uma delas</p></div>
        <div style="text-align: center;display: flex;justify-content:center;">
            <img src="../../../public//img/tutorial1.png" alt="Perfil" width="580" height="335">
        </div>
        <div class="list"><p>2. Na tela principal estão todos os laboratórios que possuem computadores. Para requisitar o uso dos computadores você deve entrar em qualquer um dos 5 laboratórios.</p></div>
        <div style="text-align: center;display: flex;justify-content:center;">
            <img src="/../../../public/img/tutorial2.png" alt="Perfil" width="580" height="335">
        </div>
        <div class="list"><p>3. Ao Entrar em um dos laboratórios você terá como opções todos os computadores que não estiverem sendo utilizados por outros usuários.</p></div>
        <div style="text-align: center;display: flex;justify-content:center;">
            <img src="../../../public/img/tutorial3.png" alt="Perfil" width="580" height="335">
        </div>
        <div class="list"><p>4. Para selecionar o computador, basta clicar no botão azul com o nome escolher. Ao confirmar a sua escolha irá aparecer um alerta de confirmação.</p></div>
        <div class="list"><p>5. Para cancelar a sua escolha, vá a página de Histórico e lá você encontrara um botão de cancelamento do computador.</p></div>
    <p id="texto">Esperamos que este tutorial possa ter sido útil para você!. Em caso de Ainda haver dúvidas, assista ao nosso vídeo tutorial: </p>
    <div style="display: flex;justify-content:center;">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ii-KRRt13o4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
</div><br><br>
    <footer class="footer">
      <FooterGeral></FooterGeral>
    </footer>
</body>
</template>

<script>
import { FooterGeral } from "@/components/partials/FooterGeral.vue";
import {  HeaderAluno} from "@/components/partials/HeaderAluno.vue";

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Ajuda'
}
</script>

<style scoped></style>