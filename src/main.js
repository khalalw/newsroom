import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import VueRouter from 'vue-router';

import Top from './pages/Top';

Vue.config.productionTip = false;
Vue.use(VueRouter);

// router
const routes = [
  { path: 'top', component: Top },
  { path: '/', redirect: '/top' }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
