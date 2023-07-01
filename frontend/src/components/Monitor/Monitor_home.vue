<template>
  <body>
      <header>
          <HeaderMonitor></HeaderMonitor>
      </header>
  
      <div class="text">
          <h5>Olá! Seja bem vindo ao SCHOOL LAB UFC, aqui você poderá requisitar o uso dos computadores dos laboratóros da
              Universidade. O site tem uma usabilidade simples para que todos possam acessar as funções disponiveis sem
              nenhum problema. Para escolher os computadores, primeiro escolha o laboratório, em seguida escolha o
              computador que estiver disponivel.
          </h5>
      </div>
      <div class="titulo">
          <h3>Selecione uma sala</h3>
      </div>
      <div class="option">
          <div class="card" style="width: 18rem; display: inline-block; margin:30px;">
              <img src="../../../public/img/SCHOLLLABUFC.png" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">Laboratório 1</h5><br>
                  <a href="" class="btn btn-primary" style="width: 150px;">Monitorar</a>
              </div>
          </div>
          <div class="card" style="width: 18rem; display: inline-block;margin:30px;">
              <img src="../../../public/img/SCHOLLLABUFC.png" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">Laboratório 2</h5><br>
                  <a href="" class="btn btn-primary" style="width: 150px;">Monitorar</a>
              </div>
          </div>
          <div class="card" style="width: 18rem;display: inline-block;margin:30px;">
              <img src="../../../public/img/SCHOLLLABUFC.png" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">Laboratório 3</h5><br>
                  <a href="" class="btn btn-primary" style="width: 150px;">Monitorar</a>
              </div>
          </div>
          <div class="card" style="width: 18rem;display: inline-block;margin:30px;">
              <img src="../../../public/img/SCHOLLLABUFC.png" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">Laboratório 4</h5><br>
                  <a href="" class="btn btn-primary" style="width: 150px;">Monitorar</a>
              </div>
          </div>
          </div><br><br>
          <div id="carouselExampleIndicators" class="carousel slide">
              <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                      aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                      aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                      aria-label="Slide 3"></button>
              </div>
  
          </div>
          <footer class="footer">
              <FooterGeral></FooterGeral>
          </footer>
  </body>
  </template>
  
  <script>
  import { FooterGeral } from "@/components/partials/FooterGeral.vue";
  import {  HeaderMonitor } from "@/components/partials/HeaderAluno.vue";
  
  export default {
      // eslint-disable-next-line vue/multi-word-component-names
      name: 'Home'
  }
  </script>
  
  <style scoped></style>