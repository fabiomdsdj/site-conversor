import Vue from 'vue';
import Router from 'vue-router';

import Home from '../pages/Home.vue';
import NotFound from '../pages/404.vue';
import Volume from '../pages/Volume.vue';
import Length from '../pages/Length.vue';
import Donate from '../pages/Donate.vue';
import Time from '../pages/Time.vue';
import Temperature from '../pages/Temperature.vue';
import Weight from '../pages/Weight.vue';

Vue.use(Router);

let router = new Router({
  mode: 'history', // IMPORTANT
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'volume',
      component: Home,
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
      path: '/time',
      name: 'time',
      component: Time,
    },
    {
      path: '/temperature',
      name: 'temperature',
      component: Temperature,
    },
    {
      path: '/weight',
      name: 'weight',
      component: Weight,
    },
    {
      path: '*',
      component: NotFound,
    },    
  ]
});

export default router
