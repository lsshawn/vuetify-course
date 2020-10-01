const state = {
  user: {
    company: "",
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    country: "",
    postcode: "",
    about: "",
    isPilot: "",
    timezone: "",
    joinDate: "",
  },
};

const getters = {};

const mutations = {
  SET_USER: (state, obj) => {
    state.user = { ...state.user, ...obj };
  },
};

const actions = {
  updateUser: ({ commit }, obj) => {
    commit("SET_USER", obj);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
