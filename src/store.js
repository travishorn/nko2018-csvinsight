/* eslint-disable no-param-reassign */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fileData: null,
    axes: {
      x: null,
      y: null,
    },
  },
  getters: {
    headers(state) {
      if (!state.fileData) return null;

      const rows = state.fileData.split('\n')[0];
      return rows.split(',');
    },
    axes(state) { return state.axes; },
  },
  mutations: {
    SET_FILE_DATA(state, data) { state.fileData = data; },
    SET_X_AXIS(state, value) { state.axes.x = value; },
    SET_Y_AXIS(state, value) { state.axes.y = value; },
  },
  actions: {
    changeFile(context, file) {
      const reader = new FileReader();

      reader.onload = () => context.commit('SET_FILE_DATA', reader.result);
      reader.readAsText(file);
    },
    changeAxis(context, changed) {
      const key = changed.key.toUpperCase();
      context.commit(`SET_${key}_AXIS`, changed.value);
    },
  },
});
