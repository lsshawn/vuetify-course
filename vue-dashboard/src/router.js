import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{ path: "/" }];

export default new VueRouter({ mode: "history", routes });
