import { createRouter, createWebHistory } from "vue-router";

import Login from '@/components/Aluno/Login.vue';
import Monitor from '@/components/Monitor/LoginMonitor.vue';
import Administrador from '@/components/Adm/Adm_login.vue';

import Home from '@/components/Aluno/Home.vue';

import EsqueceuASenha from '@/components/EsqueceuASenha.vue';


const routes = [
  {
    path: '/Aluno',
    name: 'Login',
    component: Login
  },
  {
    path: '/Monitor',
    name: 'LoginMonitor',
    component: Monitor
  },
  {
    path: '/Administrador',
    name: 'Adm_logins',
    component: Administrador
  },
  {
    path: '/Aluno/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/esqueceu_Senha',
    name:'EsqueceuASenha',
    component: EsqueceuASenha
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router;