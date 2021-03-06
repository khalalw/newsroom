import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import VueRouter from 'vue-router';

import Top from './pages/Top';
import Search from './pages/Search';

Vue.config.productionTip = false;
Vue.use(VueRouter);
// router
const routes = [
  { path: '/', name: 'home', component: Top },
  { path: '/search', name: 'search', component: Search, props: true }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
