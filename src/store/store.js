import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({ // eslint-disable-line no-new
  state: {
    counter: 0,
    clicks: 0,
    value: 0
  },
  // getters are providing access to the latest state of the store to views/components
  getters: {
    singleCounter: state => {
      return state.counter
    },
    doubleCounter: state => {
      return state.counter * 2
    },
    stringCounter: state => {
      return state.clicks + ' clicks'
    },
    value: state => {
      return state.value
    }
  },
  // mutations change state inside the store - synchronously
  mutations: {
    increment: (state, payload) => {
      state.counter += payload
    },
    decrement: (state, payload) => {
      state.counter -= payload
    },
    count_click: (state, payload) => {
      state.clicks += payload
    },
    update_value: (state, payload) => {
      state.value = payload
    }
  },
  // actions are dispatched by the view/component and commit mutations
  actions: {
    increment: (context, payload) => {
      context.commit('increment', payload)
    },
    decrement: (context, payload) => {
      context.commit('decrement', payload)
    },
    count_click: (context, payload) => {
      context.commit('count_click', payload)
    },
    async_increment: (context, payload) => {
      setTimeout(() => {
        context.commit('increment', payload.by)
      }, payload.delay)
    },
    async_decrement: (context, payload) => {
      setTimeout(() => {
        context.commit('decrement', payload.by)
      }, payload.delay)
    },
    async_count_click: (context, payload) => {
      setTimeout(() => {
        context.commit('count_click', payload.by)
      }, payload.delay)
    },
    update_value: (context, payload) => {
      context.commit('update_value', payload)
    }
  }
})

export default store
