const state = {
  clicks: 0
}

const getters = {
  stringCounter: state => {
    return state.clicks + ' clicks'
  }
}

const mutations = {
  count_click: (state, payload) => {
    state.clicks += payload
  }
}

const actions = {
  count_click: (context, payload) => {
    context.commit('count_click', payload)
  },
  async_count_click: (context, payload) => {
    setTimeout(() => {
      context.commit('count_click', payload.by)
    }, payload.delay)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
