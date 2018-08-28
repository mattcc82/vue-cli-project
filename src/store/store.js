import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({ // eslint-disable-line no-new
  state: {
    counter: 0,
    clicks: 0
  },
  getters: {
    singleCounter: state => {
      return state.counter
    },
    doubleCounter: state => {
      return state.counter * 2
    },
    stringCounter: state => {
      return state.clicks + ' clicks'
    }
  }
})

export default store
