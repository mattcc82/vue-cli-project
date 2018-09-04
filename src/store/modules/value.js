const state = {
  value: 0
}

const getters = {
  value: state => {
    return state.value
  }
}

const mutations = {
  update_value: (state, payload) => {
    state.value = payload
  }
}

const actions = {
  update_value: (context, payload) => {
    context.commit('update_value', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
