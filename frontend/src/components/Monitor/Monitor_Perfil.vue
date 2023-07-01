<template>
  <body>
    <header>
      <HeaderMonitor></HeaderMonitor>
    </header>
    <form>
      <div style="text-align: center;">
        <img src="../../../public/img/Perfil.png" alt="Perfil" width="170" height="170">
      </div>
      <div class="mb-3" style="margin: 0px 100px 0px 100px;">
        <label for="alunoOn" class="form-label">Nome</label>
        <input name="nome" type="text" class="form-control" id="nome" disabled value="<%=nomeUser%>">
      </div>
      <div class="mb-3" style="margin: 0px 100px 0px 100px;">
        <label for="alunoOn" class="form-label">Email</label>
        <input name="email" type="email" class="form-control" id="email" disabled value="<%=emailUser%>">
      </div>
      <div class="mb-3" style="margin: 0px 100px 0px 100px;">
        <label for="alunoOn" class="form-label">Curso</label>
        <input name="curso" type="text" class="form-control" id="curso" disabled value="<%=cursoUser%>">
      </div>
      <div class="mb-3" style="margin: 0px 100px 0px 100px;">
        <label for="alunoOn" class="form-label">Senha</label>
        <input name="senha" type="password" class="form-control" id="senha" disabled value="<%=senhaUser%>">
      </div><br>
      <div style="text-align: center;">
        <button class="enviar" style="margin:0px 30px 0px 10px;">Salvar dados</button>
      </div>
    </form><br>
    <div style="text-align: center;">
      <button class="enviar" style="margin: 0px 30px 0px 10px;" onclick="habilitar()">Alterar dados</button>
    </div>
    <footer class="footer">
      <FooterGeral></FooterGeral>
    </footer>
  </body>
  </template>
  
  <script>
  import { FooterGeral } from "@/components/partials/FooterGeral.vue";
  import { HeaderMonitor } from "@/components/partials/HeaderAluno.vue";
  
  export default {
      // eslint-disable-next-line vue/multi-word-component-names
      name: 'Monitor_Perfil'
  }
  </script>