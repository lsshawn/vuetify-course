import Vue from "vue";
import Vuex from "vuex";
import data from "./modules/data";

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  modules: {
    data,
  },
});
