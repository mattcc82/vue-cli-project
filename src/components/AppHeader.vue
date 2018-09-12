<template>
  <b-navbar toggleable="md" type="dark" variant="info">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand to="/" exact>Stock Trader</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item to="/" exact>Home</b-nav-item>
        <b-nav-item to="/stocks">Stocks</b-nav-item>
        <b-nav-item to="/portfolio">Portfolio</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto" v-show="this.$route.name !== 'Home'">
        <b-nav-item href="#">End Turn</b-nav-item>
        <b-nav-item-dropdown text="Save / Load" right>
          <b-dropdown-item href="#">Save</b-dropdown-item>
          <b-dropdown-item href="#">Load</b-dropdown-item>
        </b-nav-item-dropdown>
        <h5 class="wallet-header">Wallet <b-badge>{{ funds }}</b-badge></h5>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
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
nav.navbar {
  width: 100%;
}
.wallet-header {
  margin-bottom: 0;
  color: #FFFCF1;
  line-height: 1.75;
  padding-left: 10px;
  border-left: 1px solid #FFFCF1;
}
</style>
