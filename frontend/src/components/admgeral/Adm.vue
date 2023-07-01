<template>

<body>
  <header>
    <HeaderAdm></HeaderAdm>
  </header>
  <ul class="nav" style="margin-bottom: 30px;margin-left: 0px;">
    <li><a href="#laboratorios">Laboratórios</a></li>
    <li><a href="#computadores">Computadores</a></li>
    <li><a href="#historico">Histórico de Navegação</a></li>
    <li><a href="#contas">Contas</a></li>
  </ul>

  <div id="laboratorios">
    <h1>Adicionar e Remover Laboratórios</h1>
    <p>Digite o nome do laboratório:</p><input type="text" size="40" maxlength="30"><br><br>
    <button class="but" id="btn-add" style="width: 200px;height: 50px;"> Adicionar </button>
    <button class="but" id="btn-remove" style="width: 200px;height: 50px;"> Remover </button><br><br>
    <div style="display: flex;justify-content: center;">
      <button style="width: 300px;height: 40px;"><a href="/views/Aluno/home" style="text-decoration: none;">Ir para a
          página de laboratórios</a></button>
    </div>
  </div>

  <div id="computadores">
    <h1>Buscar Computadores</h1><br>
    <select name="select" style="width: 220px;height: 60px;margin: 10px 0px 10px 10px;">
      <option selected disabled>Laboratórios</option>
      <option id="op1" value="valor1">Laboratório 1</option>
    </select>
    <select name="select" style="width: 220px;height: 60px;margin: 10px 0px 10px 10px;">
      <option selected disabled>Computadores</option>
      <option id="op1" value="valor1">Computador 1</option>
    </select>
    <button id="btn-add" class="but" style="width: 220px;height: 60px;margin: 10px 0px 10px 10px;">
      Adicionar </button>
    <button id="btn-add" class="but" style="width: 220px;height: 60px;margin: 10px 0px 10px 10px;"> Remover
    </button><br>
    <div style="display: flex;justify-content: center;">
      <button style="width: 300px;height: 40px;"><a href="/views/Aluno/home" style="text-decoration: none;">Ir para a
          página de laboratórios</a></button>
    </div>
  </div>

  <div id="historico"><br><br>
    <h1>Histórico</h1>
    <p>Nesta sessão você pode inserir e remover os computadores da página de escolha do usuário.</p>
    <select name="select" style="width: 200px;height: 50px;margin: 5px 0px 5px 0px;">
      <option selected disabled>Laboratórios</option>
      <option id="op1" value="valor1" >Laboratório 1</option>
    </select>
    <select name="select" style="width: 200px;height: 50px;margin: 5px 0px 5px 0px;">
      <option selected disabled>Computadores</option>
      <option id="op1" value="valor1" >Computador 1</option>
    </select>
    <button
      id="btn-add" class="but" 
      style="width: 200px;height: 50px;margin: 5px 0px 5px 0px;">Verificar</button>
    <br><br>
    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">N°</th>
          <th scope="col">Name</th>
          <th scope="col">Curso</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
    </table>
  </div>

  <div id="contas">
    <h1>Contas</h1>
    <p>Nesta sessão você pode analisar e remover a conta dos usuários do site.</p>
    <input type="text" size="50" style="height: 45px;margin-right: 10px;" placeholder="Pesquisar por usuário"><button
      id="btn-add" class="but" 
      style="width: 200px;height: 50px;margin: 5px 0px 5px 0px;">Verificar</button>
    <br><br>
    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">N°</th>
          <th scope="col">Name</th>
          <th scope="col">Curso</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
    </table>
  </div>

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
    name: 'Adm',
    components :{
      FooterGeral,
      HeaderAdm
    }
}
<script>

<style scoped></style>