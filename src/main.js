import Vue from 'vue';
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import Find from './views/Find.vue';
import Create from './views/Create.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: '/', component: Home },
  { path: '/find', component: Find},
  { path: '/create', component: Create }
];
const router = new VueRouter({
  routes,
  mode: 'history'
});
router.beforeEach((to, from, next) => {
  document.title = 'Dictionary App';
  next()
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
