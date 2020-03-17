import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Theme31v1 from '@/components/ResumeTheme31v1';
import Theme31v2 from '@/components/ResumeTheme31v2';
import Theme17 from '@/components/ResumeTheme17';

const routes = [{
    path: '/',
    name: 'Theme31v1',
    component: Theme31v1,
    props: true
  },

  {
    path: '/v2',
    name: 'Theme31v2',
    component: Theme31v2,
    props: true
  },

  {
    path: '/theme17',
    name: 'Theme17',
    component: Theme17,
    props: true
  },
  // {
  //   path: '/theme21',
  //   name: 'Theme21',
  //   component: Theme21,
  //   props: true
  // },
  // {
  //   path: '/theme24',
  //   name: 'Theme24',
  //   component: Theme24,
  //   props: true
  // },
  // {
  //   path: '/theme13',
  //   name: 'Theme13',
  //   component: Theme13,
  //   props: true
  // },
  // {
  //   path: '/theme27',
  //   name: 'Theme27',
  //   component: Theme27,
  //   props: true
  // },
  // {
  //   path: '/theme19',
  //   name: 'Theme19',
  //   component: Theme19,
  //   props: true
  // }

]

const router = new VueRouter({
  mode: 'history',
  base: '',
  routes
})

export default router