import 'whatwg-fetch';
import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './routes/application.vue';
import Index from './routes/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
];

console.log('x');

const router = new VueRouter({
  mode: 'history',
  routes,
});

const app = new Vue({ ...App, router }).$mount('.app');

// changed the nav color and background
document.addEventListener('scroll', (ev) => {
  window.requestAnimationFrame(() => {
    if (document.body.scrollTop > 200) {
      document.querySelector('.nav').classList.add('nav--dark');
    } else {
      document.querySelector('.nav').classList.remove('nav--dark');
    }
  });
});
