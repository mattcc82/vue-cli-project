<template>
  <div id="app">
    <section class="container text-center">
      <img src="./assets/logo.png">
      <h1>{{ msg }}</h1>
      <app-results></app-results>
      <app-resultsx2></app-resultsx2>
      <h4>Synchronous Counter</h4>
      <app-counter></app-counter>
      <hr>
      <h4>Asynchronous Counter</h4>
      <app-async-counter></app-async-counter>
      <hr>
      <label for="value_test">Enter a value</label>
      <input type="text" name="value_test" v-model="value">
      <p>computed value pulled from state: {{ value }}</p>
    </section>
  </div>
</template>

<script>
import Results from './components/Results.vue'
import Resultsx2 from './components/Resultsx2.vue'
import Counter from './components/Counter.vue'
import AsyncCounter from './components/AsyncCounter.vue'

export default {
  data () {
    return {
      msg: 'Vuex'
    }
  },
  computed: {
    value: {
      get () {
        return this.$store.getters.value
      },
      set (value) {
        this.$store.dispatch('update_value', value)
      }
    }
  },
  components: {
    appResults: Results,
    appResultsx2: Resultsx2,
    appCounter: Counter,
    appAsyncCounter: AsyncCounter
  }
}
</script>
