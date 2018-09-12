<template>
  <b-jumbotron header="Stock Trader" lead="Simple game made with vue / vue-router / vuex" >
  <p>Save current progress or load previous state with 'Save / Load' dropdown </p>
  <p>End your turn with 'End Turn' button</p>
  <b-btn variant="info" to="/stocks">Check the Market</b-btn>
  <b-btn variant="info" to="/portfolio">Check your Portfolio</b-btn>
  <b-card class="wallet-info" header="Your Wallet" bg-variant="info" text-variant="white">
    <h2 class="card-text">
        {{ funds }}
    </h2>
  </b-card>
</b-jumbotron>

</template>

<script>
const numeral = require('numeral')

export default {
  computed: {
    funds () {
      let fundsStr = numeral(this.$store.getters.funds).format('$ 0,0[.]00')
      return fundsStr
    }
  }
}
</script>

<style scoped>
.jumbotron {
  position: relative;
}
.wallet-info {
  position: absolute;
  top: 10px;
  right: 10px;
}
@media (max-width: 767px) {
  .wallet-info {
    position: relative;
    width: 325px;
    margin-left: 10px;
    text-align: center;
  }
}
</style>
