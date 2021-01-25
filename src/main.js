import Vue from "vue";
import App from "./App.vue";
import router from "./Router";


import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueMaterial)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
