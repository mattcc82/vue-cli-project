<template>
  <div id="app">
    <div class="jumbotron">
      <h1>Routing / SPA</h1>
      <p class="lead">Using vue-router</p>
    </div>
    <div class="container">
      <c-header></c-header>
      <router-view></router-view>
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
