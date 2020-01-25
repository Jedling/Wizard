import Vue from 'vue';
import Router from 'vue-router';
import Wizard from './views/Wizard.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/wizard',
      name: 'wizard',
      component: Wizard,
    },
  ],
});
