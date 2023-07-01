<template>
<body>
  <header>
    <HeaderAluno></HeaderAluno>
  </header>
  <div class="hist">
    <h3>Histórico de computadores acessados</h3>
  </div><br>
  <div style="text-align: center;">
    <button class="enviar" style="margin: 0px 10px 0px 30px;width: 200px;">Cancelar escolha do computador</button>
  </div><br>
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
    name: 'Historico'
}
</script>

<style scoped></style>