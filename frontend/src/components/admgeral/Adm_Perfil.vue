<template>
<body>
  <header>
    <HeaderAdm></HeaderAdm>
  </header>
      <div>
        <div style="text-align: center;">
            <img src="/figmaSchoolLab/Perfil.png" alt="Perfil" width="170" height="170">
        </div>
        <div class="mb-3" style="margin: 0px 100px 0px 100px;">
            <label for="exampleFormControlInput1" class="form-label">Nome</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" disabled value="Jonatas Fernandes">
          </div>
          <div class="mb-3" style="margin: 0px 100px 0px 100px;">
            <label for="exampleFormControlInput1" class="form-label">Email</label>
            <input type="email" class="form-control" id="exampleFormControlInput2" disabled value="jonatasfernandes@alu.ufc.br">
          </div>
          <div class="mb-3" style="margin: 0px 100px 0px 100px;">
            <label for="exampleFormControlInput1" class="form-label">Curso</label>
            <input type="text" class="form-control" id="exampleFormControlInput3" disabled value="Analise e desenvolvimento de sistemas">
          </div>
          <div class="mb-3" style="margin: 0px 100px 0px 100px;">
            <label for="exampleFormControlInput1" class="form-label">Senha</label>
            <input type="password" class="form-control" id="exampleFormControlInput4" disabled value="Jonatas1">
          </div><br>
      <div style="text-align: center;">
        <button class="enviar" style="margin:0px 30px 0px 10px;">Salvar dados</button>
        <button class="enviar" style="margin: 0px 10px 0px 30px;">Alterar dados</button>
      </div>
    </div><br>
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
    name: 'Adm_Perfil'
}
<script>

<style scoped></style>