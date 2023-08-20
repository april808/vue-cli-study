import { createStore } from 'vuex'

export default createStore({
  state: {
    name: '🐢',
    mode: 'dark',
    cart: []
  },
  getters: {
  },
  mutations: {
    setName (state, payload) {
      state.name = payload
    },
    setMode (state, payload) {
      state.mode = payload
    },
    setCart (state, payload) {
      state.cart = payload
    },
  },
  actions: {
  },
  modules: {
  }
})
