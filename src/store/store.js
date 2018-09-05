import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'
import clicks from './modules/clicks'

// you can outsource getters, actions, mutations by importing objects in other files
import * as actions from './actions'

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
    updateValue: (state, payload) => {
      state.value = payload
    }
  },
  // actions are dispatched by the view/component and commit mutations
  actions,
  // import modules with their own getters, mutations, actions from external files
  // ** Make sure objects and variables are not duplicate since they share the same namespace once merged **
  modules: {
    counter,
    clicks
  }
})

export default store
