<template>
  <body>
    <header>
      <HeaderAdm></HeaderAdm>
    </header>
        <div class="text">
          <h5>Olá! Seja bem vindo ao SCHOOL LAB UFC, aqui você poderá requisitar o uso dos computadores dos laboratóros da Universidade. O site tem uma usabilidade simples para que todos possam acessar as funções disponiveis sem nenhum problema. Para escolher os computadores, primeiro escolha o laboratório, em seguida escolha o computador que estiver disponivel.
          </h5>
      </div>
      <form id="form" style="height: 467px;" action="/views/admgeral/Adm_Contato" method="POST">
        <div class="mb-3" style="margin: 0px 20px 0px 20px;">
          <label for="exampleFormControlInput1" class="form-label">Nome e sobrenome</label>
          <input type="text" class="form-control" id="nomeDoSugestor" name="nomeDoSugestor" placeholder="nome">
        </div>
        <div class="mb-3" style="margin: 0px 20px 0px 20px;">
          <label for="exampleFormControlInput1" class="form-label">Email</label>
          <input type="email" class="form-control" id="emailDoSugestor" name="emailDoSugestor" placeholder="name@alu.ufc.br">
        </div>
        <div class="mb-3" style="margin: 0px 20px 0px 20px;">
          <label for="exampleFormControlInput1" class="form-label">Curso</label>
          <input type="text" class="form-control" id="cursoDoSugestor" name="cursoDoSugestor" placeholder="curso">
        </div>
        <div class="mb-3" style="margin: 0px 20px 0px 20px;">
          <label for="exampleFormControlTextarea1" class="form-label">Descrição</label>
          <textarea class="form-control" id="sugestao" name="sugestao" rows="3" placeholder="descrição"></textarea>
        </div>
        <div id="button">
          <button id="enviar">Enviar</button>
        </div>
      </form><br><br>
      <footer class="footer">
          <FooterGeral></FooterGeral>
      </footer>
  </body>
</template>

<script>
import { FooterGeral } from "@/components/partials/FooterGeral.vue";
import { HeaderAdm} from '@/components/partials/HeaderAdm.vue';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Adm_Contato'
}</script>

<style scoped></style>