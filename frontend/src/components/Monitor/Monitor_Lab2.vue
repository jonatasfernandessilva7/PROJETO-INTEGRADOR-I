<template>
  <head>
      <script defer src="/js/escolhaComputador.js"></script>
  </head>
  
  <body>
      <header>
          <HeaderMonitor></HeaderMonitor>
      </header>
      <LabsMonitor></LabsMonitor>
      <footer class="footer">
          <FooterGeral></FooterGeral>
      </footer>
  </body>
  
  </template>
  
  <script>
  import { FooterGeral } from "@/components/partials/FooterGeral.vue";
  import { HeaderMonitor} from "@/components/partials/HeaderAluno.vue";
  import { LabsMonitor } from "@/components/partials/Labs.vue"
  
  export default {
      // eslint-disable-next-line vue/multi-word-component-names
      name: 'Monitor_Lab2'
  }
  </script>
  
  <style scoped></style>