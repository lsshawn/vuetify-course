import Vue from "vue";
import VueRouter from "vue-router";

import AppLayout from "./components/AppLayout.vue";
import Home from "./components/Home.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/layout", component: AppLayout },
];

export default new VueRouter({ mode: "history", routes });
