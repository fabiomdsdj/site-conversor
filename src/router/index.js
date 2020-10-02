import Vue from 'vue';
import Router from 'vue-router';

import NotFound from '../pages/404.vue';
import Volume from '../pages/Volume.vue';
import Length from '../pages/Length.vue';
import Donate from '../pages/Donate.vue';

Vue.use(Router);

let router = new Router({
  mode: 'history', // IMPORTANT
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'volume',
      redirect: '/volume',
      component: Volume,
    },
    {
      path: '/volume',
      name: 'volume',
      component: Volume,
    },
    {
      path: '/length',
      name: 'length',
      component: Length,
    },
    {
      path: '/donate',
      name: 'donate',
      component: Donate,
    },
    {
      path: '*',
      component: NotFound,
    },    
  ]
});

export default router
