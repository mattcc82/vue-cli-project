<template>
  <div id="app">
    <div class="jumbotron">
      <h1>Routing / SPA</h1>
      <p class="lead">Using vue-router</p>
    </div>
    <div class="container">
      <router-view name="header-top"></router-view>
      <router-view></router-view>
      <router-view name="header-bottom"></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'app',
  components: {
    'c-header': Header
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap';
</style>
