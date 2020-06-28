import Vue from 'vue';
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueRouter from 'vue-router';
import Home from './Home.vue';
import Find from './Find.vue';
import Create from './Create.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: '/', component: Home },
  { path: '/find', component: Find },
  { path: '/create', component: Create }
];
const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
