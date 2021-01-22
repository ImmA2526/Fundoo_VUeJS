import Vue from 'vue';
import App from './App.vue';

import VueRouter from 'vue-router';

import Register from './components/Register.vue'
import Login from './components/LoginPage.vue'


import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)


Vue.config.productionTip = false

Vue.use(VueRouter);


const routes = [{

  path: '/rg',
  name: 'register',
  component: Register
},

{

  path: '/lg',
  name: 'login',
  component: Login
  }  

];


const router = new VueRouter({
  mode: 'history',
  routes: routes,
});



new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
