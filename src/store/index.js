import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    targetMenu: null,
    isEditMode: false,
    isDeleteConfimationMode: false
  },
  mutations: {
    goToEditMode(state, menu) {
      state.targetMenu = menu;
      state.isEditMode = true;
      state.isDeleteConfimationMode = false;
    },
    goToDeleteConfirmation(state, menu) {
      state.targetMenu = menu;
      state.isEditMode = false;
      state.isDeleteConfimationMode = true;
    },
    goToMenuList(state) {
      state.targetMenu = null;
      state.isEditMode = false;
      state.isDeleteConfimationMode = false;
    }
  }
});

export default store;
