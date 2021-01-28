import Vue from "vue";
import App from "./App.vue";
import router from "./Router";
import axios from 'axios';
import { store } from "../src/store/store";

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import VueResource from 'vue-resource'
Vue.use(axios)
Vue.use(VueResource)
Vue.use(VueMaterial)
Vue.use(store)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
