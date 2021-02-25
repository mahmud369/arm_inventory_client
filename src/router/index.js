import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'home', component: () => import('@/views/Home.vue'), alias: ['/home'] },
  { path: '/login', name: 'login', component: () => import('@/views/Login.vue'), alias: ['/signin', '/sign-in'] },
  { path: '/dashboard', name: 'dashboard', component: () => import('@/views/Dashboard.vue') },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;