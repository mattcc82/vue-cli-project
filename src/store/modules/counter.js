const state = {
  counter: 0
}

const getters = {
  singleCounter: state => {
    return state.counter
  },
  doubleCounter: state => {
    return state.counter * 2
  }
}

const mutations = {
  increment: (state, payload) => {
    state.counter += payload
  },
  decrement: (state, payload) => {
    state.counter -= payload
  }
}

const actions = {
  increment: (context, payload) => {
    context.commit('increment', payload)
  },
  decrement: (context, payload) => {
    context.commit('decrement', payload)
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
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
