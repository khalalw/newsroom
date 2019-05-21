import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import VueRouter from 'vue-router';

import Top from './pages/Top';

Vue.config.productionTip = false;
Vue.use(VueRouter);

// router
const routes = [
  { path: '/top', name: 'home', component: Top },
  { path: '/', redirect: '/top' }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
