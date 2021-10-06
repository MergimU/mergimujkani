import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,

      // children: [
      //   {
      //     path: 'about-me',
      //     name: 'AboutMe'
      //     // component: () => import(/* webpackChunkName: "about-me" */ './views/About.vue')
      //   },
      //   {
      //     path: 'work',
      //     name: 'Work'
      //     // component: () => import(/* webpackChunkName: "work" */ './views/Work.vue')
      //   },
      //   { path: '*', redirect: { name: 'AboutMe' }}
      // ]
    }
  ],
});
