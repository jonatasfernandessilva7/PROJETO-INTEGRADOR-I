<template>
<head>
    <script defer src="/js/escolhaComputador.js"></script>
</head>

<body>
    <header>
        <HeaderAluno></HeaderAluno>
    </header>
    <Labs></Labs>
    <footer class="footer">
        <FooterGeral></FooterGeral>
    </footer>
</body>

</template>

<script>
import { FooterGeral } from "@/components/partials/FooterGeral.vue";
import {  HeaderAluno} from "@/components/partials/HeaderAluno.vue";
import { Labs } from "@/components/partials/Labs.vue"

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Lab1'
}
</script>

<style scoped></style>