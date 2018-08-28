<template>
  <div id="app">
    <section class="container text-center">
      <img src="./assets/logo.png">
      <h1>{{ msg }}</h1>
      <app-results></app-results>
      <app-resultsx2></app-resultsx2>
      <app-counter></app-counter>
    </section>
  </div>
</template>

<script>
import Results from './components/Results.vue'
import Resultsx2 from './components/Resultsx2.vue'
import Counter from './components/Counter.vue'

export default {
  data () {
    return {
      msg: 'Vuex'
    }
  },
  components: {
    appResults: Results,
    appResultsx2: Resultsx2,
    appCounter: Counter
  }
}
</script>
