import { createRouter, createWebHistory } from "vue-router";

import Login from '@/views/Aluno/Login.vue';
import Monitor from '@/views/Monitor/LoginMonitor.vue';
import Administrador from '@/views/Adm/Adm_login.vue';

import Home from '@/views/Aluno/Home.vue';
import Cadastro from '@/views/Aluno/Cadastro.vue';

import EsqueceuASenha from '@/views/EsqueceuASenha.vue';


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
  },
  {
    path: '/Aluno/cadastro',
    name: 'Cadastro',
    component: Cadastro
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router;