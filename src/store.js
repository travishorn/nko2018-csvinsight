/* eslint-disable no-param-reassign */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    file: null,
  },
  getters: {

  },
  mutations: {
    SET_FILE(state, file) {
      state.file = file;
    },
  },
  actions: {
    changeFile(context, file) {
      context.commit('SET_FILE', file);
    },
  },
});
