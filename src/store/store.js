import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'
import clicks from './modules/clicks'

Vue.use(Vuex)

const store = new Vuex.Store({ // eslint-disable-line no-new
  state: {
    value: 0
  },
  // getters are providing access to the latest state of the store to views/components
  getters: {
    value: state => {
      return state.value
    }
  },
  // mutations change state inside the store - synchronously
  mutations: {
    update_value: (state, payload) => {
      state.value = payload
    }
  },
  // actions are dispatched by the view/component and commit mutations
  actions: {
    update_value: (context, payload) => {
      context.commit('update_value', payload)
    }
  },
  modules: {
    counter,
    clicks
  }
})

export default store
