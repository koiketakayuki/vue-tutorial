import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    menus: [],
    categorizedMenus: [],
    targetMenu: null,
    isEditMode: false,
    isDeleteConfimationMode: false
  },
  mutations,
  actions
});

export default store;
