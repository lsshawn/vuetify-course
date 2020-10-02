import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import { store } from "./store/store";

Vue.config.productionTip = false;

import Chartkick from "vue-chartkick";
import Chart from "chart.js";

Vue.use(Chartkick.use(Chart));

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
