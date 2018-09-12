const state = {
  funds: 20000,
  stocks: []
}

const mutations = {
  'BUY_STOCK' (state, {stockId, stockQty, stockPrice}) {
    const record = state.stocks.find(element => element.id === stockId)
    if (record) {
      record.quantity += stockQty
    } else {
      state.stocks.push({
        id: stockId,
        quantity: stockQty
      })
    }
    state.funds -= (parseInt(stockPrice) * parseInt(stockQty))
  },
  'SELL_STOCK' (state, {stockId, stockQty, stockPrice}) {
    const record = state.stocks.find(element => element.id === stockId)
    if (record.quantity > stockQty) {
      record.quantity -= stockQty
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1)
    }
    state.funds += (parseInt(stockPrice) * parseInt(stockQty))
  }
}

const actions = {
  sellStock: ({ commit }, order) => {
    commit('SELL_STOCK', order)
  }
}

const getters = {
  stockPortfolio (state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id === stock.id)
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      }
    })
  },

  // stockPortfolio: (state, getters) => {
  //   return state.stocks.map(s => {
  //     // getters.stocks is the global getter at the store level for 'stocks' from the stocks.js module
  //     const record = getters.stocks.find(element => element.id === s.id)
  //     return {
  //       id: s.id,
  //       quantity: s.quantity,
  //       name: record.name,
  //       price: record.price
  //     }
  //   })
  // },
  funds: (state) => {
    return state.funds
  }
}

export default { state, mutations, actions, getters }
