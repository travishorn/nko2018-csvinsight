/* eslint-disable no-param-reassign */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fileData: null,
  },
  getters: {

  },
  mutations: {
    SET_FILE_DATA(state, data) { state.fileData = data; },
  },
  actions: {
    changeFile(context, file) {
      const reader = new FileReader();

      reader.onload = () => context.commit('SET_FILE_DATA', reader.result);
      reader.readAsText(file);
    },
  },
});
