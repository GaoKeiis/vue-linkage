import Vue from 'vue';
import Router from 'vue-router';
import LinkageComponent from '@/components/linkage/linkage.component';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'linkage',
      component: LinkageComponent
    }
  ]
});
