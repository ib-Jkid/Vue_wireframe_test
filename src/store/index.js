import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    url: "https://crudcrud.com/api/0aa015c5f8514850bbe7a4f80dfd9e69/staffs/",
    loading: false,
    selectedStaffID: []
  },
  mutations: {
    toggleLoading(state,loading) {
      state.loading = loading
    },
    changeStaffId(state,value) {
      state.selectedStaffID = value;
    },
    addToStaffId(state,value) {
      state.selectedStaffID.push(value);
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getUrl(state) {
      return state.url;
    },
    isLoading(state) {
      return state.loading;
    },
    selectedStaffID(state) {
      return state.selectedStaffID;
    }
  }
})
