import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headerShow: false,
    footerShow: false,
    cartShow: false,
    landingShow: true,
    menu: [],
    cart: [],
    cartTotal: 0,
    orderVisible: false,
    order: [{ orderNumber: '' }],
    counter: 0,
    toggleColor: "base-color",
    userProfile: [{ createdAccount: false }],
    loadingStatus: true,
    orderHistory: []
  },
  mutations: {
    headerToggle(state, payload) {
      state.headerShow = payload
    },
    footerToggle(state, payload) {
      state.footerShow = payload
    },
    hideLanding(state) {
      state.landingShow = false;
    },
    getApi(state, payload) {
      state.menu = payload
    },
    addItem(state, payload) {
      state.cart = payload
    },
    cartTotal(state, payload) {
      state.cartTotal = payload
    },
    incrementAmount(state, payload) {
      state.cart[payload].amount++
    },
    decrementAmount(state, payload) {
      state.cart[payload].amount--
    },
    deleteItem(state, payload) {
      state.cart.splice(payload, 1)
    },
    placeOrder(state, payload) {
      state.order = payload
    },
    orderVisible(state, payload) {
      state.orderVisible = payload
    },
    counter(state, payload) {
      state.counter = payload
    },
    toggleColor(state, payload) {
      state.toggleColor = payload
    },
    userProfile(state, payload) {
      state.userProfile[0].createdAccount = true
      state.userProfile.push(payload)
    },
    loadingStatus(state, payload) {
      state.loadingStatus = payload
    },
    orderHistory(state, payload) {
      state.orderHistory = payload
    },
  },
  actions: {
    getApi({ commit }) {
      fetch('http://localhost:5000/api/beans')
        .then(response => {
          commit('loadingStatus', false)
          return response.json()
        })
        .then(data => commit('getApi', data.menu))
        .catch(error => console.error('Error:', error));
    },
    async getLocalStorageUser({ commit }, payload) {
      commit('userProfile', await payload)
    },
    async getOrderHistory({ commit }, payload) {
      commit('orderHistory', await payload)
    },
    addItem({ commit }, payload) {
      commit('addItem', payload)
    },
    cartTotal({ commit }, payload) {
      commit('cartTotal', payload)
    },
    async headerToggle({ commit }, payload) {
      commit('headerToggle', await payload)
    },
    async footerToggle({ commit }, payload) {
      commit('footerToggle', await payload)
    }
  },
  modules: {
  }
})
