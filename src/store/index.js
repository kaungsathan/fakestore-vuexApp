import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: localStorage.getItem('cart') ? (JSON.parse(localStorage.getItem('cart'))).length : 0,
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
