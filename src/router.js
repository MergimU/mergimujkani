import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Work from './views/Work.vue';
import About from './views/About.vue';

Vue.use(Router);

const router = new Router({
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
    },
    {
      path: '/about-me',
      name: 'about-me',
      component: About,
    },
    {
      path: '/work',
      name: 'work',
      component: Work,
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   let primaryColor = '#972fff';
//   let workColor = '#e87103';

//   let root = document.documentElement;
//   if (to.name === 'home') {
//     console.log('home');
//     root.style.setProperty('--color-primary', primaryColor);
//   } else if (to.name === 'work') {
//     console.log('work');
//     root.style.setProperty('--color-primary', workColor);
//   };

//   next();
// });

export default router;